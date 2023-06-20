import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <>
  <title>Kalakriti - An Indian NFT Marketplace </title>
  <div style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }}>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
  </>
);

export default MyApp;
