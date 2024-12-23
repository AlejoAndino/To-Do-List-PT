# To-Do List App - React, TypeScript y TailwindCSS

## Descripción

Esta es una aplicación web de lista de tareas (To-Do List) desarrollada como parte de una prueba técnica para el rol de Desarrollador FrontEnd React. La aplicación permite gestionar tareas de manera eficiente con una buena experiencia al usuario.

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

El diseño de la aplicación se centra en ofrecer una experiencia de usuario intuitiva, limpia y agradable, guiado por los siguientes principios:

1. **Minimalismo y claridad**:  
   El diseño evita la sobrecarga de información visual, utilizando espacios en blanco para enfocar la atención del usuario en las funcionalidades clave. Esto garantiza que cualquier usuario, incluso sin experiencia previa, pueda navegar y utilizar la aplicación de manera eficiente.

2. **Diseño en general**:  
   - **Título prominente**: "To-Do List" está centrado y resaltado para que los usuarios comprendan de inmediato el propósito de la aplicación.  
   - **Indicadores claros**: El círculo en el centro muestra el progreso general con un porcentaje, combinando información visual y numérica para reforzar la comprensión.
   - **Filtro de tareas**: Se añadio de forma adicional un filtrado de tareas para mejorar la organizacion del usuario
   - **Agregar Tareas**: Se utilizo un Modal para la adicion de tareas con una animacion suave.
   - **Lista de Tareas**: Me decidi por ese estilo ya que para mi era una opcion que junto a la paleta de colores que elegi, iba a quedar relajante para el usuario.
   - **Tareas**: Componentes de tareas sencillo, con fecha y hora, chechbox de completado y botones para editar o eliminar la tareas, simple

3. **Paleta de colores relajante**:  
   Se eligió una combinación de colores suaves (grises y morados claros) para generar una sensación de calma.

4. **Diseño responsivo**:  
   - El botón "Agregar Tarea" en moviles se transforma en un circulo con "+", es una opcion mucho mas llamativa para el usuario, tambien hace la pagina mucho mas simetrica respecto a los demas componentes
   - La barra de progreso se centro en un lugar mucho mas simetrico en moviles para la mejora en la visibilidad desde el usuario.

6. **Extras**:
   - Funcionalidad de filtrado para mostrar tareas completadas, incompletas o todas.
   - Indicador de progreso visual con un círculo dinámico.
   - Modales interactivos para agregar, editar y eliminar tareas, con animaciones para mejorar la usabilidad.
   - Implementacion de animaciones para mejorar la experiencia del usuario
   - Cuando no hay tareas disponibles, se muestra un mensaje amigable en el área central ("No hay tareas.") para guiar al usuario sin generar confusión.
   - Fecha y hora en las tareas
   - Deploy en Netlify

---

Este diseño está pensado para ofrecer una experiencia simple, funcional y visualmente atractiva, ayudando a los usuarios a organizar sus tareas de forma efectiva.

