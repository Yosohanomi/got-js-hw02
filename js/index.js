const inputRange = document.querySelector('.slider__input');
const imgSlider = document.querySelector('.slider__image');
const box = document.getElementById('box');

const images = [
    'https://picsum.photos/id/1015/300/300',
    'https://picsum.photos/id/1025/300/300',
    'https://picsum.photos/id/1035/300/300',
    'https://picsum.photos/id/1045/300/300'
]

inputRange.max = images.length-1;
inputRange.min = 0;
inputRange.value = 0;
function updateImage() {
    const index = Number(inputRange.value);
    imgSlider.style.opacity = 0;
    setTimeout(() => {
        imgSlider.src = images[index];
        imgSlider.style.opacity = 1;
    }, 200);
}

const debounceUpdate = _.debounce(updateImage, 50);
inputRange.addEventListener('input', debounceUpdate);


const boxWidth = box.offsetWidth;
const boxHeight = box.offsetHeight;
let isMoving = false;
document.addEventListener('mousemove', _.debounce((e) => {
    if (!isMoving) return;
    box.style.left = (e.clientX - boxWidth / 2) + 'px';
    box.style.top = (e.clientY - boxHeight / 2) + 'px';
}, 100)); 

box.addEventListener('click', () => {
    isMoving = !isMoving;
});