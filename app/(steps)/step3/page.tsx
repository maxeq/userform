import BtnBack from '@/app/components/buttons/btnBack';
import BtnContinue from '@/app/components/buttons/btnContinue';
import StepsBullets from '@/app/components/bulletList';

export default function Step3() {
  return (
    <div>
      <StepsBullets step="step3" />
      <h1>Financing</h1>
      <BtnBack href="/step2" />
      <BtnContinue href="/congratulations" />
    </div>
  );
}
