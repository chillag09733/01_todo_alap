import { TODOLIST2 } from "./adatok.js";

export default class TablazatModell {
  #lista = [];
  constructor() {
    this.#lista = TODOLIST2;
  }

  getList() {
    //controllerből getterrel érhetem el a listát
    return this.#lista;
  }

  torles(index) {
    // a listából az adott indexű helyről töröl egy elemet
    this.#lista.splice(index, 1);
  }
}
