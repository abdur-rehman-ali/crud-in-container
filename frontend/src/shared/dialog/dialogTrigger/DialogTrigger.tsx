import { Trigger } from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

const DialogTrigger = ({ children }: { children: ReactNode }) => {
  return (
    <Trigger asChild>
      {children}
    </Trigger>
  )
}

export default DialogTrigger
