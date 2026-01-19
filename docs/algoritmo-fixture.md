# Algoritmo de Generación de Fixture

## 1. Objetivo
El objetivo del algoritmo de fixture es generar un calendario válido de partidos para cada categoría y fase del campeonato, cumpliendo estrictamente las reglas duras y optimizando las reglas blandas definidas en el contrato del sistema.

El algoritmo debe garantizar siempre un fixture válido, aun cuando no sea perfectamente equitativo.

---

## 2. Principios fundamentales
- El algoritmo nunca debe violar reglas duras.
- Las reglas blandas se aplican solo cuando no generan conflictos.
- El fixture se genera inicialmente sin fechas absolutas.
- Las fechas y jornadas se asignan posteriormente.
- El sistema prioriza validez sobre perfección matemática.

---

## 3. Entrada del algoritmo
El algoritmo recibe como entrada:
- Categoría.
- Lista de equipos de la categoría.
- Número de vueltas.
- Prioridades de días de juego.
- Restricciones de jornada y horario.

---

## 4. Generación de enfrentamientos

### 4.1 Round-robin base
- Se generan todos los enfrentamientos posibles entre equipos.
- Cada enfrentamiento genera un partido.
- El orden inicial de los partidos es independiente del calendario.

### 4.2 Vueltas adicionales
- Por cada vuelta adicional:
  - Se duplican los enfrentamientos.
  - Se invierte la condición de local y visita respecto de la vuelta anterior.

---

## 5. Creación de jornadas

### 5.1 Jornadas lógicas
- El sistema crea una lista de jornadas lógicas sin fecha.
- Cada jornada tiene capacidad máxima de dos partidos.
- Una jornada puede quedar vacía.

---

## 6. Asignación de partidos a jornadas

Para cada partido pendiente de asignación:

1. Se evalúan las jornadas existentes en orden cronológico.
2. Una jornada es válida si:
   - Tiene cupo disponible.
   - Ninguno de los equipos del partido ya juega en esa jornada.
   - El día de la jornada está permitido para la categoría.
3. Si existen varias jornadas válidas:
   - Se prioriza la que genere mayor descanso entre partidos.
   - Se prioriza el respeto a los días de preferencia de la categoría.
4. Si no existe ninguna jornada válida:
   - Se crea una nueva jornada.
   - El partido se asigna a dicha jornada.

---

## 7. Asignación de horarios
- Una vez asignado un partido a una jornada:
  - El primer partido de la jornada se asigna a las 20:00.
  - El segundo partido se asigna a las 21:00.
- El sistema debe intentar alternar horarios entre equipos cuando sea posible.
- La alternancia de horarios nunca debe romper reglas duras.

---

## 8. Descanso y equidad
- El algoritmo debe intentar evitar que un equipo juegue en jornadas consecutivas.
- Si no existe alternativa válida, se permite la asignación consecutiva.
- La equidad es un objetivo secundario frente a la validez del fixture.

---

## 9. Manejo de suspensiones
- El algoritmo no elimina partidos en caso de suspensión.
- Las suspensiones desplazan el calendario completo hacia adelante.
- No se generan reordenamientos parciales automáticos.

---

## 10. Reproducibilidad
- Dada la misma entrada, el algoritmo debe producir el mismo fixture.
- El algoritmo no debe depender de estados externos ni aleatoriedad no controlada.

---

## 11. Liguilla
- La liguilla utiliza el mismo algoritmo de fixture.
- La entrada se limita a los 4 equipos clasificados.
- La liguilla es tratada como una fase independiente.

---

## 12. Errores evitados por diseño
Este algoritmo evita:
- Que un equipo juegue dos veces el mismo día.
- Jornadas con más de dos partidos.
- Violaciones de horarios.
- Dependencia de fechas absolutas tempranas.
- Fixtures imposibles de corregir.

---

## 13. Principio final
El algoritmo debe ser entendible, trazable y modificable.
Si una regla no está definida aquí, el algoritmo no debe asumirla.
