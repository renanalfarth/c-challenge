import { Canal } from './Canal';


export class NovoUsuario {
    nome: string;
    username: string;
    segmentos: Array<string>;
    perfilAprovador: string;
    authorities: string;
    canaisCnpjs?: Array<Canal>;
    password: string;
}
