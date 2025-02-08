let amigos = [];


function adicionarAmigo() {
    
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); 


    if (nomeAmigo === '') {
       
        alert('Por favor, insira um nome.');
    } else {
       
        amigos.push(nomeAmigo);

      
        input.value = '';

       
        atualizarListaAmigos();
    }
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');


    listaAmigos.innerHTML = '';

   
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
