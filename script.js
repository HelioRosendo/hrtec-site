// Abrir / fechar chat
function toggleChat() {
    const chat = document.getElementById("chat");

    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";

        // Só envia mensagem automática uma vez
        if (!chat.dataset.loaded) {
            iniciarChat();
            chat.dataset.loaded = true;
        }
    }
}

// Simulação de atendimento automático
function iniciarChat() {
    const chat = document.getElementById("chat");

    // Limpa conteúdo inicial
    chat.innerHTML = "";

    // Mensagem 1
    setTimeout(() => {
        adicionarMensagem("👋 Olá! Seja bem-vindo à HRTEC.");
    }, 500);

    // Mensagem 2
    setTimeout(() => {
        adicionarMensagem("💻 Trabalhamos com suporte técnico, redes e servidores.");
    }, 2000);

    // Mensagem 3
    setTimeout(() => {
        adicionarMensagem("📲 Clique no botão do WhatsApp para falar conosco agora!");
    }, 4000);
}

// Adiciona mensagem no chat
function adicionarMensagem(texto) {
    const chat = document.getElementById("chat");

    const msg = document.createElement("p");
    msg.style.margin = "5px 0";
    msg.innerText = texto;

    chat.appendChild(msg);
}

// Fechar chat clicando fora
document.addEventListener("click", function (event) {
    const chat = document.getElementById("chat");
    const botao = document.querySelector(".chat-btn");

    if (!chat.contains(event.target) && !botao.contains(event.target)) {
        chat.style.display = "none";
    }
});