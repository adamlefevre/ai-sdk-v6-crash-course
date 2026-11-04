import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

const model = anthropic('claude-opus-5-5');

const prompt =
  'Give me the first paragraph of a story about an imaginary planet.';

const stream = TODO; // TODO - stream some text with the model above.

for await (const chunk of stream.textStream) {
  process.stdout.write(chunk);
}
