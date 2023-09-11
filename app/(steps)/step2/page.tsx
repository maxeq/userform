import BtnBack from '@/app/components/buttons/btnBack';
import BtnContinue from '@/app/components/buttons/btnContinue';

export default function Step2() {
  return (
    <div>
      <h1>Rent roll</h1>
      <BtnBack href="/step1" />
      <BtnContinue href="/step3" />
    </div>
  );
}
