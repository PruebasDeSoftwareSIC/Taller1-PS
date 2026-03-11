/**
 * Returns the division of two numbers.
 */
function divide(a: number, b: number): number {
  try {
    return a / b;
  } catch (error) {
    throw new Error("Invalid division operation");
  }
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;
