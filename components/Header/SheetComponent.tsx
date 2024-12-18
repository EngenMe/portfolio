import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navigation from "../Navigation";
import { useRef } from "react";
import Footer from "../Footer";

const SheetComponent = () => {
  const sheetCloseRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = () => {
    if (sheetCloseRef.current) {
      sheetCloseRef.current.click(); // Programmatically trigger SheetClose
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-background w-10 h-10 flex justify-center items-center rounded-lg hover:bg-primary transition-colors">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col min-h-full">
        <div className="flex-1 overflow-auto">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <Navigation onClose={handleClose} />
        </div>
        <SheetFooter className="text-center">
          <Footer>© 2024 All Rights Reserved by EngenMe</Footer>
        </SheetFooter>
        <SheetClose ref={sheetCloseRef} style={{ display: "none" }} />
      </SheetContent>
    </Sheet>
  );
};
export default SheetComponent;
