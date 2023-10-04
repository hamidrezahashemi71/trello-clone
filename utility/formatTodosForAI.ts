export const formatTodosForAI = (board: Board) => {

    const todos = Array.from(board.columns.entries())
    const flatArray = todos.reduce((map, [key, val]) => {
        map[key] = val.todos
        return map
    }, {} as { [key in TypedColumn] : Todo[] })
    
    const flatArrayCounted = Object.entries(flatArray).reduce((map, [key, val]) => {
        map[key as TypedColumn] = val.length
        return map
    }, {} as { [key in TypedColumn]: number })
    
    return flatArrayCounted
}