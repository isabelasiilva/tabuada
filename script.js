function clicou() {
    res.innerHTML = "" //é o que vai limpar a tela para cada clicada no botão

    let val = window.document.getElementById('txtval')
    let r = window.document.getElementById('res')

    v = Number(val.value)  //pegou o numero e converteu

    if (val.value.length == 0) {
        r.innerHTML = 'Número inválido! <br> Digite um número acima'
    } else {
        let num = 0
        do {
            let mult = v * num

            r.innerHTML += `${v} x ${num} = ${mult} <br>` // no lugar de criar a tag mult poderia colocar só v*num dentro do colchetes que ia funcionar

            num++

        } while (num <= 10)
        r.innerHTML += `<br>Fim da tabuada do ${v}`
    }
}
