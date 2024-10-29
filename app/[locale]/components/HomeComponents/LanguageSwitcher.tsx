// components/LanguageSwitcher.js
'use client';

import React from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pathSegments = pathname.split('/').filter(Boolean); // Remove empty segments
    const currentLocale = pathSegments[0]; // Get current locale

    const switchLanguage = () => {
        const newLocale = currentLocale === 'en' ? 'ar' : 'en'; // Toggle locale
        if (currentLocale === 'en' || currentLocale === 'ar') {
            // If the current path has a locale, replace it with the new one
            pathSegments[0] = newLocale;
        } else {
            // If no locale in path, add the new locale at the start
            pathSegments.unshift(newLocale);
        }

        // Preserve query parameters
        const queryString = searchParams.toString();
        const newPath = `/${pathSegments.join('/')}${queryString ? `?${queryString}` : ''}`;

        router.push(newPath);
    };

    return (
        <div className="flex gap-2">
            <button 
                className="px-[20px] py-[10px] text-white rounded-[10px]" 
                onClick={switchLanguage}
            >
                {currentLocale === 'ar' ? 'EN' : 'العربية'}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
