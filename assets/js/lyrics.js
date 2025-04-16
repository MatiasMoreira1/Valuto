fetch('../assets/js/letras.json')
  .then(response => response.json())
  .then(data => {
    // Obtener el contenedor donde agregar las canciones
    const listaCanciones = document.getElementById('canciones-lista');

    // Limpiar el contenido previo, si existe
    listaCanciones.innerHTML = '';

    // Iterar sobre todas las canciones en el JSON
    for (const cancionNombre in data) {
      if (data.hasOwnProperty(cancionNombre)) {
        const cancion = data[cancionNombre];
        
        // Crear el enlace <a> para cada canción
        const cancionLink = document.createElement('a');
        cancionLink.href = `letras.html?cancion=${cancionNombre}`;  // El enlace de la canción
        cancionLink.classList.add('cancion-item', 'w-full', 'h-20', 'flex', 'items-center', 'gap-4');

        // Crear el div de la portada
        const portadaDiv = document.createElement('div');
        portadaDiv.classList.add('portada', 'h-20', 'w-20', 'bg-gray-400');
        const portadaImg = document.createElement('img');
        portadaImg.src = cancion.portada;
        portadaImg.alt = cancion.titulo;
        portadaDiv.appendChild(portadaImg);
        
        // Crear el título de la canción
        const tituloH3 = document.createElement('h3');
        tituloH3.classList.add('font-montserrat');
        tituloH3.textContent = cancion.titulo;
        
        // Añadir los elementos creados al enlace <a>
        cancionLink.appendChild(portadaDiv);
        cancionLink.appendChild(tituloH3);

        // Agregar el enlace al contenedor principal (ya existe el contenedor <a> con id="canciones-lista")
        listaCanciones.appendChild(cancionLink);
      }
    }
  })
  .catch(error => {
    console.error("Error al cargar el JSON de letras:", error);
  });
