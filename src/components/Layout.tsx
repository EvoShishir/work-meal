import { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <Sidebar children={children} />
    </>
  );
};

export default Layout;
