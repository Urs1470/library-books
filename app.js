let table = document.querySelector('tbody');
let myLibrary = [];

// the constructor
function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


//// Form submit

const submitBtn = document.querySelector('.submit');
document.addEventListener('DOMContentLoaded', ()=> {
    submitBtn.addEventListener('click', addBook);
});


const addBook = (e) =>{
    e.preventDefault();  //// prevent browser to reload page on submit
    let books = new Book( //// take input values into new Book object
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('status').value
    );

    myLibrary.push(books);
    document.querySelector('form').reset(); /// reset the values on the form


    //// display new book in table
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = books.title;
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    td2.textContent = books.author;
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    td3.textContent = books.pages;
    tr.appendChild(td3);
    
    
    let td4 = document.createElement('td');
    let btn1 = document.createElement('button');
    btn1.textContent = books.read;
    btn1.setAttribute("class","btn-read")
    btn1.setAttribute("onclick","readStatus();");
    td4.appendChild(btn1);
    tr.appendChild(td4);
    
    let btn2 = document.createElement('button');
    btn2.textContent = 'remove';
    btn2.setAttribute("class","btn")
    btn2.setAttribute("onclick","this.parentNode.parentNode.removeChild(this.parentNode);");
    tr.appendChild(btn2);
    
    table.appendChild(tr);
};

//// Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
