import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  repUrl = '';
  dataFrom: any = '' ;
  dataTo: any = '' ;
  popualrPeriods: Array<string> = ['last 2 weeks', 'last month', 'last 6 months', 'other'];
  graph:  Array<string> = ['all', 'short', 'detailed', 'none'];
  repos: string[] = new Array<string>();
  addRepo(): void {
    this.repos.push(this.repUrl);
  }
}
