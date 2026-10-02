import type { Metadata } from 'next';
import './globals.css';
import { UIProvider } from '@/lib/context/UIContext';
import { CartProvider } from '@/lib/context/CartContext';
import { WishlistProvider } from '@/lib/context/WishlistContext';
import { CurrencyProvider } from '@/lib/context/CurrencyContext';
import { TopBar } from '@/components/header/TopBar';
import { MainHeader } from '@/components/header/MainHeader';
import { NavigationBar } from '@/components/header/NavigationBar';
import { MobileNavDrawer } from '@/components/header/MobileNavDrawer';
import { CartDrawer } from '@/components/drawers/CartDrawer';
import { SearchModal } from '@/components/drawers/SearchModal';
import { SpecialOffersDrawer } from '@/components/drawers/SpecialOffersDrawer';
import { WisdomAIBot } from '@/components/ai/WisdomAIBot';
import { GlobalFooter } from '@/components/footer/GlobalFooter';

export const metadata: Metadata = {
  title: 'Wisdom Furniture | Premium Modern Furniture & Home Decor Showroom',
  description: 'Wisdom Furniture - Modern luxury furniture, home decor, seating, tables, lighting, and lifestyle products with a premium shopping experience.',
  openGraph: {
    title: 'Wisdom Furniture Store',
    description: 'Modern luxury furniture, home decor, seating, tables, lighting, and lifestyle products.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-hyper-black">
        <CurrencyProvider>
          <UIProvider>
            <CartProvider>
              <WishlistProvider>
                <div className="min-h-screen flex flex-col justify-between relative bg-white overflow-x-hidden">
                  <div>
                    <TopBar />
                    <MainHeader />
                    <NavigationBar />
                    <MobileNavDrawer />
                    <main>{children}</main>
                  </div>

                  <GlobalFooter />

                  {/* Interactive Overlays, Drawers & AI Bot */}
                  <CartDrawer />
                  <SearchModal />
                  <SpecialOffersDrawer />
                  <WisdomAIBot />
                </div>
              </WishlistProvider>
            </CartProvider>
          </UIProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
