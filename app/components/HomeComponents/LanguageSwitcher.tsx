'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // A list of supported languages
  const supportedLanguages = ['en', 'ar'];

  // Track whether the component has hydrated on the client
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set to true once the component is hydrated (client-side rendering is done)
    setIsHydrated(true);
  }, []);

  const changeLanguage = (lang: string) => {
    // Remove any existing language prefix from the path
    const pathWithoutLocale = pathname.split('/').filter((segment) => !supportedLanguages.includes(segment)).join('/');

    // Construct the new path with the desired language prefix
    const newPath = `/${lang}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;

    // Preserve query parameters (if any)
    const queryParams = searchParams ? `?${searchParams.toString()}` : '';

    // Navigate to the new path with the language prefix and query parameters
    router.push(`${newPath}${queryParams}`);
  };

  if (!isHydrated) {
    // Render nothing or a placeholder on the server
    return null;
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')} disabled={pathname.startsWith('/en')}>
        English
      </button>
      <button onClick={() => changeLanguage('ar')} disabled={pathname.startsWith('/ar')}>
        Arabic
      </button>
    </div>
  );
};

export default LanguageSwitcher;
