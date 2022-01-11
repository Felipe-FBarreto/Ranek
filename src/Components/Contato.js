import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title=" Ranek | Contato" description="Pagina de contato" />
      <img src={foto} alt="maquina de escrever" />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>felipe@devbr.com</li>
          <li>99999-9999</li>
          <li>Rua Logo ali 888</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
