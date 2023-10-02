"use client"

import { useBoardStore } from '@/store/BoardStore'
import { useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Column from './Column'
import { StrictModeDroppable } from '@/lib/StrictModeDroppable'

const Board = () => {

    const [board, getBoard, setBoardState] = useBoardStore((state) => [
        state.board,
        state.getBoard,
        state.setBoardState
    ])

    useEffect(() => {
        getBoard()
    }, [getBoard])

    const handleOnDragEnd = (result: DropResult) => {

        const { destination, source, type } = result

        // ERROR HANDLING: user drops outside the board
        if(!destination) return

        // LOGIC: handling column drag
        if(type === 'column') {
            const entries = Array.from(board.columns.entries())
            const [removed] = entries.splice(source.index, 1)
            entries.splice(destination.index, 0, removed)
            const rearrangedColumns = new Map(entries)
            setBoardState({
                ...board, columns: rearrangedColumns
            })
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <StrictModeDroppable 
                droppableId='board' 
                direction='horizontal' 
                type='column'
            >
                {(provided, snapshot) => (
                    <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='boardContainer'
                    >
                        {Array.from(board.columns.entries()).map(([id, column], index) => {
                            return (
                                <Column 
                                    key={id}
                                    id={id}
                                    todos={column.todos}
                                    index={index}
                                />
                            )
                        })}
                    </div>
                )}
            </StrictModeDroppable>
        </DragDropContext>
    )
}

export default Board