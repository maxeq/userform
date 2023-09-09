import BtnContinue from './components/buttons/btnContinue';

export default function Home() {
  return (
    <main className="flex flex-col items-center space-x-2 justify-center self-center text-center">
      <h1>Welcome to the app my friend!</h1>
      <div>
        <BtnContinue href="/step1" />
      </div>
    </main>
  );
}
