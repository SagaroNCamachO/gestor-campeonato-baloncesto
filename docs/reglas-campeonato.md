# Reglas del Campeonato – Gestor de Baloncesto

## 1. Sistema de competencia

### 1.1 Fase regular
- Cada categoría se juega bajo el sistema todos contra todos (round-robin).
- El número de vueltas por categoría es configurable.
- En cada vuelta, todos los equipos se enfrentan una vez entre sí.
- En vueltas adicionales, se alterna la condición de local y visita.

### 1.2 Liguilla
- La liguilla se juega al finalizar la fase regular.
- Participan los 4 mejores equipos de cada categoría.
- El sistema es todos contra todos.
- La liguilla define las posiciones finales del 1° al 4° lugar.
- La liguilla es independiente de la fase regular en resultados y tabla.

---

## 2. Jornadas y partidos

### 2.1 Jornadas
- Una jornada puede contener:
  - Cero partidos (jornada vacía).
  - Uno o dos partidos.
- No pueden existir más de dos partidos por jornada.
- Una jornada corresponde a un solo día calendario.

### 2.2 Horarios
- Los horarios posibles por jornada son fijos:
  - Partido 1: 20:00
  - Partido 2: 21:00
- No se permiten otros horarios en el sistema.

---

## 3. Restricciones de equipos
- Un equipo no puede jugar más de un partido en la misma jornada.
- El sistema debe evitar, cuando sea posible, que un equipo juegue en jornadas consecutivas.
- Si no existe alternativa válida, se permite que un equipo juegue en jornadas consecutivas.

---

## 4. Días de juego por categoría

### 4.1 Prioridades
- Categoría Senior:
  - Prioridad 1: lunes
  - Prioridad 2: miércoles
  - Prioridad 3: viernes
- Categoría Todo Competidor (TC):
  - Prioridad 1: miércoles
  - Prioridad 2: viernes
- Categoría Súper Senior:
  - Prioridad 1: viernes
  - Prioridad 2: miércoles

Las prioridades se utilizan como criterio de optimización y nunca deben violar las reglas duras.

---

## 5. Local y visita
- La condición de local y visita es organizativa.
- Todos los partidos se juegan en la misma sede.
- En enfrentamientos repetidos entre dos equipos:
  - El equipo que fue local en la primera vuelta será visita en la siguiente.
- El sistema debe intentar distribuir equitativamente las condiciones de local y visita.

---

## 6. Resultados

### 6.1 Registro de resultados
- Los resultados se registran como:
  - Puntos a favor.
  - Puntos en contra.
- Los resultados pueden ser modificados solo por administradores autorizados.

### 6.2 Modificación de resultados
- Un resultado puede ser modificado por:
  - Error de digitación.
  - Resolución disciplinaria.
- Toda modificación debe quedar registrada en el historial del campeonato.

---

## 7. Sistema de puntos
- Victoria: 2 puntos.
- Derrota: 1 punto.
- Castigo disciplinario: 0 puntos.

---

## 8. Sanciones disciplinarias
- Las sanciones son determinadas por el comité de disciplina.
- Una sanción puede aplicarse semanas después del partido.
- En caso de sanción:
  - El resultado del partido se fuerza a 20 – 0.
  - El equipo sancionado obtiene 0 puntos.
- Las sanciones deben recalcular automáticamente la tabla de posiciones.

---

## 9. Tabla de posiciones

### 9.1 Cálculo
La tabla de posiciones se calcula a partir de:
- Resultados de los partidos.
- Resoluciones disciplinarias aplicadas.

No se permiten ediciones manuales de la tabla.

### 9.2 Criterios de orden
1. Total de puntos.
2. Diferencia de puntos (puntos a favor – puntos en contra).

---

## 10. Estadísticas avanzadas (MVP)
- El sistema debe mostrar una comparación de los 5 mejores equipos del campeonato.
- Las estadísticas se calculan considerando:
  - Todas las categorías.
- Métricas incluidas:
  - Promedio de puntos a favor.
  - Promedio de puntos en contra.
  - Racha actual de resultados.

---

## 11. Notificaciones
- Las notificaciones se envían cuando:
  - Se asigna fecha y hora a un partido.
  - Se modifica la fecha u hora de un partido.
- Solo reciben notificaciones los usuarios asociados al equipo y categoría correspondiente.
- Las notificaciones se envían mediante push al dispositivo móvil.

---

## 12. Principio de consistencia
Todas las reglas aquí definidas deben ser implementadas de forma centralizada.
Ninguna regla crítica debe depender de la interfaz de usuario.
