export interface Campeonato {
  id: string;
  nombre: string;
  temporada: string;
  estado: 'configuracion' | 'en_curso' | 'finalizado';
}
