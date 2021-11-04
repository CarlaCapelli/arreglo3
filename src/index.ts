let numero = Number(prompt("cuantos nombres quiere ingresar"));

let nombre: string[] = new Array(numero);

for (let i: number = 0; i < numero; i++) {
  let nom = String(prompt("ingrese un nombre para la posicion ", i));
  nombre[i] = nom;
  console.log(" el nombre ingresado en la posicion ", i, " es ", nombre[i]);
}
