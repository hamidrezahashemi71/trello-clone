import { StrictModeDroppable } from "@/lib/StrictModeDroppable"
import { PlusCircleIcon } from "@heroicons/react/20/solid"
import { Draggable, Droppable } from "react-beautiful-dnd"
import TodoCard from "./TodoCard"
import { useBoardStore } from "@/store/BoardStore"

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

    const [searchString] = useBoardStore((state) => [
        state.searchString
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
                                                    />
                                                )}
                                            </Draggable>
                                        )
                                    })}

                                    {provided.placeholder}

                                    <div className="flex items-end justify-end p-2">
                                        <button className="plusButtonContainer">
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