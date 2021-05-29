import { Injectable } from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root',
})
export class GitService {
    private username: string;
    private apiUrl: string = "https://api.github.com/users/";
    


  gitProfile(){
    return this.http.get(this.apiUrl + this.username )
  }

  //Git Repos
  gitRepos() {
    return this.http.get(this.apiUrl + this.username + "/repos" + "?access_token=")
  }
  constructor(private http: HttpClient) {
    console.log("GitService Ready");
    this.username = "sharon002"
  }
  updateUser(username: string) {
    this.username = username;
  }
}