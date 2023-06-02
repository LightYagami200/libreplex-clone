import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";
import { LibrePlexProgramProvider } from "anchor/LibrePlexProgramContext";
import { PortalManager } from "@chakra-ui/react";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>LibrePlex</title>
      </Head>

      <ContextProvider>
        <div className="flex flex-col h-screen">
          <Notifications />
          <AppBar />
          <ContentContainer>
            <PortalManager>
            
              <Component {...pageProps} />
              <Footer />
              </PortalManager>
              
          </ContentContainer>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
