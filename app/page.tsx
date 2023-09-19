import { FC } from 'react';
import StepsBullets from './components/bulletList';
import BtnBack from './components/buttons/btnBack';
import BtnContinue from './components/buttons/btnContinue';

interface Props {
  searchParams: string;
}

const Page: FC<Props> = ({ searchParams }) => {
  const search = new URLSearchParams(searchParams);
  const id = search.get('id');
  console.log(search);

  const validSteps = ['1', '2', '3', '4', '5'];

  const renderContent = (step: string) => (
    <div>
      {step !== '5' && <StepsBullets step={step} />}
      {step !== '1' || ('5' && <BtnBack href={step} />)}
      {step != '5' && <BtnContinue href={step} />}
      {step === '5' && <div>Congratulations</div>}
    </div>
  );

  if (!id)
    return (
      <div>
        <StepsBullets step="1" /> <BtnContinue href="1" /> <BtnBack href="1" />
      </div>
    );

  return <>{validSteps.includes(id) ? renderContent(id) : renderContent('1')}</>;
};

export default Page;
