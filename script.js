function criptografarTexto() {
    const textoEntrada = document.getElementById("textoEntrada").value
    const chaveUsuario = document.getElementById("chaveEntrada").value
    const chaveCorreta = "AcabaPeloAmorDeDeus" 

    if (!textoEntrada || !chaveUsuario) {
        document.getElementById("resultado").innerText = "Por favor, insira o texto e a chave"
        return
    }
    
    if (chaveUsuario !== chaveCorreta) {
        document.getElementById("resultado").innerText = "Chave incorreta"
        return
    }

    const textoCriptografado = CryptoJS.AES.encrypt(textoEntrada, chaveUsuario).toString()
    document.getElementById("resultado").innerText = `Texto criptografado: ${textoCriptografado}`
    console.log(textoCriptografado)
}

function descriptografarTexto() {
    const textoCriptografado = document.getElementById("textoEntrada").value
    const chaveUsuario = document.getElementById("chaveEntrada").value
    const chaveCorreta = "AcabaPeloAmorDeDeus"  

    if (!textoCriptografado || !chaveUsuario) {
        document.getElementById("resultado").innerText = "Por favor, insira o texto criptografado e a chave"
        return
    }
    
    if (chaveUsuario !== chaveCorreta) {
        document.getElementById("resultado").innerText = "Chave incorreta"
        return
    }

    try {
        const bytes = CryptoJS.AES.decrypt(textoCriptografado, chaveUsuario)
        const textoOriginal = bytes.toString(CryptoJS.enc.Utf8)

        if (!textoOriginal) {
            document.getElementById("resultado").innerText = "Falha ao descriptografar."
        } else {
            document.getElementById("resultado").innerText = `Texto original: ${textoOriginal}`
        }
    } 
    catch (error) {
        document.getElementById("resultado").innerText = "Erro ao descriptografar. Verifique o formato do texto ou a chave."
    }
}
