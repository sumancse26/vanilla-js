let color = ['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];

let element = document.getElementById("click-me");
element.addEventListener('click', () => {
    let colorName = color[Math.floor(Math.random() * color.length)];
    document.querySelector('.content-text').innerHTML = colorName;
    document.querySelector('.main-body').style.backgroundColor = colorName;
});