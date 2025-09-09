// providers/llamaCppProvider.js
import AIProvider from '../aiProvider.js';
import { LlamaModel } from 'node-llama-cpp';

class LlamaCppProvider extends AIProvider {
  constructor(modelPath) {
    super();
    this.model = new LlamaModel({ modelPath });
  }

  async generate(prompt) {
    return await this.model.prompt(prompt);
  }
}
export default LlamaCppProvider;