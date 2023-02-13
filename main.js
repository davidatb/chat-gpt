const { Configuration, OpenAIApi } = require("openai");
const config = require('./config.json');
const readline = require('readline');

async function obtenerCompletado() {
  const configuration = new Configuration({
    apiKey: config.openai.api_key,
  });
  const openai = new OpenAIApi(configuration);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  while (true) {
    const prompt = await new Promise(resolve => {
      rl.question('Ingresa tu prompt: ', resolve);
    });

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
    });

    console.log(completion.data.choices[0].text);
  }
}

obtenerCompletado();
