import { serverSideTranslations as i18nServerSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../../next-i18next.config';
import { SSRConfig } from 'next-i18next';

export default async function serverSideTranslations(locale: string, namespaces: string[]): Promise<SSRConfig> {
  const result = await i18nServerSideTranslations(
    locale,
    ['home'],
    nextI18nextConfig
  );  
  return { ...result };
}