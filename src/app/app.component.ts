import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './models/user';
import * as XLSX from 'xlsx'; 
import { RegisterService } from './services/register.service';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileName = 'list.xlsx';

  title = 'project';
  login = false;
  user: User;
  register = false;
  home = false;
  registerUsers = [];
  loginForm: FormGroup;

  constructor( private router: Router, private regisr: RegisterService) {
    this.user = new User();
    this.router.navigate(['/child']);

  }
  registerClick() {
    this.router.navigate(['/parent']);
  }
  homeClick() {
  }
}
