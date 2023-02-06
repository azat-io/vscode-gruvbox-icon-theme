type IsObject<T> = T extends object
  ? T extends unknown[]
    ? false
    : true
  : false

let isObject = <T>(v: T): IsObject<T> =>
  (typeof v === 'object' && !Array.isArray(v)) as IsObject<T>

type Merge2<T, U> = IsObject<T> & IsObject<U> extends true
  ? {
      [K in keyof T]: K extends keyof U ? Merge2<T[K], U[K]> : T[K]
    } & U
  : U

let merge2 = <T, U>(a: T, b: U): Merge2<T, U> =>
  (isObject(a) && isObject(b)
    ? Object.assign(
        {},
        a,
        Object.fromEntries(
          Object.entries(b as ArrayLike<unknown>).map(([k, v]) => [
            k,
            merge2((a as { [key: string]: unknown })[k], v),
          ]),
        ),
      )
    : b) as Merge2<T, U>

export type Merge<T extends unknown[]> = {
  0: T[0]
  1: T extends [infer Car, ...infer Cdr] ? Merge2<Car, Merge<Cdr>> : T
}[T extends [unknown, unknown, ...unknown[]] ? 1 : 0]

export let merge = <T extends unknown[]>(...objs: T): Merge<T> => {
  if (objs.length < 2) return objs[0]
  return merge2(objs[0], merge(...objs.slice(1)))
}
