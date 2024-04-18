export function mega(quantidade = 6, numeros = []) {
    // console.log(numeros)
    let qtde = +quantidade
    if(qtde < 6 || qtde > 60) { // se a quantidade for menor que 6 OU maior que 60
        throw "Quantidade inválida!"
    }
    
    if(numeros.length === qtde) { // se a quantidade de numeros for igual ao numero solicitado
        return numeros.sort((n1, n2) => n1 - n2) // sortear os numeros em ordem crescente
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1 // gere um numero entre 1 a 60 o +1 eh pq comeca em 0
    if(!numeros.includes(numeroAleatorio)) { // se o novo numero gerado nao estiver na lista 
        return mega(qtde, [...numeros, numeroAleatorio]) // retorna a lista atual, + o numero novo
    } else { // caso contrario
        return mega(qtde, numeros) // retorna a mesma lista 
    }
}

// console.log(mega(6))