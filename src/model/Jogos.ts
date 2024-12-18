export abstract class Jogos{

    //Atributos de Produto

    private _idJogo: number;
    private _nomeJogo: string;
    private _tipoJogo: number;
    private _precoJogo: number;



	constructor(idJogo: number, nomeJogo: string, tipoJogo: number, precoJogo: number) {
		this._idJogo = idJogo;
		this._nomeJogo = nomeJogo;
		this._tipoJogo = tipoJogo;
		this._precoJogo = precoJogo;
	}



	public get idJogo(): number {
		return this._idJogo;
	}

  
	public get nomeJogo(): string {
		return this._nomeJogo;
	}

   
	public get tipoJogo(): number {
		return this._tipoJogo;
	}

 
	public get precoJogo(): number {
		return this._precoJogo;
	}

   
	public set idJogo(value: number) {
		this._idJogo = value;
	}

    
	public set nomeJogo(value: string) {
		this._nomeJogo = value;
	}

   
	public set tipoJogo(value: number) {
		this._tipoJogo = value;
	}

   
	public set precoJogo(value: number) {
		this._precoJogo = value;
	}


    public visualizar(){ 

        console.log("*********************************************************************")
        console.log("Dados do Jogo");
        console.log("*********************************************************************")
        console.log(`Número do ID: ${this._idJogo}`)
        console.log(`Nome do Produto: ${this._nomeJogo}`)
        console.log(`Tipo do Produto: ${this._tipoJogo}`)
        console.log(`Preço do Produto: ${this._precoJogo}`)
    

        }






}