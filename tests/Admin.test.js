const functions = require("../functions/Admin.functions");
test("get admin", async () => {
  expect.assertions(1);
  const response = await functions.getAdmins();
  expect(response.data.msg).toEqual("Admin was recieved");
});
  test("Create Admin", async () => {
    expect.assertions(1);
    const response = await functions.CreateAdmins();
    expect(response.data.msg).toEqual("Admin was created successfully");
  });
  test("Update Admin", async () => {
      expect.assertions(1);
      const response = await functions.UpdateAdmins();
      expect(response.data.msg).toEqual("Admin updated successfully");
    });
    test("Delete Admin", async () => {
      expect.assertions(1);
      const response = await functions.DeleteAdmins();
      expect(response.data.msg).toEqual("Admin was deleted successfully");
    });