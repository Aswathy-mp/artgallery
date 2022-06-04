import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharcoalsComponent } from './charcoals/charcoals.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { FigurativesComponent } from './figuratives/figuratives.component';
import { GhatsComponent } from './ghats/ghats.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { RegisterComponent } from './register/register.component';
import { WatercolorsComponent } from './watercolors/watercolors.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'paintings',component:PaintingsComponent},
                        {path:'figuratives',component:FigurativesComponent},
                        {path:'ghats',component:GhatsComponent},
                        {path:'charcoal',component:CharcoalsComponent},
                        {path:'watercolor',component:WatercolorsComponent},
                        {path:'drawings',component:DrawingsComponent},
                        {path:'login',component:LoginComponent},
                        {path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
