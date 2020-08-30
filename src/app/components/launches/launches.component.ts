import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launchYear: string;
  launchSuccess: string;
  landSuccess: string;
  data: any [] = [];
  loader = false;
  loaded = false;
  ifError = false;
  errorMsg = null;
  errorCode = null;
  constructor(private dataservice: DataService, private route: ActivatedRoute) {
  }
  getData(launchYear, launchSuccess, landSuccess) {
    this.loader = true;
    this.loaded = false;
    this.dataservice.getData(launchYear, launchSuccess, landSuccess)
    .subscribe((response: any) => {
      this.loaded = true;
      this.loader = false;
      this.data = response;
      console.log(this.data);
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.error;
      this.errorCode = error.status;
      this.loader = false;
      this.ifError = true;
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.launchYear = params['launch_year'];
      this.launchSuccess = params['launch_success'];
      this.landSuccess = params['land_success'];
      this.getData(this.launchYear, this.launchSuccess, this.landSuccess);
    });
  }

}
