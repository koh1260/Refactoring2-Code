import { defaultOwner } from "./cap";

describe("cap", () => {
  it("owner 불변 테스트", () => {
    // given
    const owner = defaultOwner();

    // when
    owner.firstName = "Haesung";

    // then
    expect(defaultOwner().firstName).toEqual("마틴");
  });
});
