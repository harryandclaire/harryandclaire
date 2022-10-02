import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public hasAccess: boolean = false;
  public username: string = "";
  public password: string = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
  }

  public IsAuthenticated(): void {
    this.http.get<boolean>(this.baseUrl + 'authenticate', { params: { username: this.username, password: this.password } }).subscribe(result => {
      if (result) {
        this.router.navigateByUrl('\home');
      };
    }, error => console.error(error));
}
}
