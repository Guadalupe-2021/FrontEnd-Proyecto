
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component.js';
import { MenuSentenciaComponent } from './sentencia/menu-sentencia/menu-sentencia.component.js';
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
import { MenuSectorComponent } from './sector/menu-sector/menu-sector.component.js';
import { MostrarCeldasComponent } from './sector/mostrar-celdas/mostrar-celdas.component.js';
import { AltaIlegalComponent } from './ilegal/alta-ilegal/alta-ilegal.component.js';
import { ModificarIlegalComponent } from './ilegal/modificar-ilegal/modificar-ilegal.component.js';
import { IncribirseIlegalComponent } from './ilegal/incribirse-ilegal/incribirse-ilegal.component.js';
import { MostrarIlegalComponent } from './ilegal/mostrar-ilegal/mostrar-ilegal.component.js';
import { UsuarioService } from './log-in/usuario.service.js';
import { UsuariosComponent } from './log-in/administradores/usuarios.component.js';
import { LiberarReclusoComponent } from './reclusos/liberar-recluso/liberar-recluso.component.js';
import { FinalizarGuardiaComponent } from './guardias/finalizar-guardia/finalizar-guardia.component.js';
import { MostrarSenteniasComponent } from './sentencia/mostrar-sentencias/mostrar-sentenias.component.js';
import { CrearTurnosComponent } from './sector/crear-turnos/crear-turnos.component.js';
import { FinalizarTurnosComponent } from './sector/finalizar-turnos/finalizar-turnos.component.js';

// MENU
import { MenuComponent } from './menu/menu.component.js';
import { MenuGuardiaComponent } from './guardias/menu-guardia/menu-guardia.component.js';
import { MenuActividadComponent } from './actividades/menu-actividad/menu-actividad.component.js';
import { MenuReclusosComponent } from './reclusos/menu-reclusos/menu-reclusos.component.js';
import { MenuTallerComponent } from './menu/menu-taller/menu-taller.component.js';
// import { MenuTallerComponent } from './talleres/menu-taller/menu-taller.component.js';
import { MenuTurnosComponent } from './sector/menu-turnos/menu-turnos.component.js';
import { MenuIlegalComponent } from './ilegal/menu-ilegal/menu-ilegal.component.js';

export const routes: Routes = [
    //log in
    {path: 'usuario', component: LogInComponent},
    //menu
    {path: 'menu', component: MenuComponent},
    {path: '',redirectTo: 'usuario',pathMatch:'full'},
    //usuario
    {path: 'usuario/:menu/ver-usuarios', component: UsuariosComponent},
    //sentencia
    {path: 'menu/sentencia', component: MenuSentenciaComponent},
    {path: 'menu/sentencia/alta', component: AltaSentenciaComponent},
    {path: 'menu/sentencia/modificar', component: ModSentenciaComponent},
    {path: 'menu/sentencia/sentencias', component: MostrarSenteniasComponent},
    //guardia
    {path: 'menu/guardia', component: MenuGuardiaComponent},
    {path: 'menu/guardia/alta-guardia', component:AltaGuardiaComponent },
    {path: 'menu/guardia/buscar-guardia', component:BuscarGuardiaComponent },
    {path: 'menu/guardia/modificar-guardia', component: ModificarGuardiaComponent},
    {path: 'menu/guardia/mostrar-guardia', component:MostrarGuardiaComponent },
    {path: 'menu/guardia/finalizar-guarida', component: FinalizarGuardiaComponent},
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
    {path: 'usuario/menu/sector', component: MenuSectorComponent},
    {path: 'usuario/menu/sector/t/:sector', component: MenuTurnosComponent},
    {path: 'usuario/menu/sector/c/:sector', component: MostrarCeldasComponent},
    {path: 'usuario/menu/sector/t/:sector/crear-turnos', component: CrearTurnosComponent},
    {path: 'usuario/menu/sector/t/:sector/finalizar-turnos', component: FinalizarTurnosComponent},
    
    //ilegal
    {path: 'usuario/menu-maestro/menu', component: MenuIlegalComponent},
    {path: 'usuario/menu-maestro/menu/alta-actvidad', component: AltaIlegalComponent},
    {path: 'usuario/menu-maestro/menu/modificar-actividad', component: ModificarIlegalComponent},
    {path: 'usuario/menu-maestro/menu/inscripcion-actividad', component: IncribirseIlegalComponent},
    {path: 'usuario/menu-maestro/menu/mostrar-actividad', component: MostrarIlegalComponent},

    


    
    

    
    
    
];
