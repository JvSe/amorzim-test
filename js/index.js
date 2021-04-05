var linkWhats = "https://api.whatsapp.com/send?phone=556392480908&text=";

function msg(tema) {
    var textUppercase = tema.toUpperCase();
    return `Olá, poderia me ajudar? ${textUppercase}`
}

function enviarMsg(value) {
    var msgpadrao = msg(value);
    window.open(linkWhats + msgpadrao);

}
