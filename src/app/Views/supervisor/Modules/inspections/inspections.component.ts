import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.todo)
    console.log(this.done)
    }
  }

  public isLoading: boolean = false;
  protected search: string = "";
  protected dataSource: any;
  public columns: string[] = ['Id','Cedula','Role', 'Email','Acciones'];
  
  constructor() { }

  ngOnInit(): void {

    console.log(this.todo)
    console.log(this.done)
  }

  startSearch(){
  }

  openDialogAddUser(){
  }

}
