¿Qué sucedió al usar async/await?
Al usar async/await, el programa espera a que las Promesas se resuelvan antes de pasar a la siguiente línea de código. Esto permite escribir un código más legible y similar a una ejecución sincrónica, lo que facilita el manejo de operaciones asíncronas.

¿Qué sucedió al usar el método then()?
Al usar el método then(), cada callback de then() se ejecuta cuando la Promesa anterior se resuelve. Esto permite encadenar operaciones asíncronas y manejar los resultados de manera secuencial.

¿Qué diferencias encontraste entre async, await y el método then()?
Las diferencias entre async/await y el método then() son las siguientes:

async/await proporciona una forma más similar a la ejecución sincrónica de escribir código asíncrono, lo que facilita su lectura y comprensión.

async/await permite un mejor manejo de errores utilizando bloques try/catch.

Con async/await, el código es más lineal y evita el "callback hell", lo que facilita el razonamiento y la depuración.

El método then() es útil cuando se desea encadenar múltiples operaciones asíncronas y manejarlas secuencialmente.

async/await solo se puede usar dentro de una función async, mientras que el método then() se puede usar directamente en un objeto Promise.

El manejo de errores en async/await se realiza utilizando try/catch, mientras que el método then() utiliza el método catch() para manejar errores.


Nota: Cabe destacar que aunque realize las pruebas correspondientes como se deben con async/await y el metodo .then(), me di a la tarea de resolverlos mediante el switch case integrando en cada caso cada uno de los metodos correspondientes