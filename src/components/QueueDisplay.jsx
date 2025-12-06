import React from 'react'

const QueueDisplay = ({ queue, onRemove, onUpdate }) => {
    return (
        <div className='bg-gray-900 p-5 rounded-2xl mx-4 mt-6 w-[400px] '>
            <h1 className='text-xl  text-white font-bold text-center mb-1'>Queue Management System</h1>
            {queue.length === 0 ? (
        <p className='text-center text-red-600 text-sm'>No customer Found</p>
            ) : (queue.map((customer) => { 
                const { name, service, id } = customer;
                return <div key={id} className='bg-black m-3 p-3 rounded-[10px] flex justify-between items-center '>
                    <div>
                        <p className='text-white font-bold text-xl'>{name}</p>
                        <p className=' text-sm text-gray-500'
                        >
                            Service : {service}
                        </p>

                         <p className= {`text-sm ${
                            customer.status === "waiting"
                            && "text-yellow-500"
                            }
                            ${
                            customer.status === "serve"
                            && "text-green-500"
                        }
                            ${
                            customer.status === "completed"
                            && "text-blue-500"
                            }`
                        }
                        >{ customer.status}</p>
                    </div>
                    <div>
                        {customer.status === 'waiting' && <button className="text-white bg-green-500 p-[5px] rounded-[5px] px-2 mx-2 cursor-pointer" onClick={() => onUpdate(customer.id, 'serve')}>Serve</button>}

                        {customer.status === 'serve' && <button className="text-white bg-blue-500 p-[5px] rounded-[5px] px-2 mx-2 cursor-pointer" onClick={() => onUpdate(customer.id, 'completed')}>complete</button>} 

                        
                        <button className="text-white bg-white p-[5px] rounded-[5px] px-2 cursor-pointer" onClick={()=>onRemove(customer.id)}>❌</button>
                    </div>
                </div>
            }))}
            
        </div>
  )
}

export default QueueDisplay