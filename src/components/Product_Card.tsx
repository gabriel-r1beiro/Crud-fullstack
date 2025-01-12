
export const ProductCard = () => {
  return (
    <div className='bg-gray-50 text-black relative rounded shadow min-h-[22rem] max-w-72 flex flex-col items-center'>
      <img className="h-[70%] w-[90%] pt-2" src="/avatar.jpg" alt="" />
      <div className="flex flex-col items-start w-full px-4">
        <h1 className='text-xl font-bold'>Product Name</h1>
        <p className='text-sm'>Product Description</p>
        <p className='text-sm'>R$ 22</p>
      </div>
      <div className="flex w-full gap-3 px-3 mt-1">
        <button type="button" className="bg-gray-900 text-white rounded w-[50%] hover:bg-gray-600">Editar</button>
        <button type="button" className="bg-gray-900 text-white rounded w-[50%] hover:bg-gray-600">Exluir</button>
      </div>
    </div>
  )
}

