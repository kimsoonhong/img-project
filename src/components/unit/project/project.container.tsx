import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import ProjectUI from "./project.presenter";

export default function Project() {
	const [resultImgUrl, setResultimgUrl] = useState([]);
	const [count, setCount] = useState(resultImgUrl.length);
	const [ishover, setIshover] = useState(true);

	const onClickGreyBox = (event: MouseEvent<HTMLDivElement>) => {
		(event.target as any)?.children[2]?.click();
	};
	const onClickDeleteImg = (index: any | MouseEvent<HTMLDivElement>) => {
		const imgArr = [...resultImgUrl];
		imgArr.splice(index, 1);
		setResultimgUrl(imgArr);
	};

	const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		const fileInfo = event.target.files?.[0];
		const fileReader = new FileReader();
		fileReader.readAsDataURL(fileInfo);
		fileReader.onload = (data) => {
			const resultImgArr = [...resultImgUrl];
			resultImgArr.push(data.target.result);
			setResultimgUrl(resultImgArr);
		};
	};

	const next = () => {
		setCount(count + 1);
		if (count === resultImgUrl.length - 1) {
			setCount(0);
		}
		if (count > resultImgUrl.length - 1) {
			setCount(0);
		}
	};

	const prov = () => {
		setCount(count - 1);
		if (count === 0) {
			setCount(resultImgUrl.length - 1);
		}
	};

	useEffect(() => {
		if (ishover === false) {
			const timer = setInterval(() => {
				next();
			}, 5000);
			return () => clearInterval(timer);
		} else {
			return;
		}
	});

	return (
		<ProjectUI
			resultImgUrl={resultImgUrl}
			onClickGreyBox={onClickGreyBox}
			onClickDeleteImg={onClickDeleteImg}
			onChangeFile={onChangeFile}
			count={count}
			next={next}
			prov={prov}
			setIshover={setIshover}
			ishover={ishover}
		/>
	);
}
