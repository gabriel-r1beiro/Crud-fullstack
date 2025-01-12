import { Header } from "../components/Header";
import { data } from "./data.layout";
import { MainLayout } from "./Main.Layout";

interface LayoutProps {
  handleOpen: () => void;
}
export const Layout = ({ handleOpen }: LayoutProps) => {
  
  return (
    <div className="w-5/6 h-5/6 rounded text-white p-2">
      <Header handleOpen={handleOpen}/>
      <MainLayout data={data}/>
    </div>
  );
};
