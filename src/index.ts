/*

2) Para tener control de la gente que hay en una disco 
el gerente quiere saber cuantas personas de 
diferentes edades han entrado. 
No se han permitido la entrada a menores de 18 
ni mayores de 40. Para la carga de los datos se 
usa la función aleatorio  (use la función 
aleatorio(menorValor,mayorValor), es decir 
aleatorio(19,40))
Se sabe que la cantidad total de personas 
dentro del local es de 270
Se quiere saber: 	
Cuántas personas son menores de 21 años
Cuántas personas mayores o igual a 21 años
Cuántas personas en total

 */
let menorValor: number = 19;
let mayorValor: number = 40;

let aleatorio = function (menorValor, mayorValor: number) {
  let menores21,
    MayorIgual: number = 0;
  let edades: number[] = new Array(5); //cambiar el 5 por el 270

  for (let i = 0; i < 5; i++) {
    ///idem
    //edades[i] = Number(prompt("Edad:"));
  }
  for (i = 0; i < 5; i++) {
    ///idem
    if (edades[i] < 21) {
      menores21 = menores21 + 1;
    } else {
      MayorIgual = MayorIgual + 1;
    }
  }
  console.log("Personas que son menores de 21 años: " + menores21);
  console.log("Personas que mayores o igual a 21 años: " + MayorIgual);
  console.log("Personas en total: 270");
};
aleatorio(menorValor, mayorValor);
