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

console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);

//En TypeScript no sé cómo dar estilo al haber heho objetos. Voy a hacerlo de otra forma para darle estilo.

const estiloNombreGrupo = "font-weight: bold; font-size:20px; color: green";

const pop = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hard = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

console.log(`%cThe Rolling Stones`, estiloNombreGrupo, `1960 / true /${pop}`)

/*
The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
*/