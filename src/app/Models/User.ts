export interface User {
    id?: number
    usuario1: string
    email: string
    direccion: string
    telefono: string
    cedula: string
    nombre: string
    contraseña: string
    idRol: number
    idRolNavigation?: object
}