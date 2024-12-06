// import { useState } from 'react'

export function Header () {
  
 const head = 
 <div>

<div className="flex flex-row-reverse justify-between items-center p-4 px-12 bg-orange-500">
   <div className="text-white font-medium">بهترین غذا در سریع ترین زمان</div>

   <div className="text-white font-bold text-xl">فست فود آنلاین 🍕</div>
  </div>

  <p className="m-4 mr-12 text-2xl font-bold">منو</p>

 </div>
  return head;
} 












// export function FavCol () {
//   const [col ,setCol] = useState("red");

//   return (
//     <>
//     <h1 className=' text-3xl'>my fav Color is {col}!</h1>

//     <div className='flex flex-col gap-4'>

//     <button className='w-20 h-8 bg-slate-500' type='button' onClick={() => {setCol("blue")}}>
//     blue
    
//     </button>
//     <button className='w-20 h-8 bg-slate-500' type='button' onClick={() => {setCol("green")}}>
//     green
//     </button>    
    
//     <button className='w-20 h-8 bg-slate-500' type='button' onClick={() => {setCol("red")}}>
//     red
//     </button>

//     </div>

//     </>
//   )
// }
