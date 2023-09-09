import BtnContinue from '../components/buttons/btnContinue';
import { TextField } from '../components/textField';

export default function Step1() {
  return (
    <div>
      <div>Property details</div>
      <TextField
        name="address"
        id="addressField"
        autoComplete="street-address"
        placeholder="1373 5th Avenue, Falher, Alberta T0H 1M0"
      />
      <BtnContinue href="/step2" />
    </div>
  );
}
