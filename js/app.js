'use strict';

var bookList = [];
var minPrice = 3;
var maxPrice = 8;
var formSubmit = document.getElementById('formSubmit');
var tableOfBooks = document.getElementById('tableOfBooks');


function Book(bookName, numberOfPages, category) {
    this.bookName = bookName;
    this.numberOfPages = numberOfPages;
    this.price = 0;
    this.category = category;
    bookList.push(this);
}

Book.prototype.generateRandomPrice = function (minPrice, maxPrice) {
    var randomNumber = Math.floor(Math.random() * (maxPrice - minPrice + 1) + minPrice);
    this.price = randomNumber;
}

function loadFromLocalStorage (){
    bookList = JSON.parse(localStorage.getItem('Books')) || [];
}
loadFromLocalStorage();

formSubmit.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    var bookName = event.target.bookName.value;
    var numberOfPages = event.target.numberOfPages.value;
    var category = event.target.catogery.value;

    var newBook = new Book(bookName, numberOfPages, category);
    newBook.generateRandomPrice(3, 8);
    saveToLocalStorage();
    createTable();

}

console.log(bookList);

function saveToLocalStorage() {
    localStorage.setItem('Books', JSON.stringify(bookList));
}

function createTableHeader() {
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.textContent = 'Book Name';
    tr.appendChild(th1);
    var th2 = document.createElement('th');
    th2.textContent = 'Number Of Pages';
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    th3.textContent = 'Price';
    tr.appendChild(th3);
    var th4 = document.createElement('th');
    th4.textContent = 'Category';
    tr.appendChild(th4);
    var th5 = document.createElement('th');
    th5.textContent = 'Remove';
    tr.appendChild(th5);
    tableOfBooks.appendChild(tr);
}



function createTable() {
    tableOfBooks.innerHTML = '';
    var books = JSON.parse(localStorage.getItem('Books'));
    createTableHeader();
    for (var i = 0; i < books.length; i++)
        var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.textContent = books[i].bookName;
    tr.appendChild(td1)
    var td2 = document.createElement('td');
    td2.textContent = books[i].numberOfPages;
    tr.appendChild(td2);
    var td3 = document.createElement('td');
    td3.textContent = books[i].price;
    tr.appendChild(td3);
    var td4 = document.createElement('td');
    td4.textContent = books[i].category;
    tr.appendChild(td4);
    var td5 = document.createElement('td');
    td5.textContent = 'X'
    tableOfBooks.appendChild(tr);
}