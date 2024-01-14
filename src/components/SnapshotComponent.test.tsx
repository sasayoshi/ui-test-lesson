import { render } from "@testing-library/react";
import SnapshotComponent from "./SnapshotComponent";

it("Snapshotのテスト", () => {
  const { container } = render(<SnapshotComponent text="Vue" />);
  expect(container).toMatchSnapshot();
});
