const todos = []; // arreglo para almacenar respuestas

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {                                
        e.preventDefault();                                 //para que no se refresque
        const todo = document.getElementById('todo');       //obtiene el valor
        const todoText = todo.value;                        //asigna el valor a todoText
        todo.value = '';                                    //limpia el valor
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for(let i = 0; i < todos.length; i++){
            todoList.innerHTML += '<li>' + todos[i] + '</li>'
        }
    }
}