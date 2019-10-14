// ==============================================================================
// GET ELEMENT

let titles = document.getElementsByClassName('title');

Array.from(titles).forEach(item => {
    console.log(item);
});

// ==============================================================================
// QUERY SELECTOR

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

var books = document.querySelector("#book-list li .name");
// console.log(books);

books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach(book => {
    console.log(book);
})

// ==============================================================================
// Changing Text & HTML Context

var books = document.querySelectorAll('#book-list li .name');

books.forEach(book => {
    book.textContent += ' test';
});

const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);
bookList.innerHTML = '<h2>Books and more books...</h2>'
bookList.innerHTML += '<p>This is how you add HTML</p>'

// ==============================================================================
// Nodes

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes);

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// ==============================================================================
// Traversing the DOM (pt.1)

const bookList = document.querySelector('#book-list');

console.log('the parent node is: ', bookList.parentNode);
console.log('the parent element is: ', bookList.parentElement.parentElement);

console.log(bookList.childNodes);
console.log(bookList.children);

// ==============================================================================
// Traversing the DOM (pt.2)

const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else';

// ==============================================================================
// Events

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', e => {
    console.log(e.target);
    console.log(e);
});

var btns = document.querySelectorAll('#book-list .delete');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevent');
})

// ==============================================================================
// Event Bubbling

const list = document.querySelector('#book-list ul');
console.log(list);

//delete elements
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// ==============================================================================
// Interacting with Forms

add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});

// ==============================================================================
// Creating Elements

const list = document.querySelector('ul');

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

// create elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});

// ==============================================================================
// Styles & Classes

const list = document.querySelector('ul');

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

// create elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

// append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});

// ==============================================================================
// Attributes


const list = document.querySelector('ul');

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
});

// ==============================================================================
// Custom Search Filter

const list = document.querySelector('ul');


// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
});

// ==============================================================================
// Tabbed Content

// tabbed content
cons tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(panel => {
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
});
