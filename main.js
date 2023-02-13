const readline = require('readline');
const axios = require('axios');

const config = require('./config.json');
const API_KEY = config.openai.api_key;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const BASE_URL = 'https://api.openai.com/v1/engines/';
const ENGINE = 'curie'; // Puedes cambiar "davinci" por "curie", "babbage", "ada", o "text-davinci-002"

const prompt = async (message) => {
  return new Promise(resolve => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
};

const getResponse = async (prompt, API_KEY) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };
  const data = {
    'prompt': prompt,
    'temperature': 0.3,
    'max_tokens': 20000,
    'top_p': 1,
    'frequency_penalty': 0,
    'presence_penalty': 0
  };
  try {
    const response = await axios.post(`${BASE_URL}${ENGINE}/completions`, data, { headers });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return 'Error: could not get response from API';
  }
};

const main = async () => {
  while (true) {
    try {
      const question = await prompt('Enter a question: ');
      const response = await getResponse(question, API_KEY);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
};

main();
