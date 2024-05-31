import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  {
    path:'alogin',
    component:AloginComponent
  },
  {
    path:'ahome',
    component:AdhomeComponent
  },
  {
    path:'createaccount',
    component:CreateaccountComponent
  },
  {
    path:'paccount',
    component:PmanagerComponent
  },
  {
    path:'tmember',
    component:TmemberComponent
  },
  {
    path:'pmanlist',
    component:ProjectlistComponent
  },
  {
    path:'teamlist',
    component:TeamlistComponent
  },
  {
    path:'createproject',
    component:CreateprojectComponent
  },
  {
    path:'listprojects',
    component:ProjecttitlelistComponent
  },
  {
    path:'editteam/:id',
    component:EditteammembersComponent
  },
  {
    path:'editProjectmanager/:id',
    component:EditprojectmanagersComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'resources',
    component:ResourcesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
