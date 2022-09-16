import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-plans-approval',
  templateUrl: './plans-approval.component.html',
  styleUrls: ['./plans-approval.component.scss']
})
export class PlansApprovalComponent implements OnInit {


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
