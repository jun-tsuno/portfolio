import { BaseButton } from "./ButtonStyle";

interface IProps {
	children: string;
}

const Button = ({ children }: IProps) => {
	return <BaseButton>{children}</BaseButton>;
};

export default Button;
