import accessorFn from 'accessor-fn';

export default class DataBindMapper {
  constructor() {}

  getObj(d) { return this.#dataMap.get(this.#id(d)); }
  getData(o) { return this.#objMap.get(o); }
  entries() { return [...this.#objMap.entries()].map(([o, d]) => [d, o]); }

  id(p) {
    this.#id = accessorFn(p);
    return this;
  }
  onCreateObj(fn) {
    this.#createObj = fn;
    return this;
  }
  onUpdateObj(fn) {
    this.#updateObj = fn;
    return this;
  }
  onRemoveObj(fn) {
    this.#removeObj = fn;
    return this;
  }

  digest(data) {
    data.filter(d => !this.#dataMap.has(this.#id(d))).forEach(d => {
      const obj = this.#createObj(d);
      this.#dataMap.set(this.#id(d), obj);
      this.#objMap.set(obj, d);
    });

    const dataIdsMap = new Map(data.map(d => [this.#id(d), d]));
    this.#dataMap.forEach((o, dId) => {
      if (!dataIdsMap.has(dId)) {
        this.#removeObj(o, dId);
        this.#dataMap.delete(dId);
        this.#objMap.delete(o);
      } else {
        this.#updateObj(o, dataIdsMap.get(dId));
      }
    });

    return this;
  }

  clear() {
    this.digest([]);
    return this;
  }

  #dataMap = new Map();
  #objMap = new Map();
  #id = d => d;
  #createObj = () => ({});
  #updateObj = () => {};
  #removeObj = () => {};
}
