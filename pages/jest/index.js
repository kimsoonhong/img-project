import { useState } from "react";

const jest = () => {
	const [stack, setStack] = useState([]);
	const [input, setInput] = useState("");

	const onclickpush = () => {
		setInput("");
		if (stack.length >= 5) {
			alert("stack의 item 갯수는 5개를 초과할 수 없습니다.");
			return;
		}
		const items = [...stack, input];
		setStack(items);
	};

	const onclickpop = () => {
		if (stack.length === 0) {
			alert("stack을 더이상 비울 수 없습니다.");
			return;
		}
		stack.pop();
		const result = stack.map((data) => data);
		setStack(result);
	};

	const onchangeinput = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<div style={{ width: "500px" }}>
				{stack
					.slice(0)
					.reverse()
					.map((data) => (
						<div
							key={data.id}
							style={{ marginTop: "5px", backgroundColor: "red" }}
						>
							{data}
						</div>
					))}
			</div>
			<button onClick={onclickpush}>push</button>{" "}
			<input onChange={onchangeinput} value={input} />
			<button onClick={onclickpop}>pop</button>
		</div>
	);
};
export default jest;
// module.exports = jest;
