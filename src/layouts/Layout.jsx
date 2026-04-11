import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
