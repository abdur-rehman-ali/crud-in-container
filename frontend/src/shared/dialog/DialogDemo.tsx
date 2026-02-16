import { Root } from "@radix-ui/react-dialog";
import "./styles.css";

import DialogTrigger from "./dialogTrigger/DialogTrigger";
import DialogPortal from "./dialogPortal/DialogPortal";
import DialogOverlay from "./dialogOverlay/DialogOverlay";
import DialogContent from "./dialogContent/DialogContent";
import DialogTitle from "./dialogTitle/DialogTitle";
import DialogDescription from "./dialogDescription/DialogDescription";
import DialogClose from "./dialogClose/DialogClose";
import DialogCloseIconButton from "./dialogCloseIcon/DialogCloseIconButton";

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
