import { anthropic } from '@ai-sdk/anthropic';
import {
  createUIMessageStreamResponse,
  streamText,
  type ModelMessage,
  type UIMessage,
} from 'ai';

export const POST = async (req: Request): Promise<Response> => {
  const body = await req.json();

  // TODO: get the UIMessage[] from the body
  const messages: UIMessage[] = TODO;

  // TODO: convert the UIMessage[] to ModelMessage[]
  const modelMessages: ModelMessage[] = TODO;

  // TODO: pass the modelMessages to streamText
  const streamTextResult = streamText({
    model: anthropic('claude-opus-5-5'),
  });

  // TODO: create a UIMessageStream from the streamTextResult
  const stream = TODO;

  return createUIMessageStreamResponse({
    stream,
  });
};
