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
import { GlobalFooter } from '@/components/footer/GlobalFooter';

export const metadata: Metadata = {
  title: 'HYPER | Modern Furniture & Home Decor Showroom',
  description: 'Premium modern furniture, home decor, seating, tables, lighting, and lifestyle products with a luxury editorial shopping experience.',
  openGraph: {
    title: 'HYPER Furniture Store',
    description: 'Modern furniture, home decor, seating, tables, lighting, and lifestyle products.',
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
                <div className="min-h-screen flex flex-col justify-between relative bg-white">
                  <div>
                    <TopBar />
                    <MainHeader />
                    <NavigationBar />
                    <MobileNavDrawer />
                    <main>{children}</main>
                  </div>

                  <GlobalFooter />

                  {/* Interactive Overlays & Drawers */}
                  <CartDrawer />
                  <SearchModal />
                  <SpecialOffersDrawer />
                </div>
              </WishlistProvider>
            </CartProvider>
          </UIProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
