import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm!: FormGroup;
  picker: any;
  id!: string;
  user: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: UserService, private router:Router) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname : ['', [Validators.required, Validators.minLength(2)]],
      lastname : ['', [Validators.required, Validators.minLength(2)]],
      email : ['', [Validators.required, Validators.email]],
      birthday : ['', [Validators.required]]
    });
    this.service.getUser(this.id).subscribe(response => {
      this.user = response
      this.userForm.controls['firstname'].setValue(this.user.firstname)
      this.userForm.controls['lastname'].setValue(this.user.lastname)
      this.userForm.controls['email'].setValue(this.user.email)
      this.userForm.controls['birthday'].setValue(this.user.birthday)
    }, error => {
      this.router.navigate(['/error'])
    })
  }

  updateUser(){
    this.service.updateUser(this.id, this.userForm.value).subscribe(() => {
      this.router.navigate(['/show-users'])
    })
  }

}
