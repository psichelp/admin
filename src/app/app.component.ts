import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

  constructor(private github: GithubService){
    // this.github.get('/README.md').subscribe ( (data) => {
    //   console.log(data);
    // });

    let r = this.github.set('/README.md', 'que beleza!');
    console.log(r);

  }
}
