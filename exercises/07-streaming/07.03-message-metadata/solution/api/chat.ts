import { anthropic } from '@ai-sdk/anthropic';
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from 'ai';

export type MyUIMessage = UIMessage<{
  duration: number;
}>;

export const POST = async (req: Request): Promise<Response> => {
  const body: { messages: MyUIMessage[] } = await req.json();
  const { messages } = body;

  const result = streamText({
    model: anthropic('claude-opus-5-5'),
    messages: await convertToModelMessages(messages),
  });

  const startTime = Date.now();

  return result.toUIMessageStreamResponse<MyUIMessage>({
    messageMetadata({ part }) {
      if (part.type === 'finish') {
        return {
          duration: Date.now() - startTime,
        };
      }

      return undefined;
    },
  });
};
