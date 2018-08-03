import { Component, OnInit } from '@angular/core';
import {EditorService} from '../../services/editor.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
    providers: [ EditorService ]
})
export class EditorComponent implements OnInit {

    model: any = {};

  constructor(private http: HttpClientModule) { }

  ngOnInit() {
  }

    onSubmit() {
        alert(JSON.stringify(this.model));
    }

}
