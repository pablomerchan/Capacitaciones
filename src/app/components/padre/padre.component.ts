import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
   textValuefromHtml:string='';
   textoFinalEnviarAlhijo: string = '';
   mostrarComponenteHijo: boolean = false;

  enviarMensajeAlhijo() {
    this.mostrarComponenteHijo = true;
    this.textoFinalEnviarAlhijo = this.textValuefromHtml;
  }

}
