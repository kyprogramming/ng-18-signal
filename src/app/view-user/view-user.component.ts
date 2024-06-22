import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
  constructor(public userService:UserService){}
}
