import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiRoot = 'https://api.github.com/repos/psichelp/gestao/contents'

  constructor(private http:HttpClient) { }

  get(filePath){
    let apiUrl = `${this.apiRoot}$filePath`
    return this.http.get(apiUrl);
  }

}
