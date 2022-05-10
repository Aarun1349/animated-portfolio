import React from 'react'
import Card from './Card'

function Service() {
  return (
   <>
   <div className='my-5'>
       <h1 className='text-center'>Our Services</h1>
   </div>
   <div className='container-fluid mb-5'>
       <div className='row'>
           <div className=' col-lg-10 col-10 mx-auto'>
               <div className='row gy-4'>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
               </div>
               <div className='row gy-4'>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
               </div>
               <div className='row gy-4'>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
                   <div className='col-md-4 col-10 mx-auto'>
                        <Card/>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </>
  )
}

export default Service