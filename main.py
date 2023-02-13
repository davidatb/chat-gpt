    # -*- coding: windows-1252 -*-

import openai
import argparse
import json
import sys

def load_config():
    with open("config.json", "r") as f:
        config = json.load(f)
    return config

def query(prompt):
    openai.api_key = load_config()["openai"]["api_key"]

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=4000,
        # temperature=1,
    )

    message = response.choices[0].text
    return message.strip()

def main():
    print("Bienvenido a ChatGPT. Escribe 'salir' para terminar la sesión.\n")
    while True:
        try:
            prompt = input("Tú: ")
            if prompt.lower() == "salir":
                print("Gracias por usar ChatGPT. Hasta pronto!")
                sys.exit(0)
            message = query(prompt)
            print("ChatGPT:", message)
        except openai.error as e:
            print(f"OpenAI API error: {e}")
        except KeyboardInterrupt:
            print("¡Hasta luego!\n")
            sys.exit(0)
        except Exception as e:
            print(f"Ocurrió un error: {e}")

if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    main()
