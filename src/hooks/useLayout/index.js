import { useContext } from "react";
import { LayoutContext } from "../../providers/LaptopProvider";

const useLayout = () => useContext(LayoutContext);

export default useLayout;
