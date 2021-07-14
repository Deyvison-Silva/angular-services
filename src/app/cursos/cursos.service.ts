import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    // Necessário criar um atributo estático para pois desta forma o mesmo é compartilhado entre as instancias da classe
    // e com isso pode ser usado em outro componente sem vinculo de hierarquia
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'React', 'JS'];

    constructor() {
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        // Devido o atributo ser static a sua chamada não dependende da instancia da classe, por isso não podemos 
        // utilizar o this e sim o proprio nome da classe para referencia-lo
        CursosService.criouNovoCurso.emit(curso);
    }
}