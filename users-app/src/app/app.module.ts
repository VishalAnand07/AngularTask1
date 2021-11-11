import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

@NgModule({
  declarations: [       // Custom Components | Directives | Pipes
    AppComponent, UsersComponent, UserInfoComponent, UserImgComponent, LifeCycleComponent
  ],
  imports: [            // Built-in as well as Custom Modules
    BrowserModule,
    FormsModule
  ],
  providers: [],        // Register the Service
  bootstrap: [AppComponent]
})
export class AppModule { }
