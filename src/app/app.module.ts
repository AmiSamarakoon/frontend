import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { TrainerComponent } from './trainer/trainer.component';
import {AuthInterceptor } from './auth/auth.interceptor';
import { DepManagerComponent } from './dep-manager/dep-manager.component';
import { SignupComponent } from './signup/signup.component';
import { CreateTrainingSessionComponent } from './create-training-session/create-training-session.component';
import { TrainingSessionListComponent } from './training-session-list/training-session-list.component';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { UpdateTrainingSessionComponent } from './update-training-session/update-training-session.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddVirtualMachineComponent } from './add-virtual-machine/add-virtual-machine.component';
import { VirtualMachineListComponent } from './virtual-machine-list/virtual-machine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManagerComponent,
    TrainerComponent,
    DepManagerComponent,
    SignupComponent,
    CreateTrainingSessionComponent,
    TrainingSessionListComponent,
    TrainingSessionDetailsComponent,
    UpdateTrainingSessionComponent,
    TrainerListComponent,
    AddVirtualMachineComponent,
    VirtualMachineListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide :HTTP_INTERCEPTORS,useClass : AuthInterceptor, multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
