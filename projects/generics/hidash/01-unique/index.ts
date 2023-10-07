// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export const unique = <T>(...items: T[][]) => {
	return [...new Set(items.flatMap((e) => e))];
};
