import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormHelper } from '../../shared/form-helper';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsPageButtonsComponent } from '../../shared/details-page-buttons/details-page-buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgbModule, FontAwesomeModule, FormsModule,
        ReactiveFormsModule],
      declarations: [BookDetailsComponent, DetailsPageButtonsComponent],
      providers: [FormHelper, NgbActiveModal, MatSnackBar]
    });
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the formGroup with 4 fields', () => {
    expect(component.bookForm.contains('title')).toBeTruthy();
    expect(component.bookForm.contains('author')).toBeTruthy();
    expect(component.bookForm.contains('publicationYear')).toBeTruthy();
    expect(component.bookForm.contains('isbn')).toBeTruthy();
  });

  it('should make the title control required', () => {
    let control = component.bookForm.get('title');
    control!.setValue('');
    expect(control!.valid).toBeFalsy();
  });

  it('should make the author control required', () => {
    let control = component.bookForm.get('author');
    control!.setValue('');
    expect(control!.valid).toBeFalsy();
  });

  it('should make the publicationYear control required', () => {
    let control = component.bookForm.get('publicationYear');
    control!.setValue(null);
    expect(control!.valid).toBeFalsy();
  });

  it('should make the isbn control required', () => {
    let control = component.bookForm.get('isbn');
    control!.setValue('');
    expect(control!.valid).toBeFalsy();
  });

  it('should make the title control valid if input acceptable title', () => {
    const control = component.bookForm.get('title');
    control!.setValue('Ballinby Boys');
    expect(control!.valid).toBeTruthy();
  });

  it('should make the author control valid if input acceptable author', () => {
    const control = component.bookForm.get('author');
    control!.setValue('Taylor Yu');
    expect(control!.valid).toBeTruthy();
  });

  it('should make the publicationYear control valid if input acceptable publicationYear', () => {
    const control = component.bookForm.get('publicationYear');
    control!.setValue(2024);
    expect(control!.valid).toBeTruthy();
  });

  it('should make the isbn control valid if input acceptable isbnv', () => {
    const control = component.bookForm.get('isbn');
    control!.setValue('990-28-79-12345-6');
    expect(control!.valid).toBeTruthy();
  });
});