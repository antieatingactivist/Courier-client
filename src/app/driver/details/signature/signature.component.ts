import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'driver-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  @Output() showSignatureScreen = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.showSignatureScreen.emit(false);
  }

}
