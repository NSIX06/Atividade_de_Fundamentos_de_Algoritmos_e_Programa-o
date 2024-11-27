
//* 1 - 
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }

    rl.close();
});

*/

//*2 -
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome: ", (nome) => {
    rl.question("Digite a idade: ", (idade) => {
        idade = parseInt(idade);

        if (isNaN(idade)) {
            console.log("Por favor, insira uma idade válida.");
        } else if (idade >= 16) {
            console.log(`${nome} está apto(a) para votar.`);
        } else {
            console.log(`${nome} não está apto(a) para votar.`);
        }

        rl.close();
    });
});
*/

//* 3 -
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de produtos: ", (quantidade) => {
    quantidade = parseInt(quantidade);

    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Por favor, insira uma quantidade válida.");
        rl.close();
    } else {
        let valorTotal = 0;
        let contador = 0;

        const lerPreco = () => {
            rl.question(`Digite o preço do produto ${contador + 1}: `, (preco) => {
                preco = parseFloat(preco);

                if (isNaN(preco) || preco <= 0) {
                    console.log("Por favor, insira um preço válido.");
                } else {
                    valorTotal += preco;
                    contador++;
                }

                if (contador < quantidade) {
                    lerPreco();
                } else {
                    console.log(`Valor total: ${valorTotal.toFixed(2)}`);
                    rl.close();
                }
            });
        };

        lerPreco();
    }
});
*/

//* 4 - 
/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/


//* 5 - 
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para ver a tabuada: ", (numero) => {
    numero = parseInt(numero);

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    rl.close();
});
*/

//* 6 - 

/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (input) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else if (numero % 5 === 0) {
        console.log("É múltiplo de 5.");
    } else {
        console.log("Não é múltiplo de 5.");
    }

    rl.close();
});
*/

//* 7 -

/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu peso (kg): ", (peso) => {
    rl.question("Digite sua altura (m): ", (altura) => {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            console.log("Por favor, insira valores válidos para peso e altura.");
        } else {
            const imc = peso / (altura * altura);
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);
        }

        rl.close();
    });
});
*/