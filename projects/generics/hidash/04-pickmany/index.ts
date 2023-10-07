// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.
export const pickMany = <T extends Record<string, unknown>, S extends keyof T>(
	container: T,
	keys: S[]
) => keys.map((k) => container[k]);

pickMany({ a: 1, b: false }, ["b"]);
/* 
<T extends Record<string, unknown>, S extends ReadonlyArray<keyof T>>(
  container: T,
  keys: S
) => {}이면 return 타입이 (number | string)[]

<T extends Record<string, unknown>, S extends keyof T>(
  container: T,
  keys: S[]
) => {}이면 return 타입이 string[]
*/
