// src/app/page.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/catcat'); // 導向心理測驗頁
  }, [router]);

  return null;
}
