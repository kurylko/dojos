const abbreviate = require("./abbreviate-names");

test("abbreviate function exists", () => {
  expect(typeof abbreviate).toBe("function");
});

test("abbreviate as one parameter", () => {
  expect(abbreviate.length).toBe(1);
});

// TODO add your tests here
test("abbreviate the name 1", () => {
  expect(abbreviate("Alyson Hannigan")).toBe("A.H");
});

test("abbreviate the name 2", () => {
  expect(abbreviate("Neil Patrick Harris")).toBe("N.P.H");
});

test("abbreviate the name 3", () => {
  expect(abbreviate("Cobie Smulders")).toBe("C.S");
});


