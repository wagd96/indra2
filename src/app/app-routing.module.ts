import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/add-notice/add-notice.component';

const routes: Routes = [
  {path: '', redirectTo : 'news', pathMatch : 'full'},
  {path : 'news', component : NewsComponent},
  {path: 'addNews', component:AddNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
