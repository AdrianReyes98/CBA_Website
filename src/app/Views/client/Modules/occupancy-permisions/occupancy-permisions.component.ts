import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-occupancy-permisions',
  templateUrl: './occupancy-permisions.component.html',
  styleUrls: ['./occupancy-permisions.component.scss']
})
export class OccupancyPermisionsComponent implements OnInit {

  
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
