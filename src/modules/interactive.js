import { printDynamic, eachList } from './Add&Remove.js';

const noCompleted = () => {
  const comptdTaskList = eachList.filter((noCompletedTask) => noCompletedTask.completed === false);
  printDynamic(comptdTaskList);
  localStorage.clear();
  localStorage.setItem('tasks', JSON.stringify(comptdTaskList));
  // Code below for future improvements and Testing purposes only
  // console.log(comptdTaskList);
};

// eslint-disable-next-line
export { noCompleted };