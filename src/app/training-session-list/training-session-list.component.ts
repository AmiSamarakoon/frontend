import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';


@Component({
  selector: 'app-training-session-list',
  templateUrl: './training-session-list.component.html',
  styleUrls: ['./training-session-list.component.css']
})
export class TrainingSessionListComponent implements OnInit {

  trainingSessions: TrainingSession[];

  constructor(private trainingSessionService:TrainingSessionService,private router:Router) { }

  ngOnInit(): void {
    this.getTrainingSessions();
  }

  private getTrainingSessions(){
    this.trainingSessionService.getTrainingSessionList().subscribe(data=>{
      this.trainingSessions = data;
    });
  }

  trainingSessionDetails(id:number){
    this.router.navigate(['training-session-details', id]);
  }

  updateTrainingSession(id:number){
    this.router.navigate(['update-training-session', id]);
  }

  deleteTrainingSession(id:number){
    this.trainingSessionService.deleteTrainingSession(id).subscribe(data=>{
      console.log(data);
      this.getTrainingSessions();
    })
  }

}
