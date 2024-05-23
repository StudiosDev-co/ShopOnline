import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AdminComponent } from './admin/admin.component';
import { VentasComponent } from './admin/ventas/ventas.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { NuevoproductoComponent } from './admin/nuevoproducto/nuevoproducto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'ventas', component: VentasComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'nuevoproducto', component: NuevoproductoComponent },
    { path: '**', redirectTo: 'ventas' }
  ]},
  { path: '**', redirectTo: 'home' }
];
