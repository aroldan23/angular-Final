// class Contacto{
//     constructor(nombre, telefono){
//         this.nombre = nombre;
//         this.telefono = telefono;
//     }
// }

// class Agenda{
//     constructor(){
//         this.contacto = Contacto;
//     }
// }

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000)
};

function clearFields(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#telefono").value = "";
};

document.querySelector("#contact-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const telefono = document.querySelector("#telefono").value;

    if(nombre == "" || telefono == ""){
        showAlert("Por favor llenar todos los campos", "danger");
    }
    else{ //No funciona de aqui para abajo
        if(selectedRow === null){
            const list = document.querySelector("#contact-list");
            const row = document.createElement("tr");

            row.innerHTML = ` 
                <td>${nombre}</td>
                <td>${telefono}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                <a href="#" class="btn btn-danger btn-sm delete">Eliminar</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Contacto añadido", "sucess");
        }
        else{
            selectedRow.children[0].textContent = nombre;
            selectedRow.children[1].textContent = telefono;
            selectedRow = null;
            showAlert("Informacion del contacto editada", "info")
        }
        clearFields();
    }
});

document.querySelector("#contact-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#nombre").value = selectedRow.children[0].textContent;
        document.querySelector("#telefono").value = selectedRow.children[1].textContent;
    }
})

document.querySelector("#contact-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Informacion de contacto eliminada", "danger")
    }
});

