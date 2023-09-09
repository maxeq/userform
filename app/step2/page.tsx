import BtnContinue from '../components/buttons/btnContinue';
import BtnBack from '../components/buttons/btnBack';

export default function Step2() {
  return (
    <div>
      <h1>Rent roll</h1>
      <BtnBack href="/step1" />
      <BtnContinue href="/step3" />
    </div>
  );
}
