import FutoVerseny = require("../classes/futoVerseny");
import futoVerseny = require("../classes/futoVerseny");
import Rendezveny = require("../classes/rendezveny");
import rendezveny = require("../classes/rendezveny");
import rendezvenyTipus = require("../enums/rendezvenyTipus");

export class RendezvenyService{

    private rendezvenyLista: rendezveny.Rendezveny[];

    constructor(){
        this.rendezvenyLista = [];
    }

    public addRendezveny(rendezveny: rendezveny.Rendezveny){
        this.rendezvenyLista.push(rendezveny);
    }

    public removeRendezveny(rendezvenyId: number){
        let index = this.rendezvenyLista.findIndex(rendezveny => rendezveny.id == rendezvenyId);
        this.rendezvenyLista.slice(index,1);
    }

    public listOsszesRendezveny(): rendezveny.Rendezveny[]{
        return this.rendezvenyLista;
    }

    public listFutoverseny():rendezveny.Rendezveny[]{
        return this.rendezvenyLista.filter(
            (rendezveny): rendezveny is futoVerseny.FutoVerseny => rendezveny instanceof futoVerseny.FutoVerseny);
    }

    public listRendezveny(rendezvenyTipus:  rendezvenyTipus.RendezvenyTipus):rendezveny.Rendezveny[]{
        return this.rendezvenyLista.filter(
            (rendezveny) => rendezveny.rendezvenyTipus===rendezvenyTipus);
    }
}
