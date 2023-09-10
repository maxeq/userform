import BtnBack from '@/app/components/buttons/btnBack';
import StepsBullets from '@/app/components/bulletList';
import BtnContinue from '@/app/components/buttons/btnContinue';

export default function Step2() {
  return (
    <div>
      <StepsBullets step="step2" />
      <h1>Rent roll</h1>
      <BtnBack href="/step1" />
      <BtnContinue href="/step3" />
    </div>
  );
}
