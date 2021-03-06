import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit, AfterViewInit {
  isLoading = false;
  orderBy = '';
  search: string = '';
  searchAfter: string = '';
  totalRows = 0;
  pageSize = 25;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = [];
  columns = [
    { key: 'id', name: 'ID', attr: 'string' },
    { key: 'username', name: 'Username', attr: 'string' },
    { key: 'created', name: 'Created', attr: 'date-2' },
    { key: 'lastActive', name: 'Last Active', attr: 'date-2' },
    { key: 'knownAs', name: 'Known As', attr: 'string' },
    { key: 'dateOfBirth', name: 'DOB', attr: 'date-1' },
    { key: 'age', name: 'Age', attr: 'string' },
    { key: 'photoUrl', name: 'Photo URL', attr: 'string' },
    // { key: 'introduction', name: 'Introduction', attr: 'string' }
  ];

  dataSource: MatTableDataSource<Member> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.setTable();
    this.load();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  setTable() {
    for (var col of this.columns) {
      this.displayedColumns.push(col.key);
    }
  }

  load() {
    this.isLoading = true;
    this.memberService.getMembers().subscribe({
      next: members => {
        console.log(members);
        this.dataSource.data = members;
        this.searchAfter = this.search;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  doSort(event: any) {
    this.orderBy = event.active + '+' + event.direction;
  }

  doFilter() {
    this.currentPage = 0;
    this.searchAfter = this.search;
    this.dataSource.filter = this.searchAfter;
  }
}
