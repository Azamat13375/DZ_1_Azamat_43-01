///задание №1

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');
function isValidGmail(email) {
    // Регулярное выражение для проверки валидности Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}
gmailButton.addEventListener('click', () => {
    const email = gmailInput.value;
    if (isValidGmail(email)) {
        gmailResult.textContent = 'OK';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'NOT OK';
        gmailResult.style.color = 'red';
    }
});

///задание №2

// Получаем ссылку на маленький блок
let smallBlock = document.querySelector('.child_block');
let position = 0; // Начальная позиция
const maxPosition = 450; // Максимальная позиция (500px (ширина родительского блока) - 50px (ширина маленького блока))

// Функция для движения блока вправо
function moveRight() {
    if (position < maxPosition) {
        position += 1; // Увеличиваем позицию на 1 пиксель
        smallBlock.style.left = position + 'px'; // Устанавливаем новую позицию
        requestAnimationFrame(moveRight); // Запускаем следующий шаг
    }
}

// Запускаем движение, когда DOM полностью загружен
document.addEventListener('DOMContentLoaded', (event) => {
    moveRight();
});








