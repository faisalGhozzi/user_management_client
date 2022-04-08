import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id!: string;
  user: any;
  firstname!: string;
  lastname!:string;
  email!:string;
  birthday!:string;

  constructor(private route: ActivatedRoute, private service: UserService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.service.getUser(this.id).subscribe(response => {
      this.user = response;
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.email = this.user.email;
      this.birthday = this.user.birthday;
    }, error => {
      this.router.navigate(['/error'])
    });
  }

}
