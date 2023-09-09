import BtnContinue from './components/buttons/btnContinue';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to the app my friend!
      <BtnContinue href="/step1" />
    </main>
  );
}
