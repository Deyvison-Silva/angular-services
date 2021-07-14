import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

}
/*
Caso seja necessário ter mais de uma instancia do servico para que as ações do mesmo reflita apenas na instancia
criada por vc, deverá colococar o provider do serviço dentro do decoretor do componente na propriedade providers
Ex: 
  @Component({
    selector: 'app-criar-curso',
    templateUrl: './criar-curso.component.html',
    styleUrls: ['./criar-curso.component.css'],
    providers: [CursosService]
  })
*/