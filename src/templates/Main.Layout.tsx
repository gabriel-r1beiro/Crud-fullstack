import { ProductCard } from '../components/Product_Card'
interface Product {
  name: string
  description: string
  price: number
}

interface MainLayoutProps {
  data: Product[]
}
export const MainLayout = ({ data }: MainLayoutProps) => {
  return (
    <main className="w-full h-[89%] bg-gray-200 rounded-b p-2 grid grid-cols-4 gap-2 overflow-y-auto">
      {data.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </main>
  )
}
