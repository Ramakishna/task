import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



const routes: Routes = [
  {
    path: '', component: ChildComponent
  },
  {
    path: 'parent', component: ParentComponent
  },
  {
    path: 'child', component: ChildComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
