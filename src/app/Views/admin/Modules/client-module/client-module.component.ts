import { Component, OnInit } from '@angular/core';
import { ApiPermissionService } from 'src/app/Services/api-permission.service';

@Component({
  selector: 'app-client-module',
  templateUrl: './client-module.component.html',
  styleUrls: ['./client-module.component.scss']
})
export class ClientModuleComponent implements OnInit {

  public selectedFile!: File;

  constructor(
    public apiPermission: ApiPermissionService
  ) { }

  //Funcion que procesa un evento para subir archivos al servidor
  fileSelected(event: any)
  {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  subirArchivo()
  {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    if (this.selectedFile == undefined)
    {
      window.alert("Se debe seleccionar alguna imagen para poder realizar la subida del archivo al servidor.")
      return;
    }
    else
    {
      //Metodo POST 
      this.apiPermission.postDocument({archivo: this.fileSelected, numero: 1}).subscribe(result => {
        if(result.status == 1){
          alert('OK');
        }
      })
    }


  };

  ngOnInit(): void {
  }

  
}
