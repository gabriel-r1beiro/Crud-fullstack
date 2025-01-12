import { Header } from "../components/Header";
import { MainLayout } from "./MainLayout";

export const Layout = () => {
  return (
    <div className="w-5/6 h-5/6 rounded text-white p-2">
      <Header />
      <MainLayout />
    </div>
  );
};
