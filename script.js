// Создай `p` с текстом `"Нажми на меня"`. При клике он меняет текст на `"Текст изменён!"`.  

// Создай 5 `div`, в каждом из которых есть кнопка`"Скрыть"`. При клике `div` исчезает.  

// Создай`div`.При клике на него его размер увеличивается на 10px.  

// Создай массив чисел, добавь кнопку`"Сортировать"`, которая отображает отсортированный массив на странице. 

// Создай массив цветов `["red", "blue", "green", "yellow"]` и кнопку`"Сменить фон"`.При каждом клике фон страницы должен меняться на следующий цвет из массива. 


//! Создай кнопку `"Сгенерировать"` и пустой`div`.При каждом клике кнопки в `div` должен появляться новый случайный номер от 1 до 100.
// const btmEl= document.createElement('button')
// btmEl.innerText= 'Сгенерировать'
// document.body.append(button)
// const divEl= document.createElement('div')
// divEll.innerText = '    '
// divEll.style.color = 'red'
// divell . style.borderRadius= "3px"
// document.body.append(div)
// btmEl.addEventListener('click',(e)=>{
// const gen =  (Math.floor(Math.random() * 100) + 1)
// divEl.innerText = gen
// }

// Создай массив строк`["Кнопка 1", "Кнопка 2", "Кнопка 3"]`.Напиши функцию`createButtons(buttons)`, которая создаёт кнопку(`button`) для каждой строки и добавляет её в`body`.  Добавь обработчик клика, который выводит в консоль текст кнопки.  

//  Напиши функцию `generateBookList(books)`, которая принимает массив объектов `books`, где каждый объект содержит `title` и `author`. Функция должна создать список (`ul`), в котором каждый элемент (`li`) содержит название книги и автора, а затем добавить этот список в `body`.  

const generateBookList = (books) => {
    const ulEll = document.createElement('ul')

        `
<ul>
<li></li>
</ul>

 `
}


// Создай `ul` и две кнопки: `"Добавить"` и`"Удалить"`.По клику `"Добавить"` в список добавляется новый `li` с текстом`"Элемент X"`, где X — порядковый номер.По клику `"Удалить"` удаляется последний элемент списка. 



const ulEll = document.createElement('ul')
document.body.prepend(ulEll)

const buttonEll = document.createElement('button')
buttonEll.innerText = 'Добавить'
document.body.append(buttonEll)
buttonEll.addEventListener('click', (e) => {
    const liEll = document.createElement('li')
    ulEll.append(liEll)
    liEll.innerText = 'Элемент X'


})
const btmEll = document.createElement('button')
btmEll.innerText = 'Удалить'
document.body.append(btmEll)
btmEll.addEventListener('click', (e) => {
    // liEll.remove(ulEll)
})


// const books = [
//     { title: "Гарри Поттер", author: "Дж. К. Роулинг" },
//     { title: "1984", author: "Джордж Оруэлл" },
//     { title: "Мастер и Маргарита", author: "М. А. Булгаков" }
// ];

// Создай список(`ul > li`).При клике на `li` он становится синим, а все остальные возвращаются к стандартному цвету.  

// const ulEl = document.createElement('ul')
// document.body.append(ulEl)
// const liEl = document.createElement('li')
// ulEl.append(liEl)
// for(i=0;i<books.length; i++){
// books.forEach(item => {
//     ulEl += `
//     <li>${item}</li>
//     `
// })

// }




// Создай функцию `createProductCard(product)`, которая принимает объект `product` с полями `name`, `price`, `available`. Функция должна создать карточку товара (`div`), в которой название товара (`h2`), цена (`p`), и статус наличия (`p`, где текст "В наличии" или "Нет в наличии" в зависимости от `available`). Добавь карточку в `body`.  
// Используй тернарный оператор для отображения статуса наличия.  

// const product = {
//   name: "Ноутбук",
//   price: 75000,
//   available: true
// };

// Создай список (`ul`), в котором будет 5 элементов (`li`). Добавь этим элементам классы `odd` (нечётные) и `even` (чётные). Используй `style` для изменения цветов: чётные элементы должны быть синими, нечётные — зелёными.  

const ulList= document.createElement('ul')
document.body.append(ulList)
for(i=0; i<5;i++){
    const liList = document.createElement('li')
    ulList.append(liList)
    liList.classList.add('odd')
    liList.innerHTML='нечётные'
    liList.style.color='blue'
}
for(i=0; i<5;i++){
    const liList = document.createElement('li')
    ulList.append(liList)
    liList.classList.add('even')
    liList.innerHTML='чётные'
    liList.style.color='green'
}
// На странице есть 3 кнопки с классами `.btn`. Напиши скрипт, который получит все кнопки (`document.querySelectorAll`), а затем выведет в консоль текст каждой кнопки с помощью метода массива.  





// Создай `div` с `id="clickBox"` размером `100x100px`, сделай его красным. Добавь обработчик события `click`, который при каждом нажатии меняет цвет (`backgroundColor`) на случайный.  
// - Используй `Math.random()` для генерации случайного цвета.  
// - Используй логические операторы, чтобы проверять текущий цвет перед сменой.  


// Создай поле ввода (`input type="text"`) и кнопку (`button`). При вводе текста в поле и нажатии на кнопку текст должен добавляться в массив `messages`, а затем отображаться в `ul`.  
// - Используй `push()` для добавления в массив.  
// - Используй `addEventListener()` для обработки клика и ввода.  
// - Используй `forEach()` для рендера списка.  


// Создай кнопку "Проверить устройство", при нажатии которой будет анализироваться ширина окна (window.innerWidth):
// Если ширина меньше 576px — вывести "Мобильное устройство".
// От 576px до 1024px — "Планшет".
// Больше 1024px — "Десктоп".
// Дополнительно:
// Добавь событие resize, чтобы при изменении размера окна результат обновлялся.

// Добавь поле ввода (или prompt) и кнопку "Проверить". Пользователь вводит название товара.
// Если товар есть и available === true — вывести "Товар в наличии"
// Если available === false — "Товар временно отсутствует"
// Если товара нет в массиве — "Такого товара нет"

// const products = [
//   { name: "Ноутбук", available: true },
//   { name: "Смартфон", available: false },
//   { name: "Наушники", available: true }
// ];

// Создай массив чисел
const numbers = [10, 5, 30, 8, 20]
// "Оставить четные" — оставляет только четные числа и выводит их.
// "Отсортировать по возрастанию" — сортирует массив и выводит его.
const evenNumber = numbers.fill(num => num % 2 === 0)
console.log(evenNumber);
const sortNumber = numbers.sort((a, b) => a - b)
console.log(sortNumber);