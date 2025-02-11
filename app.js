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

function exibirAmigos() {
    
    const lista = document.getElementById('listaAmigos');

    
    lista.innerHTML = '';

   
    for (let i = 0; i < amigos.length; i++) {
    
        const li = document.createElement('li');
        
    
        li.textContent = amigos[i];

    
        lista.appendChild(li);
    }
}


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);
        input.value = ''; 
        exibirAmigos(); 
    } else {
        alert('Por favor, insira um nome.');
    }
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Por favor, adicione amigos.');
        return;
    }

 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);


    const amigoSorteado = amigos[indiceAleatorio];


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
