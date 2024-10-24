"use client";

import { useTranslation } from 'next-i18next';



export default function Home() {
  const { t } = useTranslation('common');
  return (
   <>
   <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello')}</p>
    </div>
   </>
  );
}
