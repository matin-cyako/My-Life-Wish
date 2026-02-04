window.onload = function() {
    loadTodo(); 
    
    const inputField = document.getElementById('todo-text');
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
};

function addTodo() {
    const input = document.getElementById('todo-text');
    if (input.value.trim() !== "") {
        createTodoItem(input.value, false);
        saveTodo();
        input.value = "";
    }
}

function createTodoItem(text, isDone) {
    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = text;
    if (isDone) li.classList.add('done');

    li.onclick = function() {
        if (this.classList.contains('done')) {
            this.remove();
        } else {
            this.classList.add('done');
        }
        saveTodo();
    };
    list.appendChild(li);
}

function saveTodo() {
    const todos = [];
    document.querySelectorAll('#todo-list li').forEach(li => {
        todos.push({
            text: li.textContent,
            done: li.classList.contains('done')
        });
    });
    localStorage.setItem('myTodoList', JSON.stringify(todos));
}

function loadTodo() {
    const saved = localStorage.getItem('myTodoList');
    if (saved) {
        const todos = JSON.parse(saved);
        todos.forEach(todo => createTodoItem(todo.text, todo.done));
    }
};