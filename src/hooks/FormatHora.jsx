const FormatHora = (timestamp) => {
  const date = new Date(timestamp * 1000); // Multiplicamos por 1000 para obtener milisegundos
  const hora = agregarCerosIzquierda(date.getHours());
  const minutos = agregarCerosIzquierda(date.getMinutes());
  const segundos = agregarCerosIzquierda(date.getSeconds());
  return `${hora}:${minutos}:${segundos}`;
};
function agregarCerosIzquierda(num) {
  return num < 10 ? `0${num}` : num;
}
export default FormatHora;
