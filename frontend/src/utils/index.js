import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(promt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === promt) return getRandomPrompt(prompt);

  return randomPrompt;
}
