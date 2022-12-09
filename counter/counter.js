let count = 0;

let color = ['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];

document.querySelector('.counter-value').innerHTML = count;
document.querySelector('.content-header').style.color = '#000080';

document.querySelector(".increase").addEventListener('click', () => {
    count++;
    let colorName = color[Math.floor(Math.random() * color.length)];
    document.querySelector('.counter-value').style.color = colorName;
    document.querySelector('.counter-value').innerHTML = count;
});

document.querySelector(".decrease").addEventListener('click', () => {
    if (count > 0) {
        count--;
    } else {
        count = 0;
    }
    let colorName = color[Math.floor(Math.random() * color.length)];
    document.querySelector('.counter-value').style.color = colorName;
    document.querySelector('.counter-value').innerHTML = count;
});

document.querySelector(".reset").addEventListener('click', () => {
    count = 0;
    let colorName = color[Math.floor(Math.random() * color.length)];
    document.querySelector('.counter-value').style.color = colorName;
    document.querySelector('.counter-value').innerHTML = count;
});