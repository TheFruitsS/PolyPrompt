// index.js
import getProvider from './aiFactory.js';

(async () => {
  try {
    // Get the provider instance from the factory. It's now a QA provider.
    const qaProvider = getProvider("transformers");
    
    // Call generate with the question and context object
    const result = await qaProvider.generate({
      question: "What is the capital of France?",
      context: "France is a country in Europe. Its capital is Paris."
    });
    
    console.log(result); // This will now log "Paris"
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
