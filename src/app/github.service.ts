import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiRoot = 'https://api.github.com/repos/psichelp/gestao/contents'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token 6df2c789a6db973d0cbd05671bfae82efffe7f9d'
    })
  };


  constructor(private http: HttpClient) { }

  get(filePath): Observable<any> {
    let apiUrl = `${this.apiRoot}${filePath}`;
    return this.http.get(apiUrl)
      .pipe(map(res => {
        let results = res;
        return results;
      }));
  }

  set(filePath, contents) {
    this.get(filePath).subscribe((data) => {
      // console.log(data);
      let sha = data.sha;

      let apiUrl = `${this.apiRoot}${filePath}`;
      let body = {
        "message": "my commit message",
        "content": btoa(contents),
        "sha": sha
      }
      console.log(body);

      this.http.put(apiUrl, body, this.httpOptions)
        .pipe(map(res => {
          let results = res;
          return results;
        }))
        .subscribe((data) => {
          console.log(data);
        });
    });
  }
}


