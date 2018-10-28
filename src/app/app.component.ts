import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { DengodbService } from './dengodb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

  constructor(private github: GithubService, private dengodb: DengodbService){

    // let r = this.github.set('/zzz', 'que beleza!');
    let r = this.dengodb.insert('/zzz');
    
    console.log(r);

  }
}
