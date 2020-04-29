import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-abajo',
  templateUrl: './abajo.component.html',
  styleUrls: ['./abajo.component.css']
})
export class AbajoComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor(public infoServicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
