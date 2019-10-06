import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../../../models/todo';
import {TodoService} from '../../../../services/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() todo: Todo;

  @Output() onDelete = new EventEmitter<boolean>();

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
  }


  deleteTodo(todo: Todo) {
    this.todoService.deleteById(todo.id).subscribe(perf => {
      this.onDelete.emit(true);
    }, err => {
      alert('Error');
    }, () => {
    });
  }

  updateDone(todo: Todo) {
    todo.done = !todo.done;
    this.todoService.update(todo.id, todo).subscribe(perf => {
      todo = perf;
    }, err => {
    }, () => {
    });
  }

}
