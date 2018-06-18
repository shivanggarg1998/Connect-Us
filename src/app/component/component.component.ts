import { ComponentserviceService } from './../componentservice.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
  <h2>hello there</h2>
  <ul>
  <li *ngFor="let course of courses">{{course}}</li>
  </ul>
  `,
})
export class ComponentComponent  {

  title ="udemy";
  courses;
  constructor(service :ComponentserviceService)
  {
      this.courses = service.getcourses();
  }

 

}
