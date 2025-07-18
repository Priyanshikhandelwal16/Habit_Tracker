document.addEventListener("DOMContentLoaded", ()=>{
const bookinput = document.querySelector("#Book-input")
const btn = document.querySelector("#book-button")
const booklist = document.querySelector("#book-list")

let book = JSON.parse(localStorage.getItem("book")) ||  []
book.forEach(bookItem => {
    renderBook(bookItem)
});

btn.addEventListener("click" , () =>{
    const bookText = bookinput.value.trim()
    if (bookText==="") {
        return;
    }
    const newbook = {
        id: Date.now(),
        text: bookText,
        completed: false,
    }
     book.push(newbook)
     saveBook()
     renderBook(newbook)
      bookinput.value = ""
      console.log(book)
})

function renderBook(bookItem){
   const li = document.createElement('li')
   li.setAttribute("book-id" , bookItem.id)
   if(bookItem.completed) li.classList.add("completed")
   li.innerHTML = `
      <span>${bookItem.text}</span>
      <button>Remove</button>
   `

   li.addEventListener("click", (e) =>{
     if (e.target.tageName=='BUTTON') {
        return;
     }
     bookItem.completed = !bookItem.completed
     li.classList.toggle("completed")
     saveBook()
   })

   li.querySelector("button").addEventListener("click" , (e)=>{
    e.stopPropagation();
    book = book.filter((b) => b.id != bookItem.id)
      li.remove()
      saveBook()
   })

   booklist.appendChild(li)
}

function saveBook(){
    localStorage.setItem("books" , JSON.stringify(book))
}
})