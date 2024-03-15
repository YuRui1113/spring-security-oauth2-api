import { Component, OnInit } from '@angular/core';
import { faEdit, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PaginateBaseComponent } from '../../shared/base/paginated.component';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends PaginateBaseComponent implements OnInit {

  readonly faPlusCircle = faPlusCircle;
  readonly faEdit = faEdit;
  readonly faTrashAlt = faTrashAlt;

  modalOptions: NgbModalOptions;

  constructor(private service: BookService,
    private modalService: NgbModal,
    private notificationService: NotificationService) {
    super();
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit(): void {
    this.fetchPageData(0);
  }

  override fetchPageData(pageIndex: number): void {
    this.service.getBooks(pageIndex, this.pageSize).subscribe(res => {
      this.pageData = res;
    });
  }

  addNewBook(): void {
    const modalRef = this.modalService.open(BookDetailsComponent, this.modalOptions);
    modalRef.componentInstance.isEdit = true;
    modalRef.componentInstance.title = "Add a new book";

    modalRef.componentInstance.onUpdate.subscribe((data: any) => {
      this.notificationService.success('A new book was added successfully!');
      this.refreshCurrentPage();
    });
  }

  editBook(book: Book): void {
    const modalRef = this.modalService.open(BookDetailsComponent, this.modalOptions);
    modalRef.componentInstance.isEdit = true;
    modalRef.componentInstance.title = "Edit the book";
    modalRef.componentInstance.book = book;

    modalRef.componentInstance.onUpdate.subscribe((data: any) => {
      this.notificationService.success('The book was updated successfully!');
      this.refreshCurrentPage();
    });
  }

  deleteBook(book: Book): void {
    const modalRef = this.modalService.open(ConfirmComponent, this.modalOptions);
    modalRef.componentInstance.title = 'Delete Confirmation';
    modalRef.componentInstance.prompt = `Do you want to delete book with title "${book.title}"`;
    modalRef.componentInstance.info = 'Press Cancel to exit, and press OK to delete the book!';
    modalRef.componentInstance.data = book;

    modalRef.componentInstance.onConfirmed.subscribe((data: any) => {
      this.service.deleteBook(book.id!).subscribe({
        error: err => {
          console.error(err);
        }, complete: () => {
          this.notificationService.success('The book was deleted successfully!');
          this.refreshCurrentPage();
        }
      });
    });
  }
}