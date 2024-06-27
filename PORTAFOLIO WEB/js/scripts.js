// ------------------SKILLS---------------------

const claseProgreso = Array.from(document.querySelectorAll(".progreso"));
const classSkill = []
const nivel = Array.from(document.getElementsByClassName("nivel"), (v) => v.innerHTML);

for (let i in claseProgreso) {
    if (parseInt(i) >= 0) { 
        let br = claseProgreso[i].classList[1]; // Obtengo la segunda clase de cada elemento
        classSkill.push(br); // Agrego el valor a BARRAS
    }
}
// ------------ VER EN CONSOLA Y TITULOS POR LAS DUDAS ------- 
// const skills = Array.from(document.getElementsByClassName("sk"), (v) => v.innerHTML);
// console.log("TENGO todos los titulos de las Skills")
// console.log(skills)
// console.log("TENGO todos los niveles %")
// console.log(nivel)
// console.log("TENGO todas las clases")
// console.log(classSkill);
// ------------------------------------------------------------

//----FUNCION PARA VER ACTIVAR EL CAMBIO DE ESTILOS-----
function changeSyle(allSkills){
    for (let i in allSkills) {
        useStyle(classSkill[i],nivel[i])
    }
}
//---CREO UNA STYLE que va a cambiar depende la SKILL y su valor    
function useStyle(classSkill,nivel){
    const styleKeyframe = document.createElement("style");
    styleKeyframe.innerHTML = 
        `
        .skills .skill .${classSkill}{
            width:0%;
            animation: 2s ${classSkill} forwards;
        }
        @keyframes ${classSkill} {
            0%{width: 0;}
            100%{width: ${nivel};}
        }`
    ; 
    document.head.appendChild(styleKeyframe);
}
// ----EJECUTO LA FUNCION ------
changeSyle(classSkill);

// -------------------------------------------------------------
console.log(`holaaa\ncomo estas??yo bien`)



//CAMBIO DE POSICION LA SECCIONES
const seccionPortafolio = document.getElementById("portfolio");
const seccionSkills = document.getElementById("skills")

seccionSkills.parentNode.insertBefore(seccionPortafolio,seccionSkills);





