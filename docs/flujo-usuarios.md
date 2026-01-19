# Flujo de Usuarios y Permisos

## 1. Tipos de usuarios

El sistema contempla tres tipos de usuarios con responsabilidades y permisos claramente diferenciados.

---

## 2. Administrador Global

### 2.1 Descripción
Usuario con control total del sistema.

### 2.2 Permisos
- Crear, editar y eliminar campeonatos.
- Asignar y revocar administradores de campeonato.
- Modificar cualquier dato del sistema.
- Editar resultados y aplicar sanciones disciplinarias.
- Acceder al historial completo de cambios.
- Visualizar y administrar todos los campeonatos.

---

## 3. Administrador de Campeonato

### 3.1 Descripción
Usuario responsable de la gestión de un campeonato específico.

### 3.2 Permisos
- Configurar categorías del campeonato.
- Agregar y administrar equipos.
- Definir número de vueltas por categoría.
- Generar fixture.
- Asignar y modificar fechas y horarios.
- Registrar y modificar resultados.
- Aplicar resoluciones disciplinarias dentro de su campeonato.
- Acceder al historial de cambios del campeonato que administra.

### 3.3 Restricciones
- No puede administrar otros campeonatos.
- No puede modificar configuraciones globales del sistema.

---

## 4. Usuario (lector)

### 4.1 Descripción
Usuario registrado con acceso solo lectura.

### 4.2 Permisos
- Visualizar campeonatos públicos.
- Ver fixture por campeonato, categoría y fase.
- Ver tablas de posiciones.
- Ver estadísticas avanzadas.
- Exportar fixture y tablas en PDF.
- Recibir notificaciones asociadas a su equipo y categoría.

### 4.3 Restricciones
- No puede modificar datos.
- No puede registrar resultados.
- No puede aplicar sanciones.

---

## 5. Asociación usuario – equipo

- Un usuario puede estar asociado a uno o más equipos.
- La asociación se realiza por campeonato y categoría.
- Las asociaciones determinan el envío de notificaciones.
- La asociación no otorga permisos de edición.

---

## 6. Flujo de autenticación

1. El usuario se registra o inicia sesión en el sistema.
2. El sistema identifica su rol.
3. Se habilitan funcionalidades según permisos.
4. El acceso a funciones críticas se valida en backend.

La interfaz de usuario nunca debe ser el único control de permisos.

---

## 7. Flujo de notificaciones

1. Un administrador asigna o modifica la fecha/hora de un partido.
2. El sistema identifica los equipos involucrados.
3. Se identifican los usuarios asociados a esos equipos y categoría.
4. Se envía notificación push al dispositivo móvil.
5. No se envían notificaciones a usuarios no asociados.

---

## 8. Historial y auditoría

- Toda acción relevante debe quedar registrada.
- El historial incluye:
  - Usuario que realizó la acción.
  - Fecha y hora.
  - Tipo de acción.
  - Entidad afectada.
- El historial no puede ser modificado ni eliminado.

---

## 9. Principio de seguridad
- Todos los permisos se validan en backend.
- Ninguna acción crítica depende exclusivamente del frontend.
- Los usuarios solo pueden ejecutar acciones explícitamente autorizadas.
