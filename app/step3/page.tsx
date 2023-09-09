import BtnContinue from '../components/buttons/btnContinue';
import BtnBack from '../components/buttons/btnBack';

export default function Step3() {
  return (
    <div>
      <h1>Financing</h1>
      <BtnBack href="/step2" />
      <BtnContinue href="/congratulations" />
    </div>
  );
}
