import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
})
export class AjaxComponent {
  start() {
    const githubUsers = `https://api.github.com/users?per_page=2`;

    const users = ajax(githubUsers);

    const subscribe = users.subscribe({
      next: (res) => console.log(JSON.stringify(res.response, null, 2)),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}
