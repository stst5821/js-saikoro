// サイコロの目の数字を変更する

const numElement = document.querySelector("#js-num");

function getRandumNumber() {
    const ranNum = Math.floor(Math.random() * 6) +1 ;
    numElement.textContent = `サイコロの目: ${ranNum}`;
}