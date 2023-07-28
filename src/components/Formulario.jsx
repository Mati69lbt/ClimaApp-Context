import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Debe llenar todos los campos");
      return;
    }
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select onChange={datosBusqueda} value={pais} name="pais" id="pais">
            <option value="">-- Selecccione un País --</option>
            <option value="DE">Alemania</option>
            <option value="AR">Argentina</option>
            <option value="AU">Australia</option>
            <option value="BR">Brasil</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="GR">Grecia</option>
            <option value="GB">Inglaterra</option>
            <option value="IT">Italia</option>
            <option value="JP">Japon</option>
            <option value="MX">Mexico</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
