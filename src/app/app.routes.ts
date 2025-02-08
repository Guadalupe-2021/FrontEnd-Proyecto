
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component.js';
import { MenuSentenciaComponent } from './menu/menu-sentencia/menu-sentencia.component.js';
import { AltaSentenciaComponent } from './sentencia/alta-sentencia/alta-sentencia.component.js';
import { ModSentenciaComponent } from './sentencia/mod-sentencia/mod-sentencia.component.js';

import { AltaGuardiaComponent } from './guardias/alta-guardia/alta-guardia.component.js';
import { BuscarGuardiaComponent } from './guardias/buscar-guardia/buscar-guardia.component.js';
import { ModificarGuardiaComponent } from './guardias/modificar-guardia/modificar-guardia.component.js';
import { MostrarGuardiaComponent } from './guardias/mostrar-guardia/mostrar-guardia.component.js';

import { AltaReclusosComponent } from './reclusos/alta-reclusos/alta-reclusos.component.js';
import { BuscarReclusosComponent } from './reclusos/buscar-reclusos/buscar-reclusos.component.js';
import { MoverReclusoComponent } from './reclusos/mover-recluso/mover-recluso.component.js';
import { ModificarCondenaComponent } from './reclusos/modificar-condena/modificar-condena.component.js';
import { AltaActividadComponent } from './actividades/alta-actividad/alta-actividad.component.js';
import { ModificarActividadComponent } from './actividades/modificar-actividad/modificar-actividad.component.js';
import { MostrarActividadComponent } from './actividades/mostrar-actividad/mostrar-actividad.component.js';



import { AltaTallerComponent } from './talleres/alta-taller/alta-taller.component.js';
import { InscripcionTallerComponent } from './talleres/inscripcion-taller/inscripcion-taller.component.js';
import { ModificarTallerComponent } from './talleres/modificar-taller/modificar-taller.component.js';
import { MostrarTallerComponent } from './talleres/mostrar-taller/mostrar-taller.component.js';
import { MenuSectorComponent } from './menu/menu-sector/menu-sector.component.js';
import { MostrarCeldasComponent } from './sector/mostrar-celdas/mostrar-celdas.component.js';
import { AltaIlegalComponent } from './ilegal/alta-ilegal/alta-ilegal.component.js';
import { ModificarIlegalComponent } from './ilegal/modificar-ilegal/modificar-ilegal.component.js';
import { IncribirseIlegalComponent } from './ilegal/incribirse-ilegal/incribirse-ilegal.component.js';
import { MostrarIlegalComponent } from './ilegal/mostrar-ilegal/mostrar-ilegal.component.js';
import { UsuarioService } from './usuarios/usuario.service.js';
import { UsuariosComponent } from './usuarios/usuarios.component.js';
import { LiberarReclusoComponent } from './reclusos/liberar-recluso/liberar-recluso.component.js';
import { MostrarSenteniasComponent } from './sentencia/mostrar-sentencias/mostrar-sentenias.component.js';
import { CrearTurnosComponent } from './sector/crear-turnos/crear-turnos.component.js';
import { FinalizarTurnosComponent } from './sector/finalizar-turnos/finalizar-turnos.component.js';

// MENU
import { MenuComponent } from './menu/menu.component.js';
import { MenuGuardiaComponent } from './menu/menu-guardia/menu-guardia.component.js';
import { MenuActividadComponent } from './menu/menu-actividad/menu-actividad.component.js';
import { MenuReclusosComponent } from './menu/menu-reclusos/menu-reclusos.component.js';
import { MenuTallerComponent } from './menu/menu-taller/menu-taller.component.js';
import { MenuTurnosComponent } from './sector/menu-turnos/menu-turnos.component.js';
import { MenuIlegalComponent } from './menu/menu-ilegal/menu-ilegal.component.js';
import { DetalleSectorComponent } from './sector/detalle-sector/detalle-sector.component.js';

export const routes: Routes = [
    //log in
    {path: '',redirectTo: 'log-in',pathMatch:'full'},
    {path: 'log-in', component: LogInComponent},
    //menu
    {path: 'menu', component: MenuComponent},
    //usuario
    {path: 'usuario/:menu/ver-usuarios', component: UsuariosComponent},
    //sentencia
    {path: 'menu/sentencia', component: MenuSentenciaComponent},
    {path: 'menu/sentencia/alta', component: AltaSentenciaComponent},
    {path: 'menu/sentencia/modificar', component: ModSentenciaComponent},
    {path: 'menu/sentencia/sentencias', component: MostrarSenteniasComponent},
    //guardia
    {path: 'menu/guardias', component: MenuGuardiaComponent},
    {path: 'menu/guardias/alta-guardia', component:AltaGuardiaComponent },
    {path: 'menu/guardias/buscar-guardia', component:BuscarGuardiaComponent },
    {path: 'menu/guardias/:id/modificar', component: ModificarGuardiaComponent},
    {path: 'menu/guardias/mostrar-guardia', component:MostrarGuardiaComponent },
    //recluso
    {path: 'menu/recluso', component: MenuReclusosComponent},
    {path: 'menu/recluso/alta-recluso', component:AltaReclusosComponent },
    {path: 'menu/recluso/buscar-recluso', component: BuscarReclusosComponent},
    {path: 'menu/recluso/modificar-condena', component: ModificarCondenaComponent},
    {path: 'menu/recluso/Mover-Recluso', component: MoverReclusoComponent},
    {path: 'menu/recluso/liberar-recluso', component: LiberarReclusoComponent},
    //actividad
    {path: 'menu/actividad', component: MenuActividadComponent},
    {path: 'menu/actividad/alta-actividad', component: AltaActividadComponent},
    {path: 'menu/actividad/modificar-actividad', component: ModificarActividadComponent},
    {path: 'menu/actividad/mostrar-actividad', component: MostrarActividadComponent},
    //taller
    {path: 'menu/taller', component: MenuTallerComponent},
    {path: 'menu/taller/alta-taller', component: AltaTallerComponent},
    {path: 'menu/taller/inscripcion-taller', component:InscripcionTallerComponent },
    {path: 'menu/taller/modificar-taller', component: ModificarTallerComponent},
    {path: 'menu/taller/mostrar-taller', component: MostrarTallerComponent},
    //sector
    {path: 'menu/sector', component: MenuSectorComponent},
    {path: 'menu/sector/:sector/detalle-sector', component: DetalleSectorComponent},
    {path: 'menu/sector/:sector/detalle-sector/crear-turnos', component: CrearTurnosComponent},
    {path: 'menu/sector/:sector/detalle-sector/finalizar-turnos', component: FinalizarTurnosComponent},
    
    //ilegal
    {path: 'menu/ilegal', component: MenuIlegalComponent},
    {path: 'menu/ilegal/alta-actvidad', component: AltaIlegalComponent},
    {path: 'menu/ilegal/modificar-actividad', component: ModificarIlegalComponent},
    {path: 'menu/ilegal/inscripcion-actividad', component: IncribirseIlegalComponent},
    {path: 'menu/ilegal/mostrar-actividad', component: MostrarIlegalComponent},

    


    
    

    
    
    
];
