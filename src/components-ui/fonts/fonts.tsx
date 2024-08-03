


// Correct import statement for next/fonts
import { Inter, Lusitana, Montserrat_Alternates } from 'next/font/google';

// Font configurations
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const montserratAlternates = Montserrat_Alternates({
  weight: ['400', '700'],
  subsets: ['latin'],
});
