import { Jogos } from "../model/Jogos";


export interface JogosRepository{
 //métodos de CRUD (create, read, update, delete)

 procurarPorId(idJogo: number): void;
 listarTodosProdutos(): void;
 criarProduto(jogo: Jogos): void; //obj da classe conta
 atualizar(jogo: Jogos): void;
 deletar(idJogo: number): void;
}