import TablazatModell from "../modell/TablazatModell.js";
import TablazatMegjelenit from "../view/TablazatMegjelenit.js";

export default class TablazatController {
  constructor() {
    //példányosítja a viewt
    //példányosítja a modellt
    this.tablazatModell = new TablazatModell()
    const lista = this.tablazatModell.getList()
    this.tablazatMegjelenit = new TablazatMegjelenit(lista, $(".tarolo"))
    this.torlesEsemeny()
  }

  torlesEsemeny(){
    $(window).on("torles", (event) => {
      console.log(event.detail)
      let melyikreKattintottunk = event.detail.id
      //át kell adni a modellnek az indexet
      //a modellnek törölnie kell a listéból az elemet
      //újra le kell kérdezni az adatokat
      //meg kell jeleníteni az adatokat
      this.tablazatModell.torles(melyikreKattintottunk)
      const lista = this.tablazatModell.getList()
      this.tablazatMegjelenit = new TablazatMegjelenit(lista, $(".tarolo"))
    })
  }
}
