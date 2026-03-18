function toggleChat(){
    var chat = document.getElementById("chat");

    if(chat.style.display === "block"){
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }
}