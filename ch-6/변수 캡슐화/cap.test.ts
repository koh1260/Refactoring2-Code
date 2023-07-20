import { defaultOwner } from "./cap";

describe("cap", () => {
  it("owner 불변 테스트", () => {
    // given
    const owner = defaultOwner();

    // when
    // 할당 자체가 불가
    // owner.firstName = "Haesung";

    // then
    // expect(defaultOwner().firstName).toEqual("마틴");
  });
});
