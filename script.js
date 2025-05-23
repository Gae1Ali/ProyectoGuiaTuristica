// Definición de datos turísticos (movida desde el inline script)
const datosTuristicos = {
      Colima: {
          Restaurantes: [
              { nombre: 'La Cumparsita', descripcion: 'Cocina internacional y ambiente familiar' },
              { nombre: 'Daruco Oriental Kitchen', descripcion: 'Cocina asiática moderna' },
              { nombre: 'La Buena Vida', descripcion: 'Mexicana contemporánea' }
          ],
          Hoteles: [
              { nombre: 'Hotel Juárez 70', descripcion: 'Centro histórico, cómodo y accesible' },
              { nombre: 'Hotel Hacienda del Gobernador', descripcion: 'Boutique colonial' }
          ],
          Jardines: [
            { nombre: 'Jardín Núñez', descripcion: 'Espacio verde y cultural' },
              { nombre: 'Jardín de la Villa', descripcion: 'Área tranquila para pasear' }
          ],
          'Centros Comerciales': [
              { nombre: 'Zentralia Colima', descripcion: 'Tiendas, cine y comida' },
              { nombre: 'Plaza San Fernando', descripcion: 'Boutiques y cafés' }
          ],
          Tours: [
              { nombre: 'Tour Volcán', descripcion: 'Excursión guiada al Volcán de Colima' },
              { nombre: 'Tour de Centro Histórico', descripcion: 'Visita a museos y jardines' }
          ]
      },
      Manzanillo: {
          Restaurantes: [
              { nombre: 'El Fogón', descripcion: 'Mariscos frescos y vista al mar' },
              { nombre: 'Punta Zuk', descripcion: 'Cocina fusión moderna' }
          ],
          Hoteles: [
              { nombre: 'Hotel Marbella', descripcion: 'Frente a la playa, con alberca' },
              { nombre: 'Las Hadas by Brisas', descripcion: 'Resort de lujo con golf' }
          ],
          Jardines: [
              { nombre: 'Ola Brisa Gardens', descripcion: 'Jardín botánico tropical' }
          ],
          'Centros Comerciales': [
              { nombre: 'Patio Manzanillo', descripcion: 'Cine, tiendas y comida' },
              { nombre: 'Plaza Manzanillo', descripcion: 'Centro comercial popular' }
          ],
          Tours: [
              { nombre: 'Tour Manglares y Tortugas', descripcion: 'Reserva ecológica' }
          ]
      },
      Comala: {
          Restaurantes: [
              { nombre: 'Los Portales de Comala', descripcion: 'Comida tradicional y ponche' },
              { nombre: 'El Atrio', descripcion: 'Restaurante típico en el centro' }
          ],
          Hoteles: [
              { nombre: 'Hotel Casa Alvarada', descripcion: 'Hotel colonial con encanto' }
          ],
          Jardines: [
              { nombre: 'Plaza Principal', descripcion: 'Árboles, kiosco y cultura' }
          ],
          'Centros Comerciales': [
              { nombre: 'Mercado Artesanal', descripcion: 'Productos típicos y recuerdos' }
          ],
          Tours: [
              { nombre: 'Tour Ecológico Nogueras', descripcion: 'Ex-hacienda y museo' }
          ]
      },
      Armería: {
          Restaurantes: [
              { nombre: 'Mariscos El Delfín', descripcion: 'Mariscos frescos a la orilla del mar' },
              { nombre: 'Restaurant Los Cocos', descripcion: 'Comida mexicana y ambiente familiar' }
          ],
          Hoteles: [
              { nombre: 'Hotel Flamingos', descripcion: 'Hotel sencillo cerca de la playa' },
              { nombre: 'Bungalows Delfín', descripcion: 'Cabañas equipadas frente al mar' }
          ],
          Jardines: [
              { nombre: 'Parque Central de Armería', descripcion: 'Espacio público con áreas verdes' }
          ],
          'Centros Comerciales': [
              { nombre: 'Mercado Municipal de Armería', descripcion: 'Productos locales y artesanías' }
          ],
          Tours: [
              { nombre: 'Paseo en lancha por la Laguna de Cuyutlán', descripcion: 'Avistamiento de aves y naturaleza' }
          ]
      },
      Coquimatlán: {
          Restaurantes: [
              { nombre: 'Fonda Doña María', descripcion: 'Comida tradicional colimense' },
              { nombre: 'Restaurant Campestre Los Limones', descripcion: 'Platillos regionales en un entorno natural' }
          ],
          Hoteles: [
              { nombre: 'Hotel Coquimatlán', descripcion: 'Hotel funcional en el centro' }
          ],
          Jardines: [
              { nombre: 'Jardín Principal de Coquimatlán', descripcion: 'Lugar de encuentro con kiosco' }
          ],
          'Centros Comerciales': [
              { nombre: 'Tianguis de Coquimatlán', descripcion: 'Mercado semanal con variedad de productos' }
          ],
          Tours: [
              { nombre: 'Visita a la Ex-Hacienda de Coquimatlán', descripcion: 'Recorrido histórico' }
          ]
      },
      Cuauhtémoc: {
          Restaurantes: [
              { nombre: 'Restaurant El Balcón', descripcion: 'Comida mexicana con vistas panorámicas' },
              { nombre: 'Cenaduría La Güera', descripcion: 'Antojitos mexicanos tradicionales' }
          ],
          Hoteles: [
              { nombre: 'Hotel Cuauhtémoc', descripcion: 'Alojamiento sencillo y céntrico' }
          ],
          Jardines: [
              { nombre: 'Parque Central de Cuauhtémoc', descripcion: 'Espacio familiar con áreas de juego' }
          ],
          'Centros Comerciales': [
              { nombre: 'Mercado Municipal de Cuauhtémoc', descripcion: 'Productos frescos y locales' }
          ],
          Tours: [
              { nombre: 'Ruta del Café', descripcion: 'Visita a plantaciones y degustación' }
          ]
      },
      Ixtlahuacán: {
          Restaurantes: [
              { nombre: 'Restaurant Campestre El Paraíso', descripcion: 'Comida regional en un ambiente natural' },
              { nombre: 'Fonda La Tradición', descripcion: 'Platillos caseros con sabor local' }
          ],
          Hoteles: [
              { nombre: 'Cabañas Los Sauces', descripcion: 'Cabañas rústicas para descanso' }
          ],
          Jardines: [
              { nombre: 'Jardín Principal de Ixtlahuacán', descripcion: 'Espacio tranquilo con vegetación' }
          ],
          'Centros Comerciales': [
              { nombre: 'Tianguis de Ixtlahuacán', descripcion: 'Mercado semanal con productos variados' }
          ],
          Tours: [
              { nombre: 'Visita a la zona arqueológica de Ixtlahuacán', descripcion: 'Exploración histórica' }
          ]
      },
      Minatitlán: {
          Restaurantes: [
              { nombre: 'Restaurant La Casita', descripcion: 'Comida mexicana y especialidades locales' },
              { nombre: 'Fonda El Rincón Minatitlense', descripcion: 'Platillos típicos de la región' }
          ],
          Hoteles: [
              { nombre: 'Hotel Minatitlán', descripcion: 'Alojamiento funcional para visitantes' }
          ],
          Jardines: [
              { nombre: 'Parque Central de Minatitlán', descripcion: 'Espacio público para la comunidad' }
          ],
          'Centros Comerciales': [
              { nombre: 'Mercado Municipal de Minatitlán', descripcion: 'Productos locales y artesanías' }
          ],
          Tours: [
              { nombre: 'Recorrido por las minas históricas', descripcion: 'Aventura subterránea' }
          ]
      },
      Tecomán: {
          Restaurantes: [
              { nombre: 'Mariscos El Pacífico', descripcion: 'Variedad de platillos del mar' },
              { nombre: 'Restaurant Los Mangos', descripcion: 'Comida mexicana y ambiente relajado' }
          ],
          Hoteles: [
              { nombre: 'Hotel Real Tecomán', descripcion: 'Hotel moderno con buenas instalaciones' },
              { nombre: 'Hotel Plaza Tecomán', descripcion: 'Ubicación céntrica y cómodo' }
          ],
          Jardines: [
              { nombre: 'Parque Hidalgo', descripcion: 'Principal punto de encuentro en Tecomán' }
          ],
          'Centros Comerciales': [
              { nombre: 'Plaza Tecomán', descripcion: 'Tiendas y servicios diversos' }
          ],
          Tours: [
              { nombre: 'Visita a la zona productora de limón', descripcion: 'Conoce el proceso del oro verde' }
          ]
      },
      'Villa de Álvarez': {
          Restaurantes: [
              { nombre: 'La Troje', descripcion: 'Cocina tradicional mexicana con un toque moderno' },
              { nombre: 'Sushiitto', descripcion: 'Variedad de sushi y platillos japoneses' },
              { nombre: 'Italianni\'s', descripcion: 'Comida italiana en un ambiente agradable' }
          ],
          Hoteles: [
              { nombre: 'Fiesta Inn Colima', descripcion: 'Hotel de negocios con buenas amenidades' },
              { nombre: 'Hotel Montajes', descripcion: 'Hotel confortable con fácil acceso' }
          ],
          Jardines: [
              { nombre: 'Parque La Villa', descripcion: 'Espacio recreativo con áreas verdes' },
              { nombre: 'Jardín Juárez', descripcion: 'Ubicado en el centro de Villa de Álvarez' }
          ],
          'Centros Comerciales': [
              { nombre: 'Plaza Sendera Colima', descripcion: 'Tiendas departamentales, cine y restaurantes' },
              { nombre: 'Altozano Colima', descripcion: 'Exclusivo centro comercial con diversas opciones' }
          ],
          Tours: [
              { nombre: 'Tour por los murales de Villa de Álvarez', descripcion: 'Descubre el arte urbano local' }
          ]
      }
    };
    
    // Función para mostrar una sección específica (usada por el botón "Explorar")
    function mostrarSeccion(id) {
      // Puedes ocultar otras secciones si es necesario, pero para este prototipo
      // con mostrar la deseada es suficiente ya que no se superponen.
      const seccion = document.getElementById(id);
      if (seccion) {
        seccion.style.display = 'block'; // O 'grid', 'flex', dependiendo de tu CSS
        // Opcional: Desplazarse suavemente a la sección
        seccion.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Función para mostrar los botones de categoría para un municipio
    function mostrarContenidoMunicipio(nombre) {
      const contenidoDiv = document.getElementById('contenido-municipio');
      const categorias = ['Restaurantes', 'Hoteles', 'Jardines', 'Centros Comerciales', 'Tours'];
      
      // Verifica si el municipio existe en los datos
      if (!datosTuristicos[nombre]) {
        contenidoDiv.innerHTML = `<p>No se encontraron datos para ${nombre}.</p>`;
        return; // Salir si el municipio no existe
      }
    
      // Genera los botones de categoría dinámicamente
      let botones = categorias.map(cat => {
        // Solo crea el botón si hay datos para esa categoría en el municipio
        if (datosTuristicos[nombre][cat] && datosTuristicos[nombre][cat].length > 0) {
          return `<button onclick="mostrarListaOpciones('${nombre}','${cat}')">${cat}</button>`;
        } else {
          return ''; // No crear botón si no hay datos
        }
      }).join('');
    
      // Añade un div donde se mostrarán los resultados de la categoría
      contenidoDiv.innerHTML = `
        <h4>${nombre} - Categorías disponibles:</h4>
        <div class='opciones'>${botones}</div>
        <div id='resultados-opciones'>
          <p>Selecciona una categoría para ver detalles.</p>
        </div>
      `;
    
      // Asegúrate de que la sección de municipios sea visible
      mostrarSeccion('municipios');
    }
    
    // **FUNCIÓN CORREGIDA:** Muestra la lista de elementos para la categoría seleccionada
    function mostrarListaOpciones(municipio, categoria) {
      const resultadosDiv = document.getElementById('resultados-opciones');
        
      // Accede a los datos específicos del municipio y categoría
      const items = datosTuristicos[municipio] ? datosTuristicos[municipio][categoria] : null;
    
      let htmlContent = `<h4>${categoria} en ${municipio}</h4>`;
    
      if (items && items.length > 0) {
        // Itera sobre los elementos y crea HTML para cada uno
        items.forEach(item => {
          htmlContent += `
            <div class="card">
              <strong>${item.nombre}</strong><br>
              ${item.descripcion}
            </div>
          `;
        });
      } else {
        htmlContent += `<p>No hay ${categoria.toLowerCase()} disponibles para ${municipio} en este momento.</p>`;
      }
    
      // Actualiza el contenido del div de resultados
      resultadosDiv.innerHTML = htmlContent;
    }
    
    
    // Función placeholder para reservar servicio (puedes expandirla después)
    function reservarServicio(servicio) {
      alert('¡Reserva simulada para ' + servicio + '! En un sistema real, aquí iría el proceso de reserva.');
    }
    
    
    // --- Código del Mapa Leaflet (movido desde el inline script) ---
    // Asegúrate de que el div 'map' existe antes de inicializar el mapa
    document.addEventListener('DOMContentLoaded', (event) => {
      var map = L.map('map').setView([19.2450, -103.7241], 10); // Centrado en Colima, Colima
    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    
      // Función para crear el contenido de los popups
function crearPopup(nombre, imagen, estrellas) {
    const imgSrc = imagen ? imagen : '';

    return `
      <div style="text-align: center;">         <strong>${nombre}</strong><br>
        ${imgSrc ? `<img src="${imgSrc}" alt="${nombre}" class="popup-img">` : ''}<br>         ${estrellas || ''}
      </div>
    `;
}
    
// Marcadores de ejemplo (asegúrate de tener estas imágenes en tu carpeta o usa URLs)
// Nota: Estas coordenadas son aproximadas. Deberías usar coordenadas precisas si es posible.
    L.marker([19.0802, -104.3054]).addTo(map) // Playa de Oro (Manzanillo)
     .bindPopup(crearPopup('Playa de Oro', 'playa-oro.jpg', '⭐⭐⭐⭐☆'));
    
    L.marker([19.2792, -103.7995]).addTo(map) // Comala Pueblo Mágico
      .bindPopup(crearPopup('Comala Pueblo Mágico', 'comala.jpg', '⭐⭐⭐⭐⭐'));
    
    L.marker([19.5145, -103.6208]).addTo(map) // Volcán de Colima (ubicación aproximada vista desde lejos)
      .bindPopup(crearPopup('Volcán de Colima', 'volcan-colima.jpg', '⭐⭐⭐⭐☆'));
    
    L.marker([19.2433, -103.7250]).addTo(map) // Jardín Libertad (Colima Centro)
      .bindPopup(crearPopup('Jardín Libertad', 'jardin-libertad.jpg', '⭐⭐⭐⭐☆'));
    
    L.marker([18.87475, -103.99223]).addTo(map) // Playa El Paraíso (Armería/Tecomán)
      .bindPopup(crearPopup('Playa El Paraíso', 'playa-paraiso.jpg', '⭐⭐⭐⭐☆'));
    });
    
    // Funciones no utilizadas en tu HTML actual, pero presentes en tu script anterior.
    // Las puedes eliminar si no las necesitas o expandir si planeas usarlas.
    /*
    function mostrarBusqueda() {
      document.getElementById('busqueda').style.display = 'block';
    }
    
    function mostrarResultados() {
      const destino = document.getElementById('destinoInput').value.trim();
      if (destino) {
        alert('Mostrando resultados para: ' + destino);
      } else {
        alert('Por favor ingresa un destino válido.');
      }
    }
    */