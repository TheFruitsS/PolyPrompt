// providers/openaiProvider.js
import AIProvider from '../aiProvider.js';
import { OpenAI } from 'openai';

class OpenAIProvider extends AIProvider {
  constructor(apiKey) {
    super();
    this.client = new OpenAI({ apiKey });
  }

  async generate(prompt) {
    const res = await this.client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    return res.choices[0].message.content;
  }
}
export default OpenAIProvider;