import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    // Necessário criar um atributo estático para pois desta forma o mesmo é compartilhado entre as instancias da classe
    // e com isso pode ser usado em outro componente sem vinculo de hierarquia
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'React', 'JS'];

    constructor(
        private logService: LogService
    ) {
        console.log('CursosService');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        // Devido o atributo ser static a sua chamada não dependende da instancia da classe, por isso não podemos 
        // utilizar o this e sim o proprio nome da classe para referencia-lo
        CursosService.criouNovoCurso.emit(curso);
    }
}