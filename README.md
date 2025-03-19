# Prueba Front-End Junior – React (Vite)

¡Hola! Este proyecto es mi propuesta para la prueba técnica solicitada en el proceso de selección de Desarrollador Front-End Junior.  
La aplicación permite **crear, listar y eliminar productos**, además de ordenarlos por distintos criterios (código, nombre, cantidad y fecha de creación).

## Descripción

- **Tecnología principal**: React con Vite.
- **Estado en memoria** (no se persiste en BD real).
- **Diseño responsivo** básico (SCSS/CSS).
- **Filtros/Orden** por varios campos y botón para alternar orden asc/desc.

## Características principales

1. **Formulario** para agregar productos:
   - Campos: Código, Nombre, Descripción, Cantidad, Fecha de Creación.
   - Se valida que la cantidad sea mayor que 0.
   - El código se genera automáticamente (o se muestra formateado).
   - La fecha se inicializa con la fecha actual.

2. **Listado** de productos:
   - Se muestran en una tabla.
   - Cada producto puede eliminarse con un botón.
   - El ordenamiento se realiza por Código, Nombre, Cantidad o Fecha de Creación.

3. **Orden ascendente/descendente**:
   - Botón para alternar entre asc y desc en la tabla.
   - Se utiliza el estado de React para almacenar y filtrar la lista.

4. **Diseño**:
   - Uso de SCSS para organizar estilos y media queries (responsive).
   - Se han agregado efectos de hover y transiciones básicas.

## Requisitos previos

- **Node.js** >= 14 (recomendado 16 o 18).
- **npm** (o Yarn) para instalar dependencias.

## Instrucciones de instalación

1. **Clonar** el repositorio:

   ```bash
   git clone https://github.com/MangelC25/Prueba_FrontEnd.git
   cd Prueba_FrontEnd

## Instruccioens de Ejecucion


**Instalar las dependencias:**

    npm install

**Ejecución en modo desarrollo**

npm run dev
