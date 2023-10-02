import { StrictModeDroppable } from "@/lib/StrictModeDroppable"
import { PlusCircleIcon } from "@heroicons/react/20/solid"
import { Draggable, Droppable } from "react-beautiful-dnd"
import TodoCard from "./TodoCard"

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
                                className={`pb-2 p-2 rounded-2xl shadow-sm ${
                                    snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
                                }`}
                            >
                                <h2 className="flex justify-between font-bold text-xl p-2">
                                    {idToColumnText[id]}
                                    <span className="text-gray-500 font-normal bg-gray-200 rounded-full px-2 py-1 text-sm">
                                        {todos.length}
                                    </span>
                                </h2>

                                <div className="space-y-2">
                                    {todos.map((todo, index) => {
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
                                        <button className="text-green-500 hover:text-green-600">
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