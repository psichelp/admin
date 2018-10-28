import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        // @ts-ignore
        return String.fromCharCode('0x' + p1);
      }));
  }

  set(filePath, contents) {

    contents = this.b64EncodeUnicode(contents)

    this.get(filePath).subscribe((data) => {
      let sha = data.sha;
      let apiUrl = `${this.apiRoot}${filePath}`;
      let body = {
        "message": "Commit automático",
        "content": contents,
        "sha": sha
      }
      console.log(body);
      // Atualiza um arquivo existente
      this.http.put(apiUrl, body, this.httpOptions)
        .pipe(map(res => {
          let results = res;
          return results;
        }))
        .subscribe((data) => {
          console.log(data);
        });
    },
      error => {
        let body = {
          "message": "Commit automático",
          "content": contents
        }
        let apiUrl = `${this.apiRoot}${filePath}`;
        // Cria um novo arquivo
        this.http.put(apiUrl, body, this.httpOptions)
          .pipe(map(res => {
            let results = res;
            return results;
          }))
          .subscribe((data) => {
            console.log(data);
          });
      }
    );
  }
}


