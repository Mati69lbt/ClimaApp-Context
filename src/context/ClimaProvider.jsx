import axios from "axios";
import { createContext, useState } from "react";

const CLimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  //useState de resultado ocn un objeto vacio
  const [resultado, setResultado] = useState({});

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async (datos) => {
    try {
      const appID = import.meta.env.VITE_API_KEY;

      const { ciudad, pais } = datos;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appID}`;
      const { data } = await axios(url);
      const { lat, lon, name, state } = data[0];
      const urlCLima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`;
      const { data: clima } = await axios(urlCLima);
      setResultado(clima);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CLimaContext.Provider
      value={{ busqueda, datosBusqueda, consultarClima, resultado }}
    >
      {children}
    </CLimaContext.Provider>
  );
};

export { ClimaProvider };
export default CLimaContext;
