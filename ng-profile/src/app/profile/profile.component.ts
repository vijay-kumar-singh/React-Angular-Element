import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ProfileComponent {
  @Input() username = 'xcv';
  @Input() bookingcode = 'xcvxcv';

  @Output('testFn') testFunction = new EventEmitter<any>();

  constructor() {
  }

  testFn() {
    let user = {
      "username": this.username,
      "bookingcode": this.bookingcode
    };
    this.testFunction.emit(user)
    console.log('emitting event from Angular');
  }
}
