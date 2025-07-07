import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscentiService } from '../../core/services/discent.service';
import { Discente } from '../../models/discente.model';

@Component({
  selector: 'app-discenti',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discenti.component.html',
  styleUrls: ['./discenti.component.css']
})
export class DiscentiComponent implements OnInit {
  discenti: Discente[] = [];

  editingDiscente: Discente | null = null;

  newDiscente: Partial<Discente> = {
    nome: '',
    cognome: '',
    eta: 0,
    matricola: '',
    cittaResidenza: ''
  };

  constructor(private discentiService: DiscentiService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.discentiService.getAll().subscribe(data => {
      this.discenti = data;
    });
  }

  save(): void {
    if (this.editingDiscente) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.discentiService.create(this.newDiscente).subscribe(() => {
      this.resetForm();
      this.load();
    });
  }

  update(): void {
    if (!this.editingDiscente) return;
    this.discentiService.update(this.editingDiscente.idDiscente, this.newDiscente)
      .subscribe(() => {
        this.resetForm();
        this.load();
      });
  }

  delete(id: number): void {
    this.discentiService.delete(id).subscribe(() => this.load());
  }

  edit(d: Discente): void {
    this.editingDiscente = d;
    this.newDiscente = { ...d };
  }

  resetForm(): void {
    this.editingDiscente = null;
    this.newDiscente = {
      nome: '',
      cognome: '',
      eta: 0,
      matricola: '',
      cittaResidenza: ''
    };
  }

  cancelEdit(): void {
    this.resetForm();
  }
}
