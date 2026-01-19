# Contrato del Sistema – Gestor de Campeonato de Baloncesto

## 1. Propósito del sistema
Este sistema tiene como objetivo gestionar campeonatos de baloncesto amateur, permitiendo la creación y administración de campeonatos, categorías, equipos, fixtures, resultados, tablas de posiciones y estadísticas, asegurando transparencia, equidad deportiva y trazabilidad de los cambios.

El sistema debe soportar una fase regular y una fase de liguilla para todas las categorías del campeonato.

---

## 2. Alcance del MVP
El MVP incluye:
- Gestión de campeonatos.
- Gestión de categorías por campeonato.
- Gestión de equipos por categoría.
- Generación automática de fixture.
- Asignación de fechas y horarios.
- Registro y modificación de resultados.
- Tabla de posiciones automática.
- Estadísticas avanzadas básicas.
- Notificaciones a usuarios.
- Visualización pública del campeonato (solo lectura).
- Exportación de fixture y tablas a PDF.
- Historial de cambios para auditoría.

El MVP NO incluye:
- Gestión de jugadores individuales.
- Estadísticas individuales de jugadores.
- Fotos o contenido multimedia.
- Multi-sede.
- Streaming o integración con redes sociales.

---

## 3. Estructura del campeonato

### 3.1 Fases
Un campeonato puede tener las siguientes fases:
- Fase Regular:
  - Sistema todos contra todos (round-robin).
  - Número configurable de vueltas por categoría.
- Liguilla:
  - Participan los 4 mejores equipos de cada categoría.
  - Sistema todos contra todos.
  - Define las posiciones finales del 1° al 4° lugar.

Cada fase es independiente en fixture, tabla y resultados.

---

## 4. Reglas duras (no negociables)
- Máximo 2 partidos por jornada.
- Horarios fijos por jornada:
  - Primer partido: 20:00
  - Segundo partido: 21:00
- Un equipo no puede jugar más de un partido en la misma jornada.
- Todos los partidos se juegan en una sola sede.
- Se permiten jornadas sin partidos.
- Se permiten semanas completas sin que una categoría juegue.
- En caso de suspensión de jornadas, el calendario completo se desplaza hacia adelante.

---

## 5. Reglas blandas (criterios de optimización)
- Prioridad de días de juego por categoría:
  - Senior: lunes (prioridad), miércoles, viernes.
  - Todo Competidor (TC): miércoles (prioridad), viernes.
  - Súper Senior: viernes (prioridad), miércoles.
- Evitar que un equipo juegue en jornadas consecutivas cuando sea posible.
- Se permite que una categoría juegue dos semanas seguidas el mismo día si no existe alternativa válida.
- Alternar condición de local y visita entre ruedas.
- Alternar horarios (20:00 / 21:00) entre equipos cuando sea posible.

Las reglas blandas nunca deben romper una regla dura.

---

## 6. Local y visita
- La condición de local y visita es organizativa y no depende de la cancha.
- En enfrentamientos repetidos entre dos equipos:
  - Si un equipo fue local en la primera rueda, será visita en la siguiente.
- El sistema debe intentar distribuir equitativamente horarios y condiciones.

---

## 7. Resultados, puntos y sanciones

### 7.1 Sistema de puntos
- Victoria: 2 puntos.
- Derrota: 1 punto.
- Castigo disciplinario: 0 puntos.

### 7.2 Sanciones disciplinarias
- Una sanción puede modificar el resultado de un partido ya jugado.
- En caso de sanción:
  - El marcador se fuerza a 20 – 0.
  - El equipo infractor obtiene 0 puntos.
- Las resoluciones disciplinarias pueden emitirse semanas después del partido.
- Toda sanción debe quedar registrada y ser auditable.

---

## 8. Tabla de posiciones
- La tabla de posiciones se calcula siempre a partir de los partidos y resoluciones.
- Nunca se edita manualmente.
- Criterios de orden:
  1. Puntos.
  2. Diferencia de puntos (puntos a favor – puntos en contra).

---

## 9. Estadísticas avanzadas (MVP)
- Comparación de los 5 mejores equipos del campeonato (todas las categorías).
- Métricas:
  - Promedio de puntos a favor.
  - Promedio de puntos en contra.
  - Racha actual (victorias / derrotas).

---

## 10. Roles y permisos

### 10.1 Administrador global
- Control total del sistema.
- Puede editar cualquier campeonato.
- Puede modificar resultados y aplicar sanciones.

### 10.2 Administrador de campeonato
- Administra un campeonato específico.
- Puede crear fixture, asignar fechas y editar resultados de su campeonato.

### 10.3 Usuario
- Acceso solo lectura.
- Puede visualizar fixture, tabla, estadísticas y exportaciones.
- Puede recibir notificaciones asociadas a su equipo y categoría.

---

## 11. Notificaciones
- Las notificaciones se envían cuando:
  - Se asigna fecha y hora a un partido.
  - Se modifica la fecha u hora de un partido.
- Solo se notifican usuarios asociados al equipo y categoría correspondiente.
- El canal de notificación es push al dispositivo móvil.

---

## 12. Transparencia y auditoría
- Toda modificación relevante debe registrar:
  - Usuario que realizó el cambio.
  - Fecha y hora.
  - Tipo de cambio.
  - Motivo (error de digitación o sanción disciplinaria).
- El historial del campeonato debe ser accesible para auditoría.

---

## 13. Principio rector
El sistema prioriza:
- Validez del fixture por sobre la perfección matemática.
- Transparencia por sobre la simplicidad.
- Reglas explícitas por sobre comportamientos implícitos.

Cualquier funcionalidad futura debe respetar este contrato.
