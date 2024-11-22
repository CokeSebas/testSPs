import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule si usas *ngFor y otras directivas
import { FormsModule } from '@angular/forms'; // Importa FormsModule si usas ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar CommonModule y FormsModule si los necesitas

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public titulo: string = 'TestSps';
  public esquema: string = '';
  public tabla: string = '';
  public contador: number = 0;
  public tipoSp: boolean = true;

  public variables: any[] = [];
  public pegar_variables: any[] = [];
  public tipoDatos: any[] = [
    {'tipo': 'serial4', 'valor_entrada': 'bigint', 'valor': 'serial', 'numero': true, 'bool': false},               
    {'tipo': 'serial8', 'valor_entrada': 'bigint', 'valor': 'bigserial', 'numero': true, 'bool': false},
    {'tipo': 'decimal', 'valor_entrada': 'double precision', 'valor': 'numeric', 'numero': true, 'bool': false},
    {'tipo': 'int2', 'valor_entrada': 'bigint', 'valor': 'smallint', 'numero': true, 'bool': false},
    {'tipo': 'int4', 'valor_entrada': 'bigint', 'valor': 'integer', 'numero': true, 'bool': false},
    {'tipo': 'int8', 'valor_entrada': 'bigint', 'valor': 'bigint', 'numero': true, 'bool': false},
    {'tipo': 'float4', 'valor_entrada': 'double precision', 'valor': 'real', 'numero': true, 'bool': false},
    {'tipo': 'float8', 'valor_entrada': 'double precision', 'valor': 'double precision', 'numero': true, 'bool': false},
    {'tipo': 'text', 'valor_entrada': 'varchar', 'valor': 'text', 'numero': false, 'bool': false},
    {'tipo': 'char', 'valor_entrada': 'varchar', 'valor': 'character', 'numero': false, 'bool': false},
    {'tipo': 'varchar', 'valor_entrada': 'varchar', 'valor': 'character varying', 'numero': false, 'bool': false},
    {'tipo': 'time', 'valor_entrada': 'varchar', 'valor': 'time', 'numero': false, 'bool': false},
    {'tipo': 'timetz', 'valor_entrada': 'varchar', 'valor': 'time', 'numero': false, 'bool': false},
    {'tipo': 'timestamp', 'valor_entrada': 'varchar', 'valor': 'timestamp', 'numero': false, 'bool': false},
    {'tipo': 'timestamptz', 'valor_entrada': 'varchar', 'valor': 'timestamp', 'numero': false, 'bool': false},
    {'tipo': 'date', 'valor_entrada': 'varchar', 'valor': 'date', 'numero': false, 'bool': false},
    {'tipo': 'bool', 'valor_entrada': 'boolean', 'valor': 'boolean', 'numero': null, 'bool': true},
  ];


  created() {
    console.log('created');
  }

  updated() {
    console.log('updated');
  }

  // Método para actualizar las variables cuando contador cambie
  actualizarVariables() {
    const i = this.variables.length;

    let nombre = (this.pegar_variables[i] && this.pegar_variables[i].hasOwnProperty('nombre')) ? this.pegar_variables[i]['nombre'] : '';
    let tipo = (this.pegar_variables[i] && this.pegar_variables[i].hasOwnProperty('tipo')) ? this.pegar_variables[i]['tipo'] : '';
    let tipo_salida = 10;

    for (let j = 0; j < this.tipoDatos.length; j++) {
      if (this.tipoDatos[j].tipo == tipo) {
        tipo_salida = j;
      }
    }

    // Actualiza la variable en el índice correspondiente
    this.variables[i] = {
      'nombre': nombre,
      'valor': '',
      'tipo': tipo_salida,
      'obligatorio': false,
      'join': false,
    };
  }

  reset() {
    this.variables = [];
    this.tipoSp = true;
    this.esquema = '';
    this.tabla = '';
    this.contador = 0;
    this.pegar_variables = [];
  }

  agregar() {
    this.contador++;
    this.actualizarVariables();
  }

  pegarVariables() {
    this.reset();
    //no se usa
  }




}
