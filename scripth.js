// Garante que o script só roda após o HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões de avanço
    const avancaBotoes = document.querySelectorAll('.btn-proximo');

    // Adiciona o evento de clique a cada botão
    avancaBotoes.forEach(button => {
        button.addEventListener('click', function() {
            
            // 1. Encontra o bloco de desafio ATUAL que está visível
            const atual = document.querySelector('.passo.ativo'); 
            
            // 2. Pega o ID COMPLETO do próximo passo (do atributo data-proximo)
            const proximoId = this.getAttribute('data-proximo'); 

            // 3. Esconde o passo atual
            if (atual) {
                 atual.classList.remove('ativo'); 
            }
            
            // 4. Encontra e mostra o próximo passo
            const proximoElemento = document.getElementById(proximoId);
            
            if (proximoElemento) {
                proximoElemento.classList.add('ativo'); 
            } else {
                // Se isso aparecer no Console, o erro é de ID no HTML
                console.error('ERRO CRÍTICO: O ID de destino NÃO FOI ENCONTRADO! ID procurado: ' + proximoId);
            }
        });
    });
});