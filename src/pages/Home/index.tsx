import { createElement } from 'rax';
import View from 'rax-view';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '../Hero';
import Trips from '../Trips';
import Testimonials from '../Testimonials';
import State from '../Stats';
import Email from '../Email';

function Home() {
  // 项目容器
  return (
    <View id="home">
      <Header />
      <main>
        <Hero />
        <Trips />
        <Testimonials />
        <State />
        <Email />
      </main>
      <Footer />
    </View>
  );
}

export default Home;
