import Head from 'next/head';
import { useEffect } from 'react';
import { useI18n } from 'next-localization';
import {
  Placeholder,
  VisitorIdentification,
  useSitecoreContext,
  getPublicUrl,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

type LayoutProps = {
  context: StyleguideSitecoreContextValue;
};

const DictionaryComponent = () => {
  const { t } = useI18n();

  return (
    <div
      style={{
        background: '##fdfdfd',
        border: '1px solid black',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <h1 style={{ fontWeight: 'bold', fontSize: '22px' }}>Dictionary example:</h1>
      <p>Products-Detail-Price: {t('Products-Detail-Price')}</p>
      <p>Products-RelatedProducts-Title: {t('Products-RelatedProducts-Title')}</p>
    </div>
  );
};

const Layout = ({ context }: LayoutProps): JSX.Element => {
  const { updateSitecoreContext } = useSitecoreContext({ updatable: true });

  // Update Sitecore Context if layoutData has changed (i.e. on client-side route change).
  // Note the context object type here matches the initial value in [[...path]].tsx.
  useEffect(() => {
    updateSitecoreContext && updateSitecoreContext(context);
  }, [context]);

  const { route } = context;

  return (
    <>
      <Head>
        <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>

      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      <VisitorIdentification />

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container">
        <Placeholder name="header" rendering={route} />
        <DictionaryComponent />
        <Placeholder name="main" rendering={route} />
        <Placeholder name="footer" rendering={route} />
      </div>
    </>
  );
};

export default Layout;
