import { Component, OnInit } from '@angular/core';
import { ProjectManager } from '../../project-manager';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  pmanagers: ProjectManager[] = [];

  constructor(private router: Router, private pmanagerService: AdminService) {}

  ngOnInit(): void {
    this.pmanagerService.getPmanagers().subscribe(data => {
      this.pmanagers = data;
    });
  }

  deleteProjectmanager(id: number): void {
    this.pmanagerService.deleteProjectManager(id).subscribe(() => {
      this.pmanagers = this.pmanagers.filter(pm => pm.id !== id);
      alert("Deleted successfully");
    });
  }
}
