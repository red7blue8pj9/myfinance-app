import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../data.service';
import {TransactionElement} from '../data/transaction-history';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';

function transformDate(date: Date) {
  return this.datePipe.transform(date, 'MM-dd-yyyy');
}

@Component({
  selector: 'app-data-new',
  templateUrl: './data-new.component.html',
  styleUrls: ['./data-new.component.css']
})
export class DataNewComponent implements OnInit {
  myForm: FormGroup;
  date: FormControl;
  title: FormControl;
  category: FormControl;
  amount: FormControl;
  dataset: TransactionElement[];
  newTransactionItem: TransactionElement;

  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder, private router: Router, private _data: DataService) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      date: this.date,
      title: this.title,
      category: this.category,
      amount: this.amount,
    });
  }


  addNewItem(myForm) {
    if (this.myForm.valid) {
      console.log('Form submitted');
      console.log(myForm.value);

      this.newTransactionItem = {
        date: this.myForm.value.date.toLocaleDateString(),
        title: this.myForm.value.title,
        category: this.myForm.value.category,
        amount: this.myForm.value.amount
      };
      this._data.tran.subscribe(res => {
        this.dataset = res;
        this.dataset.push(this.newTransactionItem);
      });
      this._data.changeTrans(this.dataset);
      this.myForm.reset();
    }
  }
}
