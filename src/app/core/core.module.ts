import { AppRouting } from './../approuting.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';

@NgModule({
  declarations:[
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    AppRouting,

  ],
  providers: [
     { provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor, multi: true},

     ],
  exports:[
    HeaderComponent
  ]
})

export class CoreModule {

}
