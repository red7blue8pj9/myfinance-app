import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TransactionElement} from './components/data/transaction-history';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // tslint:disable-next-line:variable-name
  private inital_data: TransactionElement[] = [
    {date: '10/10/2019', title: 'Apple', amount: 1.99, category: 'Food'},
    {date: '10/10/2019', title: 'Orange', amount: 4, category: 'Food'},
    {date: '10/10/2019', title: 'Lamp', amount: 6.99, category: 'Food'},
    {date: '10/10/2019', title: 'Cloth', amount: 29.99, category: 'Shopping'},
    {date: '10/10/2019', title: 'Rice', amount: 7.99, category: 'Food'},
    {date: '10/11/2019', title: 'Potato', amount: 3.99, category: 'Food'},
    {date: '10/1/2019', title: 'Apple', amount: 2.99, category: 'Food'},
    {date: '10/10/2019', title: 'Cloth', amount: 15.99, category: 'Shopping'},
    {date: '10/12/2019', title: 'Uber', amount: 7, category: 'Transport'},
    {date: '10/10/2019', title: 'Coconut', amount: 3.99, category: 'Food'},
    {date: '10/12/2019', title: 'Pork Belly', amount: 9.45, category: 'Food'},
    {date: '10/10/2019', title: 'Taxi', amount: 10, category: 'Shopping'},
    {date: '10/12/2019', title: 'Lyft', amount: 5.5, category: 'Transport'},
    {date: '10/12/2019', title: 'Mango', amount: 2, category: 'Food'},
    {date: '10/11/2019', title: 'Movie', amount: 15.99, category: 'Entertainment'},
    {date: '10/11/2019', title: 'Uber', amount: 11.99, category: 'Transport'},
    {date: '10/11/2019', title: 'Bus', amount: 1.45, category: 'Transport'},
    {date: '10/11/2019', title: 'Apple', amount: 2.99, category: 'Food'},
    {date: '10/10/2019', title: 'Rice', amount: 2, category: 'Food'},
    {date: '10/10/2019', title: 'Potato', amount: 4, category: 'Food'},
  ];
  private trans = new BehaviorSubject<any>(this.inital_data);
  tran = this.trans.asObservable();

  constructor() {
  }

  changeTrans(tran) {
    this.trans.next(tran);
  }

}
