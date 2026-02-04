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

const flowerFortune = [
    { name: "ブルースター", meaning: "「信じあう心」「幸福な愛」" },
    { name: "ネモフィラ", meaning: "「どこでも成功」「可憐」" },
    { name: "青いカーネーション", meaning: "「永遠の幸福」" },
    { name: "アジサイ（青）", meaning: "「辛抱強い愛情」「知的」" },
    { name: "ムスカリ", meaning: "「明るい未来」「寛大な愛」" },
    { name: "デルフィニウム", meaning: "「清明」「あなたは幸福をふりまく」" },
    { name: "ミモザ", meaning: "「感謝」「友情」「優雅」" },
    { name: "ヒマワリ", meaning: "「あなただけを見つめる」「憧れ」" },
    { name: "黄色いガーベラ", meaning: "「究極の愛」「親しみやすい」" },
    { name: "フリージア（黄）", meaning: "「無邪気」「期待」" },
    { name: "バラ（黄）", meaning: "「友情」「献身」" },
    { name: "菜の花", meaning: "「快活」「明るさ」" },
    { name: "カスミソウ", meaning: "「感謝」「無邪気」「幸福」" },
    { name: "スズラン", meaning: "「再び幸せが訪れる」「純粋」" },
    { name: "白いバラ", meaning: "「純潔」「深い尊敬」" },
    { name: "ガーデニア", meaning: "「私は幸せ者」「とても幸せ」" },
    { name: "デイジー（白）", meaning: "「希望」「無邪気」" },
    { name: "ジャスミン", meaning: "「愛想の良い」「優美」" },
    { name: "青いバラ", meaning: "「夢かなう」「奇跡」「不可能を可能にする」" },
    { name: "グロリオサ（黄）", meaning: "「栄光」「勇敢」" },
];

function showFlower() {
    const randomIdx = Math.floor(Math.random() * flowerFortune.length);
    const todayFlower = flowerFortune[randomIdx];

    document.getElementById('flower-name').textContent = todayFlower.name;
    document.getElementById('flower-meaning').textContent = todayFlower.meaning;
}

window.onload = function() {
    showFlower();
};