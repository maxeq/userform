import Link from 'next/link';
import Step1 from './step1/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to the app!
      <button>
        <Link href="/step1">Start Test</Link>
      </button>
    </main>
  );
}
