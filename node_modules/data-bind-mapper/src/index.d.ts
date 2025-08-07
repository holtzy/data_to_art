type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;

export declare class DataBindMapper<Datum = object, Obj = object> {
  constructor();

  getObj(d: Datum): Obj | undefined;
  getData(o: Obj): Datum | undefined;
  entries(): [Datum, Obj][];

  id(p: string | ((d: Datum) => any)): DataBindMapper<Datum, Obj>;

  onCreateObj(fn: (d: Datum) => Obj): DataBindMapper<Datum, Obj>;
  onUpdateObj(fn: (obj: Obj, d: Datum) => void): DataBindMapper<Datum, Obj>;
  onRemoveObj(fn: (obj: Obj, dId: any) => void): DataBindMapper<Datum, Obj>;

  digest(data: Datum[]): DataBindMapper<Datum, Obj>;

  clear(): DataBindMapper<Datum, Obj>;
}

export default DataBindMapper;
