import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id!: string;
  user: any;

  constructor(private route: ActivatedRoute, private service: UserService) { 
    this.ngOnInit();
    this.service.getUser(this.id).subscribe(response => {
      this.user = response;
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

}
