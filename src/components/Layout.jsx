import Head from "next/head"
import Navbar from "./Navbar";

const Layout = ({ preview, children }) => {
  return (
    <>
      <Head>
        <title>Yume Cafe</title>
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
