import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SewingComponent } from "./sewing/sewing.component";
import { EmbroideryComponent } from "./embroidery/embroidery.component";
import { DigitalArtComponent } from "./digital-art/digital-art.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'digital-art', component: DigitalArtComponent },
  { path: 'sewing', component: SewingComponent },
  { path: 'embroidery', component: EmbroideryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
