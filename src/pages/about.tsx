import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      TERECIBO es una aplicación web disponible para dispositivos móviles, tabletas y computadoras de escritorio que permite a los compradores en línea conectarse con un vecino (neighbor) o negocio local validado y de confianza que firmará y retendrá las entregas para ellos.

    </p>
    <p>
      Al pagar en cualquier sitio, descubra sus fechas de envío estimadas y abra una nueva pestaña o use su teléfono inteligente o tableta y vaya a terecibo.com. Ingrese la (s) fecha (s) proporcionada al finalizar la compra para buscar y reservar un NEIGHBOR en segundos.
    </p>
  </Main>
);

export default About;
