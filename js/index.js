var linkWhats = "https://api.whatsapp.com/send?phone=5563992480902&text=";

function msg(tema) {
    var textUppercase = tema.toUpperCase();
    return `Olá, poderia me ajudar? ${textUppercase}`
}

function enviarMsg(value) {
    var msgpadrao = msg(value);
    window.open(linkWhats + msgpadrao);

}
