import About from './about/page';
import Blog from './blogs/page';
import Hero from '../components-ui/hero/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blog />
    </main>
  );
}
