import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nombre = '';

  constructor(public wsService: WebsocketService, public router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.wsService.loginWS(this.nombre).then(() => {
      this.router.navigateByUrl('/mensajes');
    });
  }


}
