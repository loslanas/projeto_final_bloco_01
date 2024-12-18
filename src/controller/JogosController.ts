import { Jogos } from "../model/Jogos";
import { JogosRepository } from "../repository/JogosRepository";


export class JogosController implements JogosRepository{
    
    
    
    //Controlar os números das Contas
    public idJogos: number = 0; // public por que precisará acessar do menu
    
    //Coleção Array que vai armazenar os Objetos Produto
    private listaJogos = new Array<Jogos>();
    


        listarTodosProdutos(): void {
            for(let jogo of this.listaJogos){
                jogo.visualizar();
            }
        }
    criarProduto(jogo: Jogos): void {
        this.listaJogos.push(jogo);
        console.log("O jogo foi cadastrado com sucesso!");
    }
    atualizar(jogo: Jogos): void {
        const buscaJogo = this.buscarNoArray(jogo.idJogo);

        if(buscaJogo !== null) {
            this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = jogo;
            console.log("O Jogo foi atualizado com sucesso!");
        }else
            console.log("\nJogo não encontrado!");
    }
    deletar(id: number): void {
        const buscaJogo = this.buscarNoArray(id);

        if(buscaJogo !== null) {
            //linha abaixo faz o apagamento do produto
            this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo), 1);
            console.log("O Jogo foi deletado com sucesso!");
        }else
            console.log("\nJogo não encontrado!");
    }
    


    //Aqui geramos o ID do produto
    public gerarId(): number{
        return ++this.idJogos; // gener;
    }

    //Aqui efetuamos a pesquisa do ID do produto
    procurarPorId(id: number): void {
        const buscaJogo = this.buscarNoArray(id);

        if(buscaJogo !== null)
            buscaJogo.visualizar()
        else
            console.error("\nJogo não encontrado!");
        
    }





    public buscarNoArray(id: number): Jogos | null {//Id representa o ID do produto
        for(let jogo of this.listaJogos){  //que eu quero pesquisar
            if(jogo.idJogo === id)
                return jogo;
        }

        return null;
    }
}