# chat-gpt

For correct use you should create a config.json file with de follow content

{
    "openai": {
        "api_key": "Your-APIKEY Example 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"
    }
}

Este proyecto utiliza la librería OpenAI para generar texto a partir de un prompt ingresado por el usuario. El código se encuentra en el archivo main.js.

Instalación
Clonar el repositorio.
Ejecutar npm install para instalar las dependencias.
Uso
Colocar la API key de OpenAI en el archivo config.json.
Ejecutar node main.js.
Ingresar el prompt que se desea completar en la consola. El programa utilizará la API de OpenAI para generar texto a partir del prompt ingresado.
Ejemplo
Supongamos que queremos generar una respuesta a la pregunta "¿Cuál es tu color favorito?". Para hacerlo, seguimos los pasos de uso y en la consola ingresamos el prompt "Mi color favorito es el". La librería OpenAI generará una respuesta completa basada en el prompt ingresado.