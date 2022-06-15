const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    inputTexto.value="";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [ ["e", "enter"],["i", "imes"],["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;

}

function btnDesencriptar() {
    const textoDesencriptada = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptada
    mensagem.style.backgroundImage="none";
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"],["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada;

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringDesencriptada;
}

//copiar.addEventListener('click', copiarMensagem);

function copiarMensagem(e) { 
	let textoCopiado = document.getElementById("msg");
    textoCopiado.select()
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("Copy");
    alert("Texto Copiado");
    mensagem.value = "";
}


