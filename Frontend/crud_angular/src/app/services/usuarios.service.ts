import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  edad: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:3000/api/data';       // GET
  private crudUrl = 'http://localhost:3000/api/usuarios'; // POST, PUT, DELETE

  constructor(private http: HttpClient) { }

  // GET todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // POST crear usuario
  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.crudUrl, usuario);
  }

  // PUT actualizar usuario
  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.crudUrl}/${id}`, usuario);
  }

  // DELETE eliminar usuario
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.crudUrl}/${id}`);
  }
}
