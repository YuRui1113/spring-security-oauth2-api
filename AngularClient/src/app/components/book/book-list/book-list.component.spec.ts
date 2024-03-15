import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { BookService } from 'src/app/services/book.service';
import { of } from 'rxjs';

describe('BookListComponent', () => {
  let service: BookService;
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule, FontAwesomeModule],
      declarations: [BookListComponent, PaginationComponent]
    });

    service = TestBed.inject(BookService);
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageData with the data returned from service', () => {
    const pageData = {
      content: [
        {
          "id": 153,
          "title": "Test Book 1",
          "author": "Taylor",
          "publicationYear": 2024,
          "isbn": "990-28-79-12345-6"
        },
        {
          "id": 63,
          "title": "9803 North Millworks Road",
          "author": "Clifford Wolitzer",
          "publicationYear": 2012,
          "isbn": "989-28-3705-987-7"
        },
        {
          "id": 62,
          "title": "No More Lightning",
          "author": "Charles Fenimore",
          "publicationYear": 2011,
          "isbn": "989-28-79-82749-6"
        },
        {
          "id": 61,
          "title": "Can I Be Honest?",
          "author": "Carolyn Segal",
          "publicationYear": 2010,
          "isbn": "989-28-79-05670-4"
        },
        {
          "id": 60,
          "title": "The Mallemaroking",
          "author": "Burton Malamud",
          "publicationYear": 2009,
          "isbn": "989-28-79-69807-4"
        },
        {
          "id": 59,
          "title": "Rystwyth",
          "author": "Bravig Lewisohn",
          "publicationYear": 2008,
          "isbn": "989-28-79-69807-2"
        },
        {
          "id": 58,
          "title": "Portmeirion",
          "author": "Bianca Thompson",
          "publicationYear": 2007,
          "isbn": "989-28-654-5018-9"
        },
        {
          "id": 57,
          "title": "Zero over Twelve",
          "author": "Bernard Hopf",
          "publicationYear": 2006,
          "isbn": "989-28-79-05638-4"
        },
        {
          "id": 56,
          "title": "Thatchwork Cottage",
          "author": "Arturo Hijuelos",
          "publicationYear": 2005,
          "isbn": "989-28-79-82197-5"
        },
        {
          "id": 55,
          "title": "Post Alley",
          "author": "Arthur McCrumb",
          "publicationYear": 2004,
          "isbn": "989-28-79-18127-7"
        }
      ],
      totalPages: 2,
      totalElements: 13,
      size: 10,
      number: 0,
      last: false,
      first: true,
      numberOfElements: 10,
      empty: false
    };
    spyOn(service, 'getBooks').and.callFake(() => {
      return of(pageData);
    });

    component.ngOnInit();

    expect(component.pageData).toBe(pageData);
  });
});
