import rendezvenyTipus = require("../enums/rendezvenyTipus");
import rendezveny = require("./rendezveny");

export class Koncert extends rendezveny.Rendezveny{

    constructor(public eloado:string,id: number,nev:string, datum: Date, helyszin: string){
        super(id,nev,datum,helyszin,rendezvenyTipus.RendezvenyTipus.KONCERT);
    }
}