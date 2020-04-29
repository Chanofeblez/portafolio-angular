import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-arriba',
  templateUrl: './arriba.component.html',
  styleUrls: ['./arriba.component.css']
})
export class ArribaComponent implements OnInit {

  constructor(public infoServicio: InfoPaginaService,
              private router: Router) {}

  ngOnInit(): void {
  }

  buscarProducto( termino: string){

    if( termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
  }

 

}
