import { Description } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import "./styles.css";

const DialogDescription = ({ children }: { children: ReactNode }) => {
  return <Description className="DialogDescription">{children}</Description>;
};

export default DialogDescription;
