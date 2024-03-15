import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details-page-buttons',
  templateUrl: './details-page-buttons.component.html',
  styleUrls: ['./details-page-buttons.component.scss']
})
export class DetailsPageButtonsComponent implements OnInit {

  @Input() isEdit = false;
  @Input() needCancel = false;

  @Output() onSave: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.onSave.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }

  close(): void {
    this.onClose.emit();
  }
}