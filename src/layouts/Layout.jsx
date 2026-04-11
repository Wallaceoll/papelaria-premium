import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCtas from '../components/FloatingCtas';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {children}
      </main>
      <FloatingCtas />
      <Footer />
    </>
  );
}
