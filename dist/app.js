"use strict";
let buttonTest = document.getElementById('button');
buttonTest === null || buttonTest === void 0 ? void 0 : buttonTest.addEventListener('click', () => {
    console.log('Funcionou');
});
function somarImplicito(item1, item2) {
    console.log(item1 + item2);
}
