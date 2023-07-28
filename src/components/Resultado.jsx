import FormatHora from "../hooks/FormatHora";
import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado, prov } = useClima();
  const { name, main, sys, weather, dt, wind } = resultado;

  const rafaga = !isNaN(wind.gust) ? parseInt(wind.gust * 3.6) : "s/r";

  return (
    <div className="contenedor clima">
      <h2>
        {name}, {prov}, {sys.country}:{" "}
      </h2>
      <div className="primerfila">
        <p>
          Actual: <br /> {parseInt(main.temp)} <span>&#x2103; </span>
        </p>
        <div className="img">
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="logo"
            className="clima-icon"
          />
          <span className="clima-description">{weather[0].description}</span>
        </div>
        <p>
          Hora: <br /> {FormatHora(dt)}
          <span>hs</span>
        </p>
      </div>

      <div className="temp_min_max">
        <p>
          ST: <br />
          {parseInt(main.feels_like)} <span>&#x2103;</span>
        </p>
        <p>
          Viento: <br />
          {parseInt(wind.speed * 3.6)} <span>km/h</span>
        </p>
        <p>
          Rafagas: <br />
          {rafaga}
          <span>km/h</span>
        </p>
        
        <p>
          Hum:
          <br /> {parseInt(main.humidity)} <span>%</span>
        </p>
      </div>
      <div className="tercerfila">
        <p>
          Pres Atm: <br />
          {parseInt(main.pressure)} <span>hPa</span>
        </p>
        <p>
          Amanecer: <br />
          {FormatHora(sys.sunrise)}
          <span>hs</span>
        </p>
        <p>
          Atardecer:
          <br /> {FormatHora(sys.sunset)}
          <span>hs</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
