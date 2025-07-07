import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocentiService } from '../../core/services/docenti.service';
import { docente } from '../../models/docente.model';

@Component({
  selector: 'app-docenti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})

export class DocentiComponent implements OnInit {
  docenti: docente[] = [];

  editingDocente: docente | null = null;

  newDocente: Partial<docente> = {
    nome: '',
    cognome:'',
    dataNascita: ''
  };

  constructor(private docentiService: DocentiService) {}

  ngOnInit(): void {
      this.load();
  }

  load(): void {
    this.docentiService.getAll().subscribe(data => {
      this.docenti = data;
    })
  }

  save(): void {
    if(this.editingDocente) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.docentiService.create(this.newDocente).subscribe(() => {
      this.resetForm();
      this.load();
    });
  }

  update(): void {
    if(!this.editingDocente) return;
    this.docentiService.update(this.editingDocente.idDocente,this.newDocente)
    .subscribe(() => {
      this.resetForm();
      this.load();
    });
  }

  delete(id: number) : void {
    this.docentiService.delete(id).subscribe(() => this.load());
  }

  edit(d: docente): void {
    this.editingDocente = d;
    this.newDocente = {...d};
  }

  resetForm(): void {
    this.editingDocente = null;
    this.newDocente = {
      nome: '',
      cognome: '',
      dataNascita:''
    };
  }

  cancelEdit(): void {
    this.resetForm();
  }
}

