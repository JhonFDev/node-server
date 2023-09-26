const readlineSync = require("readline-sync");

let listTask = [];

function addTask() {
  return new Promise((resolve, reject) => {
    const indicator = readlineSync.question(
      "Ingrese el indicador de la tarea: "
    );
    const description = readlineSync.question(
      "ingrese la descripcion de la tarea: "
    );

    listTask.push({
      indicator,
      description,
      completed: false,
    });

    resolve(console.log("Tarea agregada con exito"));
  });
}

function removeTask() {
  return new Promise((resolve, reject) => {
    const index = readlineSync.question(
      "Ingrese el indice de la tarea a eliminar: "
    );

    if (index >= 0 && index < listTask.length) {
      listTask.splice(index, 1);
      resolve(console.log("Tarea Eliminada con exito"));
    } else {
     reject(console.log("Indice no valido!"));
    }
  });
}

function completeTask() {
    return new Promise((resolve, reject) => {
        
        const index = readlineSync.question(
          "Ingrese el indice de la tarea a completar: "
        );
      
        if (index >= 0 && index < listTask.length) {
          listTask[index].completed = true;
         resolve( console.log("Tarea compleatada con exito"));
        } else {
          reject(console.log("Indice no valido!"));
        }
    })
}

function printTasks() {
  console.log("   ╔════════════════════╗    ");
  console.log("   ║  LISTA DE TAREAS : ║    ");
  console.log("   ╚════════════════════╝    ");
  listTask.forEach((listTask, index) => {
    const status = listTask.completed ? "[✔]" : "[ ]";
    console.log(
      "╔════════════════════════════════════════════════════════════════╗"
    );
    console.log(
      `║   ${index}. ${status} ${listTask.indicator}: ${listTask.description}    `
    );
    console.log(
      "╚════════════════════════════════════════════════════════════════╝"
    );
  });
}

function run() {
  while (true) {
    console.log("╔════════════════════════════════╗");
    console.log("║     ╔════════════════════╗     ║");
    console.log("║     ║ CONFIGURAR TAREAS  ║     ║");
    console.log("║     ╚════════════════════╝     ║");
    console.log("║                                ║");
    console.log("║     Escoje una opcion:         ║");
    console.log("║                                ║");
    console.log("║   1. Crear una tarea           ║");
    console.log("║   2. Eliminar una tarea        ║");
    console.log("║   3. Completar una tarea       ║");
    console.log("║   4. Impirimir lista de tareas ║");
    console.log("║   5. Salir de la App           ║");
    console.log("║                                ║");
    console.log("║   Created by: Jhon Florez ▲    ║");
    console.log("╚════════════════════════════════╝");

    const option = readlineSync.question("Ingrese el numero de opcion: ");

    switch (option) {
      case "1":
        addTask()
          .then((mensaje) => {
            console.log(mensaje);
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case "2":
        removeTask()
          .then((mensaje) => {
            console.log(mensaje);
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case "3":
        completeTask()
          .then((mensaje) => {
            console.log(mensaje);
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case "4":
        printTasks();
        break;
      case "5":
        return;
      default:
        console.log("Opcion no valida!");
    }
  }
}
run();

// ejecutar y resolver las promesas con async/await

// function run() {
//   while (true) {
//     console.log("╔════════════════════════════════╗");
//     console.log("║     ╔════════════════════╗     ║");
//     console.log("║     ║ CONFIGURAR TAREAS  ║     ║");
//     console.log("║     ╚════════════════════╝     ║");
//     console.log("║                                ║");
//     console.log("║     Escoje una opcion:         ║");
//     console.log("║                                ║");
//     console.log("║   1. Crear una tarea           ║");
//     console.log("║   2. Eliminar una tarea        ║");
//     console.log("║   3. Completar una tarea       ║");
//     console.log("║   4. Impirimir lista de tareas ║");
//     console.log("║   5. Salir de la App           ║");
//     console.log("║                                ║");
//     console.log("║   Created by: Jhon Florez ▲    ║");
//     console.log("╚════════════════════════════════╝");

//     const option = readlineSync.question("Ingrese el numero de opcion: ");

//     switch (option) {
//       case "1":
//         async function taskcrea() {
//           try {
//             const tareaCreada = await addTask("Nueva tarea");
//             console.log(tareaCreada);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         taskcrea();
//         break;

//       case "2":
//         async function taskelim() {
//           try {
//             const tareaEliminada = await removeTask();
//             console.log(tareaEliminada);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         taskelim();
//         break;

//       case "3":
//         async function taskcompl() {
//           try {
//             const tareaCompletada = await completeTask();
//             console.log(tareaCompletada);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         taskcompl();
//         break;

//       case "4":
//         printTasks();
//         break;
//       case "5":
//         return;
//       default:
//         console.log("Opcion no valida!");
//     }
//   }
// }
// run();
