import React from "react";
import { Container } from "react-bootstrap";
import Toolbar from "../../components/toolbar/Toolbar";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
