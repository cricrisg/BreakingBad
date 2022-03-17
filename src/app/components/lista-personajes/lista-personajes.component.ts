import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  arrPaginas: any[]=[];
  arrPersonajes: Personaje []= new Array();
  personaje: Personaje | undefined;
  name: string="";
  arrCategorias: string[]=[];


  constructor(
    private personajeService: PersonajeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  async ngOnInit(){

    // Paginación
    const personajes= await this.personajeService.getAll();
    const numPages= Math.ceil(personajes.length/10);
    this.arrPaginas= new Array(numPages);
    
    // Categorias
    this.arrCategorias= await this.personajeService.getAllCategories();

    // Carga por página
    this.activatedRoute.params.subscribe(async params => {
      if(params['page']) {
        this.arrPersonajes= await this.personajeService.getByPage(parseInt(params['page']));
    // console.log(this.arrPersonajes); 
      } else{
        this.arrPersonajes= await this.personajeService.getByPage()
      }
    })
    
    // Carga por categoría o por página.
    this.activatedRoute.queryParams.subscribe(async queryParams => {
        // console.log(queryParams);
        if(queryParams['category'] && queryParams['category'] !=='none'){
          this.arrPersonajes= await this.personajeService.getByCategory(queryParams['category']);
        } else if (queryParams['category'] && queryParams['category'] ==='none'){
          this.arrPersonajes= await this.personajeService.getByPage();
        }
        
    })
  }

  // Función de buscar por nombre.
  async searchName(name:string) { 
    this.arrPersonajes= await this.personajeService.getByName(name);
    // console.log(this.arrPersonajes); 
  }

  // Función para las categorías.
  getCategory($event:any):void {
    let category:string= $event.target.value;
    
    if(category !=="") {
        this.router.navigateByUrl('/listapersonajes?category=' + category);
    } else {
      this.router.navigateByUrl('/listapersonajes?category=none');
    }

    
  }
  
    
}

