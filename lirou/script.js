function calcular() {
    let embalagem = 0.18
    let el_quantidade = document.getElementById('quantidade')
    let el_valor = document.getElementById('valor')
    let el_custo = document.getElementById('resultado')
    let el_gotas_usadas = document.getElementById('gotas_usadas')
    let aroma_stick = []

    if (el_quantidade.value.length == 0 || el_valor.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let quantidade = Number(el_quantidade.value)
        let valor = Number(el_valor.value)
        let gotas_usadas = Number(el_gotas_usadas.value)
        el_quantidade.innerHTML = '' // Limpa a tag select 
        el_valor.innerHtml = ''
        el_gotas_usadas.innerHTML = ''

        let gotas = quantidade * 20
        let custo = (valor / gotas)
        let custo_oleo = (custo * gotas_usadas) + embalagem

        aroma_stick.push(Number(custo_oleo.value))

        el_custo.innerHTML = `<p>O seu óleo custa €${custo} por gota.</p>`
        el_custo.innerHTML += `<p>O custo total deste óleo, incluindo embalagem €${embalagem}, para fazer o Aroma Stick e d'ale foi de €${custo_oleo.toFixed(2)}.</p> `

    }   
}

