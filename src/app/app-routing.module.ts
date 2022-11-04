import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionComponent } from './components/admin/distribution/distribution.component';
import { ProductionComponent } from './components/admin/production/production.component';
import { VentaComponent } from './components/admin/venta/venta.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosCortosComponent } from './pages/productos-cortos/productos-cortos.component';

const routes: Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'Productos cortos',component:ProductosCortosComponent},
  { path: 'distribution', component: DistributionComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'venta', component: VentaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
