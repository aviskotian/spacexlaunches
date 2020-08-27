import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  yearArray: any[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  selectedYear: any;
  selectedLaunch: any;
  selectedLanding: any;
  constructor() {

  }
  yearflterClick(event, newValue) {
    this.selectedYear = newValue;
    console.log(this.selectedYear);
  }
  launchflterClick(event, newValue) {
    this.selectedLaunch = newValue;
    console.log(this.selectedLaunch);
  }
  landingflterClick(event, newValue) {
    this.selectedLanding = newValue;
    console.log(this.selectedLaunch);
  }
  ngOnInit() {
  }

}
