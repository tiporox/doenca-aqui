import { Component } from '@angular/core';
import { SessionService } from '../../@core/utils/session.service';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-sair',
  templateUrl: './index.component.html',
})
export class SairComponent {

  constructor(    
    private authService: AuthService,
    private session: SessionService,
    private router: Router
  ) {
    this.signOut();
  }


  signOut(): void {

    let user = this.session.get("user");

    if(user != null){
      this.authService.signOut();
      this.session.put("user", null);
      let menu  = this.session.get("menu");
      menu.pop();
      this.router.navigate(['/pages/noticias-e-estastisticas']);
    }

  }
}
