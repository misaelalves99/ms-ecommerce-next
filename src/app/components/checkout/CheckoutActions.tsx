'use client';

import React from 'react';
import styles from './CheckoutActions.module.css';

const CheckoutActions: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, type, className, ...rest}) => {
  return (
    <div className={styles.actions}>
      <button type={type} className={className} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CheckoutActions;
