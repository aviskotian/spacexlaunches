import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
  count = 1;
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  yearflterClick(event, newValue) {
    if (this.selectedYear != null && this.selectedYear == newValue) {
      this.selectedYear = null;
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: {
          launch_success: this.selectedLaunch,
          land_success: this.selectedLanding
        }
      });
    } else {
      this.selectedYear = newValue;
      this.router.navigate(['/launches/'], {
        queryParams: {
          launch_year: this.selectedYear
        },
        queryParamsHandling: 'merge'
      });
    }
  }
  launchflterClick(event, newValue) {
    if (this.selectedLaunch != null && this.selectedLaunch == newValue) {
      this.selectedLaunch = null;
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: {
          launch_year: this.selectedYear,
          land_success: this.selectedLanding
        }
      });
    } else {
      this.selectedLaunch = newValue;
      this.router.navigate(['/launches/'], {
        queryParams: {
          launch_success: this.selectedLaunch
        },
        queryParamsHandling: 'merge'
      });
    }
  }
  landingflterClick(event, newValue) {
    if (this.selectedLanding != null && this.selectedLanding == newValue) {
      this.selectedLanding = null;
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: {
          launch_year: this.selectedYear,
          launch_success: this.selectedLaunch
        }
      });
    } else {
      this.selectedLanding = newValue;
      this.router.navigate(['/launches/'], {
        queryParams: {
          land_success: this.selectedLanding
        },
        queryParamsHandling: 'merge'
      });
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedYear = params['launch_year'];
      this.selectedLaunch = params['launch_success'];
      this.selectedLanding = params['land_success'];
    });
  }

}
