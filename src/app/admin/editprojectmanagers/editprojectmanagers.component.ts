import { Component } from '@angular/core';
import { ProjectManager } from '../../project-manager';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-editprojectmanagers',
  templateUrl: './editprojectmanagers.component.html',
  styleUrl: './editprojectmanagers.component.css'
})
export class EditprojectmanagersComponent {

  teammember: ProjectManager = {
    id: null||0,
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teammemberService: AdminService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.teammemberService.getProjectmamangerById(id).subscribe(data => {
        this.teammember = data;
      });
    }
  }

  saveTeammember() {
    this.teammemberService.updateProjectmanager(this.teammember).subscribe(() => {
      alert("updated sucessfully");
      this.router.navigate(['/admin/pmanlist']);
    });
  }

}
