# Casa Huellitas · Sitio web

Sitio nuevo de Casa Huellitas, hotel y guardería de perros en Agua Blanca, frente a Bugambilias. Este repositorio es la fuente del sitio. La marca (colores, tipografía, componentes y reglas de uso) vive en el Design System de Casa Huellitas en Claude, y la planeación y las tareas viven en Notion.

Es un prototipo navegable hecho solo con HTML, CSS y JavaScript. No necesita instalar nada ni compilar.

## Cómo verlo

Abre `index.html` en el navegador. Para que las transiciones y el juego de la pelota funcionen igual que en línea, conviene servirlo desde una carpeta local:

```bash
python3 -m http.server 8000
```

y luego entrar a `http://localhost:8000`.

## Páginas

Cada página responde una sola pregunta del cliente y termina con un botón a la siguiente.

| Página | Archivo | Efecto propio |
| --- | --- | --- |
| Inicio | `index.html` | Letras que se mueven con el scroll y stickers |
| Hotel / Pensión | `hotel.html` | Tarjetas que se apilan |
| Guardería / Daypass | `guarderia.html` | Juego de lanzar la pelota |
| Precios | `precios.html` | Calculadora |
| Horarios | `horarios.html` | Reloj del día que avanza con el scroll |
| Requisitos | `requisitos.html` | Palomear los 4 requisitos |
| Instalaciones | `instalaciones.html` | Galería horizontal |
| Preguntas | `preguntas.html` | Acordeón con buscador |
| Reseñas | `resenas.html` | |
| Nosotros y ubicación | `nosotros.html` | |
| Reservar | `reservas.html` | Formulario de reserva en 5 pasos |

## Cómo está organizado

```
├── index.html … reservas.html   las 11 páginas
├── site.css      nav, botones, encabezado de página, tarjetas, botón "siguiente", footer y loader
├── site.js       inyecta el nav, el menú, el footer y la transición de pelotas entre páginas
├── fx.js         huellitas que siguen el cursor, aparición al hacer scroll, parallax y el juego de la pelota
├── reservas.js   lógica del formulario de reserva
├── styles.css    entrada de estilos de marca, importa los archivos de tokens/
├── tokens/       colores, tipografía, espaciado y fuentes de la marca
├── fonts/        Friendship Medium, Sweet Creamy y Hanken Grotesk
├── assets/       logo, fotos reales de las instalaciones y el QR de reseñas
└── archivo/
    ├── propuesta-v1/    primera propuesta en React, solo como referencia
    └── exploraciones/   las tres direcciones que se exploraron (A · Parque fue la elegida)
```

Los valores de marca de `tokens/` salen del Design System. Si un color o una tipografía cambia allá, hay que actualizar estos archivos también.

## Reglas de contenido

- Español de México, siempre de tú.
- Los servicios se llaman "Hotel / Pensión" y "Guardería / Daypass", siempre en ese par.
- El negocio pidió no usar "sin jaulas" en el sitio nuevo (mejor "perritos felices" u otra frase) ni "como en casa" en la portada. Tampoco "premium" ni anglicismos de marketing.
- Fotos reales con pie de foto abajo, nunca texto encima.
- Sin emoji en el sitio.

## Datos del negocio

- Hotel / Pensión: $350 por noche. Entrada y salida de 9:00 am a 2:00 pm. Salida tarde +$200, máximo 6:00 pm.
- Guardería / Daypass: $200, de 10:00 am a 6:00 pm.
- Transporte de lunes a viernes, se cotiza con la ubicación.
- Atención de lunes a domingo, de 9:00 am a 6:00 pm.
- WhatsApp 33 3447 9782 · Instagram [@casa_huellitas](https://www.instagram.com/casa_huellitas) · [Google](https://g.co/kgs/T5Ybaf)

## Pendientes

- Rehacer el efecto de rebote de las pelotas (loader y transición entre páginas).
- Conectar las reservas a un sistema real: disponibilidad, confirmaciones y fechas. Hoy el formulario es solo visual y no guarda nada.
- Cambiar las reseñas de ejemplo por reseñas reales de Google.
