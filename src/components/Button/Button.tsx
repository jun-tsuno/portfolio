import React from "react";
import { ButtonStyle } from "./ButtonStyle";

interface IProps {
	children: string;
}

const Button = ({ children }: IProps) => {
	return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
