import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  userList: any;

  constructor(private service: UserService) { 
    this.service.getUsers().subscribe(response => {
      this.userList = response;
    })
  }

  ngOnInit(): void {
  }

}
