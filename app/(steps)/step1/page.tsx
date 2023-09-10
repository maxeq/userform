import StepsBullets from '@/app/components/bulletList';
import BtnContinue from '@/app/components/buttons/btnContinue';
import { TextField } from '@/app/components/textField';

function Step1() {
  return (
    <div>
      <StepsBullets step="step1" />
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

export default Step1;
