document.querySelector('img').addEventListener('click', () => {
    alert('可不能乱碰捏');
});
document.querySelector('html').addEventListener('click', () => {
    alert('专心学习！！');
});
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ballet.png') {
        myImage.setAttribute('src', 'images/ballet1.png');
    } else {
        myImage.setAttribute('src', 'images/ballet.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 欢迎，' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 欢迎，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 欢迎，' + myName;
    }
}





