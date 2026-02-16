import { Portal } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

const DialogPortal = ({ children }: { children: ReactNode }) => {
  return (
    <Portal>
      {children}
    </Portal>
  )
}

export default DialogPortal
