const deelete = (input) => {
  let eachList = [
    {
      'completed': false,
      'listIndex': 1,
      'listInfo': 'an argument',

    },

  ];

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

export { deelete as default };