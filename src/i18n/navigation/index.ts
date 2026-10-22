import {createNavigation} from 'next-intl/navigation';

export const {useRouter, usePathname, Link} = createNavigation({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'always'
});