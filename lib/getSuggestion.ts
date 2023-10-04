import { formatTodosForAI } from "./formatTodosForAI"

export const getSuggestion = async(board: Board) => {

    const todos = formatTodosForAI(board)
    const response = await fetch('/api/generateSummary', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ todos })
    })
    
    const GPTdata = await response.json()
    const { content } = GPTdata
    
    return content
}
