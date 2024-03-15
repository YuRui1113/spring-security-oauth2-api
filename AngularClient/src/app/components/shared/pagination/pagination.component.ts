import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { PaginatedItemsView } from 'src/app/models/paginated-iitems-view';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pageData: PaginatedItemsView<Book> | undefined;
  @Output() onPage: EventEmitter<number> = new EventEmitter();

  currentPageIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  navigateToPage(pageIndex: number): void {
    this.onPage.emit(pageIndex);
  }

  navigateToFirstPage(): void {
    // Page starts from 0
    this.navigateToPage(0);
  }

  navigateToPreviousPage(): void {
    this.navigateToPage(this.pageData!.number - 1);
  }

  navigateToNextPage(): void {
    this.navigateToPage(this.pageData!.number + 1);
  }

  navigateToLastPage(): void {
    this.navigateToPage(this.pageData!.totalPages - 1);
  }
}