import { Component, OnInit } from '@angular/core';
import { Wodproof_init } from '../../../assets/js/wodproof';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      Wodproof_init();
  }
}
