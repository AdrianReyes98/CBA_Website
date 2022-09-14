import { Locale } from "./Locale";

export interface Permission{
    //Datos Permiso 
    idSubCat: number;
    idLoc: number;
    state: string;
    economicActivity: string;
    rucCopy: string;

    locale: Locale
}