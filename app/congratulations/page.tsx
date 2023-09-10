import BtnContinue from '@/app/components/buttons/btnContinue';
import StepsBullets from '../components/bulletList';
import BtnBack from '../components/buttons/btnBack';

function Congratulations() {
  return (
    <div>
      <h1>Congratulations! Start again?</h1>
      <BtnBack href="/step1" />
    </div>
  );
}

export default Congratulations;
