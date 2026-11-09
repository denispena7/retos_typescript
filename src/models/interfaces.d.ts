export type Rol = 'admin' | 'editor' | 'alumno';
export interface UsuarioAPI {
    id: number;
    username: string;
    email: string;
    rol: Rol;
    token?: string;
}
export interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}
//# sourceMappingURL=interfaces.d.ts.map