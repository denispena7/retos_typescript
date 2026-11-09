"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Reto 1: Contrato de la api
// Usuario correcto
const usuarioValido = {
    id: 1,
    username: 'Carlos',
    email: 'carlos@gmail.com',
    rol: 'admin',
    token: 'abc123'
};
// Usuario incorrecto
/* const usuarioIncorrecto: UsuarioAPI = {
    id: 2,
    username: 'Ana',
    email: 'ana@gmail.com',
    rol: 'invitado'
}; */
// Reto 2
const misTareas = [
    {
        id: 1,
        titulo: 'Estudiar TypeScript',
        completada: false
    },
    {
        id: 2,
        titulo: 'Practicar Angular',
        completada: false
    },
    {
        id: 3,
        titulo: 'Hacer los ejercicios',
        completada: true
    }
];
function completarTarea(lista, idBuscar) {
    return lista.map(tarea => {
        if (tarea.id === idBuscar) {
            return {
                ...tarea,
                completada: true
            };
        }
        return tarea;
    });
}
const tareasActualizadas = completarTarea(misTareas, 2);
console.log('Tareas originales:', misTareas);
console.log('Tareas actualizadas:', tareasActualizadas);
//# sourceMappingURL=app.js.map