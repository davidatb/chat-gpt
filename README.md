# chat-gpt

For correct use you should create a config.json file with de follow content

{
    "openai": {
        "api_key": "Your-APIKEY Example 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"
    }
}

Este proyecto utiliza la librer�a OpenAI para generar texto a partir de un prompt ingresado por el usuario. El c�digo se encuentra en el archivo main.js.

Instalaci�n
Clonar el repositorio.
Ejecutar npm install para instalar las dependencias.
Uso
Colocar la API key de OpenAI en el archivo config.json.
Ejecutar node main.js.
Ingresar el prompt que se desea completar en la consola. El programa utilizar� la API de OpenAI para generar texto a partir del prompt ingresado.
Ejemplo
Supongamos que queremos generar una respuesta a la pregunta "�Cu�l es tu color favorito?". Para hacerlo, seguimos los pasos de uso y en la consola ingresamos el prompt "Mi color favorito es el". La librer�a OpenAI generar� una respuesta completa basada en el prompt ingresado.