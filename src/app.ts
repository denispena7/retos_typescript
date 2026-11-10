import type { UsuarioAPI, Tarea, RespuestaServidor } from './models/interfaces.js';
import { ProductComponent } from './models/ProductComponent.js';

// Reto 1: Contrato de la api
// Usuario correcto
const usuarioValido: UsuarioAPI = {
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
const misTareas: Tarea[] = [
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

function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {

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

// Reto 3
const producto = new ProductComponent(1000, "Portátil");
console.log(producto.obtenerPrecioFinal());

// producto.precioBase = 2000;

// Reto 4
function procesarRespuesta(res: RespuestaServidor): void {

    if (res.status === 'success' && res.data) {
        res.data.forEach(elemento => {
            console.log(elemento);
        });
    }
     else 
    {
        console.log(res.mensajeError);
    }

}

const respuestaCorrecta: RespuestaServidor = {
    status: 'success',
    data: ['Usuario creado', 'Datos guardados']
};

const respuestaIncorrecta: RespuestaServidor = {
    status: 'error',
    mensajeError: 'Error al conectar con el servidor'
};

procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaIncorrecta);