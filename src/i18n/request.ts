// import {getRequestConfig} from 'next-intl/server';
 
// export default getRequestConfig(async () => {
//   // Static for now, we'll change this later
//   const locale = 'en';
 
//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });

// import { getRequestConfig } from 'next-intl/server';

// export default getRequestConfig(async ({ locale }) => {
//   return {
//     locale: locale ?? 'id',
//     messages: (await import(`../../messages/${locale ?? 'id'}.json`)).default
//   };
// });

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = locale ?? 'id'; // 🔥 fallback WAJIB

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});