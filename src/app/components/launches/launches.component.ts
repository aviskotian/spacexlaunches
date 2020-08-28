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
  constructor(private dataservice: DataService, private route: ActivatedRoute) {
  }
  getData(launchYear, launchSuccess, landSuccess) {
    this.dataservice.getData(launchYear, launchSuccess, landSuccess)
    .subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
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
