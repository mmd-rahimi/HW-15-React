import { useState } from 'react'

export function FavCol () {
  const [col ,setCol] = useState("red");

  return (
    <>
    <h1 className='bg-red-500 text-xl'>my fav Color is {col}!</h1>

    <div className='flex flex-col gap-4'>

    <button className='w-20 h-8 bg-slate-500' type='button' onClick={() => {setCol("blue")}}>
    blue
    
    </button>
    <button className='w-20 h-8 bg-slate-500' type='button' onClick={() => {setCol("green")}}>
    green
    </button>    
    
    <button className='w-20 h-8 bg-slate-500' type='button' onClick={() => {setCol("red")}}>
    red
    </button>

    </div>

    </>
  )
}
