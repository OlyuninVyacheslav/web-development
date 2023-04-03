const buttons = document.getElementsByTagName('button');

function alertUser() {
alert(`Макет был реализован Олюниным В.К. Вариант №8`);
}

for (const btn of buttons) {
btn.addEventListener('click', alertUser);
}