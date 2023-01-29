import { useEffect } from "react";
import ReactModal from "react-modal";

interface IProps {
	isOpen: boolean;
	onClose(): void;
}

ReactModal.setAppElement("body");

const customStyle: ReactModal.Styles = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
	},
	content: {
		position: "absolute",
		top: "5rem",
		left: "5rem",
		right: "5rem",
		bottom: "5rem",
		backgroundColor: "paleturquoise",
		borderRadius: "1rem",
		padding: "1.5rem",
	},
};

const Modal = ({ isOpen, onClose }: IProps) => {
	const stopScrollBackContent = () => {
		document.body.style.position = "fixed";

		return () => (document.body.style.position = "");
	};
	useEffect(() => {
		stopScrollBackContent;
	}, []);

	return (
		<ReactModal
			isOpen={isOpen}
			contentLabel="Project Description"
			style={customStyle}
			onRequestClose={onClose}
			shouldCloseOnOverlayClick={true}
		>
			<button onClick={onClose}>close</button>
		</ReactModal>
	);
};

export default Modal;
