import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope; 
  faPhone = faPhone; 


  constructor() { }

  ngOnInit(): void {
  }

}
