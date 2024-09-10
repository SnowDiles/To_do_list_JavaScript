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
  folder.insertAdjacentHTML("beforeend", `<option value="${array.name}">${array.name}</option>`);
}


function displayListFolder(array){
  let folderId = document.getElementById("foldercontain");

  // @ts-ignore
  folderId.insertAdjacentHTML("beforeend",`<div id="${array.name}"><img src="../Projet_to-do-list/images/icon_dossier.png" alt="image_dossier" srcset=""><p>${array.name}</p></div>`);

}



function displayAllTask(array){

  let idContent = document.getElementById("taskContain");
  console.log("mec c'est grave drole");

  // @ts-ignore

  idContent.innerHTML ='';
  idContent?.insertAdjacentHTML("beforeend", `
    <div class="flexTaskUp">
      <div>
        <form action="#">
          
          <p style="display: inline; padding-left: 5px">Ceci est une tache par defaut</p>
        </form>
      </div>

      <div style="padding-left: 20px;" class="centralDiv">
        <img src="images/date_blue.png" alt="date" style="display: inline;"> <p style="display: inline;">L'emplacement de la date</p>
      </div>

      <div>
        <img src="images/x_icon.png" alt="" />
      </div>
    </div>

    <div class="imgContain">
      <img src="images/flag_blue.png" alt="" /><p>priorite 1</p>
      <img src="images/folder_blue.png" alt="" /><p>default</p>

    </div>
  <hr />`) ;
  for (let index = 0; index < array.length; index++) {
    console.log("me voici dans la boucle");

    // @ts-ignore
    idContent?.insertAdjacentHTML("beforeend", `
          <div class="flexTaskUp">
            <div>
              <form action="#">
                <input type="checkbox" name="${array[index].name}" id="${array[index].name}" value="test" />
                <p style="display: inline; padding-left: 5px">${array[index].name}</p>
              </form>
            </div>

            <div style="padding-left: 20px;" class="centralDiv">
              <img src="images/date_blue.png" alt="date" style="display: inline;"> <p style="display: inline;">${array[index].date}</p>
            </div>

            <div>
              <img src="images/x_icon.png" alt="" onclick="deleteTask('${array[index].name}')"/>
            </div>
          </div>

          <div class="imgContain">
            <img src="images/flag_blue.png" alt="" /><p>${array[index].priorite}</p>
            <img src="images/folder_blue.png" alt="" /><p>${array[index].folder}</p>

          </div>
        <hr />`) ;
        console.log(idContent);
    console.log(array[index].priorite);
  }

  console.log("je suis apres la boucle");
}


function deleteTask(){

    console.log("tesssst");


}