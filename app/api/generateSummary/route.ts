import openai from "@/config/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const { todos } = await request.json()

    // communicate with openAI GPT
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content:
                 `هنگام پاسخ، همواره به یوزر با عنوان آقای حمیدرضا به ترلو خوش آمدگویی کن! پاسخ را به 200 حرف خلاصه کن`
            },
            {
                role: 'user',
                content: 
                `سلام. برای وظایف زیر یک خلاصه تهیه کن. تعداد وظایف موجود در هر کتگوری مانند done
                ، todo و inprogress و مانده را شمارش کن و به یوزر بگو که روز پرکاری داشته باشد!
                دیتا اینجاست: ${JSON.stringify(todos)}`
            },
        ],
    })

    const { choices } = response
    
    return NextResponse.json(choices[0].message)
}