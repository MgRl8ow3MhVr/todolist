let tomatch = "/oo/g";
let test = [["ola", true], ["olo", true], ["owr", true]];
// console.log(test.match(tomatch));

let filtre = "";

let tri = elem => {
  return elem[0].indexOf(filtre) != -1;
};

console.log(test.filter(tri));
