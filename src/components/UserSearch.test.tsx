import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { UserSearch } from "./UserSearch";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("UserSearch", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("入力フィールドに値を入力し、検索ボタンをクリックすると適切なAPIリクエストが発生する", async () => {
    const userInfo = { id: 1, name: "John Smith" };
    const response = { data: userInfo };
    mockedAxios.get.mockResolvedValue(response);

    render(<UserSearch />);

    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it("APIから取得したユーザー情報が正しく画面に表示される", async () => {
    const userInfo = { id: 1, name: "John Smith" };
    const response = { data: userInfo };
    mockedAxios.get.mockResolvedValue(response);

    render(<UserSearch />);

    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    const button = screen.getByRole("button");
    await user.click(button);

    await waitFor(() =>
      expect(screen.getByText(userInfo.name)).toBeInTheDocument()
    );
  });
});
