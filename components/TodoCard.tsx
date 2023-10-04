import { XCircleIcon } from "@heroicons/react/20/solid"
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from "react-beautiful-dnd"

type Props = {
    todo: Todo
    index: number
    id: TypedColumn
    innerRef: (element: HTMLElement | null) => void
    draggableProps: DraggableProvidedDraggableProps
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
    deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void
}

const TodoCard = (props: Props) => {

    const { todo, index, id, innerRef, dragHandleProps, draggableProps, deleteTask } = props

    return (
        <div
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
            className="todoCardContainer"
        >
            <div className="todoContent">
                <p >
                    {todo.title}
                </p>

                <button 
                    className="minusButtonContainer"
                    onClick={() => deleteTask(index, todo, id)}
                >
                    <XCircleIcon className="mr-5 w-8 h-8"/>
                </button>
            </div>

            {/* {imageUrl && ()} */}
        </div>
    )
}

export default TodoCard