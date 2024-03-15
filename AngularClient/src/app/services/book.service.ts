/**
 * File: src\app\services\book.service.ts
 * Project: AngularClient
 * Created Date: Monday, February 26th 2024, 11:04:07 am
 * Author: Rui Yu (yurui_113@hotmail.com)
 * -----
 * Last Modified: Wednesday, 13th March 2024 10:10:41 am
 * Modified By: Rui Yu (yurui_113@hotmail.com>)
 * -----
 * Copyright (c) 2024 Rui Yu
 * -----
 * HISTORY:
 * Date                     	By       	Comments
 * -------------------------	---------	----------------------------------------------------------
 * Monday, February 26th 2024	Rui Yu		Initial version
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { BaseService } from './base.service';
import { PaginatedItemsView } from '../models/paginated-iitems-view';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService {

  constructor(protected override http: HttpClient) {
    super(http);
    this.serviceContext = environment.restUrl + '/api/v1/book';
  }

  public getBooks(pageIndex: number, pageSize: number): Observable<PaginatedItemsView<Book>> {
    return this.http.get<PaginatedItemsView<Book>>(this.serviceContext,
      this.setParams({
        'page': pageIndex.toString(),
        'size': pageSize.toString()
      }))
      .pipe(catchError(this.handleError));
  }

  public createBook(Book: Book): Observable<void> {
    return this.http.post<void>(this.serviceContext, Book).pipe(catchError(this.handleError));
  }

  public updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.serviceContext}/${book.id}`, book).pipe(catchError(this.handleError));
  }

  public deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceContext}/${id}`).pipe(catchError(this.handleError));
  }

  public getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.serviceContext}/${id}`).pipe(catchError(this.handleError));
  }
}
