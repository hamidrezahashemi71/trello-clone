import { UserCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Suggestion = () => {
  
  return (
    <section className='suggestionContainer'>
        <p dir='rtl' className='suggestionText'>
            <UserCircleIcon className='avatarIcon' />
            {"چت جی پی تی خلاصه روزتو بهت میگه ..."}
        </p>
    </section>
  )
}

export default Suggestion