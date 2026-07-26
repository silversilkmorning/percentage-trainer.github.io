const question = document.querySelector("#question");
const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("#result");

let correctAnswer;

// Функція створює новий приклад
function newQuestion() {
    const percent = Math.floor(Math.random() * 9 + 1) * 10; // 10,20,...90
    const number = Math.floor(Math.random() * 19 + 2) * 10; // 20,30,...200

    question.textContent = `${percent}% від ${number} = ?`;
    correctAnswer = number * percent / 100;

    input.value = "";
}

button.addEventListener("click", function () {
    const answer = Number(input.value);

    if (answer === correctAnswer) {
        result.textContent = "✅ Правильно!";
    } else {
        result.textContent = `❌ Неправильно! Правильна відповідь: ${correctAnswer}`;
    }

    // Одразу показуємо новий приклад
    newQuestion();
});

// Перший приклад при завантаженні сторінки
newQuestion();