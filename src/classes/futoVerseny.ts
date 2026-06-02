import rendezvenyTipus = require("../enums/rendezvenyTipus");
import rendezveny = require("./rendezveny");

export class FutoVerseny extends rendezveny.Rendezveny{

    constructor(public tav: string,id: number,  nev:string,  datum: Date,  helyszin: string){
        super(id,nev,datum,helyszin,rendezvenyTipus.RendezvenyTipus.FUTOVERSENY);
    }
}