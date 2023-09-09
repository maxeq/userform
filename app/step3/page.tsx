import BtnBack from '@/app/components/buttons/btnBack';
import BtnContinue from '@/app/components/buttons/btnContinue';

export default function Step3() {
  return (
    <div>
      <h1>Financing</h1>
      <BtnBack href="/step2" />
      <BtnContinue href="/congratulations" />
    </div>
  );
}
