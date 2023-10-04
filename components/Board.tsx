"use client"

import { useBoardStore } from '@/store/BoardStore'
import { useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Column from './Column'
import { StrictModeDroppable } from '@/components/StrictModeDroppable'

const Board = () => {

    const [board, getBoard, setBoardState, updateTodoInDB] = useBoardStore((state) => [
        state.board,
        state.getBoard,
        state.setBoardState,
        state.updateTodoInDB
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

        // LOGIC: handling card drag
        if(type === 'card') {
            const columns = Array.from(board.columns)
            const startColumnIndex = columns[Number(source.droppableId)]
            const endColumnIndex = columns[Number(destination.droppableId)]
            const startColumn: Column = {
                id: startColumnIndex[0],
                todos: startColumnIndex[1].todos
            }
            const endColumn: Column = {
                id: endColumnIndex[0],
                todos: endColumnIndex[1].todos
            }
    
            if(!startColumn || !endColumn) return
            if(source.index === destination.index && startColumn === endColumn) return
    
            const newTodos = startColumn.todos
            const [movedTodo] = newTodos.splice(source.index, 1)
    
            if(startColumn.id === endColumn.id) {
                // drag & drop task in same column
                newTodos.splice(destination.index, 0, movedTodo)
                const newColumns = new Map(board.columns)
                const newColumn = {
                    id: startColumn.id,
                    todos: newTodos
                }
                
                newColumns.set(startColumn.id, newColumn)
                setBoardState({...board, columns: newColumns})
            } else {
                // drag & drop task to another column
                const endTodos = Array.from(endColumn.todos)
                endTodos.splice(destination.index, 0, movedTodo)
                const newColumns = new Map(board.columns)
                const newColumn = {
                    id: startColumn.id,
                    todos: newTodos
                }
    
                newColumns.set(startColumn.id, newColumn)
                newColumns.set(endColumn.id, {
                    id: endColumn.id,
                    todos: endTodos
                })
                // LOGIC: updating the database
                updateTodoInDB(movedTodo, endColumn.id)
                setBoardState({...board, columns: newColumns})
            }
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