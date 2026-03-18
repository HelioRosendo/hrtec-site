// MENU SCROLL
window.addEventListener("scroll", () => {
document.querySelector(".menu").classList.toggle("rolar", window.scrollY > 50);
});

// ANIMAÇÃO CARDS
const cards = document.querySelectorAll(".card");

function mostrarCards(){
const trigger = window.innerHeight * 0.85;

cards.forEach(card => {
const top = card.getBoundingClientRect().top;
if(top < trigger){
card.classList.add("mostrar");
}
});
}

window.addEventListener("scroll", mostrarCards);
mostrarCards();

// CONTADOR
const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {
const update = () => {
const target = +contador.getAttribute("data-target");
const count = +contador.innerText;

const increment = target / 100;

if(count < target){
contador.innerText = Math.ceil(count + increment);
setTimeout(update, 20);
}else{
contador.innerText = target;
}
};

update();
});

// CHAT
function abrirChat(){
document.getElementById("chatBox").style.display = "flex";
}

function fecharChat(){
document.getElementById("chatBox").style.display = "none";
}

function enviarMensagem(){
const input = document.getElementById("chatInput");
const mensagem = input.value;

if(mensagem === "") return;

const chat = document.getElementById("chatMensagens");

const user = document.createElement("div");
user.classList.add("msg","user");
user.innerText = mensagem;
chat.appendChild(user);

const bot = document.createElement("div");
bot.classList.add("msg","bot");
bot.innerText = "bot.innerText = "Olá! 👋\n\nSomos da HRTEC.\n\nInforme seu problema que vamos te ajudar rapidamente.";
chat.appendChild(bot);

const link = document.createElement("a");
link.href = "https://wa.me/5561999999999?text=" + encodeURIComponent(mensagem);
link.target = "_blank";
link.innerText = "Abrir WhatsApp";
link.style.color = "#22c55e";

chat.appendChild(link);

input.value = "";
chat.scrollTop = chat.scrollHeight;
}