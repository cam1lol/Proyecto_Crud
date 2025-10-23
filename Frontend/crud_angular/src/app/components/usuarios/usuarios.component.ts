import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

declare var bootstrap: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', correo: '', edad: 0 };
  usuarioEditando: Usuario | null = null;
  modal: any;

  // Paginación
  page: number = 1;
  pageSize: number = 10;

  // Filtros
  filtroNombre: string = '';
  filtroEdad: string = '';

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();

    const modalElement = document.getElementById('usuarioModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  abrirModal() {
    this.usuarioEditando = null;
    this.nuevoUsuario = { nombre: '', correo: '', edad: 0 };
    this.modal.show();
  }

  obtenerUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.aplicarFiltros();
    });
  }

  agregarUsuario() {
    this.usuariosService.addUsuario(this.nuevoUsuario).subscribe(() => {
      this.obtenerUsuarios();
      this.nuevoUsuario = { nombre: '', correo: '', edad: 0 };
      this.modal.hide();
    });
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioEditando = { ...usuario };
    this.modal.show();
  }

  actualizarUsuario() {
    if (this.usuarioEditando && this.usuarioEditando.id) {
      this.usuariosService
        .updateUsuario(this.usuarioEditando.id, this.usuarioEditando)
        .subscribe(() => {
          this.obtenerUsuarios();
          this.modal.hide();
          this.usuarioEditando = null;
        });
    }
  }

  eliminarUsuario(id: number) {
    this.usuariosService.deleteUsuario(id).subscribe(() => {
      this.obtenerUsuarios();
    });
  }

  aplicarFiltros() {
    this.usuariosFiltrados = this.usuarios.filter(u => {
      const nombreMatch = u.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
      const edadMatch = this.filtroEdad ? u.edad === +this.filtroEdad : true;
      return nombreMatch && edadMatch;
    });
    this.page = 1; // reset página al filtrar
  }

  usuariosPaginados(): Usuario[] {
    const start = (this.page - 1) * this.pageSize;
    return this.usuariosFiltrados.slice(start, start + this.pageSize);
  }

  totalPaginas(): number {
    return Math.ceil(this.usuariosFiltrados.length / this.pageSize);
  }

  cambiarPagina(p: number) {
    if (p >= 1 && p <= this.totalPaginas()) {
      this.page = p;
    }
  }

  ordenarPor(campo: 'nombre' | 'correo' | 'edad') {
    this.usuariosFiltrados.sort((a, b) => {
      if (campo === 'edad') return a.edad - b.edad;
      return a[campo].localeCompare(b[campo]);
    });
  }

  // array para iterar páginas
  get paginas(): number[] {
    return Array(this.totalPaginas()).fill(0).map((x,i)=>i+1);
  }
}
