import { Order, PostOrderService } from './../../services/post-order.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() products:any;

  closeResult: string="";
  
  constructor(private modalService: NgbModal,
    private service:PostOrderService,
    private toastr:ToastrService) {}
    
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submitOrder(form:any,modal:any){
     var data= form.value;
      var products:any[]=[];
      var total=0;
      this.products.forEach((el:any) => {
        products.push({
          name:el.name,
          price:el.price,
          quantity:el.quantity
        });
        total+=el.price*el.quantity;
      });

     data.products=products;
     data.total=total;
    this.service.postOrder(data);
    localStorage.clear();
    this.toastr.success("","Order successfully sent!",{
      timeOut: 1800,
    });
    modal.dismiss('Cross click');
  }

}

