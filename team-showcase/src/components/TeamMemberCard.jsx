import React from 'react'

const TeamMemberCard = ({name,title}) => {
  return (
    <div className='p-6 text-2xl border border-red-600 mx-20 my-10 rounded-lg shadow-lg hover:scale-105 transistion-all duration-300 ease-in-out'>
        <p className='text-blue-600 font-mono font-bold'>Name: {name}</p>
        <p className='text-green-600 font-mono'>Title: {title}</p>   
    </div>
  )
}

export default TeamMemberCard