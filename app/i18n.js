// app/i18n.js
'use client';
import { appWithTranslation } from 'next-i18next';
import i18nextConfig from '../next-i18next.config';

export const i18n = appWithTranslation(i18nextConfig);
