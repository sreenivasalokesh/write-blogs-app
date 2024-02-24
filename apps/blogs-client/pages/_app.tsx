import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import { trpc } from "@blogs/trpc/client/trpc";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return <SessionProvider session={pageProps.session}>
            <Navigation/>
              <div className={`m-auto w-4/5  ${inter.className} `}>
                <Component {...pageProps} />
              </div>
          </SessionProvider>;
}


export default trpc.withTRPC(App);