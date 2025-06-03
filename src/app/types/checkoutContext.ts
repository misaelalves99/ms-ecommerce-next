import { CheckoutForm } from './checkout';

export type CheckoutContextType = {
  form: CheckoutForm;
  setForm: (form: CheckoutForm) => void;
};
