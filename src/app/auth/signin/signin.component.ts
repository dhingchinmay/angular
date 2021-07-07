
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../app.reducers';
import * as AuthActions from '../store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.DoSignIn({username: email, password : password}));
    // this.authservice.signinUser(email, password);
  }

}
