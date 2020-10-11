import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rechercher-des-produits',
  templateUrl: './rechercher-des-produits.component.html',
  styleUrls: ['./rechercher-des-produits.component.scss']
})
export class RechercherDesProduitsComponent implements OnInit {
  @Output() OnChangeFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onFilterChange(type: string): void{
    this.OnChangeFilter.emit(type);
  }
}

