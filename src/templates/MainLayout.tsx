import { ProductCard } from "../components/Product_Card"

export const MainLayout = () => {
  return (
    <main className="w-full h-[89%] bg-gray-200 rounded-b p-2 grid grid-cols-4 gap-2 overflow-y-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
    </main>
  )
}
