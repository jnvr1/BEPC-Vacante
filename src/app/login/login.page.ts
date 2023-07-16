import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/shared/authentication-service';
import { IonLoaderService } from '../services/ion-loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private ionLoaderService: IonLoaderService
  ) {}
  ngOnInit() {}
  logIn(email: any, password: any) {

    this.authService
      .SignIn(email.value, password.value).then(()=>{
        this.ionLoaderService.autoLoader().then(()=>{
          this.router.navigate(["dashboard"])
        });

      })

  }
}
