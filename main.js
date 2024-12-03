'use strict';

//const
const paragraph = document.querySelector(".js__paragraph");


// obj

const adalaber1 = {
nombre:"Susana",
edad: "34 años",
profesion: "periodista",
};

const adalaber2 = {
    nombre:"Rocío",
    edad: "25 años",
    profesion: "actriz",
};

// actions



const funcionParaAdalaber = (obj) => {
    paragraph.innerHTML += `Mi nombre es ${obj.nombre}, tengo ${obj.edad} y soy ${obj.profesion}<br>`;
   
};

funcionParaAdalaber(adalaber1);
funcionParaAdalaber(adalaber2);
