import {Component, OnInit} from '@angular/core';
import {Competition} from '../../services/qualifiers.service';
import {Wodproof_init} from '../../../assets/js/wodproof';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-editor',
    templateUrl: './qualifiers.component.html',
    styleUrls: ['./qualifiers.component.scss']
})
export class QualifiersComponent implements OnInit {

    user: Competition[];

    constructor(private http: HttpClient) {
    }



    ngOnInit() {

        this.http.get<Competition[]>('http://165.227.140.66/competitions.json').subscribe((data: Competition[]) => this.user = data);

        console.log(this.user);

        Wodproof_init();
    }

}
