const image = ['1', '2', '3', '4', '5'];

let index = 0;

document.querySelector('.button-group').addEventListener('click', (event) => {
    let currentButton = event.target.className;
    if (currentButton == 'next') {
        index++;
        if (index == image.length) {
            index = 0;
        }
        let path = images / image[index].jpg;
        let name = document.getElementsByTagName('img').src = '';
        console.log('index', path);
        console.log('image', image[index]);


    } else {
        index--;
        if (index < 0) {
            index = image.length - 1;
        }
        console.log('index', index);
        console.log('image', image[index]);
    }


});