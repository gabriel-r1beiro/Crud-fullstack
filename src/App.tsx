import { useState } from 'react'
import { Layout } from './templates/Layout'
import { ModalLayout } from './templates/Modal.Layout'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl">CRUD CRUD</h1>
      <Layout handleOpen={handleOpen}/>
      <ModalLayout isOpen={isOpen} onClose={handleClose}/>
    </div>
  )
}

export default App
