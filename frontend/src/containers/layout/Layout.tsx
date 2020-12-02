import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
