const button = document.querySelector('button#submit')
const todoList = document.querySelector('ul#list')
const todoNr = document.querySelector('.todo-nr b')
const nameInput = document.querySelector('#input')

const items = todoList.children
todoNr.innerText = items.length
// console.log(items)

button.addEventListener('click', (e) => {
  e.preventDefault()
  const newItem = document.createElement('li')
  newItem.innerText = nameInput.value
  todoList.appendChild(newItem)
  todoNr.innerText = items.length
  nameInput.value = ''
  // console.log(items)
  newItem.addEventListener('click', (ev) => {
    ev.stopPropagation()
    ev.target.remove()
    todoNr.innerText = items.length
  })
})

console.log(nameInput.value)