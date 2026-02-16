import { Close } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

const DialogClose = ({ children }: { children: ReactNode }) => {
  return <Close asChild>{children}</Close>;
};

export default DialogClose
