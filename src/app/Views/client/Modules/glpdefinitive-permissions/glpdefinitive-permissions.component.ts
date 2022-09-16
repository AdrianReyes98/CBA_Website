import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-glpdefinitive-permissions',
  templateUrl: './glpdefinitive-permissions.component.html',
  styleUrls: ['./glpdefinitive-permissions.component.scss']
})
export class GLPDefinitivePermissionsComponent implements OnInit {


  firstFormGroup = this.formBuilder.group({
    economicActivity: ['', [Validators.required,Validators.minLength(10)]],
    name: ['',[Validators.required, Validators.minLength(5)]],
    socialReason: ['', [Validators.required, Validators.minLength(10)]],

  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl:['']
  });


  isLinear = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
