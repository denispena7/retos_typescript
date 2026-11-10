export type Rol = 'admin' | 'editor' | 'alumno'
export type Status = 'success' | 'error'

// Reto 1
export interface UsuarioAPI {
    id: number,
    username: string,
    email: string,
    rol: Rol,
    token?: string
}

// Reto 2
export interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

// Reto 4
export interface RespuestaServidor {
    status: Status,
    data?: string[],
    mensajeError?: string 
} 