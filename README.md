# ET_PN_PGY4121_005V

**NombreProyecto: tsAPPeo**<br/><br/>
## Integrantes:
<li/>Victor Valenzuela 16.741.653-5<br/>
<li/>Nicolás Ulloa 18.859.770-k<br/>
<li/>Francisco Tapia 17.770.640-k<br/>
<li/>Ricardo Castillo 15.775.973-6<br/>

## Proyecto:<br/>
<li/>El objetivo final de esta app (una vez terminado en su totalidad) es reemplazar el modo en que se registra la asistencia a clases, con esto la responsabilidad queda en manos del alumno utilizando su smartphone para escanear un código QR que estará en la sala o generado por el profesor (Se está evaluando).

## A tener en cuenta:
<li/>Este desarrollo se realizó con Ionic + Firebase (authentication y Firestore).
<li/>Se está trabajando en la implementación de lectura QR por lo tanto la asistencia se debe ingresar como dato en duro en el código.<br/>

## Pasos para ambientar el proyecto:
<li/>Clonar el repositorio
<li/>Abrirlo en Visual Studio Code
<li/>Abrir la terminal de Visual Studio Code y ejecutar los siguientes comandos
<li/>cd tsappeo
<li/>npm install @angular/cli
<li/>npm audit fix
<li/>npm install @capacitor/geolocation
<li/>ionic serve
<li/>Si arroja un mensaje de error "export interface DocumentChange<T> extends firebase.firestore.DocumentChange" Este problema de la librería de Firestore de Angular se corrige de la siguiente forma:
<li/>Control + click en "node_modules/@angular/fire/compat/firestore/interfaces.d.ts:29:33"
<li/>En todas las líneas (dos líneas) "data(options?: SnapshotOptions): T;" se debe reemplazar por "data(options?: SnapshotOptions): any;" la T por any
<li/>ionic serve <br/>
  
## Uso de la aplicación:
<li/>Se presentará una pantalla de carga y va a redirigir a la pantalla de login
<li/>Ingresar las siguientes credenciales correo@correo.cl 123456  (Por el contexto del negocio no se permiten registrar usuarios, las credenciales se les entregarán a los alumnos)
<li/>Hay que tener en cuenta que está aplicación valida la geolocalización por lo que se recomienda usar el navegador Google Chrome e instalar el complemento Spoof Geolocation, luego, con Google Maps, se obtienen las coordenadas de Duoc UC Plaza Norte y se ingresan esas coordenadas en el complemento.
<li/>Click en "marcar asistencia" y debería aparecer un mensaje en verde indicando que la asistencia fue ingresada correctamente
<li/>La lectura de QR no está implementada aun, por lo tanto los datos de la asignatura se deben ingresar en duro en el código, los pasos son los siguientes
<li/>En este path: tsAppeo\tsappeo\src\app\pages\marcar-asistencia\marcar-asistencia.page.ts
<li/>Modificar en el objeto nuevaAsitencia, modificar la fecha, de lo contrario, si se intenta marcar la asistencia, este indicará que ya hay una registrada para esa fecha
<li/>Los datos hora y estaPresente no se validan por el momento debido a que está en espera a que implementemo la lectura QR <br/>

## NOTA:
Las demás funcionalidades se pueden descubrir dentro de la misma app<br/>
<br/>
Consultas por favor al soporte: pagapp2022@gmail.com


