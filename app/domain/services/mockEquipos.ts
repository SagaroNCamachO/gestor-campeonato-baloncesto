import { Equipo } from '../models/Equipo';

export const equiposMock: Equipo[] = [
  // Todo Competidor
  { id: 'tc1', nombre: 'Titanes', categoriaId: 'tc' },
  { id: 'tc2', nombre: 'Halcones', categoriaId: 'tc' },
  { id: 'tc3', nombre: 'Cóndores', categoriaId: 'tc' },
  { id: 'tc4', nombre: 'Leones', categoriaId: 'tc' },
  { id: 'tc5', nombre: 'Pumas', categoriaId: 'tc' },
  { id: 'tc6', nombre: 'Lobos', categoriaId: 'tc' },

  // Senior
  { id: 's1', nombre: 'Veteranos A', categoriaId: 'senior' },
  { id: 's2', nombre: 'Veteranos B', categoriaId: 'senior' },
  { id: 's3', nombre: 'Clásicos', categoriaId: 'senior' },
  { id: 's4', nombre: 'Históricos', categoriaId: 'senior' },

  // Súper Senior
  { id: 'ss1', nombre: 'Leyendas', categoriaId: 'super-senior' },
  { id: 'ss2', nombre: 'Inmortales', categoriaId: 'super-senior' },
];
