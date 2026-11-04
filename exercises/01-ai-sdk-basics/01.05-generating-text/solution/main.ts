import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

const model = anthropic('claude-opus-5-5');

const prompt = 'What is the capital of France?';

const result = await generateText({
  model,
  prompt,
});

console.log(result.text);
