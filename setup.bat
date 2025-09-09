@echo off
echo Installing Node.js packages...

:: Loop through each package and install it and you can add more packages as needed @huggingface/transformers
for %%p in ( node-llama-cpp @xenova/transformers openai) do (
    echo Installing %%p...
    npm i %%p
)



echo Setup complete. Please ensure any required model files are downloaded and placed in the correct directories.
echo Also, make sure to set up any necessary environment variables.
pause