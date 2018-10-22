import {Component, OnInit} from '@angular/core';
import {Users} from '../../services/editor.service';
import {Wodproof_init} from '../../../assets/js/wodproof';
import {HttpClient} from '@angular/common/http';
// import {CurrentUsersService} from '../../services/current-users.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    user: Users[] = [];

    constructor(private http: HttpClient) {
    }



    ngOnInit() {

        this.http.get('http://165.227.140.66/competitions.json').subscribe((data: Users[]) => this.user = data);

        Wodproof_init();
    }

}
