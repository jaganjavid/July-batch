

class Book{

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

class UI{

    addBookToList(book){

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

    }

    deleteBook(target){
        if(confirm("Are you sure?")){
            if(target.className === "delete"){
                target.parentElement.remove();
            }
        }
    }

    clearFields(){
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

// Delete event listner

document.querySelector("#book-list").addEventListener("click", function(e){
    
    if(e.target.parentElement.className === "delete"){
       
        // Instantiate UI

        const ui = new UI();

        ui.deleteBook(e.target.parentElement);


    }

})

// Clear event listner

document.querySelector("#clear-btn").addEventListener("click", function(e){
    document.querySelector("#book-list").innerHTML = "";
})