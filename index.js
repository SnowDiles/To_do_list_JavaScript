function task(name, description, folder, priorite, date) {
  this.name = name;
  this.description = description;
  this.folder = folder;
  this.priorite = priorite;
  this.date = date;
}

function folder(name, description) {
  this.name = name;
  this.description = description;
}

let taskLi = [];

function addNewTask(formData, array) {
  // Crée une nouvelle instance de la classe Task avec les données du formulaire
  let myTask = new task(
    formData.get("name"),
    formData.get("description"),
    formData.get("folder"),
    formData.get("priorite"),
    formData.get("date")
  );

  // Ajoute la nouvelle tâche à l'array
  array.push(myTask);
  displayAllTask(array);
}
// @ts-ignore
document
  .querySelector("#taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    addNewTask(formData, taskLi);
    console.log(taskLi);
  });

// Gestion modal task
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("clodeModal");
const closeModalSubmit = document.getElementById("clodeModalSubmit");
const modal_container = document.getElementById("modalTaskContainId");
openModal?.addEventListener("click", () => {
  modal_container?.classList.add("show");
});
closeModal?.addEventListener("click", () => {
  modal_container?.classList.remove("show");
});
closeModalSubmit?.addEventListener("click", () => {
  modal_container?.classList.remove("show");
});
// gestion modal folder
const openModal2 = document.getElementById("openModal2");
const closeModal2 = document.getElementById("clodeModal2");
const modal_container2 = document.getElementById("modalFolderContainId");
openModal2?.addEventListener("click", () => {
  modal_container2?.classList.add("show");
});
closeModal2?.addEventListener("click", () => {
  modal_container2?.classList.remove("show");
});

let folderArray = [];

// Creation des fonctions folder
function createFolder(formData, array) {
  let myFolder = new folder(formData.get("name"), formData.get("description"));
  array.push(myFolder);
  addFolderSelect(myFolder);
  displayListFolder(myFolder);
  displayAllFolder();
}

// @ts-ignore
document
  .querySelector("#folderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    createFolder(formData, folderArray);
    console.log(folderArray);
  });

function addFolderSelect(array) {
  let folder = document.getElementById("folderSelect");
  // @ts-ignore
  folder.insertAdjacentHTML(
    "beforeend",
    `<option value="${array.name}">${array.name}</option>`
  );
}

function displayListFolder(array) {
  let folderId = document.getElementById("foldercontain");

  let nom = array.name; 

  // @ts-ignore
  folderId.insertAdjacentHTML(
    "beforeend",
    `<div onclick="displayFolderContent('${nom}')" id="${array.name}">
      <img src="../Projet_to-do-list/images/icon_dossier.png" alt="image_dossier" srcset="">
      <p>${array.name}</p>
    </div>`
  );
}

function displayAllTask(array) {
  let idContent = document.getElementById("content");

  // @ts-ignore

  idContent.innerHTML = "";
  idContent?.insertAdjacentHTML(
    "beforeend",
    `
    <h1 style="padding-bottom:50px;">All Task</h1>
    
    
    <div class="flexTaskUp">

      <div>
         <form action="#">
          
          <p style="display: inline; padding-left: 5px">Ceci est une tache par defaut</p>
  </form>
       </div>

       <div style="padding-left: 20px;" class="centralDiv">
         <img src="images/date_blue.png" alt="date" style="display: inline;width:20px;height:20px;margin-left:10px;"> <p style="display: inline;">L'emplacement de la date</p>
       </div>

      <div>
        
     </div>
     </div>

     <div class="imgContain">
       <img src="images/flag_blue.png" alt="" style="width:20px;height:20px;"/><p style="padding-right:10px;">priorite 1</p>
       <img src="images/folder_blue.png" alt="" style="width:20px;height:20px;"/><p>default</p>

     </div>
   <hr style="margin-top:15px;"/>`
  );
  for (let index = 0; index < array.length; index++) {
    // @ts-ignore
    idContent?.insertAdjacentHTML(
      "beforeend",
      `
          <div class="flexTaskUp">

      <div>
         <form action="#">
          
          <p style="display: inline; padding-left: 5px">${array[index].name}</p>
  </form>
       </div>

       <div style="padding-left: 20px;" class="centralDiv">
         <img src="images/date_blue.png" alt="date" style="display: inline;width:20px;height:20px;margin-left:10px;"> <p style="display: inline;">${array[index].date}</p>
       </div>

      <div>
        
     </div>
     <img class="deleteButton"    src="images/x_icon.png" alt="" style="margin-bottom: 15px;height:20px;width:20px;" onclick="deleteTask(${index})" >
     </div>

     <div class="imgContain">
       <img src="images/flag_blue.png" alt="" style="width:20px;height:20px;"/><p style="padding-right:10px;">${array[index].priorite}</p>
       <img src="images/folder_blue.png" alt="" style="width:20px;height:20px;"/><p>${array[index].folder}</p>

     </div>
   <hr style="margin-top:15px;"/>`
    );
  }
}

