import { Cross2Icon } from "@radix-ui/react-icons";
import { Close } from "@radix-ui/react-dialog";
import "./styles.css";

const DialogCloseIconButton = () => {
  return (
    <Close asChild>
      <button className="IconButton" aria-label="Close">
        <Cross2Icon />
      </button>
    </Close>
  );
};

export default DialogCloseIconButton;
