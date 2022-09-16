import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-glcars-permissions',
  templateUrl: './glcars-permissions.component.html',
  styleUrls: ['./glcars-permissions.component.scss']
})
export class GLCarsPermissionsComponent implements OnInit {


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
