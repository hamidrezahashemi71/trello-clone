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

    if (response.ok) {
        const GPTdata = await response.json()
        const { content } = GPTdata
        return content
    } else {
        const content = 'وظایف شما به شرح زیر است:'
        return content
    }
}
