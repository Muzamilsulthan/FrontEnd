import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AloginComponent } from './alogin/alogin.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PmanagerComponent } from './pmanager/pmanager.component';
import { TmemberComponent } from './tmember/tmember.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjecttitlelistComponent } from './projecttitlelist/projecttitlelist.component';
import { EditteammembersComponent } from './editteammembers/editteammembers.component';
import { EditprojectmanagersComponent } from './editprojectmanagers/editprojectmanagers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
@NgModule({
  declarations: [
    AloginComponent,
    AdhomeComponent,
    CreateaccountComponent,
    PmanagerComponent,
    TmemberComponent,
    ProjectlistComponent,
    TeamlistComponent,
    CreateprojectComponent,
    ProjecttitlelistComponent,
    EditteammembersComponent,
    EditprojectmanagersComponent,
    ContactusComponent,
    ResourcesComponent,
    AboutComponent,
    ServicesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    RouterModule // Make sure RouterModule is imported if you have routing within AdminModule
  ]
})
export class AdminModule { }
