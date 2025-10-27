// Garante que o script só roda após o HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões que têm a classe 'btn-proximo'
    const avancaBotoes = document.querySelectorAll('.btn-proximo');

    // DEBUG: Verifica se os botões foram encontrados
    if (avancaBotoes.length === 0) {
        console.error("Nenhum botão com a classe '.btn-proximo' foi encontrado. O JavaScript pode estar sendo carregado antes do HTML.");
    }

    avancaBotoes.forEach(button => {
        button.addEventListener('click', function() {
            
            // 1. Encontra o bloco de desafio ATUAL que está visível
            const atual = document.querySelector('.passo.ativo'); 
            
            // 2. Pega o ID COMPLETO do próximo passo
            const proximoId = this.getAttribute('data-proximo'); 

            // 3. Esconde o passo atual
            if (atual) {
                 atual.classList.remove('ativo'); 
            } else {
                 console.error("Erro: Não foi encontrado o passo ATIVO atual.");
            }
            
            // 4. Encontra e mostra o próximo passo
            const proximoElemento = document.getElementById(proximoId);
            
            if (proximoElemento) {
                proximoElemento.classList.add('ativo'); 
            } else {
                // EXIBE O ERRO NO CONSOLE se o ID do botão estiver errado
                console.error('Erro de Navegação Crítico: O ID de destino NÃO EXISTE! ID procurado: ' + proximoId);
            }
        });
    });
});