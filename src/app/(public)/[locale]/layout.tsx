import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params; 

  const messages = await getMessages({ locale });

  console.log("LAYOUT PARAM LOCALE:", locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {props.children}
    </NextIntlClientProvider>
  );
}