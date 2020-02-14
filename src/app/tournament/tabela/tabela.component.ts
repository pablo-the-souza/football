import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

export interface PeriodicElement {
  date: string;
  time: string;
  game: string;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "25/Ago/2020", time: "17:00", game: "Fortaleza x Boca Juniors", location: 'Dedezao'},
  {date: "25/Ago/2020", time: "19:00", game: "Ceará x River Plate", location: 'Dedezao'},
  {date: "25/Ago/2020", time: "21:00", game: "Itarema x Rosario Central", location: 'Dedezao'},
  ]


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  displayedColumns: string[] = ['date', 'time', 'game', 'location'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
