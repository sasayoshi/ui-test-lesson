import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

// フックのテストはrenderHookを使う
// renderHookはフックをレンダリングするための関数
describe("useCounter", () => {
  it("increments the count", () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);

    act(() => result.current.increment());
    expect(result.current.count).toBe(2);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);
  });
});
