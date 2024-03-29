import Header from "../header";
import Hero from "../hero";
import Footer from "../footer";
import { AppContextProvider } from "@/context";

function Layout({ children }) {
  return (
    <AppContextProvider>
      <Header />
      <main className="px-2 my-1 position-relative d-flex flex-column justify-content-between align-items-center overflow-auto">
        <Hero />
        {children}
      </main>
      <Footer />
    </AppContextProvider>
  );
}

export default Layout;
