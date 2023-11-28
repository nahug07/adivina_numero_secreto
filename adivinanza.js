const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    console.log(numeroAdivinado + '-------' + numeroSecreto);
  if (numeroAdivinado < numeroSecreto) {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
