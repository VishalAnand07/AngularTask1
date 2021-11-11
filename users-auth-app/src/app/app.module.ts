import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCode } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

@NgModule({
  declarations: [       // Custom Components | Directives | Pipes
    AppComponent, UsersComponent, UserInfoComponent,
    UserImgComponent, LifeCycleComponent, PipeDemoComponent,
    CountryCode,
    ReversePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [            // Built-in as well as Custom Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],        // Register the Service
  bootstrap: [AppComponent]
})
export class AppModule { }
