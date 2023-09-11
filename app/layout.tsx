import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test app',
  description: 'Created by @maxonx',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { referer: string };
}) {
  const headersList = headers();
  const referer = headersList.get('referer');
  console.log(referer);
  if (referer) params.referer = 'sd';
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>{children}</body>
    </html>
  );
}
