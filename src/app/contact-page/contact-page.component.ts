import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostMessageService } from '../services/post-message.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private service:PostMessageService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  sendMessage(form:any){

    
    this.service.postMessage(form.value);
    this.toastr.success("","Message successfully sent!",{
      timeOut: 1500,
    });
  }

}
