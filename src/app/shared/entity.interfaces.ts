export interface IGuardia {
  cod_guardia?: number,
  nombre: string,
  apellido: string,
  dni: number,
  fecha_ini_contrato: Date,
  fecha_fin_contrato?: Date,
}

export interface IRecluso {
    cod_recluso?:  number,
    nombre:    string;
    apellido:  string;
    dni:       number;
    fecha_nac: Date;
    condenas?: ICondena[];
    pena?: IPena;
}
export interface IActividad{
    nombre:           string;
    descripcion:      string;
    dia_de_la_semana: string;
    hora_inicio:      string;
    hora_fin:         string;
    locacion:         string;
    cant_cupos:       number;
}

export interface ICondena {
  cod_condena?: number,
  nombre:   string, 
  descripcion?:    string,
  duracion_anios: number,
  duracion_meses: number,
  duracion_dias: number,
  //orden_de_gravedad: number
}

export interface IPena{
    //cod_recluso: IRecluso['cod_recluso']
    fecha_ini:    Date,
    fecha_fin_estimada:   Date,
    fecha_fin_real:   Date,
}

export interface ICelda {
    cod_celda: number,
    sector: ISector,
    descripcion:  string, 
    capacidad:  number
  }

export interface ISector{
    cod_sector:   number,
    nombre:   string,
    descripcion:  string,
  }


  export interface IServerResponse{
    status:number,
    data?:any,
    message?:string,
    token?:string
  }
