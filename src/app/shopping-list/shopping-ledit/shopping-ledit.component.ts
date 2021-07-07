import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingActions from '../store/shopaction.actions';
import * as fromApp from '../../app.reducers';

@Component({
  selector: 'app-shopping-ledit',
  templateUrl: './shopping-ledit.component.html',
  styleUrls: ['./shopping-ledit.component.css']
})
export class ShoppingLeditComponent implements OnInit {
  @ViewChild('f') formedit :NgForm;

  subscription : Subscription;
  editmode = false;
  edititem : Ingredient;


  constructor(private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {

    this.subscription = this.store.select('shoppingList').subscribe(
      (data)=> {
        if(data.editIngredientIndex > -1)
        {
          this.edititem = data.editIngredient;
          this.editmode = true;
          this.formedit.setValue({
            name : this.edititem.name,
            amount : this.edititem.amount,
          })
        }
        else{
          this.editmode = false;
        }

      }
    )


  }

  addingredient(form){
    const value =  form.value;
    if(this.editmode)
    {
      this.store.dispatch(new shoppingActions.UpdateIngredient({ingredient: new Ingredient(value.name , value.amount )}));
    }
    else
    {
      this.store.dispatch(new shoppingActions.AddIngredient(new Ingredient(value.name , value.amount )));
    }
    this.editmode = false;
    this.formedit.reset();
  }

  deleteingredient(){
    this.store.dispatch(new shoppingActions.DeleteIngredient());
    this.formedit.reset();
    this.editmode = false;
  }

  clearingredient(){
    this.editmode = false;
    this.formedit.reset();

  }
  ngOnDestroy(){
    this.store.dispatch(new shoppingActions.StopEdit());
    this.subscription.unsubscribe();
  }

}
