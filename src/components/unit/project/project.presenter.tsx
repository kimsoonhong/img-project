import {
	Wrapper,
	Middle,
	ButtonDiv,
	Bottom,
	ImageWrapper,
	ImgButtonWrapper,
	UploadImg,
	UploadButton,
} from "./project.style";

import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

export default function ProjectUI(props) {
	return (
		<Wrapper>
			<Middle
				onMouseEnter={() => props.setIshover(true)}
				onMouseLeave={() => props.setIshover(false)}
			>
				<img src={props.resultImgUrl[props.count]} />
				<ButtonDiv>
					<LeftCircleFilled onClick={props.prov} style={{ fontSize: "40px" }} />
					<RightCircleFilled
						onClick={props.next}
						style={{ fontSize: "40px" }}
					/>
				</ButtonDiv>
			</Middle>
			<Bottom>
				<ImageWrapper>
					<ImgButtonWrapper>
						{/* =
= */}

						{props.resultImgUrl.map((data: any, index: any) => (
							<UploadButton
								onClick={() => props.onClickDeleteImg(index)}
								key={index}
							>
								<UploadImg src={`${props.resultImgUrl[index]}`} />
								<div>-</div>
								<div>Delete</div>
								<input type="file" multiple style={{ display: "none" }} />
							</UploadButton>
						))}
						{/* =
= */}
						{new Array(5 - props.resultImgUrl.length)
							.fill(1)
							.map((_, index) => {
								return (
									<UploadButton onClick={props.onClickGreyBox} key={index}>
										<label htmlFor={String(index)}>
											<div>
												<div>+</div>
												<div>Upload</div>
											</div>

											<input
												id={String(index)}
												ref={props.fileRef}
												type="file"
												onChange={props.onChangeFile}
												multiple
												style={{ display: "none" }}
											/>
										</label>
									</UploadButton>
								);
							})}
						{/* =
 = */}
					</ImgButtonWrapper>
				</ImageWrapper>
			</Bottom>
		</Wrapper>
	);
}
