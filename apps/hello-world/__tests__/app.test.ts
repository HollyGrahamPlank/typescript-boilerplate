import someText from "@rename-me/shared-things";
import { describe, expect, it, vi } from "vitest";
import runApp from "../src/app";

describe("the hello world app", () => {
  it("should log hello world", () => {
    const logSpy = vi.spyOn(console, "log");

    runApp();
    expect(logSpy).toHaveBeenCalledWith(someText);
  });
});
