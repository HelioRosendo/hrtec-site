// =============================
// MENU MUDA COR AO ROLAR
// =============================

window.addEventListener("scroll", function(){

const menu = document.querySelector(".menu");

if(window.scrollY > 50){
menu.style.background = "#000";
}else{
menu.style.background = "#020617";
}

});


// =============================
// ANIMAÇÃO DOS CARDS DE SERVIÇOS
// =============================

const cards = document.querySelectorAll(".card");

function mostrarCards(){

const trigger = window.innerHeight * 0.85;

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < trigger){
card.classList.add("mostrar");
}

});

}

window.addEventListener("scroll", mostrarCards);

mostrarCards();


// =============================
// CHAT SUPORTE
// =============================

function abrirChat(){
    document.getElementById("chatBox").style.display = "flex";
}

function fecharChat(){
    document.getElementById("chatBox").style.display = "none";
}
// =============================
// ENVIAR MENSAGEM
// =============================

function enviarMensagem(){
    const input = document.getElementById("chatInput");
    const mensagem = input.value;
    
    if(mensagem === "") return;
    
    const chat = document.getElementById("chatMessages");
    
    // mensagem do usuario
    const msgUser = document.createElement("div");
    msgUser.classList.add("msg","user");
    msg.innerText = mensagem;
    chat.appendChild(msgUser);
    
    // resposta automática
    const msgBot = document.createElement("div");
    msgBot.classList.add("msg", "bot");

    msgBot.innerText = "Obrigado pelo contato! Em breve nossa equipe responderá. Clique abaixo para falar no WhatsApp.";

    chat.appendChild(msgBot);

    // botão WhatsApp
    const link = document.createElement("a");
    link.href = "https://wa.we/5561999999999?text=" + encodeURIComponent(mensagem);
    link.target = "_blank";
    link.innerText = "falar no WhatsApp";
    link.style.display = "block";
    link.style.marginTop = "5px";
    link.style.color = "green";

    chat.appendChild(link);

    input.value = "";
    chat.scroll = chat.scrollHeight;

}

// =============================
// IA DE RESPOSTA
// =============================

function respostaIA(pergunta){

pergunta = pergunta.toLowerCase();

if(pergunta.includes("formatação") || pergunta.includes("formatar")){
return "Realizamos formatação completa com backup e instalação de drivers.";
}

if(pergunta.includes("rede") || pergunta.includes("internet")){
return "Trabalhamos com configuração de redes, roteadores e cabeamento estruturado.";
}

if(pergunta.includes("servidor")){
return "Configuramos servidores Windows Server, Active Directory e infraestrutura corporativa.";
}

if(pergunta.includes("câmera") || pergunta.includes("cftv")){
return "Instalamos sistemas de CFTV com acesso remoto pelo celular.";
}

if(pergunta.includes("orçamento")){
return "Para orçamento rápido, informe o equipamento ou problema.";
}

if(pergunta.includes("manutenção")){
return "Fazemos manutenção preventiva e corretiva em computadores e redes.";
}

return "Obrigado pela mensagem. Nosso suporte técnico responderá em breve.";

}


// =============================
// RESPOSTA DO BOT
// =============================

function respostaBot(pergunta){

const chat = document.getElementById("chatMessages");

const bot = document.createElement("div");
bot.className = "bot-message";

bot.innerText = respostaIA(pergunta);

chat.appendChild(bot);

chat.scrollTop = chat.scrollHeight;

}

// =============================
// CONTADORES ANIMADOS
// =============================

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

const atualizarContador = () => {

const target = +contador.getAttribute("data-target");
const atual = +contador.innerText;

const incremento = target / 100;

if(atual < target){

contador.innerText = Math.ceil(atual + incremento);

setTimeout(atualizarContador,20);

}else{

contador.innerText = target;

}

};

atualizarContador();

});