import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {

  @Input() user : User;
  @Output() childEvent = new EventEmitter<User>()

  onBtnClick(){
    this.childEvent.emit(this.user)
  }
}
