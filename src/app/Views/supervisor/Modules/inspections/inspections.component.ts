import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  
  weekDays: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];


  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;
  currentDate: Date = new Date();

  ngOnInit(){
    this.getDaysFromDate(this.currentDate.getMonth()+1 , this.currentDate.getFullYear())
  }

  getDaysFromDate(month: any, year: any) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: any) {

    const month = parseInt(this.dateSelect.clone().format('MM') + flag);
    const year = this.dateSelect.clone().format('YYYY');

    if(month > this.currentDate.getMonth()+1 || year != this.currentDate.getFullYear()){
      if (flag < 0) {
        const prevDate = this.dateSelect.clone().subtract(1, "month");
        this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
      } else {
        const nextDate = this.dateSelect.clone().add(1, "month");
        this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
      }
    } 

  }

  colorDay(day: any){
    const month = this.dateSelect.clone().format('MM');
    const currentDay = this.currentDate.getDate();
    const year = parseInt(this.dateSelect.clone().format('YYYY'));

    if(currentDay == day.value && month == this.currentDate.getMonth()+1 && year == this.currentDate.getFullYear()){
      return '#fff'
    }else{
      if(currentDay > day.value && month ==  this.currentDate.getMonth()+1 && year == this.currentDate.getFullYear()){
        return 'gray'
      }else{
        return '#000'
      }
    }
  }

  backgroundDay(day: any){
    const currentDay = this.currentDate.getDate();
    const month = parseInt(this.dateSelect.clone().format('MM'));
    const year = parseInt(this.dateSelect.clone().format('YYYY'));

    if(currentDay == day.value && month == this.currentDate.getMonth()+1 && year == this.currentDate.getFullYear()){
      return '#8C0C0C'
    }

    return ''
  }

  clickDay(day: any) {
    const month = parseInt(this.dateSelect.clone().format('MM'));
    const currentDay = this.currentDate.getDate();
    const year = parseInt(this.dateSelect.clone().format('YYYY'));

    if(!(currentDay >= day.value) && ( month <= this.currentDate.getMonth()+1 && year >= this.currentDate.getFullYear())){
      console.log('SI');
      const monthYear = this.dateSelect.format('YYYY-MM')
      const parse = `${monthYear}-${day.value}`
      const objectDate = moment(parse)
      this.dateValue = objectDate;
    }
  }
}
