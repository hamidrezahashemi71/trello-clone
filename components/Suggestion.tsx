import { UserCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Suggestion = () => {
  return (
    <section className='flex items-center justify-center px-5 md:py-5'>
        <p className='flex items-center w-fit max-w-3xl p-5 bg-white text-sm text-primary font-light italic rounded-xl shadow-xl'>
            <UserCircleIcon className='inline-block w-10 h-10 text-primary ml-1' />
            {"چت جی پی تی خلاصه روزتو بهت میگه ..."}
        </p>
    </section>
  )
}

export default Suggestion