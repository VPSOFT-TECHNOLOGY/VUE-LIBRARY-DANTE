<template>
  <v-app >
    <Navbar appTitle="Dante Library" homeTitle="Inicio" signInTitle="Iniciar Sesion" aboutTitle="Catalogo" contactTitle="Contacto" />
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
  }
};
</script>


<style>
  .contenido-nostros {
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .seccion {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  
  .contenedor {
    width: 95%;
    max-width: 80rem;
    margin: 0 auto;
  }
  
  .texto-nosotros blockquote {
    font-weight: 100;
    font-size: 2.2rem;
    margin: 3rem 0 0 0;
    padding-left: 1rem 0 3rem 0;
  }
  
  .iconos-nosotros {
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(1, 3fr);
  }
  .icono img {
      text-align:start;
      height: 5rem;
      
  }
  
  .contenido-centrado {
      max-width: 50rem;
  }
  
  .alinear-derecha {
      display: flex;
      justify-content: flex-end;
  }
  
  .mapa{
      display: flex;
      justify-content: center;
  }
  
  h1 {
    font-size: 3.8rem;
  }
  
  h2,
  h3 {
    font-family: Lato, sans-serif;
    margin: 2.5rem 0;
    font-weight: 300;
    text-align: center;
  }
  
  p {
    font-size: 2 rem;
  }
  
  img, picture {
    width: 80rem;
    height: 40rem;
    display: block;
  
  }
  
  main > div{
      display: block;
  }
/*---------------------ESTILOS DEL ABOUT-----------------*/
.contenedor2 {
    max-width: 120rem;
    margin: 0 auto;
}

p {
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 1rem;
}
.producto {
    padding: 1rem;
}
.producto__nombre {
  display: flex;
    font-size: 2rem;
    justify-content: start;
}
.producto__precio {
  display: flex;
    font-size: 1.8rem;
    justify-content: start;
}

.producto__imagen{
   width: 10rem;
    height: 15rem;
    display: flex;
    justify-content: start;
  }
</style>

