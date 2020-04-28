import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  registerUsers = [];
  constructor(private regisr: RegisterService) { }

  ngOnInit() {
    this.regisr.getEmp1().subscribe(data => {
      console.log(data, 'dataaaa');
      this.registerUsers = data.data;
    });
  }
}
