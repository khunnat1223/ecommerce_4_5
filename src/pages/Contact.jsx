import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name:'',
    phone:'',
    message:''
  })

  const [submitData, setSubmitData] = useState(null);

  const handaleChange =(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    setSubmitData(form)
    console.log(e)
  }
  
  return (
    <>
      <div className='w-[500px] border border-gray-200 mt-20 p-5 m-auto'>
        <h1 className='text-center font-bold text-4xl'>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div className='mt-5'>
              <label htmlFor="">Name <span className='text-red-500'>*</span></label>
              <input type="text" onChange={handaleChange} name='name' placeholder='Enter your name' className='w-full h-10 border border-gray-300'/>
          </div>
            <div className='mt-5'>
              <label htmlFor="">Phone  <span className='text-red-500'>*</span></label>
              <input type="text" onChange={handaleChange} name='phone' placeholder='Enter your name' className='w-full h-10 border border-gray-300'/>
          </div>
          <div className='mt-5'>
              <label htmlFor="">Message <span className='text-red-500'>*</span></label>
              <textarea type="text" onChange={handaleChange} name='message' placeholder='Enter your name' className='w-full h-10 border border-gray-300'/>
          </div>
          <div className='text-right'>
            <input type='submit' value="Submit" className='bg-amber-600 py-2 px-8 mt-5 rounded-md text-white hover:bg-amber-700 transition-all' />
          </div>
        </form>
        {
          submitData &&(
            <div className='mt-5'>
              <h1>================== Result ===================</h1>
              <p>Name: {form.name}</p>
              <p>Phone:  {form.phone}</p>
              <p>Address:  {form.message}</p>
            </div>
          )
        }
        
      </div>
    </>
  )
}

export default Contact