import React from 'react';
import Head from '@docusaurus/Head';
import {useTitleFormatter} from '@docusaurus/theme-common';

const getBannerBearURL = title => `https://ondemand.bannerbear.com/taggedurl/40p1rqg8Wyrdva3NJz/image.jpg?modifications=[title---text~~${title}]`

export default function Seo({
  title,
  description,
  keywords,
  image,
}){
  const metaTitle = useTitleFormatter(title);
  const metaImageUrl = title ? getBannerBearURL(title): '';
  return (
    <Head>
      {title && <title>{metaTitle}</title>}
      {title && <meta property="og:title" content={metaTitle} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {keywords && (
        <meta
          name="keywords"
          content={
            (Array.isArray(keywords) ? keywords.join(',') : keywords)
          }
        />
      )}
      {metaImageUrl && <meta property="og:image" content={metaImageUrl} />}
      {metaImageUrl && <meta name="twitter:image" content={metaImageUrl} />}
      {metaImageUrl && <meta name="twitter:card" content="summary_large_image" />}
    </Head>
  );
}
