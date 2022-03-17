import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';


@Component({
  selector: 'app-thumb-personaje',
  templateUrl: './thumb-personaje.component.html',
  styleUrls: ['./thumb-personaje.component.css']
})
export class ThumbPersonajeComponent implements OnInit {

  @Input('miPersonaje') personaje: Personaje | undefined;

  constructor() { }

 ngOnInit(){

  }




}
