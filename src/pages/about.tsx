import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      TERECIBO es una aplicación web disponible para dispositivos móviles, tabletas y computadoras de escritorio que permite a los compradores en línea conectarse con un vecino (neighbor) o negocio local validado y de confianza que firmará y retendrá las entregas para ellos.<br>
      Todos los vecinos son mayores de 21 años y por $ por envÍo, puede reservar un NEIGHBOR para casi cualquier cosa. Después de que su NEIGHBOR reciba su entrega, usted se encarga de recogerla a la hora que le resulte conveniente.

      Al pagar en cualquier sitio, descubra sus fechas de envío estimadas y abra una nueva pestaña o use su teléfono inteligente o tableta y vaya a terecibo.com. Ingrese la (s) fecha (s) proporcionada al finalizar la compra para buscar y reservar un NEIGHBOR en segundos.

    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </Main>
);

export default About;
