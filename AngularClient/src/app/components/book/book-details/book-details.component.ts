import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faBook, faClock, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DetailBaseComponent } from '../../shared/base/detail-base.component';
import { FormHelper } from '../../shared/form-helper';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent extends DetailBaseComponent implements OnInit {

  @Input() book: Book | undefined | null;

  readonly faTasks = faTasks;
  readonly faUser = faUser;
  readonly faBook = faBook;
  readonly faClock = faClock;

  bookForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    publicationYear: new FormControl<number | null>(null, [Validators.required]),
    isbn: new FormControl('', [Validators.required])
  });

  constructor(private service: BookService,
    public formHelper: FormHelper,
    public activeModal: NgbActiveModal,
    private notificationService: NotificationService) {
    super()
  }

  ngOnInit(): void {
    this.patchForm();
  }

  patchForm(): void {
    if (this.book) {
      this.bookForm.patchValue(this.book);
    }
  }

  save(): void {
    if (this.book && this.book.id != null && this.book.id > 0) {
      // For edit
      this.book.title = this.bookForm.value.title!;
      this.book.author = this.bookForm.value.author!;
      this.book.publicationYear = this.bookForm.value.publicationYear!;
      this.book.isbn = this.bookForm.value.isbn!;

      this.UpdateBook();
    } else {
      // For add new
      if (this.bookForm.valid) {
        const newBook: Book = {
          title: this.bookForm.value.title!,
          author: this.bookForm.value.author!,
          publicationYear: this.bookForm.value.publicationYear!,
          isbn: this.bookForm.value.isbn!
        }

        this.createBook(newBook);
      } else {
        this.bookForm.markAllAsTouched();
      }
    }
  }

  private UpdateBook() {
    this.service.updateBook(this.book!).subscribe({
      error: err => {
        if (err === 'Unauthorized!') {
          this.closeModal();
        } else {
          this.notificationService.error(err);
        }
      }, complete: () => {
        this.activeModal.close();
        this.onUpdate.emit();
      }
    });
  }

  private createBook(book: Book): void {
    this.service.createBook(book).subscribe({
      error: err => {
        if (err === 'Unauthorized!') {
          this.closeModal();
        } else {
          this.notificationService.error(err);
        }
      }, complete: () => {
        this.activeModal.close();
        this.onUpdate.emit();
      }
    });
  }

  closeModal(): void {
    this.activeModal.close();
  }
}