import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

// TODO: Choose a model. I recommend using the Anthropic Claude model:
// claude-opus-5-5
const model = anthropic('claude-opus-5-5');

const prompt = 'What is the capital of France?';

const result = await generateText({model, prompt}); // TODO: Use generateText to get the result

console.log(result.text);
