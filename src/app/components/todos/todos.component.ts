import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todoService.deleteTodo(todo);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((t) => {
      this.todos.push(t);
    });
  }
}
