"use client"

import { getSuggestion } from '@/lib/getSuggestion'
import { useBoardStore } from '@/store/BoardStore'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'

const Suggestion = () => {

  const [board] = useBoardStore((state) => [
    state.board,
  ])

  const [loading, setLoading] = useState<Boolean>(false)
  const [suggestion, setSuggestion] = useState<string>('')

  useEffect(() => {
    if(board.columns.size === 0) return
    setLoading(true)

    const getSuggestionFunc = async() => {
      const suggestion = await getSuggestion(board)
      setSuggestion(suggestion)
      setLoading(false)
    }

    getSuggestionFunc()
  }, [board])
  
  return (
    <section className='suggestionContainer'>
        <p dir='rtl' className='suggestionText'>
            <UserCircleIcon className={`avatarIcon ${loading && "animate-spin"}`} />
            {suggestion}
        </p>
    </section>
  )
}

export default Suggestion