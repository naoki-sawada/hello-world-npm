const myPackage = require("..");

test("should display the message with console", () => {
  const log = jest.spyOn(global.console, "log");
  myPackage.helloWorld();
  expect(log).toHaveBeenCalledWith("Hello World!!!");
});
