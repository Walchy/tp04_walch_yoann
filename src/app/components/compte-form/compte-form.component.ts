import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../../../../../tp04-walch-yoann/src/app/components/client.interface';


@Component({
  selector: 'app-compte-form',
  templateUrl: './compte-form.component.html',
  styleUrls: ['./compte-form.component.scss']
})

export class CompteFormComponent implements OnInit {
  public client: Client = {} as Client;
  public showPasswordConfirmationMessageInvalid: boolean = false;

  constructor(public router:Router) { }

  onSubmit(){
    let passwordIsValid: boolean = this.validation();
    if(passwordIsValid){
      this.router.navigate(['/recapitulatif'], {queryParams: this.client});
    }
  }

  validation(): boolean {
    if(this.client.password !== this.client.passwordConfirmation){
      this.showPasswordConfirmationMessageInvalid = true;
      return false;
    }
    this.showPasswordConfirmationMessageInvalid = false;
    return true;
  }
  ngOnInit(): void {
    this.client.civilite = 'Monsieur';
  }


}
