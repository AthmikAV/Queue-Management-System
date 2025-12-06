import { useState } from 'react'
import CountForm from './components/CountForm'
import QueueDisplay from './components/QueueDisplay';

function App() {
  const [Queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...Queue,{...customer ,id:Date.now,status:'waiting'}])
  };
  const removeFromQueue = (id) => {
       setQueue(Queue.filter((customer) => customer.id != id))
  };
  const upadateQueueItem = (id,Newstatus) => {
     setQueue(Queue.map((customer) => {
      return customer.id === id ? {...customer,status:Newstatus} : customer
    }))
  };
  return (
    <div className='bg-black h-screen overflow-auto pb-5'>
      <h1 className='text-cente text-blue-600 font-bold text-2xl text-center pt-7'>Queue Management System</h1>
      <p className="text-gray-500 text-center text-sm mt-5">Manage your customers efficiently</p>
      <div className="flex flex-wrap justify-center pt-6">
        <CountForm onAdd={addToQueue} />
        <QueueDisplay
          queue={Queue}
          onRemove={removeFromQueue}
          onUpdate={upadateQueueItem } />
      </div>
    </div>
  )
}

export default App
