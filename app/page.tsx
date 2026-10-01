import { HeroCarousel } from '@/components/hero/HeroCarousel';
import { HorizontalCategories } from '@/components/categories/HorizontalCategories';
import { QuickCollectionPills } from '@/components/categories/QuickCollectionPills';
import { PromoCollectionGrid } from '@/components/collections/PromoCollectionGrid';
import { FeaturedCollections } from '@/components/collections/FeaturedCollections';
import { FavoriteTestimonialSplit } from '@/components/collections/FavoriteTestimonialSplit';
import { SpacesGallery } from '@/components/inspiration/SpacesGallery';
import { ShopOffersCarousel } from '@/components/offers/ShopOffersCarousel';
import { FlashSaleBanner } from '@/components/offers/FlashSaleBanner';
import { PromoBanners } from '@/components/offers/PromoBanners';
import { WhyShopWithUs } from '@/components/trust/WhyShopWithUs';
import { MeetOurTeam } from '@/components/about/MeetOurTeam';
import { InstagramSection } from '@/components/social/InstagramSection';
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel';
import { NewsletterBlock } from '@/components/newsletter/NewsletterBlock';

export default function HomePage() {
  return (
    <div className="space-y-4 md:space-y-8">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Horizontal Circular Categories */}
      <HorizontalCategories />

      {/* Flash Sale Banner + 4 Product Cards Grid */}
      <FlashSaleBanner />

      {/* Asymmetric Promotional Collection Grid */}
      <PromoCollectionGrid />

      {/* Featured Collections Vertical Selector */}
      <FeaturedCollections />

      {/* Favorite Products / Testimonial Split Screen */}
      <FavoriteTestimonialSplit />

      {/* Get Inspired by Spaces Horizontal Gallery */}
      <SpacesGallery />

      {/* Shop Our Offers / New Arrivals Product Carousel */}
      <ShopOffersCarousel />

      {/* Side-by-Side Promotional Banners (40% & 30% Off) */}
      <PromoBanners />

      {/* Quick Collection Pills */}
      <QuickCollectionPills />

      {/* Why Shop With Us Feature Pills & 4 Visual Cards */}
      <WhyShopWithUs />

      {/* Meet Our Team / About Studio Section */}
      <MeetOurTeam />

      {/* Full-width Deep Royal Blue Instagram Section */}
      <InstagramSection />

      {/* Soft Yellow Background Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Newsletter Block with 10% Incentive */}
      <NewsletterBlock />
    </div>
  );
}
