// aiFactory.js
import LlamaCppProvider from './providers/llamaCppProvider.js';
import TransformersProvider from './providers/transformersProvider.js';
import OpenAIProvider from './providers/openaiProvider.js';

function getProvider(name, config = {}) {
  switch (name) {
    case 'llama':
      return new LlamaCppProvider(config.modelPath);
    case 'transformers':
      return new TransformersProvider();
    case 'openai':
      return new OpenAIProvider(config.apiKey);
    default:
      throw new Error(`Unknown provider: ${name}`);
  }
}
export default getProvider;