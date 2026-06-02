import { LogMetodusHivas } from "../decorators/logMetodusHivas";
import rendezvenyTipus = require("../enums/rendezvenyTipus");
import type rendezvenyIface = require("../interfaces/rendezvenyIface");
import { Resztvevo } from "./resztvevo";

export class Rendezveny implements rendezvenyIface.RendezvenyIface{

    private resztvevokLista: Resztvevo[];

    constructor(public id: number, public nev:string, public datum: Date, public helyszin: string, public rendezvenyTipus: rendezvenyTipus.RendezvenyTipus){
        this.resztvevokLista = new Array();
    }

    @LogMetodusHivas
    public addResztvevo(resztvevo: Resztvevo): void{
        this.resztvevokLista.push(resztvevo);
    }

    public removeResztvevo(resztvevoId: string): void{
        let index = this.resztvevokLista.findIndex(resztvevo => resztvevo.id == resztvevoId);
        this.resztvevokLista.slice(index,1);
    }

    public listResztvevo(): Resztvevo[]{
        return this.resztvevokLista;
    }
}

