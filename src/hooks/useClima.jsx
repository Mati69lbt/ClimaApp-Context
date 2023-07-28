import { useContext } from "react";
import CLimaContext from "../context/ClimaProvider";

const useClima = () => {
  return useContext(CLimaContext);
};
export default useClima;
