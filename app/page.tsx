import BtnContinue from './components/buttons/btnContinue';

export default function Home({ params }: { params: { referer: string } }) {
  console.log(params.referer, 'params.referer');

  return <div>111111</div>;
}
