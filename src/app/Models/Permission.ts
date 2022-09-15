import { Locale } from "./Locale";

export interface Permission{
    //Datos Permiso 
    idSubCat: number;
    state?: string;
    economicActivity: string;
    rucCopy: string;

    //Datos Local
    name: string;
    address: string;
    coordinateX: number;
    coordinateY: number;
    socialReason: string;
    photo: string;
    property: string;
    idCli: number;
}