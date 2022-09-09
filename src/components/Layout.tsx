import { Navbar } from "./Navbar";
import "../styles/components/Layout.css";
import { Footer } from "./Footer";

export interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout(props: ILayoutProps) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
