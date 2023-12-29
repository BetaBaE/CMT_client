import * as React from "react";
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import SubMenu from "./SubMenu";
import {
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUserTie,
} from "react-icons/fa6";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const MainMenu = () => (
  <Menu>
    {/* <Menu.DashboardItem /> */}
    <SubMenu primaryText="Section Facture" leftIcon={<ChevronRightIcon />}>
      <Menu.Item
        to="Avance"
        primaryText="Avance"
        leftIcon={<FaFileInvoiceDollar />}
      />
      <Menu.Item
        to="factures"
        primaryText="Factures"
        leftIcon={<FaFileInvoice />}
      />
    </SubMenu>

    <SubMenu primaryText="Section Fournisseur" leftIcon={<ChevronRightIcon />}>
      <Menu.Item
        to="fournisseurs"
        primaryText="Fournisseurs"
        leftIcon={<FaUserTie />}
      />
      <Menu.Item
        to="ribtempo"
        primaryText="Rib Temporaire"
        leftIcon={<FaCreditCard />}
      />
      <Menu.Item
        to="ribfournisseurs"
        primaryText="Rib Fournisseurs"
        leftIcon={<FaCreditCard />}
      />
    </SubMenu>
    <Menu.Item
      to="ribatner"
      primaryText="Rib Atner"
      leftIcon={<FaCreditCard />}
    />
  </Menu>
);
