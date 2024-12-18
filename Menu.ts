import { Cosmetico } from "./model/Cosmetico";
import { Medicamento } from "./model/Medicamento";
import { ProdutoController } from "./controller/ProdutoController";

import readlinesync = require("readline-sync");

export function main(){

    let opcao, idJogo, tipoJogo, precoJogo : number;
    let nomeJogo, plataforma, codigoSerial: string;
    const tipo = ["Console", "PC"];

    //Criano um objeto da classe contacontroller
    //const produto = new ProdutoController();



while(true){

    console.log("****************************************************");
    console.log("                                                    ");
    console.log("              Gamer Point                           ");
    console.log("                                                    ");
    console.log("****************************************************");
    console.log("                                                    ");
    console.log("            1 - Criar cadastro de Jogo              ");
    console.log("            2 - Listar todos os Jogos               ");
    console.log("            3 - Buscar Jogo por ID                  ");
    console.log("            4 - Atualizar cadastro de Jogo          ");
    console.log("            5 - Apagar Jogo                         ");
    console.log("            0 - Sair                                ");
    console.log("                                                    ");
    console.log("****************************************************");
    console.log("                                                    ");
    console.log("****************************************************");
    
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 0) {
        console.log("\nGamer Point - Entretenimento no ponto certo!");
        sobre();
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log("\n\nCriar cadastro de Jogo\n\n");

            console.log("\nDigite o nome do Jogo: ");
            nomeJogo = readlinesync.question('');

            console.log("\nEscolha o tipo do Jogo: ");
            tipoJogo = readlinesync.keyInSelect(tipo, "", {cancel: false}) + 1;

            console.log("\nDigite o preço do Jogo: ");
            precoJogo = readlinesync.questionFloat('');

            switch(tipoJogo){
                case 1:
                    console.log("\nJOGO DE CONSOLE ");
                    console.log("\nDigite a Plaforma desse Jogo: ");
                    plataforma = readlinesync.question('');
                    
                    //produto.criarProduto(new Medicamento(produto.gerarId(),  nomeJogo,tipoJogo, precoJogo, plataforma));
                break;

                case 2:
                    console.log("\nJOGO DE PC ");
                    console.log("\nDigite o código serial do Jogo: ");
                    codigoSerial = readlinesync.question('');
                    //produto.criarProduto(new Cosmetico(produto.gerarId(), nomeJogo, tipoJogo, precoJogo, codigoSerial));
                break;
            }

            keyPress();
            break;
        case 2:
            console.log("\n\nListar todos os Jogos\n\n");
            //produto.listarTodosProdutos();
            keyPress();
            break;
        case 3:
            console.log("\n\nBuscar Jogo por ID\n\n");
            console.log("Digite o número do ID do Jogo: ");
            idJogo = readlinesync.questionInt('');
            //produto.procurarPorId(idJogo);
            keyPress();
            break;
        case 4:
            console.log("\n\nAtualizar o Produto\n\n");

            console.log("Digite o número do ID do Jogo: ");
            idJogo = readlinesync.questionInt('');

            const jogoExistente = //produto.buscarNoArray(idJogo);
            if(jogoExistente){

                console.log("\nDigite o novo nome do Jogo: ");
                nomeJogo = readlinesync.question('');

                console.log("\nDigite o novo preço do Jogo: ");
                precoJogo = readlinesync.questionFloat('');
                
                if (jogoExistente.tipoJogo === 1) {
                    console.log("Digite a nova plataforma do console: ");
                    const plataforma = readlinesync.question("");
                    //produto.atualizar(new Medicamento(idJogo, nomeJogo,jogoExistente.tipoJogo, precoJogo, plataforma));
                } else if (jogoExistente.tipoJogo === 2) {
                    console.log("Digite o novo Código Serial do Jogo: ");
                     codigoSerial = readlinesync.question("");
                    //produto.atualizar(new Cosmetico(idJogo, nomeJogo,jogoExistente.tipoJogo, precoJogo, codigoSerial));
                }

               
                }
            else {
                console.log("Produto não encontrado!");
            }
            
            keyPress();
            break;

    
        case 5:
            console.log("\n\nApagar um Jogo\n\n");

            console.log("Digite o id do Jogo: ");
            idJogo = readlinesync.questionInt('');

            //produto.deletar(idJogo);

            keyPress();
            break;
        default:
            console.log("\nOpção Inválida!\n");
            keyPress();
            break;
    }
}

}


export function sobre(): void {
console.log("\n****************************************************");
console.log("Projeto Desenvolvido por: ");
console.log("Fernando Lana - fernandoo@genstudents.org");
console.log("https://github.com/loslanas");
console.log("****************************************************");


}
function keyPress(): void {
console.log("\nPressione enter para continuar...");
readlinesync.prompt();
}
main();