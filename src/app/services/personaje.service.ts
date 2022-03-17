import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl='https://www.breakingbadapi.com/api/characters';
  }


  getAll(): Promise <Personaje[]> {
    return lastValueFrom(this.httpClient.get<Personaje[]>(this.baseUrl));
  }

  getById(pId: number): Promise <Personaje[]> {
    
    return lastValueFrom(this.httpClient.get<Personaje[]>(this.baseUrl + '/'+ pId));
  }

  getByName(pName: string): Promise<Personaje[]> {

    return lastValueFrom(this.httpClient.get<Personaje[]>(`${this.baseUrl}?name=${pName}`))
  }

  getByCategory(pCategory:string) :Promise<Personaje[]> {
    return lastValueFrom(this.httpClient.get<Personaje[]>(`${this.baseUrl}?category=${pCategory}`))
  }

  async getAllCategories(): Promise<string[]>{
    let arrPersonajes= await  this.getAll();
    let arrCategories:string []= arrPersonajes.map(personaje =>
      personaje.category);
    // La api tiene un elemento doble
    arrCategories= [...new Set(arrCategories)];
 
    arrCategories.splice(1,1);
  
    return arrCategories;
  }

  getByPage(pPage: number =1): Promise<Personaje[]> {
    return lastValueFrom(this.httpClient.get<Personaje[]>(this.baseUrl + '?limit=10&offset=' + (pPage-1)*10));
  }

}
