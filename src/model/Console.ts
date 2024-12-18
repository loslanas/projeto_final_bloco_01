import { Jogos } from "./Jogos";


export class Console extends Jogos {

    private _plataforma: string;

    constructor(idJogo: number, nomeJogo: string, tipoJogo: number, precoJogo: number, plataforma: string) {
        super(idJogo, nomeJogo, tipoJogo, precoJogo);
        this._plataforma = plataforma;
    }



  
	public get plataforma(): string {
		return this._plataforma;
	}

  
	public set plataforma(plataforma: string) {
		this._plataforma = plataforma;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Génerico: ${this._plataforma}`);
        
    }
}














