async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      
      console.log("este es; ",data);
      
  
      const productosDiv = document.getElementById('productos');
  
      data.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
          <div style="height: 100%;">
          <div class="imageProduct">
            <img src="${producto.image}" alt="${producto.title}" style="height:100px" >
          </div>
          
          <h5>${producto.title}</h5>
          <p>Precio: $${producto.price}</p>
        `;
        productosDiv.appendChild(productoElement);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Llama a la función para obtener y mostrar los datos
  fetchData();