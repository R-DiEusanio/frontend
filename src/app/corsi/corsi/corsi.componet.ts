import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorsiService } from '../../core/services/corsi.service';
import { Corso } from '../../models/corso.model';

@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.css']
})
export class CorsiComponent implements OnInit {
  corsi: Corso[] = [];
  editingCorso: Corso | null = null;

  newCorso: Corso = {
    id: 0,
    nomeCorso: '',
    annoAccademico: new Date().getFullYear(),
    docenteDTO: {
      idDocente: 0,
      nome: '',
      cognome: '',
      dataNascita: ''
    },
    discenti: []
  };

  nuovoDiscente = { nome: '', cognome: '' };

  constructor(private corsiService: CorsiService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.corsiService.getAll().subscribe(data => {
      this.corsi = data;
    });
  }

  save(): void {
    if (this.editingCorso) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.corsiService.create(this.newCorso).subscribe(() => {
      this.resetForm();
      this.load();
    });
  }

  update(): void {
    if (!this.editingCorso) return;
    this.corsiService.update(this.editingCorso.id, this.newCorso).subscribe(() => {
      this.resetForm();
      this.load();
    });
  }

  delete(id: number): void {
    this.corsiService.delete(id).subscribe(() => this.load());
  }

  edit(c: Corso): void {
    this.editingCorso = c;
    this.newCorso = {
      id: c.id,
      nomeCorso: c.nomeCorso,
      annoAccademico: c.annoAccademico,
      docenteDTO: c.docenteDTO || { idDocente: 0, nome: '', cognome: '', dataNascita: '' },
      discenti: [...(c.discenti || [])]
    };
  }

  resetForm(): void {
    this.editingCorso = null;
    this.nuovoDiscente = { nome: '', cognome: '' };
    this.newCorso = {
      id: 0,
      nomeCorso: '',
      annoAccademico: new Date().getFullYear(),
      docenteDTO: { idDocente: 0, nome: '', cognome: '', dataNascita: '' },
      discenti: []
    };
  }

  cancelEdit(): void {
    this.resetForm();
  }

  getDiscentiNames(discenti: { nome: string; cognome: string }[]): string {
    return discenti.map(d => `${d.nome} ${d.cognome}`).join(', ');
  }

  aggiungiDiscente(): void {
    if (this.nuovoDiscente.nome.trim() && this.nuovoDiscente.cognome.trim()) {
      this.newCorso.discenti.push({ ...this.nuovoDiscente, idDiscente: 0, eta: 0, matricola: '', cittaResidenza: '' });
      this.nuovoDiscente = { nome: '', cognome: '' };
    }
  }

  rimuoviDiscente(index: number): void {
    this.newCorso.discenti.splice(index, 1);
  }
}
