import Footer from "./Footer";
import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactNode;
  headerPosition?: boolean;
};

const MainLayout: React.FC<mainLayoutProps> = ({
  children,
  headerPosition,
}) => {
  return (
    <>
      <Header headerPosition={headerPosition} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
