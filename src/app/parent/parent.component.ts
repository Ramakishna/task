import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  registerUsers = [];
  // loginForm: FormGroup;
  user: User;
  constructor(private regisr: RegisterService) {
    this.user = new User();

   }
ngOnInit() {
}
btnsubmit(form) {
  // this.home = true;
  // this.register = false;
  console.log(form.value, 'form getting');
  this.regisr.register(form.value).subscribe((data) => {
    console.log(data);
  });
  // this.homeClick();
  // this.registerUsers.push(form.value);
  // console.log(this.registerUsers);
  this.user = {
    userName: '',
    emailID: '',
    phoneNo: '',
    city: '',
    designation: ''
  };
}
}
