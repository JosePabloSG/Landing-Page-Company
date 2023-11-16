window.onload = () => {
  console.log('La página se ha cargado completamente');
  render();


  const deleteGalleryButton = document.getElementById('Btn-Delete');
  if (deleteGalleryButton) {
    deleteGalleryButton.addEventListener('click', () => {
      const galleryIdToDelete = document.querySelector('#input-delete').value;
      deleteGallery(galleryIdToDelete);
    });
  }
};

function render() {
  
  fetch('http://localhost:3000/galleries/').then((response) => {
    return response.json();
  }).then((data) => {
    renderData(data);
    renderServices(data);
    renderGallery(data);
    renderEvents(data);
  }).catch((err) => {
  
  });
}

function deleteGallery(galleryId) {

  fetch(`http://localhost:3000/galleries/${galleryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
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
      document.querySelector('#input-delete').value = '';
      renderGallery(data);
    })
    .catch((error) => {
    
    });
}

const updateButton = document.querySelector('#Btn-Update');
if (updateButton) {
  updateButton.addEventListener('click', () => {
    const serviceIdToUpdate = document.querySelector('#input-update').value;
    const updatedData = {
      title: document.querySelector('.btn-title').value,
      paragraph: document.querySelector('.btn-Description').value,
      url: document.querySelector('.btn-image').value,
    };

    fetch(`http://localhost:3000/services/${serviceIdToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue exitosa');
        }
        return response.json();
      })
      .then((data) => {
        console.log('El servicio fue actualizado exitosamente:', data);

        document.querySelector('#input-update').value = '';
        document.querySelector('.btn-title').value = '';
        document.querySelector('.btn-Description').value = '';
        document.querySelector('.btn-image').value = '';

      })
  });
}
