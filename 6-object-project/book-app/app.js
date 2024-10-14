

// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


function UI() {
    UI.prototype.addBookToList = function (book) {

        const list = document.querySelector("#book-list");

        // Create a tr element


        const row = document.createElement("tr");

        row.innerHTML = `
        <td>
          ${book.title}
        </td>
        <td>
          ${book.author}
        </td>
        <td>
           ${book.isbn}
        </td>
        <td class="delete">
         <span class="btn btn-danger">x</span>
       </td>
      `

      list.appendChild(row);

    },
    UI.prototype.clearFields = function(){
        // document.querySelector("#title").value = "";
        // document.querySelector("#author").value = "";
        // document.querySelector("#isbn").value = "";

        document.querySelector("#book-form").reset();
    }
}



// Event listen to form submit

document.querySelector("#book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Create a object instance
    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill the form");
    } else {
        ui.addBookToList(book);
        ui.clearFields();
    }

})