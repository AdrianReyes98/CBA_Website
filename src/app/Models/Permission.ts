import { Locale } from "./Locale";

export interface Permission{
    //Datos Permiso 
    idSubCat: number;
    state: string;
    economicActivity: string;
    rucCopy: string;

    locale: Locale
}