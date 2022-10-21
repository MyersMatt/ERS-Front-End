import {Injectable} from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authUrl: string = `${environment.baseUrl}/auth`;
  currentUser?: User

  constructor(private http: HttpClient) {
  }

  register(email: string, username: string, password: string): void {
    const payload = {
      email: email,
      username: username,
      password: password
    }

    this.http.post<User>(
      `${this.authUrl}/register`,
      payload,
      {
        headers: environment.headers
      })
      .subscribe((user) => {
        this.currentUser = user;
      });
  }
}
