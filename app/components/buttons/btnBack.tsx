import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  className?: string;
};

export default function BtnBack({ href, className }: ButtonProps) {
  return (
    <Link href={href} className={`${className} p-2 text-teal-950 rounded-md`}>
      Back
    </Link>
  );
}
