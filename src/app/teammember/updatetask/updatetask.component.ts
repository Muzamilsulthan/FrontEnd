import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Task } from '../../task'; // Ensure correct import path
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  task: Task = {
    id: 0,
    description: '',
    status: '',
    project: {
      id: 0,
      projectName: ''
    },
    teamMember: {
      id: 0,
      name: '',
      email: ''
    }
  };
  taskId!: number;
  statuses: string[] = ['PENDING', 'IN_PROGRESS', 'COMPLETED'];

  constructor(
    private route: ActivatedRoute,
    private taskService: AdminService, // Make sure you have this service and it's correctly imported
    private router: Router
  ) {}

  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
    this.taskService.getTaskById(id).subscribe(data=>{
      this.task = data;
    }
      
    );
  }
}




  updateTask() {
    // Perform any necessary status handling here before updating
    this.taskService.updateTask(this.task).subscribe(
      () => {

        alert("Updated Sucessfully")

        this.router.navigate(['/teammember/thome']);
      }
    );
  }
}
