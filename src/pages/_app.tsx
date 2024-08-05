import {Poppins} from "next/font/google";
import '@/app/styles/css/globals.css'
import type {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import DefaultLayout from "@/app/layouts/Default";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type ExtendedAppProps = AppProps & {
    Component: NextPageWithLayout;
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const MyApp = ({Component, pageProps}: ExtendedAppProps) => {
    const getLayout =
        Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
    return <div className={poppins.className}>{getLayout(<Component {...pageProps} />)}</div>

}
export default MyApp