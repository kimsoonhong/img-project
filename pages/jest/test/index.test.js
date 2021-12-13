const jest = require("../index");

describe("jest", () => {
	let jest;

	beforeEach(() => {
		jest = new jest();
	});

	it("빈 스텍입니다.", () => {
		expect(jest.stack).toBe([]);
	});
});
