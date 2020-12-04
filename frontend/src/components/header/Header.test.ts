import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";
// import { HookResult, renderHook } from '@testing-library/react-hooks';
import * as hooks from "./hooks/useHeader";

describe("<Header />", () => {
  // let result: HookResult<any> | null = null;
  let SPY: Partial<jest.SpyInstance<any>> = {};
  beforeEach(() => {
    // result = renderHook(() => useHeader()).result;
    SPY = jest.spyOn(hooks, "useHeader");
    SPY.mockReturnValue({
      user: {
        avatar_url: "https://avatars1.githubusercontent.com/u/16343721?v=4",
        login: "pedritobata",
        name: null,
      },
    });
  });

  it("Should render user avatar when page loads", () => {
    const wrapper = shallow(React.createElement(Header, {}));
    const image = wrapper.find('img');
   console.log("image >>>>",image)
    expect(image).toBeVisible();
  });
});
