import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Loading from "./Loading";
import Resultado from "./Resultado";

const AppClima = () => {
  const { resultado, cargando, sinResultados } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : sinResultados ? (
          <p>{sinResultados}</p>
        ) : (
          <p>El Clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default AppClima;
