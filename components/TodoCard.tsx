import { getImageUrl } from "@/utility/getImageUrl"
import { XCircleIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { useEffect, useState } from "react"
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

    const [imageUrl, setImageUrl] = useState<string | null>(null)

    useEffect(() => {
        if(todo.image) {
            const getImage = async() => {
                const url = await getImageUrl(todo.image!)
                if(url) setImageUrl(url.toString())
            }

            getImage()
        }
    }, [todo])

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

            {imageUrl && (
                <div className="h-full w-full rounded-b-md">
                    <Image
                        src={imageUrl}
                        alt="عکس وظیفه"
                        width={400}
                        height={200}
                        className="w-full object-contain rounded-b-md"
                    />
                </div>
            )}
        </div>
    )
}

export default TodoCard