// --- IMPORTANTE ---
// Altere as datas abaixo para as datas corretas do seu relacionamento!
// Formato: Ano, Mês (janeiro=0, fevereiro=1...), Dia, Hora, Minuto, Segundo
const datingStartDate = new Date(2023, 9, 8, 15, 30, 0); // Exemplo: 15 de Janeiro de 2022, às 20:00
const firstKissDate = new Date(2023, 7, 26, 23, 30, 0);   // Exemplo: 16 de Janeiro de 2022, às 22:30
const engagementDate = new Date(2024, 9, 8, 8, 0, 0);  // Exemplo: 12 de Junho de 2024, às 18:00

/**
 * Atualiza um elemento do contador com o tempo decorrido desde uma data de início.
 * @param {string} elementId - O ID do elemento HTML a ser atualizado.
 * @param {Date} startDate - O objeto Date que representa o início da contagem.
 */
function updateCounter(elementId, startDate) {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        const counterElement = document.getElementById(elementId);
        if(counterElement) {
            counterElement.innerHTML = "O nosso futuro aguarda!";
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const counterElement = document.getElementById(elementId);
    if(counterElement) {
        // ATUALIZADO: O texto é dividido em dois 'spans' para controlar a quebra de linha.
        counterElement.innerHTML = `
            <span class="whitespace-nowrap">
                <span class="font-semibold text-rose-800">${days}</span> dias, 
                <span class="font-semibold text-rose-800">${hours}</span> horas,
            </span>
            <span class="whitespace-nowrap">
                <span class="font-semibold text-rose-800">${minutes}</span> minutos e 
                <span class="font-semibold text-rose-800">${seconds}</span> segundos
            </span>
        `;
    }
}

/**
 * Inicia a atualização de todos os contadores.
 */
function startCounters() {
    try {
        updateCounter('dating-counter', datingStartDate);
        updateCounter('kiss-counter', firstKissDate);
        updateCounter('engagement-counter', engagementDate);
    } catch (error) {
        console.error("Erro ao atualizar os contadores:", error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    startCounters();
    setInterval(startCounters, 1000);
    
    // LÓGICA DA MÚSICA ATUALIZADA
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');

    musicToggle.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicToggle.classList.add('playing'); // Adiciona classe para feedback visual
        } else {
            music.pause();
            musicToggle.classList.remove('playing'); // Remove a classe
        }
    });
});
