import { StrictModeDroppable } from "@/components/StrictModeDroppable"
import { PlusCircleIcon } from "@heroicons/react/20/solid"
import { Draggable, Droppable } from "react-beautiful-dnd"
import TodoCard from "./TodoCard"
import { useBoardStore } from "@/store/BoardStore"
import { useModalStore } from "@/store/ModalStore"

type Props = {
    id: TypedColumn
    todos: Todo[]
    index: number
}

const idToColumnText: { [key in TypedColumn] : string } = { 
    'todo': 'مانده', 
    'inprogress': 'در حال انجام', 
    'done' : 'تمام شده' 
}

const Column = (props: Props) => {

    const { id, todos, index } = props

    const [searchString, deleteTask] = useBoardStore((state) => [
        state.searchString,
        state.deleteTask
    ])

    const [openModal] = useModalStore((state) => [
        state.openModal    
    ])

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <StrictModeDroppable droppableId={index.toString()} type="card">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`columnContainer ${
                                    snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
                                }`}
                            >
                                <h2 className="columnHeaderText">
                                    {idToColumnText[id]}
                                    <span className="columnHeaderBadge">
                                        {
                                            !searchString ? 
                                                todos.length 
                                                : 
                                                todos.filter((todo) => todo.title.toLowerCase().includes(searchString.toLowerCase())).length
                                        }
                                    </span>
                                </h2>

                                <div className="space-y-2">
                                    {todos.map((todo, index) => {

                                        if(searchString && !todo.title.toLowerCase().includes(searchString.toLowerCase())) 
                                            return null

                                        return (
                                            <Draggable
                                                key={todo.$id}
                                                draggableId={todo.$id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <TodoCard 
                                                        todo={todo}
                                                        index={index}
                                                        id={id}
                                                        innerRef={provided.innerRef}
                                                        draggableProps={provided.draggableProps}
                                                        dragHandleProps={provided.dragHandleProps}
                                                        deleteTask={deleteTask}
                                                    />
                                                )}
                                            </Draggable>
                                        )
                                    })}

                                    {provided.placeholder}

                                    <div className="flex items-end justify-end p-2">
                                        <button 
                                            className="plusButtonContainer"
                                            onClick={openModal}
                                        >
                                            <PlusCircleIcon className="w-10 h-10" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </StrictModeDroppable>
                </div>
            )}
        </Draggable>
    )
}

export default Column