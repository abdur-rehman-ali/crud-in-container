import { Root } from "@radix-ui/react-dialog";
import "./styles.css";

import {
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogCloseIconButton,
} from "../dialog";


const DialogDemo = () => (
	<Root>
		<DialogTrigger>
				<button className="Button violet">Create Product</button>
		</DialogTrigger>
		<DialogPortal>
			<DialogOverlay />
			<DialogContent>
				<DialogTitle>Create Product</DialogTitle>
				<DialogDescription>Create a new product</DialogDescription>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<DialogClose>
						<button className="Button green">Save changes</button>
					</DialogClose>
				</div>
				<DialogCloseIconButton />
			</DialogContent>
		</DialogPortal>
	</Root>
);

export default DialogDemo;
