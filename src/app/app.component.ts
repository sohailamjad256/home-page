import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  selectedValue: any = null;
  username:any = null;
  password:any =null;
  file:any =null;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
  }
  onSubmit() : void {
    // this.http.post(
    //   'https://ng-complete-guide-f32f8.firebaseio.com/posts.json',
    //
    // )
  }
}
