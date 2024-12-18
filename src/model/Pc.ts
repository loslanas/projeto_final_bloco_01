import { Jogos } from "./Jogos";

export class Pc extends Jogos {

    private _codigoSerial: string;

    constructor(idJogo: number, nomeJogo: string, tipoJogo: number, precoJogo: number, codigoSerial: string) {
        super(idJogo, nomeJogo, tipoJogo, precoJogo);
        this._codigoSerial = codigoSerial;
    }

   
	public get codigoSerial(): string {
		return this._codigoSerial;
	}

   
	public set codigoSerial(codigo: string) {
		this._codigoSerial = codigo;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Codigo Serial: ${this._codigoSerial}`);
        
    }


}
        
