import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSettingsStore } from '@/store/settingStore';
import { useTranslation } from 'react-i18next';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SeoComponent: FC<SeoProps> = ({ title, description, canonicalUrl }) => {
  const { seoImage } = useSettingsStore();
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const baseUrl = import.meta.env.VITE_BASE_URL || '';
  const renderTitle = title ?? t('seo.title');
  const renderDescription = description ?? t('seo.description');
  const renderCanonicalUrl = canonicalUrl
    ? `${baseUrl}${canonicalUrl}`
    : baseUrl;

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{renderTitle}</title>
      <meta name="description" content={renderDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={renderTitle} />
      <meta property="og:description" content={renderDescription} />

      <meta property="og:url" content="https://www.horowitzv.org/" />
      <meta property="og:image" content={seoImage} />

      <link rel="canonical" href={renderCanonicalUrl} />
    </Helmet>
  );
};

export default SeoComponent;
