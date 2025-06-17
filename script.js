// Ждем, пока весь HTML-документ будет загружен
document.addEventListener('DOMContentLoaded', function() {

    // Спрашиваем имя пользователя
    const name = prompt("Как вас зовут?");

    // Проверяем, ввел ли пользователь имя
    if (name) {
        // Находим элемент с id="welcome-message"
        const welcomeElement = document.getElementById('welcome-message');
        // Вставляем приветствие в этот элемент
        welcomeElement.textContent = 'Привет, ' + name + '!';
    }

});