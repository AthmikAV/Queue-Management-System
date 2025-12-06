import React, { useState } from 'react'

const CountForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');

    const handelSubmitForm = (e) => {
        e.preventDefault();
        if (!name.trim || !service.trim()) {
            return 
        }
        onAdd({ name, service });
        setName('');
        setService('');
    }
  return (
      <form className='bg-gray-900 p-6 rounded-2xl mt-5' onSubmit={handelSubmitForm}>
          <h1 className='text-blue-600 font-bold font-2xl mb-2'>Add to Queue</h1>
          <div className='flex flex-col'>
              <input className='bg-black text-gray-100 rounded-[5px] p-2 text-sm' placeholder='Customer Name' value={name} type='text' onChange={(e)=>setName(e.target.value)}></input>
            <select className='bg-black text-gray-100 rounded-[5px] p-2 text-sm mt-3 ' value={service} onChange={(e) => setService(e.target.value)}>
                  <option className=''>Selected Services</option>
                  <option value={'consultation'}>Consultation</option>
                  <option value={'payment'}>Payment</option>
                  <option value={'support'}>Support</option>
            </select>
              <button className="bg-blue-400 my-3 rounded-[5px] p-1 text-white cursor-pointer hover:bg-blue-300" type='submit'>Add customer</button>
          </div>
    </form>
  )
}

export default CountForm