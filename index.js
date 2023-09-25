const readlineSync = require("readline-sync");

let listTask = [];

function addTask() {
  const indicator = readlineSync.question('Ingrese el indicador de la tarea: ');
  const description = readlineSync.question('ingrese la descripcion de la tarea: ');

  listTask.push({
    indicator,
    description,
    completed: false
  });

  console.log('Tarea agregada con exito');
}

function removeTask() {
  const index = readlineSync.question('Ingrese el indice de la tarea a eliminar: ');

  if (index >= 0 && index < listTask.length) {
    listTask.splice(index, 1);
    console.log('Tarea Eliminada con exito');
  } else {
    console.log('Indice no valido!');
  }
}

function completeTask() {
  const index = readlineSync.question('Ingrese el indice de la tarea a completar: ');

  if (index >= 0 && index < listTask.length) {
    listTask[index].completed = true;
    console.log('Tarea compleatada con exito');
  } else {
    console.log('Indice no valido!');
  }
}

function printTasks() {
  console.log("   ╔════════════════════╗    ");
  console.log("   ║  LISTA DE TAREAS : ║    ");
  console.log("   ╚════════════════════╝    ");
  listTask.forEach((listTask, index) => {
    const status = listTask.completed ? '[✔]' : '[ ]';
    console.log('╔════════════════════════════════════════════════════════════════╗');
    console.log(`║   ${index}. ${status} ${listTask.indicator}: ${listTask.description}    `);
    console.log('╚════════════════════════════════════════════════════════════════╝');

  });
}

// ejecutar y resolver las promesas con .then()

function run() {
    while (true) {
    console.log('╔════════════════════════════════╗');
    console.log('║     ╔════════════════════╗     ║');
    console.log('║     ║ CONFIGURAR TAREAS  ║     ║');
    console.log('║     ╚════════════════════╝     ║');
    console.log('║                                ║');
    console.log('║     Escoje una opcion:         ║');
    console.log('║                                ║');
    console.log('║   1. Crear una tarea           ║');
    console.log('║   2. Eliminar una tarea        ║');
    console.log('║   3. Completar una tarea       ║');
    console.log('║   4. Impirimir lista de tareas ║');
    console.log('║   5. Salir de la App           ║');
    console.log('║                                ║');
    console.log('║   Created by: Jhon Florez ▲    ║');
    console.log('╚════════════════════════════════╝');

    const option = readlineSync.question('Ingrese el numero de opcion: ');

    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        removeTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        printTasks();
        break;
      case '5':
        return;
      default:
        console.log('Opcion no valida!');
    }
  }
}
run();


