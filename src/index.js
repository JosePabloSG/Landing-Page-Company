window.onload = () => {
  console.log('page is fully loaded')
  render()
}

function render () {
  fetch('../src/mocks/data.json').then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
}
