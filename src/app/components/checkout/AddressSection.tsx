// app/components/checkout/AddressSection.tsx
'use client';

import styles from './AddressSection.module.css';

const mockAddress = {
  isPrincipal: true,
  name: 'Misael Alves dos Santos',
  street: 'Rua Francisco De Souza Campos, 131 - casa',
  cityState: 'Rio Pretinho, Teófilo Otoni - MG',
  cep: '39808-000',
};

const AddressSection = () => (
  <section className={styles.deliveryAddress}>
    <h2>Endereço de entrega</h2>
    <div className={styles.addressCard}>
      {mockAddress.isPrincipal && <span className={styles.principalAddress}>Endereço principal</span>}
      <p>{mockAddress.name}</p>
      <p>{mockAddress.street}</p>
      <p>{mockAddress.cityState}</p>
      <p>CEP: {mockAddress.cep}</p>
      <button className={styles.changeAddressButton}>Novo endereço</button>
      <button className={styles.changeAddressButton}>Escolher outro endereço</button>
    </div>
  </section>
);

export default AddressSection;
