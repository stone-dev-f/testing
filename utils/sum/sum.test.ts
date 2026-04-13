import { expect, test } from "vitest";

import sum from "./index";

test("sum(1,2) = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum(-1, -3) = -4", () => {
  expect(sum(-1, -3)).toBe(-4);
});
