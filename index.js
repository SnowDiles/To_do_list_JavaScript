function task(name,description,folder,priorite,date){
 this.name = name;
 this.description = description;
 this.folder = folder;
 this.priorite = priorite;
 this.date = date;
}

let taskLi = [];


function addNewTask(name,description,folder,priorite,date,array){

  let myTask = new task(name,description,folder,priorite,date);

  array.push(myTask);
}


const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("clodeModal");
const modal_container = document.getElementById("modalTaskContainId");


openModal?.addEventListener('click', ()=>{modal_container?.classList.add('show')})

closeModal?.addEventListener('click', ()=>{modal_container?.classList.remove('show')})
