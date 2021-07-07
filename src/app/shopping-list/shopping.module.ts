import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShoppingLeditComponent } from "./shopping-ledit/shopping-ledit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingLeditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})

export class ShoppingModule { }
