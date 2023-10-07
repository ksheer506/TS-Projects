// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export const zip = <T, S>(a: T[], b: S[]) => {
	const longestArr = a.length < b.length ? b : a;
	const initialValue: (T | S)[] = [];

	return longestArr.reduce((p, _, i) => {
		if (a[i] !== undefined) {
			p.push(a[i]);
		}
		if (b[i] !== undefined) {
			p.push(b[i]);
		}
		return p;
	}, initialValue);
};
