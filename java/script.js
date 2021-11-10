//Declarar variables
const nuevaTareaInput = document.getElementById("nuevaTareaInput");
const agregarBtn = document.getElementById("agregarBtn"); //boton agregar
const lista = document.getElementById("lista"); //listas de tareas
//const checkbox = document.getElementById("checkbox");

var tareas = [];

agregarBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const textoDeLaTarea = nuevaTareaInput.value;
    idtarea = new Date().getTime(); //milisegundos desde el 1/1/1970
    agregarTarea(textoDeLaTarea,idtarea);

    var nuevatarea = {
        texto: textoDeLaTarea,
        idtarea: idtarea
    }

    tareas.push(nuevatarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));

});

function agregarTarea(texto, id) {
    console.log("AGREGAR",texto,id)

    const nuevoli = document.createElement("li");
    //agregar atrubuto juanito con valor id
    nuevoli.setAttribute("idtarea", id);

    nuevoli.innerHTML =
        `
        <input type="checkbox" id="checkbox">
        <label for="Tarea">${texto}</label>
        <button onclick="eliminarTarea(this)">Eliminar</button>
        `;
    lista.prepend(nuevoli);

}
function eliminarTarea(e) {
    console.log("ELIMINAR",e);
    recupId = e.parentElement.getAttribute("idtarea");
    e.parentElement.remove();
    console.log("RECUPID",recupId);
    
    tareas = tareas.filter(tarea => tarea.idtarea != recupId);
    localStorage.setItem("tareas", JSON.stringify(tareas));

}

function checkbox(e) {
    e.parentElement.strike(); //what is this?
}

//text-decoration-line: line-through;
window.onload = function () {
    tareas = window.localStorage.getItem("tareas") || "[]";
    
      tareas = JSON.parse(tareas);

      for (i = 0; i < tareas.length; i++) {
        agregarTarea(tareas[i].texto, tareas[i].idtarea);
    }

    
    
    

}
