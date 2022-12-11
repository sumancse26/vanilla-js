const image = ['1', '2', '3', '4', '5'];

let index = 0;

document.querySelector('.button-group').addEventListener('click', (event) => {
    let currentButton = event.target.className;
    if (currentButton == 'next') {
        index++;
        console.log(event.target.className);
        if (index > image.length) {
            index = 0;
        }

        console.log(image[index]);
    } else {
        index--;
        if (index < 0) {
            index = image.length;
        }
        console.log(event.target.className);

        console.log(image[index]);
    }


});