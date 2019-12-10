import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {TransactionElement} from '../data/transaction-history';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['date', 'title', 'category', 'amount'];
  dataset: TransactionElement[];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line:variable-name
  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this._data.tran.subscribe(res => {
      this.dataset = res;
      this.dataSource = new MatTableDataSource<TransactionElement>(this.dataset);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this._data.changeTrans(this.dataset);
  }


  removeItem(i) {
    this.dataset.splice(i, 1);
    this._data.changeTrans(this.dataset);
  }
}
