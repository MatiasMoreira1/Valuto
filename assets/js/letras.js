fetch('../assets/js/letras.json')
  .then(response => response.json())
  .then(data => {
    // Obtener el nombre de la canción desde la URL
    const query = new URLSearchParams(window.location.search);
    const cancionNombre = query.get("cancion"); // Esto debería ser el nombre de la canción

    // Obtener la canción del JSON usando el nombre obtenido
    const cancion = data[cancionNombre];

    if (cancion) {
      // Elementos ya existentes en el HTML
      const titulo = document.querySelector(".portada-text h2");
      const artista = document.querySelector(".portada-text p:nth-child(2)");
      const prods = document.querySelector(".portada-text p:nth-child(3) span");
      const portada = document.querySelector(".portada-div img");
      const contenedorLetra = document.querySelector(".contenedor-letra");

      // Actualizar los textos con la información de la canción
      titulo.textContent = cancion.titulo;
      artista.textContent = cancion.artista;
      prods.textContent = cancion.prods;
      portada.src = cancion.portada;

      // Agregar la letra de la canción
      contenedorLetra.innerHTML = `
        <div class="letra text-gray-800 text-base">${cancion.letra}</div>
      `;
    } else {
      console.error("No se encontró la canción en el JSON.");
    }
  })
  .catch(error => {
    console.error("Error al cargar el JSON de letras:", error);
  });
