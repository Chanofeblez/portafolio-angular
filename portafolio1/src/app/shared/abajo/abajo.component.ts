import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abajo',
  templateUrl: './abajo.component.html',
  styleUrls: ['./abajo.component.css']
})
export class AbajoComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
