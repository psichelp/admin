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

    //  let r = this.github.set('/app/src/assets/data/test.json', '[]');
    let r = this.dengodb.insert({msg: "oi danado rapaaaaaz"}, 'test');
    
    console.log(r);

  }
}
