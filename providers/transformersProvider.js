// providers/transformersProvider.js
import AIProvider from '../aiProvider.js';
import { pipeline } from '@xenova/transformers';

class TransformersProvider extends AIProvider {
  constructor() {
    super();
    this.generator = null;
  }

  async init() {
    // Set the pipeline for question-answering with a suitable model
    this.generator = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');
  }

  async generate(prompt) {
    if (!this.generator) await this.init();
    
    // The 'prompt' is an object like { question, context }.
    // We must pass them as separate arguments to the pipeline.
    const { question, context } = prompt;
    const output = await this.generator(question, context);

    // Return the 'answer' property from the result object
    return output.answer;
  }
}
export default TransformersProvider;