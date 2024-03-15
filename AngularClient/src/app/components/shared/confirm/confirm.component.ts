import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBackspace, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  readonly faBackspace = faBackspace;
  readonly faCheckCircle = faCheckCircle;

  @Input() title!: string;
  @Input() prompt!: string;
  @Input() info!: string;
  @Input() data: any;
  @Output() onConfirmed: EventEmitter<any> = new EventEmitter();
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.activeModal.close();
    this.onConfirmed.emit(this.data);
  }
}