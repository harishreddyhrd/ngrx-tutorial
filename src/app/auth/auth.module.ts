import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_KICKSTART_SELECTOR } from '../store/auth-state/auth.selectors';
import { theAuthReducer } from '../store/auth-state/auth.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_KICKSTART_SELECTOR, theAuthReducer),
    AuthRoutingModule,
  ],
})
export class AuthModule {}
