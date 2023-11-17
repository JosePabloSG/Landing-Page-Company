window.onload = () => {
  console.log('La página se ha cargado completamente');
  render();
  deleteGallery();
  updateCompany();
  patchCompany();
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

  const deleteGalleryButton = document.getElementById('Btn-Delete');
  if (deleteGalleryButton) {
    deleteGalleryButton.addEventListener('click', () => {
      const galleryIdToDelete = document.querySelector('#input-delete').value;
      deleteGallery(galleryIdToDelete);
    });
  }
  
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

function updateCompany() {
  const updateButtonHero = document.querySelector('#Btn-Update-Hero');

  if (updateButtonHero) {
    updateButtonHero.addEventListener('click', () => {
      const companyIdToUpdate = document.querySelector('#input-update-hero-id').value;
      const updatedData = {
        paragraphHero: document.querySelector('#input-update-hero-paragraph').value
      };
      const companyId = parseInt(companyIdToUpdate);
      if (!isNaN(companyId)) {
        patchCompany(companyId, updatedData);
      } else {
        console.error('El ID de la empresa no es un número válido');
      }
    });
  }
}

function patchCompany(companyId, updatedData) {
  fetch(`http://localhost:3000/api/companies/${companyId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
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
      console.log('Empresa actualizada exitosamente:', data);
    })
    .catch((error) => {
      console.error('Error al actualizar la empresa:', error);
    });
}
document.addEventListener('DOMContentLoaded', function() {
  updateCompany();
});

