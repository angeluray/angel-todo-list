/**
 * @jest-environment jsdom
 */

import addNewList from './index-te.js';
import deelete from './remove.js';

document.body.innerHTML = `
<div class="myListContainer">
  <div class="headlineContainer">
    <h1>Today\'s To-Do\'s</h1>
    <img src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png" class="myRefresher">
  </div>

  <div class="input">
    <input type="text" id="toDo" placeholder="Add to your list..." required>
    <ol class="list"></ol>
  </div>
</div>
`;

const list = document.querySelector('.list');



describe('testing add and remove', () => {
  it('add a task object', () => {
    expect(addNewList()).toEqual([{ 'completed': false, 'listIndex': 1, 'listInfo': 'an argument' }]);
  });

  it('delete a task object', () => {
    expect(deelete(0)).toEqual([]);
  });
});