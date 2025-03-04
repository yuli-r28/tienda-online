
import './Carrusel.css';

import imagen1 from '../Imagenes/imagen-principal-logo1.jpeg';


const ImagenPrincipal = () => {
  
  return (
    <div className="imagen-principal-logo1">
            <img src={imagen1} alt="imagen-principal" />
         </div>);
}

export default ImagenPrincipal;
