import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-new-user',
  templateUrl: './dialog-new-user.component.html',
  styleUrls: ['./dialog-new-user.component.scss']
})
export class DialogNewUserComponent implements OnInit {
  formUser: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  buildFormAddUser(){
    this.formUser = this.formBuilder.group({
      name:['',[Validators.required,Validators.name]],
      lastname:['',[Validators.required,Validators.name]],
      address:['',[Validators.required]],
      phone:['',[Validators.required]]
      });
  }
}
