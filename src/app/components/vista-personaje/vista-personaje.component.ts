import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.component.html',
  styleUrls: ['./vista-personaje.component.css']
})
export class VistaPersonajeComponent implements OnInit {

  personaje: Personaje | undefined;


  constructor(
    private personajeService: PersonajeService,
    private activatedRoute: ActivatedRoute
    ) {

     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const id= parseInt(params['idpersonaje']);
      // console.log(id);
      
      let response: Personaje[]= await this.personajeService.getById(id);
      this.personaje= response[0];
      // console.log(this.personaje);
      
    })
  }

      
    
}
