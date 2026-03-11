/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(3, 2)).toBe(6);
  });

  it("multiplies a negative number and a positive number", () => {
    expect(window.multiply(-1, 3)).toBe(-3);
  });

  it("multiplies two negative numbers", () => {
    expect(window.multiply(-5, -3)).toBe(15);
  });

  it("returns 0 when multiplied by 0", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });
});

export {};
