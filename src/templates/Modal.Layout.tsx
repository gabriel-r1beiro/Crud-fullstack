import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/modal'
import { useRef, useState } from 'react'

interface ModalLayoutProps {
  isOpen: boolean
  onClose: () => void
  onOpen?: () => void
}

export function ModalLayout({ isOpen, onClose }: ModalLayoutProps) {
  const finalRef = useRef(null)
  return (
    <div className="bg-white text-black flex items-center justify-center">
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent className="modalBlur min-h-screen flex items-center justify-center rounded-lg shadow-lg">
          <div className="rounded min-w-2xl min-h-[680px] bg-gray-200">
            <div className="w-full flex justify-end pr-5 pt-3">
              <button
                className="font-semibold text-2xl"
                type="button"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className="flex flex-col items-center justify-center my-5">
              <h2 className="font-medium text-2xl">Add New Item</h2>
              <p className="text-gray-700 text-sm">
                Preencha o formulario para adiconar novos items
              </p>
            </div>
            <form className="min-w-96 flex flex-col gap-2 px-2 py-2">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:outline-green-700 px-2 py-1"
              />

              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                className="max-h-48 min-h-10 focus:outline-green-700 px-2 py-1"
              />

              <label htmlFor="price">Preço</label>
              <input
                type="number"
                id="price"
                max={999}
                name="price"
                className="focus:outline-green-700 px-2 py-1"
              />

              <label htmlFor="quantity">Quantidade</label>
              <input
                max={20}
                type="number"
                id="quantity"
                name="quantity"
                className="focus:outline-green-700 px-2 py-1"
              />

              <button
                type="submit"
                className="px-6 py-2 bg-green-600 hover:bg-green-800 mt-5"
              >
                Add New Item
              </button>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}
