import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class LoginService implements OnInit {

    constructor( 
        private http: HttpClient) { }
  
    ngOnInit() {
    }

    public login(user: string, password: string) {
        const params = new HttpParams({
          fromObject: {
            grant_type: 'password',
            username: user,
            password: password,
            scope: 'if no scope just delete this line',
          }
        });

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Basic ' + btoa('yourClientId' + ':' + 'yourClientSecret')
          })
        };

        this.http.post('https://localhost:44319/token', params, httpOptions)
          .subscribe(
            (res: any) => {
              console.log(res);
              sessionStorage.setItem('access_token', res.access_token);
              sessionStorage.setItem('refresh_token', res.refresh_token);
            },
            err => console.log(err)
          );
      }
  
  }
  