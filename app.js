
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
    id: ++id
  });
    newToDoText.value = '';

    renderTheUI();
  }
}

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    const deleteBtn = document.createElement('button')
         deleteBtn.innerHTML = '<span>Delete</span>';


    newLi.innerHTML = toDo.title;
    newLi.appendChild(deleteBtn);
  });
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

/ var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //
    });
 }

  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
});

  renderTheUI();
}

window.onload = function() {
  onReady();
};
