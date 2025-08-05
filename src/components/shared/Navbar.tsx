
import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { RootState } from "@/redux/store";
import { FiMoon, FiSun } from "react-icons/fi";

const menuItems = [
  "Home",
  "About Us",
  "Destination",
  "Package",
  "Blogs",
  "Pages",
  "Contact Us",
];

const Navbar =() => {
    const theme = useAppSelector((state:RootState)=> state.theme.theme)
    const dispatch = useAppDispatch()

  return (
    <header className="bg-primary/10  text-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-white">Trou</span>
          <span className="text-primary">iva</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="hover:text-secondary transition-colors cursor-pointer">{item}</span>
             
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
            <button
      onClick={()=> dispatch(toggleTheme())}
      className="p-2 rounded-full bg-primary hover:bg-primary/80 transition"
    >
      {theme === 'dark' ? (
       
        <FiMoon className=" text-gray-800 w-5 h-5" />
      ) : (
         <FiSun className="text-yellow-400 w-5 h-5" />
      )}
    </button>
          <Button variant="default" className="font-semibold">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar