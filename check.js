
//posso fazer os indices do botao pra com query selectorALL pra no indice 0 ate 5 e apagar talvez com query


let div = document.querySelectorAll('.card')
console.log(div);


div = [div[0], div[1], div[2]]

div.forEach(botao =>{
botao.addEventListener('click', () =>{
  botao.remove('.card');


});


});
