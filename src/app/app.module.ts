import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { HeaderComponent } from './header/header.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HeaderComponent,
    ShowUsersComponent,
    UserDetailComponent,
    UpdateUserComponent,
    HomePageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: 'add-user', component: AddUserComponent},
      {path: 'show-users', component: ShowUsersComponent},
      {path: 'show-users/:id', component: UserDetailComponent},
      {path: 'update-user/:id', component: UpdateUserComponent},
      {path: 'error', component: ErrorPageComponent},
      {path: '', component:HomePageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
