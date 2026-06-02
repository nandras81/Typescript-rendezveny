import { Koncert } from "../classes/koncert";
import { Resztvevo } from "../classes/resztvevo";
import { RendezvenyService } from "../services/rendezvenyService";

let resztvevo1: Resztvevo = new Resztvevo("11111","Teszt Elek","06301111111");
let resztvevo2: Resztvevo = new Resztvevo("22222","Gipsz Jakab","0630222222");
let resztvevo3: Resztvevo = new Resztvevo("33333","Minta János","0630333333");

let koncert: Koncert = new Koncert("Ákos",1,"Ákos Koncert",new Date("2026-07-01"),"Budapest");

let rendezvenyService: RendezvenyService = new RendezvenyService();

koncert.addResztvevo(resztvevo1);
koncert.addResztvevo(resztvevo2);
koncert.addResztvevo(resztvevo3);
rendezvenyService.addRendezveny(koncert);


describe("RendezvenyService teszt", () => {
  it("resztvevokSzama 3 kell legyen", () => {
    expect(koncert.resztvevokSzama()).toBe(3);
  });
});