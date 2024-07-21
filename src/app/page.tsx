import About from './about/page';
import Blog from './blogs/page';
import Hero from '@/app/components-ui/hero/Hero';

export default function Home() {
  return (
    <main className='flex max-w-[1536px] flex-col p-6'>
      <Hero />
      <About />
      <Blog />
    </main>
  );
}
