import {
	Wrapper,
	Top,
	Middle,
	MiddleImg,
	Bottom,
	ImageWrapper,
	ImgButtonWrapper,
	UploadImg,
	UploadButton,
	Text
} from "./project.style";

import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

interface Iprops {
	resultImgUrl: Array<any>;
	onClickGreyBox: (event: MouseEvent<HTMLDivElement>) => void;
	onClickDeleteImg: (index: MouseEvent<HTMLDivElement>) => void;
	onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
	count: number;
	next: () => void;
	prov: () => void;
	setIshover: Dispatch<SetStateAction<boolean>>;
	ishover: boolean;
}

export default function ProjectUI(props: Iprops) {
	return (
		<Wrapper>
			<Top>{props.ishover ? "호버됨." : "호버되지 않음."}</Top>
			<Middle
				onMouseEnter={() => props.setIshover(true)}
				onMouseLeave={() => props.setIshover(false)}
			>
				<MiddleImg src={props?.resultImgUrl[props.count]} />
			</Middle>

			<Bottom>
				{" "}
				<LeftCircleFilled onClick={props.prov} style={{ fontSize: "40px" }} />
				<ImageWrapper>
					<ImgButtonWrapper>
						{props.resultImgUrl.map((data: any, index: any) => (
							<UploadButton
								onClick={() => props.onClickDeleteImg(index)}
								key={index}
								isActive={index === props.count}
							>
								<UploadImg src={`${props.resultImgUrl[index]}`} />
								<Text>-</Text>
								<Text>Delete</Text>
								<input type="file" multiple style={{ display: "none" }} />
							</UploadButton>
						))}

						{new Array(5 - props.resultImgUrl.length)
							.fill(1)
							.map((_, index) => {
								return (
									<>
										{/* @ts-ignore */}
										<UploadButton onClick={props.onClickGreyBox} key={index}>
											<label htmlFor={String(index)}>
												<div style={{ cursor: "pointer" }}>
													<Text>+</Text>
													<Text>Upload</Text>
												</div>
											</label>
										</UploadButton>
										<input
											id={String(index)}
											type="file"
											onChange={props.onChangeFile}
											multiple
											style={{ display: "none" }}
										/>
									</>
								);
							})}
						{/* =
 = */}
					</ImgButtonWrapper>
				</ImageWrapper>
				<RightCircleFilled onClick={props.next} style={{ fontSize: "40px" }} />
			</Bottom>
		</Wrapper>
	);
}
