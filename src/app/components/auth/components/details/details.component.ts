import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Todo} from '../../../../models/todo';
import {TodoService} from '../../../../services/todo.service';
import {mergeMap} from 'rxjs/operators';
import {animate, style, transition, trigger} from '@angular/animations';

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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  route: ActivatedRoute;
  todoService: TodoService;
  todoId: number;
  todo: Todo;

  constructor(route: ActivatedRoute, todoService: TodoService) {
    this.route = route;
    this.todoService = todoService;
  }

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.route.params.subscribe(param => {
      this.todoId = param.id;
    });

    this.route.params.pipe(
      mergeMap(param => {
        this.todoId = param.id;
        return this.todoService.findById(this.todoId);
      })
    ).subscribe(perf => {
      this.todo = perf;
    });

  }

}
