import { describe, expect, test, vi, afterEach } from "vitest";
import fetchTodo from "./index";

describe("fetchTodo", () => {
  afterEach(() => {
    vi.restoreAllMocks(); // đảm bảo isolation giữa các test
  });

  test("should return todo data when API success", async () => {
    const mockData = {
      id: 1,
      title: "test todo",
      completed: false,
    };

    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        } as Response),
      ),
    );

    const result = await fetchTodo("1");

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
  });

  test("should throw error when response not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: false,
        } as Response),
      ),
    );

    await expect(fetchTodo("1")).rejects.toThrow("Failed to fetch todo");
  });

  test("should throw when fetch fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("Network error"))),
    );

    await expect(fetchTodo("1")).rejects.toThrow("Network error");
  });

  test("should throw when JSON parsing fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.reject(new Error("invalid json")),
        } as Response),
      ),
    );

    await expect(fetchTodo("1")).rejects.toThrow("Invalid JSON response");
  });
});
