import { createContext } from 'react';
import siteConfig from '@config/siteConfig';

export const SiteConfigContext = createContext(siteConfig);

// export const useSiteConfig = () => {
//   const context = useContext(SiteConfigContext)

//   return context;
// }
