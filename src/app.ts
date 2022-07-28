let buttonTest = document.getElementById('button');

buttonTest?.addEventListener('click', () => {
    console.log('Funcionou');
});

function somarImplicito(item1, item2){
    console.log(item1 + item2);
}