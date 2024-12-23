# To-Do List App - React, TypeScript y TailwindCSS

## Descripción

Esta es una aplicación web de lista de tareas (To-Do List) desarrollada como parte de una prueba técnica para el rol de Desarrollador FrontEnd React. La aplicación permite gestionar tareas de manera eficiente con una buena experiencia al usuario.

Puedes ver la aplicación deployada en Netlify: [To-Do List - Netlify](https://to-ddolistt.netlify.app/).

## Funcionalidades

- **Agregar nuevas tareas** con una interfaz limpia y moderna.
- **Marcar tareas como completadas** para llevar un registro del progreso.
- **Eliminar tareas** con un mensaje de confirmación.
- **Filtrar tareas** por estado: todas, completadas o incompletas.
- **Mostrar fecha y hora** de creación de cada tarea.
- **Animaciones fluidas** al agregar, eliminar tareas, modales con animaciones, circulo de progreso, mensaje de "No hay tareas", Boton de filtrado. (Framer Motion).
- **Círculo de progreso dinámico** que muestra el número de tareas totales y completadas.
- **Persistencia de datos** mediante `localStorage` para mantener el estado entre sesiones.
- **Diseño Responsivo** Buenas disposicion de los componentes para dispositivos moviles

---

##  Estructura del Proyecto

### Directorios y Archivos

1. **`src/components/`**  
   Este directorio agrupa todos los componentes reutilizables de la interfaz de usuario (UI), siguiendo el principio DRY (Don't Repeat Yourself).

   - **`AddTaskForm.tsx`**: Maneja el boton y formulario para agregar nuevas tareas.
   - **`TaskList.tsx`**: Renderiza la lista completa de tareas.
   - **`TaskItem.tsx`**: Representa cada tarea individualmente, encapsulando su funcionalidad y estilo.
   - **`TaskFilter.tsx`**: Permite filtrar tareas (todas, completadas, pendientes) para una mejor experiencia de usuario.
   - **`ProgressBar.tsx`**: Visualiza el progreso general de las tareas de forma intuitiva.
   - **`modals/`**: Subdirectorio que agrupa los componentes modales, organizados de forma lógica:
     - **`AddTaskModal.tsx`**: Modal para agregar nuevas tareas.
     - **`DeleteModal.tsx`**: Modal de confirmación para eliminar tareas.
     - **`TaskEditModal.tsx`**: Modal para editar tareas existentes.

2. **`App.tsx`**  
   Es el componente raíz que organiza y combina todos los subcomponentes de la aplicación. Este archivo define la estructura general de la aplicación y une todas las funcionalidades.

---

### Ventajas de esta estructura

- **Escalabilidad**: La organización modular permite agregar nuevas funcionalidades o componentes sin afectar el resto de la aplicación.  
- **Mantenibilidad**: Los componentes están bien separados, lo que facilita identificar, actualizar o corregir cualquier parte del proyecto.  
- **Reutilización**: Los componentes bien definidos como `TaskItem`, `ProgressBar`, y `TaskFilter` pueden ser reutilizados en diferentes partes del proyecto o incluso en otros proyectos.  

Esta estructura se eligió para garantizar que la aplicación sea fácil de desarrollar y mantener tanto en el presente como en el futuro.

## Diseño de la Aplicación

El diseño de la aplicación se enfoca en una experiencia de usuario intuitiva, limpia y atractiva.

1. **Minimalismo y claridad**:  
   Se evita la sobrecarga visual, utilizando espacios en blanco para centrar la atención en las funcionalidades clave, facilitando su uso incluso para usuarios novatos.

2. **Diseño general**:  
   - **Título prominente**: "To-Do List" centrado y destacado para claridad.  
   - **Indicadores claros**: Un círculo central muestra el progreso con información visual y numérica.  
   - **Filtro de tareas**: Opción para filtrar tareas por estado, mejorando la organización.  
   - **Agregar Tareas**: Modal con animación suave para añadir tareas.  
   - **Lista de Tareas**: Diseño relajante con una paleta de colores suaves y componentes simples (fecha, hora, checkbox, botones de edición y eliminación).

3. **Paleta de colores relajante**:  
   Colores suaves (grises y morados claros) que generan una sensación de calma.

4. **Diseño responsivo**:  
   - En móviles, el botón "Agregar Tarea" se transforma en un círculo con "+", mejorando la visibilidad y simetría.  
   - La barra de progreso se centra para mayor visibilidad en móviles.

5. **Extras**:  
   - Funcionalidad de filtrado por estado de tarea.  
   - Indicador visual de progreso con un círculo dinámico.  
   - Modales interactivos con animaciones para agregar, editar y eliminar tareas.  
   - Mensaje amigable ("No hay tareas.") cuando no hay tareas disponibles.  
   - Fecha y hora en cada tarea.  
   - Deploy en Netlify.

---


