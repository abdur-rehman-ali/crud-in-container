import { Content } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import "./styles.css";

const DialogContent = ({ children }: { children: ReactNode }) => {
  return <Content className="DialogContent">{children}</Content>;
};

export default DialogContent;
