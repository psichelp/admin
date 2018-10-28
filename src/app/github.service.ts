import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiRoot = 'https://api.github.com/repos/psichelp/gestao/contents'

  constructor(private http: HttpClient) { }

  get(filePath): Observable<any> {
    let apiUrl = `${this.apiRoot}${filePath}`
    return this.http.get(apiUrl)
      .pipe(map(res => {
         let results = res;
         return results;
      }));
  }

}
