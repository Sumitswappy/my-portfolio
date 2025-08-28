import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Navbar />
      <main className="container mx-auto max-w-5xl px-4 pb-32 md:pb-0">
        {children}
      </main>
      <Footer />
    </>
  );
}