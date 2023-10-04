"use client"

import { useBoardStore } from "@/store/BoardStore"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const types = [
    {
        id: 'todo',
        name: 'مانده',
        description: 'وظیفه جدید برای انجام دادن',
        color: 'bg-red-500'
    },
    {
        id: 'inprogress',
        name: 'در حال انجام',
        description: 'وظیفه ای که هم اکنون در حال انجام آن هستید.',
        color: 'bg-yellow-500'
    },
    {
        id: 'done',
        name: 'انجام شده',
        description: 'وظیفه ای که انجام یافته است. ',
        color: 'bg-green-500'
    },
]

const TaskTypeGroup = () => {

    const [setNewTaskType, newTaskType] = useBoardStore((state) => [
        state.newTaskType,
        state.setNewTaskType
    ])

    return (
        <RadioGroup value={newTaskType}>
            <RadioGroup.Label>Plan</RadioGroup.Label>
            <RadioGroup.Option value="startup">
                {({ checked }) => (
                <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="business">
                {({ checked }) => (
                <span className={checked ? 'bg-blue-200' : ''}>Business</span>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="enterprise">
                {({ checked }) => (
                <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
                )}
            </RadioGroup.Option>
        </RadioGroup>
    )
}

export default TaskTypeGroup