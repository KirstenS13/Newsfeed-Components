/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//My code
//pseudocode
  //create menu div
  //add class to menu div
  //create ul element
  //create li elements by iterating over array
  //add li elements to ul element as children
  //add ul element to menu div as child

/* component structure
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

//Component constructor function
function menuComponentConstructor(menuDataArr) {
  //create menu(outer) div
  const menu = document.createElement('div');
  menu.classList.add('menu');

  //create ul element
  const menuListContainer = document.createElement('ul');

  //iterate over array
  menuDataArr.forEach((menuItem) => {
    //create li element for each item in array
    const menuListItem = document.createElement('li');
    menuListItem.textContent = 'menuItem';

    //add each li element to ul element
    menuListContainer.appendChild(menuListItem);
  })
}