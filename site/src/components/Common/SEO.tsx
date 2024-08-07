import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SeoProps {
  title?: string;
  canonicalUrl?: string;
}

const SeoComponent: FC<SeoProps> = ({ title, canonicalUrl }) => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const baseUrl = import.meta.env.VITE_BASE_URL || '';
  const renderTitle = title ?? t('seo.title');
  const renderCanonicalUrl = canonicalUrl
    ? `${baseUrl}${canonicalUrl}`
    : baseUrl;

  return (
    <Helmet htmlAttributes={{ lang: language }} title={renderTitle}>
      <link rel="canonical" href={renderCanonicalUrl} />
    </Helmet>
  );
};

export default SeoComponent;