function deleteTask(idOfTask) {
  taskLi.splice(idOfTask, 1);
  displayAllTask(taskLi);
  console.log("Tableau après suppression:", taskLi);
}

function displayAllFolder() {
  let folderId = document.getElementById("content");

  // @ts-ignore
  folderId.innerHTML = "";

  // @ts-ignore
  folderId.insertAdjacentHTML(
    "beforeend",
    `<h1 style="padding-bottom: 50px;">All Folder</h1>
    <div class="folderClass">
    <div style="padding-top: 20px;">
      <img src="images/icon_folder_green.png" alt="" style="width: 30px;height: 30px;">
      <p style="display: inline;position: relative;bottom: 8px;">default</p>
    </div>
  </div>`
  );
  for (let index = 0; index < folderArray.length; index++) {
    // @ts-ignore
    folderId?.insertAdjacentHTML(
      "beforeend",
      `
          <div class="folderClass">
          <div style="padding-top: 20px;">
            <img src="images/icon_folder_green.png" alt="" style="width: 30px;height: 30px;">
            <p style="display: inline;position: relative;bottom: 8px;">${folderArray[index].name}</p>
          </div>
        </div>`
    );
    console.log(folderArray[index].name);
  }
}

function displayFolderContent(nameFolder) {


  let folderId = document.getElementById("content");
  // @ts-ignore
  folderId.innerHTML = ``;

  
  // @ts-ignore
  folderId.insertAdjacentHTML(
    "beforeend",
    `<h1 style="padding-bottom: 50px;">${nameFolder}</h1>`
  );
  for (let index = 0; index < taskLi.length; index++) {
    if (nameFolder === taskLi[index].folder) {
      // @ts-ignore
      folderId.insertAdjacentHTML(
        "beforeend",
        `
    <div class="flexTaskUp">

      <div>
         <form action="#">
          
          <p style="display: inline; padding-left: 5px">${taskLi[index].name}</p>
    </form>
       </div>

       <div style="padding-left: 20px;" class="centralDiv">
         <img src="images/date_blue.png" alt="date" style="display: inline;width:20px;height:20px;margin-left:10px;"> <p style="display: inline;">${taskLi[index].date}</p>
       </div>

      <div>
        
     </div>
     <img class="deleteButton"    src="images/x_icon.png" alt="" style="margin-bottom: 15px;height:20px;width:20px;" onclick="deleteTask(${index})" >
     </div>

     <div class="imgContain">
       <img src="images/flag_blue.png" alt="" style="width:20px;height:20px;"/><p style="padding-right:10px;">${taskLi[index].priorite}</p>
       <img src="images/folder_blue.png" alt="" style="width:20px;height:20px;"/><p>${taskLi[index].folder}</p>

     </div>
   <hr style="margin-top:15px;"/>`
      );
      console.log("je suis bien entré dans le if");
    }
  }
}
