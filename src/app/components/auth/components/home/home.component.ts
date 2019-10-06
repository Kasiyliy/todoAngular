import {Component, OnInit} from '@angular/core';
import {Todo} from '../../../../models/todo';
import {TodoService} from '../../../../services/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Pagination} from '../../../../utils/pagination';

@Component({
  animations: [
    trigger('easeInOut', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s ease-in-out', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('0.5s ease-in-out', style({
          opacity: 0
        }))
      ])
    ])
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = true;
  pagination: Pagination<Todo>;
  todos: Todo[] = [];
  todoForm: FormGroup;

  constructor(public todoService: TodoService, public builder: FormBuilder) {
  }

  ngOnInit() {
    this.todoForm = this.builder.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
    });
    this.fetchAll();
  }

  fetchAll() {
    this.loading = true;
    this.todoService.getAllByPage(0).subscribe(perf => {
      this.pagination = perf;
      this.todos = this.pagination.content;
    }, err => {
      window.alert('Error!');
    }, () => {
      setTimeout(() => {
        this.loading = false;
      }, 2000);

    });
  }

  saveTodo() {
    this.loading = true;
    const todo: Todo = this.todoForm.getRawValue();
    this.todoService.save(todo).subscribe(perf => {
      this.todoForm.reset();
      this.fetchAll();
    }, err => {
      console.log(err);
    }, () => {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }


  changePage(pagination: Pagination<Todo>, isNext: boolean, page?: any) {
    let pageNumber = pagination.pageable.pageNumber;
    if (page !== null) {
      pageNumber = page;
    } else {
      if (isNext && !pagination.last) {
        pageNumber = pageNumber + 1;
      } else if (!isNext && !pagination.first) {
        pageNumber = pageNumber - 1;
      }
    }

    this.todoService.getAllByPage(pageNumber).subscribe(data => {
      this.pagination = data;
      this.todos = this.pagination.content;
    }, err => {

    });
  }

  createRange(pagination: Pagination<Todo>) {
    const pages = [];

    const linkNumbers = 9;
    const currentPage = pagination.pageable.pageNumber;
    const totalPages = pagination.totalPages;


    for (let i = currentPage - 4; i < currentPage + 5; i++) {
      if (i >= 0 && i < totalPages) {
        pages.push(i);
      }
    }

    return pages;
  }

  deleted($event: boolean) {
    this.fetchAll();
  }
}
