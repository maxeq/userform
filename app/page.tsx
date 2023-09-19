import { FC } from 'react';
import StepsBullets from './components/bulletList';
import BtnBack from './components/buttons/btnBack';
import BtnContinue from './components/buttons/btnContinue';

interface Props {
  searchParams: string;
}

type StepConfigType = {
  [key: string]: {
    title: string;
    showBack: boolean;
  };
};

const stepConfig: StepConfigType = {
  '1': { title: 'PROPERTY DETAILS', showBack: true },
  '2': { title: 'UNIT MIX', showBack: true },
  '3': { title: 'FINANCING', showBack: true },
  '4': { title: 'INCOME & EXPENSES', showBack: true },
  '5': { title: 'Congratulations', showBack: false },
};

const Page: FC<Props> = ({ searchParams }) => {
  const search = new URLSearchParams(searchParams);
  const id = search.get('id') || '1';

  const renderContent = (step: string) => {
    const config = stepConfig[step] || stepConfig['1'];
    return (
      <div className="grid grid-cols-2 justify-between">
        <div>
          {step !== '5' && <StepsBullets step={step} />}
          {config.showBack && <BtnBack href={step} />}
          {step !== '5' && <BtnContinue href={step} />}
        </div>
        <div>{config.title}</div>
      </div>
    );
  };

  return renderContent(id);
};

export default Page;
