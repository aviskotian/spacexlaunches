import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private headerName: string;
  constructor() {
    this.headerName = 'SpaceX Launch Programs';
  }

  ngOnInit() {
  }

}
