// Seleciona todos os botões que têm a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona um 'ouvinte de evento' de clique para cada botão
avanca.forEach(button => {
    button.addEventListener('click', function(){
        
        // 1. Encontra o bloco de desafio atual que está visível (com a classe 'ativo')
        const atual = document.querySelector('.passo.ativo'); 
        
        // 2. Pega o ID COMPLETO do próximo passo (ex: 'fase2-molho-vapor')
        const proximoId = this.getAttribute('data-proximo'); 

        // 3. Esconde o passo atual, removendo a classe 'ativo'
        if (atual) {
             atual.classList.remove('ativo'); 
        }
        
        // 4. Mostra o próximo passo, encontrando o elemento pelo ID e adicionando 'ativo'
        const proximoElemento = document.getElementById(proximoId);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo'); 
        } else {
            // Este log de erro ajuda a identificar se há um erro de ID no HTML
            console.error('Erro: ID do próximo passo não encontrado: ' + proximoId);
        }
    })
})