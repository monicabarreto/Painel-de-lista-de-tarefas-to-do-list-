//seleção de elementos
const todoform = document.querySelector("#todo-form")
const todoinput = document.querySelector("#todo-input")
const todolist = document.querySelector("#todo-list")
const editform = document.querySelector("#edit-form")
const editinput = document.querySelector("#edit-input")
const canceldeletebtn = document.querySelector("#cacel-edit-btn")

let oldinputvalue;

//funçoes
const savetodo = (texto) => {
    const todo = document.createElement("div")
    todo.classList.add ("todo")
    const todotitle = document.createElement("h3")
    todotitle.innerText = texto
    todo.appendChild(todotitle)

   const donebtn = document.createElement ("button")
   donebtn.classList.add("finish-todo")
   donebtn.innerHTML = '<i class= fa-solid fa-check"></i>'
   todo.appendChild(donebtn)

   const editbtn = document.createElement ("button")
   editbtn.classList.add("edit-todo")
   editbtn.innerHTML = ' <i class="fa-solid fa-pen"></i>' 
   todo.appendChild(editbtn)

   const deletebtn = document.createElement ("button")
   deletebtn.classList.add("remove-todo")
   deletebtn.innerHTML = ' <i class="fa-solid fa-xmark"></i>' 
   todo.appendChild(deletebtn)

   todolist.appendChild(todo);
   todoinput.value= ""
   todoinput.focus();
   
}
const toggleForms = () =>{
    editform.classList.toggle("hide")
    todoform.classList.toggle("hide")
    todolist.classList.toggle("hide")
};
const updatetodo = (texto) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
let todotitle = todo.querySelector("h3");

console.log(todotitle, texto);

if (todotitle.innerText === oldinputvalue){
    todotitle.innerText = texto;
}

    })


}

//eventos
todoform.addEventListener ("submit", (e)=> { //submit é o botão
    e.preventDefault() // preventDefaault é para o formulário nao ser enviado para o backend.
   
    const inputvalue = todoinput.value
    if(inputvalue){
        savetodo(inputvalue)
    }
}
)
document.addEventListener ("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")
    let todotitle;

    if (parentEl && parentEl.querySelector("h3")){
 todotitle = parentEl.querySelector("h3").innerText;


}

    if( targetEl.classList.contains("finish-todo")){
       parentEl.classList.toggle("done")
    }
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove()
    }
    if(targetEl.classList.contains("edit-todo")){
        toggleForms()

        editinput.value = todotitle
        oldinputvalue = todotitle

    }  
});

canceldeletebtn.addEventListener("click", (e) =>{
    e.preventDefault();
    toggleForms()
})
editform.addEventListener("submit", (e) => {

e.preventDefault()


const editinputvalue = editinput.value

if(editinputvalue){
    //atualizar
    updatetodo(editinputvalue)

}
toggleForms()


})

