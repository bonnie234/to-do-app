
function onReady() {
     let id = 0;
     const toDos = [];
     const addToDoForm = document.getElementById('addToDoForm');

   function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
     title: newToDoText.value,
     complete: false,
     id: var.value
});
    newToDoText.value = '';

        renderTheUI();

        addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

        let minusBtn = document.createElement('button');
  minusBtn.innerHTML = '<span>Delete</span>';;

  // set the title
newLi.textContent = title;

// attach the checkbox to the li
newLi.appendChild(checkbox);

// attach the checkbox to the li
newLi.appendChild(minusBtn);

// attach the li to the ul
toDoList.appendChild(newLi);

//empty the input
newToDoText.value = '';

minusBtn.addEventListener('click', function() {
newLi.parentNode.removeChild(newLi);


}

function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

           newLi.textContent = toDo.title;

           toDoList.appendChild(newLi);
           newLi.appendChild(checkbox);
    });
 }

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
});

  renderTheUI();

window.onload = function() {
   onReady();
 };
