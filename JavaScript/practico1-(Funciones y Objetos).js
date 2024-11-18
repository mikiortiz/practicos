//Actividad 1: Calcular Área y Perímetro de un Rectángulo
function calculoRectangulo(largo, ancho) {
    const area = largo * ancho;
    const perimetro = 2 * (largo + ancho);
    return { area, perimetro };
  }
  console.log(calculoRectangulo(5, 3));
  
  //Actividad 2: Desestructuración de Objetos
  const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Rojo",
  };
  const { marca, modelo } = auto;
  console.log(`Marca: ${marca}, Modelo: ${modelo}`);
  
  //Actividad 3: Validar Números Pares e Impares
  function validarNumero(num) {
    return num % 2 === 0 ? "Es par" : "Es impar";
  }
  console.log(validarNumero(4));
  console.log(validarNumero(7));
  
  //Actividad 4: Manipulación del DOM y Eventos
  const contadorTexto = document.createElement("p");
  let contador = 0;
  contadorTexto.innerText = `Contador: ${contador}`;
  document.body.append(contadorTexto);
  
  const boton = document.createElement("button");
  boton.innerText = "Incrementar contador";
  document.body.append(boton);
  
  boton.addEventListener("click", function () {
    contador++;
    contadorTexto.innerText = `Contador: ${contador}`;
  });
  
  //Actividad 5: Filtrar Números Pares en un Arreglo
  function filtrarPares(array) {
    return array.filter((num) => num % 2 === 0);
  }
  console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
  