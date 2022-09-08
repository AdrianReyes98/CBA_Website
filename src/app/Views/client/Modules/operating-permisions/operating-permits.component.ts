import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-operating-permits',
  templateUrl: './operating-permits.component.html',
  styleUrls: ['./operating-permits.component.scss']
})
export class OperatingPermitsComponent implements OnInit {
  firstFormGroup = this.formBuilder.group({
    
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl:['',Validators.required]
  });
  isLinear = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
