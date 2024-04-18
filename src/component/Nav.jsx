import React from 'react'

const Nav = () => {
  return (
    <div className='flex place-content-around p-5 shadow-lg bg-black text-white cursor-pointer'>
      
    <div>
            <h1 className='text-xl'>FreshKhabar</h1>
    </div>
    
    <div className=''>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>Modules</li>
                <li>Posts</li>
                <li>Features</li>
            </ul>

    </div>
    
    </div>
  )
}

export default Nav
