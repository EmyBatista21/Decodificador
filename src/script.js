const textoinserido = document.querySelector('.textarea_texto');
const resultado = document.querySelector('.textarea_resultado');

resultado.readOnly = true;


textoinserido.addEventListener('input', function() {
    const texto = textoinserido.value;
    const regex = /[^\x00-\x7F]/;
  
  
    
    if (regex.test(texto)) {
        alert('A caixa de texto não pode conter acentos ou caracteres especiais!');
        textoinserido.value = texto.replace(regex, '');
    }
});

function btnCriptografar() {
    
    const txCriptografado = criptografar(textoinserido.value);
    resultado.value = txCriptografado;
    textoinserido.value = '';

    document.querySelector('.inforesultado').style.display = 'none';
    document.querySelector('.textarea_resultado').style.backgroundImage = 'none';
}

function criptografar(stringCripitografar) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringCripitografar = stringCripitografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCripitografar.includes(matrizCodigo[i][0])) {
            stringCripitografar = stringCripitografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
return stringCripitografar;
}

function btnDescriptografar() {
    const txDescriptografado = descriptografar(textoinserido.value);
    resultado.value = txDescriptografado;
    textoinserido.value = '';

    document.querySelector('.inforesultado').style.display = 'none';
    document.querySelector('.textarea_resultado').style.backgroundImage = 'none';
}

function descriptografar(stringDescripitografar) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDescripitografar = stringDescripitografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescripitografar.includes(matrizCodigo[i][1])) {
            stringDescripitografar = stringDescripitografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
return stringDescripitografar;
}

function btnCopiar() {

    resultado.select();
    resultado.setSelectionRange(0, 99999);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();

    alert('Texto copiado!');
}

function btnLimpar() {
    
    resultado.value = '';

    document.querySelector('.inforesultado').style.display = 'block';
    document.querySelector('.textarea_resultado').style.backgroundImage = 'url(./imagens/lupaboneco.png)';
}
