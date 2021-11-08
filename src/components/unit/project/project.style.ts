import styled from "@emotion/styled";
import { LeftOutlined } from "antd";

export const Wrapper = styled.div`
	width: 100%;
`;

export const Top = styled.div`
	width: 100%;

	background-color: salmon;

	position: fixed;
	top: 20px;
`;
export const Middle = styled.div`
	width: 100%;
	height: 100vh;
	background-color: seashell;
`;

export const ButtonDiv = styled.div`
	/* background-color: royalblue; */
	height: 60px;
	width: 95%;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	/* position: fixed; */
	/* top: 50%; */
	/* margin: auto; */
`;
export const Left = styled.button`
	width: 100px;
	height: 100px;
	background-color: silver;
`;
export const Right = styled.button``;

export const Bottom = styled.div`
	width: 100%;

	/* background-color: red; */

	display: flex;
	justify-content: center;

	position: fixed;
	bottom: 20px;
`;

// ===?

export const ImageWrapper = styled.div`
	width: 996px;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
`;

export const ImgButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
export const UploadButton = styled.div`
	width: 78px;
	height: 78px;
	background-color: #bdbdbd;
	margin-right: 24px;
	outline: none;
	border: none;
	cursor: pointer;
	text-align: center;
	padding-top: 15px;
	position: relative;
`;

export const UploadImg = styled.img`
	width: 78px;
	height: 78px;

	opacity: 0.6;
	position: absolute;
	transform: translate(-40px, -15px);
`;

export const OptionWrapper = styled.div`
	width: 996px;
	padding-top: 40px;
`;

export const RadioButton = styled.input`
	cursor: pointer;
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
`;
