import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  repUrl = '';
  repos: string[] = new Array<string>();
  addRepo(): void {
    this.repos.push(this.repUrl);
    console.log(this.repUrl);
  }
}
