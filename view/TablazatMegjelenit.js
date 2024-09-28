import Sor from "./Sor.js";

export default class TablazatMegjelenit {
  #lista = [];
  constructor(lista, szuloElem) {
    console.log(lista);
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.empty()
    this.tablazatKiir();
    this.tBodyElem = $(".sorok");
    this.sorokLetrehoz();
  }

  sorokLetrehoz() {
    //itt fogjuk példányosítani a sor osztályunkat, ami egyetlen táblázat sort jelent az adatokkal
    this.#lista.forEach((elem, index) => {
      elem.id = index;
      new Sor(elem, this.tBodyElem);
    });
  }

  tablazatKiir() {
    this.szuloElem.append(`  <table class="table table-striped">
        <thead>
    <tr>
        <th>Szakdolgozat lépés</th>
        <th>Határidő</th>
        <th></th>
    </tr></thead>
    <tbody class = "sorok" ></tbody>
  </table>`);
  }
}
