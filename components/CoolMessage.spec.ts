import { shallowMount } from "@vue/test-utils";

import CoolMessage from "./CoolMessage.vue";

describe("CoolMessage", function () {
  const mountWrapper = (props = { message: "cool" }) => {
    vi.resetAllMocks();
    return shallowMount(CoolMessage, { props });
  };

  test("should pass typecheck", async () => {
    const wrapper = mountWrapper();
    expect(wrapper.props().message).toBeTruthy();
  });
});
