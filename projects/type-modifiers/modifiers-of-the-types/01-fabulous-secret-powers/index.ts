import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
interface Character {
	name: string;
	powers: string[];
	side: "evil" | "good";
}

export const announceCharacter = (char: string) => {
	const parsed = JSON.parse(char) as Character;

	console.log(`I am ${parsed.name}.`);
	console.log(`My powers are: ${parsed.powers.join(", ")}.`);
	console.log(`I am ${parsed.side}.`);

	return parsed;
};

announceCharacter(`{
  "name": "Beast Man",
  "powers": ["animal control", "strength"],
  "side": "good"
}`);
