import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { TrainerComponent } from './trainer/trainer.component';
import { DepManagerComponent } from './dep-manager/dep-manager.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { CreateTrainingSessionComponent } from './create-training-session/create-training-session.component';
import { TrainingSessionListComponent } from './training-session-list/training-session-list.component';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { UpdateTrainingSessionComponent } from './update-training-session/update-training-session.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { AddVirtualMachineComponent } from './add-virtual-machine/add-virtual-machine.component';
import { VirtualMachineListComponent } from './virtual-machine-list/virtual-machine-list.component';
import { AuthGuard } from './services/auth.guard';




const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'auth/login', component: LoginComponent },
  { path : 'manager', component: ManagerComponent, canActivate:[AuthGuard] },
  { path : 'trainer', component:TrainerComponent},
  { path : 'trainerlist', component: TrainerListComponent},
  { path : 'view-trainer', component: ViewTrainerComponent},
  { path : 'depmanager',component:DepManagerComponent, canActivate:[AuthGuard]},
  { path : 'add-trainer', component:AddTrainerComponent, canActivate:[AuthGuard]},
  { path :'create-training-session',component: CreateTrainingSessionComponent,canActivate:[AuthGuard]},
  { path : 'trainingSessions',component: TrainingSessionListComponent},
  { path : 'training-session-details/:id', component: TrainingSessionDetailsComponent},
  { path :'update-training-session/:id', component: UpdateTrainingSessionComponent, canActivate:[AuthGuard]},
  { path :'add-virtual-machines', component:AddVirtualMachineComponent, canActivate:[AuthGuard]},
  { path :'virtualMachines', component:VirtualMachineListComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
