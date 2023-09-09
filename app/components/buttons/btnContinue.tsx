import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  className?: string;
};

export default function BtnContinue({ href, className }: ButtonProps) {
  return (
    <Link href={href} className={`${className} p-2 text-white bg-teal-950 rounded-md`}>
      Continue
    </Link>
  );
}
