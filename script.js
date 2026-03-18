function toggleChat(){
    const chat = document.getElementById("chat");

    if(chat.style.display === "flex"){
        chat.style.display = "none";
    } else {
        chat.style.display = "flex";

        if(!chat.dataset.loaded){
            iniciarChat();
            chat.dataset.loaded = true;
        }
    }
}

function digitarMensagem(texto){
    const mensagens = document.getElementById("chatMessages");

    const msg = document.createElement("div");
    msg.className = "bot";
    msg.innerText = "Digitando...";
    mensagens.appendChild(msg);

    setTimeout(() => {
        msg.innerText = texto;
    }, 1000);
}

function iniciarChat(){
    setTimeout(() => {
        digitarMensagem("Olá! Bem-vindo à HRTEC 👋");
    }, 500);

    setTimeout(() => {
        digitarMensagem("Como podemos te ajudar?");
    }, 2000);

    setTimeout(() => {
        mostrarOpcoes([
            "Suporte Técnico",
            "Redes",
            "Segurança",
            "WhatsApp"
        ]);
    }, 3000);
}

function mostrarOpcoes(opcoes){
    const container = document.getElementById("chatOptions");
    container.innerHTML = "";

    opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.innerText = op;
        btn.onclick = () => responder(op);
        container.appendChild(btn);
    });
}

function responder(opcao){

    const mensagens = document.getElementById("chatMessages");

    const user = document.createElement("div");
    user.className = "bot";
    user.style.background = "#22c55e";
    user.innerText = opcao;

    mensagens.appendChild(user);

    document.getElementById("chatOptions").innerHTML = "";

    setTimeout(() => {

        if(opcao === "Suporte Técnico"){
            digitarMensagem("Fazemos manutenção e suporte completo.");
        }
        else if(opcao === "Redes"){
            digitarMensagem("Configuramos redes e Wi-Fi.");
        }
        else if(opcao === "Segurança"){
            digitarMensagem("Protegemos sua empresa com firewall.");
        }
        else if(opcao === "WhatsApp"){
            window.open("https://wa.me/5561999999999", "_blank");
            return;
        }

        setTimeout(() => {
            mostrarOpcoes(["Ir para WhatsApp"]);
        }, 1500);

    }, 1000);
}