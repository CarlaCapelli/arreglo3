let numero = Number(prompt("cuantos nombres quiere ingresar"));

let nombre: string[] = new Array(numero);

for (let i: number = 0; i < numero; i++) {
  let nom = String(prompt("ingrese un nombre"));
  nombre[i] = nom;
  console.log(nombre[i]);
}
