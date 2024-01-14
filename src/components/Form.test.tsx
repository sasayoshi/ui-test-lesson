import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form", () => {
  it("初期状態ではテキストは空欄", () => {
    render(<Form />);
    const input = screen.getAllByPlaceholderText("Enter text")[0];
    expect(input).toBeInTheDocument(); //要素がレンダリングされるかどうかを確認する
    expect(input).toHaveTextContent(""); //要素のテキストが空欄かどうかを確認する
  });

  it("入力したテキストがサブミットされる", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form />);
    const input = screen.getAllByPlaceholderText("Enter text")[0];
    await user.type(input, "Hello, World!"); // typeメソッドが非同期関数のためにawaitを使う

    expect(screen.getByDisplayValue("Hello, World!")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: Hello, World!");
    alertSpy.mockRestore();
  });
});
