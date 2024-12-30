import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
  baseURL: 'https://vercel-openai-proxy-git-main-lq782655835s-projects.vercel.app/openai/v1',
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion.choices[0].message);
}

main();