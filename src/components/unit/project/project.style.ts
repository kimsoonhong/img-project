import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface Iprops {
	isActive: boolean;
}

export const Wrapper = styled.div`
	width: 100%;
`;

export const Top = styled.div`
	width: 120px;
	text-align: center;
	left: 50%;
	transform: translate(-50%, 0);
	background-color: gray;
	border-radius: 40px;
	position: fixed;
	top: 20px;

	@media ${breakPoints.mobile} {
		display: none;
	}
`;
export const Middle = styled.div`
	width: 100%;
	height: 100vh;

	background-image: url(/img/bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100vh;

	@media ${breakPoints.mobile} {
		background-image: none;
	}
`;

export const MiddleImg = styled.img`
	width: 100%;
	height: 85vh;
	object-fit: fill;
	margin: auto;
`;

export const ButtonDiv = styled.div`
	height: 60px;
	width: 95%;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Bottom = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 20px;
`;

// ===?

export const ImageWrapper = styled.div`
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
	margin: 0px 12px;
	outline: none;
	box-shadow: ${(props: Iprops) =>
		props.isActive ? "1px 1px 1px 1px gray " : "none"};
	cursor: pointer;
	transition: ease-in all 200ms;
	text-align: center;
	padding-top: 15px;
	position: relative;

	@media ${breakPoints.mobile} {
		width: 40px;
		height: 40px;
		margin: 0 6px;
	}
`;

export const UploadImg = styled.img`
	width: 78px;
	height: 78px;
	opacity: 0.6;
	position: absolute;
	transform: translate(-40px, -15px);
	@media ${breakPoints.mobile} {
		width: 40px;
		height: 40px;
		/* margin: 0 6px; */
		transform: translate(-20px, -15px);
	}
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

export const Text = styled.div`
	@media ${breakPoints.mobile} {
		font-size: 8px;
		transform: translateY(-10px);
	}
`;
