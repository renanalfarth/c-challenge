import { Component, OnInit, ViewChild } from '@angular/core';
import { EnrolleeService } from '../../services/enrollee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Enrollee } from '../../interfaces/enrollee.interface';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit{

  items: any;
  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'active', 'actions'];
  searchTerm: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private enrolleeService: EnrolleeService) { }

  ngOnInit(): void {
    this.getEnrollees();
  }

  private getEnrollees(): void {
    this.enrolleeService.getEnrollees().subscribe(result => {
      this.items = new MatTableDataSource<Enrollee>(result);
      this.items.paginator = this.paginator;
    });
  }

}
