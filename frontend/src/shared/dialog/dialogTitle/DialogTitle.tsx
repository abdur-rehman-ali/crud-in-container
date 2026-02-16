import { Title } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import "./styles.css";

const DialogTitle = ({ children }: { children: ReactNode }) => {
  return <Title className="DialogTitle">{children}</Title>;
};

export default DialogTitle;
