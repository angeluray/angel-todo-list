import './style.css';
// eslint-disable-next-line
import { NewItemList, printDynamic, eachList, deelete
} from './modules/Add&Remove.js';

import { noCompleted } from './modules/interactive.js';
// HTML Management
const container = document.querySelector('.myListContainer');
container.innerHTML = '<div class="headlineContainer"><h1>Today\'s To-Do\'s</h1><img src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png" class="myRefresher"></div>';
const list = document.createElement('ol');
list.classList.add('list');
const input = document.createElement('div');
input.classList.add('input');
container.appendChild(input);
container.appendChild(list);
list.insertAdjacentHTML('afterend', '<button type="button" id="clearAllBtn">Clear all completed</button>');

// This code below is for future improvements.
document.querySelector('.myRefresher').addEventListener('click', () => {
  // For future improvements and testing only console.table(eachList);
});

input.innerHTML = `
<input type="text" id="toDo" placeholder="Add to your list..." required>
`;

const clearAllBtn = document.getElementById('clearAllBtn');
const refreshIcon = document.createElement('img');
refreshIcon.classList.add('mySendIcon');
refreshIcon.src = 'https://img.icons8.com/sf-regular/48/000000/return.png';
input.appendChild(refreshIcon);

const addNewList = () => {
  const toDo = document.getElementById('toDo').value;
  const eachItemList = new NewItemList(toDo, false, (eachList.length + 1));
  // Push into the array
  eachList.push(eachItemList);
  // This code is for testing only console.log(eachList);

  // print in the HTML file.
  // eslint-disable-next-line
  printDynamic(eachList);
  localStorage.setItem('tasks', JSON.stringify(eachList));
  return eachList;
};

document.getElementById('toDo').addEventListener('keypress', (e) => {
  const toDo = document.getElementById('toDo').value;
  if (e.key === 'Enter' && toDo !== '') {
    addNewList();
    document.getElementById('toDo').value = '';
  }
});

refreshIcon.addEventListener('click', () => {
  const toDo = document.getElementById('toDo').value;
  if (toDo) {
    addNewList();
  }
  document.getElementById('toDo').value = '';
});

clearAllBtn.addEventListener('click', () => {
  noCompleted();
});

printDynamic(eachList);