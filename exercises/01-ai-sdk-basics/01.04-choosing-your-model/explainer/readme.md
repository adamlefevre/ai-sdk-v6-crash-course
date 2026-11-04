During this course, we are going to be using some AI models. You can either choose a model you already have access to, or you can use the models that I default to during the course.

## AI SDK Model Providers

The way the AI SDK works is you have different packages for each different provider. I've installed the three most common ones here, OpenAI, Google, and Anthropic.

But the AI SDK comes with dozens and dozens of [different providers](https://ai-sdk.dev/providers/ai-sdk-providers) that you can potentially hook into, including, if you want to, using local models.

## Setting Up a Model

Using a model requires doing two things:

1. Installing the relevant package
2. Adding the correct environment variable to your `.env` file

Let's look at the packages we have installed:

```ts
// Requires an OPENAI_API_KEY environment variable in .env
import { openai } from '@ai-sdk/openai';

// Requires a GOOGLE_GENERATIVE_AI_API_KEY environment variable in .env
import { google } from '@ai-sdk/google';

// Requires an ANTHROPIC_API_KEY environment variable in .env
import { anthropic } from '@ai-sdk/anthropic';
```

For each provider, you need a specific environment variable:

| Provider  | Environment Variable           |
| --------- | ------------------------------ |
| OpenAI    | `OPENAI_API_KEY`               |
| Google    | `GOOGLE_GENERATIVE_AI_API_KEY` |
| Anthropic | `ANTHROPIC_API_KEY`            |

## Instantiating a Model

You can then instantiate the model by just calling this `openai` or `google` or `anthropic` here:

```ts
const model = anthropic('claude-opus-5-5');

console.dir(model, { depth: null });
```

I'm console logging the model down below just so we can see what it looks like. And we can see that you get an Anthropic messages language model.

You also get autocomplete on the model ID, so you can see all of the available options.

## Default Model for the Course

Now, I've chosen Anthropic as our default option. So most of the code in the exercises, by default, will be using Claude Opus 5.5 (`claude-opus-5-5`). A few exercises that contrast a cheap model with a capable one use Claude Haiku 5.5 (`claude-haiku-5-5`) for the cheap side. The reasons for that are:

- Opus 5.5 is the current flagship Claude model, so what you learn here reflects what you'd ship
- It handles tool calling, structured outputs and long context very reliably
- Haiku 5.5 gives us a cheap, fast counterpart when we want to compare models

However, if you want to use OpenAI or Google for your models, all you'll need to do is just swap them out before you start the exercise. If you want to do it across the whole repo, you can probably do a pretty smart find and replace too.

So take this as your opportunity to set up your environment variables and choose your model. If you're not sure which one to go for, just get yourself an [Anthropic API key](https://console.anthropic.com/).

## Steps To Complete

- [ ] Decide which AI model provider you want to use (Anthropic Claude is the default for this course)

- [ ] Create an API key for your chosen provider
  - For Google: [Sign up for Google AI Studio](https://aistudio.google.com/apikey)
  - For OpenAI: [Create an account and generate an API key](https://platform.openai.com/api-keys)
  - For Anthropic: [Sign up and obtain an API key](https://console.anthropic.com/)

- [ ] Add the appropriate environment variable to your `.env` file
  - For OpenAI: `OPENAI_API_KEY=your-key-here`
  - For Google: `GOOGLE_GENERATIVE_AI_API_KEY=your-key-here`
  - For Anthropic: `ANTHROPIC_API_KEY=your-key-here`

- [ ] In the next exercise, we'll verify the setup is working.
