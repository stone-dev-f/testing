import { expect, test } from "vitest";

import isValidEmail from "./index";

test("isValidEmail('very.common@example.com') = true", () => {
  expect(isValidEmail("very.common@example.com")).toBeTruthy();
});

test("isValidEmail('very.commonexample.com') = false", () => {
  expect(isValidEmail("very.commonexample.com")).toBeFalsy();
});
