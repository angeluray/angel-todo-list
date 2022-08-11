import './style.css';

let counter = -1;

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

input.innerHTML = `
<input type="text" id="toDo" placeholder="Add to your list..." required>
`;

const refreshIcon = document.createElement('img');
refreshIcon.classList.add('mySendIcon');
refreshIcon.src = 'https://img.icons8.com/sf-regular/48/000000/return.png';
input.appendChild(refreshIcon);

const eachList = [];

class NewItemList {
  constructor(listInfo, mybool, listIndex) {
    this.listInfo = listInfo;
    this.myBool = mybool;
    this.listIndex = listIndex;
  }
}

const printDynamic = (input) => {
  document.getElementsByClassName('list')[0].innerHTML = input.map((items, index) => `
  <li id="${index}"><div><input type="checkbox">${items.listInfo}</div><img src='https://img.icons8.com/windows/32/000000/menu-2.png' class='myOptionIcon'></li>`).join('');
};

const addNewList = () => {
  counter += 1;
  const toDo = document.getElementById('toDo').value;
  const eachItemList = new NewItemList(toDo, false, counter);
  // Push into the array
  eachList.push(eachItemList);

  // print in the HTML file.
  printDynamic(eachList);
  return eachList;
};

document.getElementById('toDo').addEventListener('keypress', (e) => {
  const toDo = document.getElementById('toDo').value;
  if (e.key === 'Enter' && toDo !== '') {
    addNewList();
    document.getElementById('toDo').value = '';
  }
});