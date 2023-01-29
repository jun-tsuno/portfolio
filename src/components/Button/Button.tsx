import { BaseButton } from "./ButtonStyle";

interface IProps {
	children: string | JSX.Element;
}

const Button = ({ children }: IProps) => {
	return <BaseButton>{children}</BaseButton>;
};

export default Button;
