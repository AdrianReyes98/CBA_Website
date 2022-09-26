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

  ngOnInit(): void {
  }

  
}
