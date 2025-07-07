import { docente } from "./docente.model";
import { Discente } from "./discente.model";

export interface Corso {
  id: number;
  nomeCorso: string;
  annoAccademico: number;
  docenteDTO: docente;
  discenti: Discente[];
}