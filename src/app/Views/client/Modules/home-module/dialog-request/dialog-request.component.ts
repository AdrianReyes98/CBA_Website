import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-request',
  templateUrl: './dialog-request.component.html',
  styleUrls: ['./dialog-request.component.scss']
})
export class DialogRequestComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DialogRequestComponent>,
  ) { }

  ngOnInit(): void {
  }

  open(link: string){
      console.log(this.router.navigateByUrl(link));
      this.dialogRef.close();
  }

}
