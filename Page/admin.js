window.onload = () => {
  console.log('La página se ha cargado completamente');
  render();

  // Agregamos un evento de clic al botón de eliminación
  const deleteGalleryButton = document.getElementById('Btn-Delete');
  if (deleteGalleryButton) {
    deleteGalleryButton.addEventListener('click', () => {
      // Reemplaza 'galleryIdToDelete' con el ID real de la galería que deseas eliminar
      const galleryIdToDelete = document.querySelector('#input-delete').value;
      deleteGallery(galleryIdToDelete);
    });
  }
};

function render() {
  // Utilizamos la dirección correcta para obtener datos de galerías
  fetch('http://localhost:3000/galleries/').then((response) => {
    return response.json();
  }).then((data) => {
    renderData(data);
    renderServices(data);
    renderGallery(data);
    renderEvents(data);
  }).catch((err) => {
    // console.log(err); // Comentar o eliminar esta línea si no quieres ver mensajes de error en la consola
  });
}

function deleteGallery(galleryId) {
  // Utilizamos la dirección correcta para eliminar la galería
  fetch(`http://localhost:3000/galleries/${galleryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Puedes añadir más datos aquí según los requisitos de tu API
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Galería eliminada exitosamente:', data);
      renderGallery(data);
      // console.log('¡La galería se eliminó exitosamente!'); // Comentar o eliminar esta línea si no quieres ver mensajes de éxito en la consola
    })
    .catch((error) => {
      // console.error('Error al eliminar la galería:', error); // Comentar o eliminar esta línea si no quieres ver mensajes de error en la consola
      // displayErrorMessage('Error al eliminar la galería. Por favor, inténtalo de nuevo.'); // Comentar o eliminar esta línea si no quieres mostrar mensajes de error en la consola
    });
}


