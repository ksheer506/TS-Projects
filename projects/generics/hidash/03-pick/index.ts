// Write your pick function here! ✨
// You'll need to export it so the tests can run it.
export const pick = <T extends Record<string, unknown>, S extends keyof T>(
	container: T,
	key: S
) => container[key];

pick({ a: 1, b: "2" }, "a");
/* 
<T extends Record<string, unknown>>(container: T, key: keyof T) => {}이면 
return 타입이 string | number

<T extends Record<string, unknown>, S extends keyof T>(container: T, key: S) => {}이면
return 타입이 number
*/
