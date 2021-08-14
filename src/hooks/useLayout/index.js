import { useContext } from "react";
import { LayoutContext } from "../../context/LayoutProvider";

const useLayout = () => useContext(LayoutContext);

export default useLayout;
