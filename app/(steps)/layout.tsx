import { headers } from 'next/headers';

export default function stepLayout({ children }: { children: React.ReactNode }) {
  return <div className={`w-full flex flex-row`}>{children}</div>;
}
