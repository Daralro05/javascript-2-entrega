const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
//console.log(pizzas);
//a
const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log("Las pizzas con ID impar son:");
pizzasIdImpar.forEach((pizza) => {
  console.log(`${pizza.nombre} - ID: ${pizza.id}`);
});
/*-------------------------------------------------------------------------*/
//b
const pizzasPrecioMenor = pizzas.find((pizza) => pizza.precio < 600);
console.log("Hay una pizza que cuesta menos de $ 600:");
console.log(pizzasPrecioMenor);
/*--------------------------------------------------------------------------*/
//c
const pizzasPrecios = pizzas.filter((pizza) => pizzas);
console.log("Inflación No tengo miedo,mirá estos precios:");
pizzasPrecios.forEach((pizza) => {
  console.log(`${pizza.nombre} - Precio: ${pizza.precio}`);
});
/*---------------------------------------------------------------------------*/
//d

const pizzasIngredientes = pizzas.filter((pizza) => pizzas);
console.log("Ingredientes de 1° calidad:");
pizzasIngredientes.forEach((pizza) => {
  console.log(`${pizza.nombre} - ingredientes: ${pizza.ingredientes}`);
});
