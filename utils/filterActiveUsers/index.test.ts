import { expect, test } from "vitest";

import func, { User } from "./index";

const happyCase: User[] = [{ name: "Nguyen", isActive: true }];

test("func(1,2) = 3", () => {
  expect(func(happyCase)).toEqual(["Nguyen"]);
});
