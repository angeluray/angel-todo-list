// eslint-disable-next-line
let eachList = JSON.parse(localStorage.getItem('tasks')) || [];

class NewItemList {
  constructor(listInfo, mybool, listIndex) {
    this.listInfo = listInfo;
    this.completed = mybool;
    this.listIndex = listIndex;
  }
}

const deelete = (input) => {
  // Delete the number by index position
  eachList.splice(input, 1);
  if (eachList === []) {
    eachList = [];
    localStorage.setItem('tasks', JSON.stringify(eachList));
    return eachList;
  }
  const myNewTaskIndex = eachList.map((el, index) => ({ ...el, listIndex: index - 1 + 1 }));

  // Upgrade the Local Storage
  localStorage.setItem('tasks', JSON.stringify(myNewTaskIndex));

  return myNewTaskIndex;
};

const printDynamic = (input) => {
  document.getElementsByClassName('list')[0].innerHTML = input.map((items, index) => `
    <li id="task-${index}">
      <div>
        <input type="checkbox" class="${items.completed} myInput" id="check-input-${index}" name="${index}" ${items.completed ? 'checked=true' : ''}>
        <input type="text" value="${items.listInfo}" class"myEditableField">
      </div>
      <img src='https://img.icons8.com/windows/32/000000/menu-2.png' class='myOptionIcon'>
      <img src='https://img.icons8.com/material-sharp/24/000000/trash.png' class='myTrash'>
    </li>
  `).join('');

  input.forEach((items, index) => {
    document.querySelector(`#task-${index} input[type="text"]`).readOnly = items.completed;
    document.querySelector(`#task-${index} input[type="text"]`).style.border = 'none';
    document.querySelector(`#task-${index} input[type="text"]`).style.width = '340px';
    document.querySelector(`#task-${index} input[type="text"]`).addEventListener('input', (e) => {
      e.preventDefault();
      items.listInfo = e.target.value;
      localStorage.setItem('tasks', JSON.stringify(eachList));
      // For future imporvements and testing only console.log(items.listInfo);
    });

    document.querySelector(`#task-${index} input[type="checkbox"]`).addEventListener('input', (e) => {
      e.preventDefault();
      items.completed = e.target.checked;
      localStorage.setItem('tasks', JSON.stringify(eachList));
    });

    document.querySelector(`#task-${index} .myTrash`).addEventListener('click', (e) => {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      deelete(index);
    });
  });
};

export {
  NewItemList, printDynamic, deelete, eachList,
};