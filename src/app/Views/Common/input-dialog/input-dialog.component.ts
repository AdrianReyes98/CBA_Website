import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent{

  public message: String = "";
  public change: String = "";

  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }



  ngOnInit(): void {
    this.message = this.data.message;
    this.change = this.data.change;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
