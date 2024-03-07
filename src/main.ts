import "./style.css";

interface Grupo {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    generoMusical: string;
}

const grupo1: Grupo = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true ,
    generoMusical: "🎵 Pop Rock",
};

const grupo2: Grupo = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false ,
    generoMusical: "🎸 Rock",
};

const grupo3: Grupo = {
    nombre: "AC DC",
    añoFundacion: 1973,
    activo: true ,
    generoMusical: "🤘 Hard Rock",
};

const grupo4: Grupo = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false ,
    generoMusical: "🎼 Clásica",
};

const grupo5: Grupo = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true ,
    generoMusical: "🎸 Rock",
};

const estiloNombreGrupo = "font-weight: bold; font-size:20px; color: green";

//The Beatles
console.log(`%c ${grupo1.nombre}`, estiloNombreGrupo);
console.log(grupo1.añoFundacion);
console.log(grupo1.activo);
console.log(grupo1.generoMusical);
console.log("****************");

//Queen
console.log(`%c ${grupo2.nombre}`, estiloNombreGrupo);
console.log(grupo2.añoFundacion);
console.log(grupo2.activo);
console.log(grupo2.generoMusical);
console.log("****************");

//AC DC
console.log(`%c ${grupo3.nombre}`, estiloNombreGrupo);
console.log(grupo3.añoFundacion);
console.log(grupo3.activo);
console.log(grupo3.generoMusical);
console.log("****************");

//Beethoven
console.log(`%c ${grupo4.nombre}`, estiloNombreGrupo);
console.log(grupo4.añoFundacion);
console.log(grupo4.activo);
console.log(grupo4.generoMusical);
console.log("****************");

//The Rolling Stones
console.log(`%c ${grupo5.nombre}`, estiloNombreGrupo);
console.log(grupo5.añoFundacion);
console.log(grupo5.activo);
console.log(grupo5.generoMusical);
console.log("****************");
