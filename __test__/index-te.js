import { eachList, printDynamic, NewItemList } from '../src/modules/Add&Remove.js';

const addNewList = () => {
  const eachList = [];
  const toDo = 'an argument';
  const eachItemList = new NewItemList(toDo, false, 1);
  eachList.push(eachItemList);
  /* printDynamic(eachList); */
  localStorage.setItem('tasks', JSON.stringify(eachList));
  return eachList;
};

export { addNewList as default };