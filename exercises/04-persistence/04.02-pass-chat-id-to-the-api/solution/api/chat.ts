import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export const POST = async (req: Request): Promise<Response> => {
  const body: { messages: UIMessage[]; id: string } =
    await req.json();
  const { messages, id } = body;

  console.log('id', id);

  const result = streamText({
    model: anthropic('claude-opus-5-5'),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
};
