export type GameChoices = "rock" | "paper" | "scissors" | "spock" | "lizard";
export const GameItem : GameChoices[] = ["rock", "paper" , "scissors" , "spock" , "lizard"];

export const GameRules: { [key in GameChoices]: GameChoices[] } = {
  paper: ["rock", "spock"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
  rock: ["lizard", "scissors"],
  scissors: ["paper", "lizard"],
};

/** Return 1 if the player wins, -1 if computer wins and 0 if draw */
export type GameResult = -1 | 0 | 1;

export function spare(human: GameChoices, computer: GameChoices): GameResult {
  if (human === computer) return 0;
  return GameRules[human].includes(computer) ? 1 : -1;
}

export function computerChoice(): GameChoices{
  const rand = crypto.getRandomValues(new Uint8Array(1))[0]
  const index = Math.round(rand * 4 / 255)
  return GameItem[index]
}