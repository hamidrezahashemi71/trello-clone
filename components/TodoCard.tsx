import { XCircleIcon } from "@heroicons/react/20/solid"
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from "react-beautiful-dnd"

type Props = {
    todo: Todo
    index: number
    id: TypedColumn
    innerRef: (element: HTMLElement | null) => void
    draggableProps: DraggableProvidedDraggableProps
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

const TodoCard = (props: Props) => {

    const { todo, index, id, innerRef, dragHandleProps, draggableProps } = props

    return (
        <div
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
            className="bg-white rounded-md space-y-2 drop-shadow-md p-2"
        >
            <div className="flex justify-between items-center p-5">
                <p >
                    {todo.title}
                </p>

                <button className="text-red-500 hover:text-red-600">
                    <XCircleIcon className="mr-5 w-8 h-8"/>
                </button>
            </div>
        </div>
    )
}

export default TodoCard