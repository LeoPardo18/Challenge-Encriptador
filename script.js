
const textArea = document.querySelector(".inputText");
const mensaje = document.querySelector(".outputText");

function btnEncriptar(){
    const textoDesencriptado = encriptar(textArea.value);
    mensaje.innerHTML = textoDesencriptado;
    if (textArea.value.trim() === "" && window.innerWidth >= 1440) {
        document.getElementById("img-result").style.display = "inline";
        document.getElementById("title-result").style.display = "inline";
        document.getElementById("btnCopiar").style.display = "none";
        return;
    }
    else {
        document.getElementById("btnCopiar").style.display = "inline";
        document.getElementById("img-result").style.display = "none";
        document.getElementById("title-result").style.display = "none";
    }

    if(textArea.value.trim() === "" && window.innerWidth <= 1440){
        document.getElementById("title-result").style.display = "inline";
        document.getElementById("btnCopiar").style.display = "none";
    }
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.innerHTML = textoEncriptado;
    if (textArea.value.trim() === "" && window.innerWidth >= 1440) {
        document.getElementById("img-result").style.display = "inline";
        document.getElementById("title-result").style.display = "inline";
        document.getElementById("btnCopiar").style.display = "none";
        return;
    }
    else {
        document.getElementById("btnCopiar").style.display = "inline";
        document.getElementById("img-result").style.display = "none";
        document.getElementById("title-result").style.display = "none";
    }

    if(textArea.value.trim() === "" && window.innerWidth <= 1440){
        document.getElementById("title-result").style.display = "inline";
        document.getElementById("btnCopiar").style.display = "none";
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    
    let texto = document.getElementById("p-result");

    let range = document.createRange();
    range.selectNodeContents(texto);
    

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
 
    try {
        document.execCommand("copy");
        alert("Texto copiado: " + texto.innerText);
    } catch (err) {
        console.error("Error al copiar: ", err);
    }
    

    selection.removeAllRanges();
}