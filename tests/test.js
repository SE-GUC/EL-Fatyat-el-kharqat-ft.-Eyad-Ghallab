const funcs = require('../Functions/fn');


test("get Notification", async () => {
    expect.assertions(1);
    const response = await funcs.getNotification();
    expect(response.data.msg).toEqual("this is the notifications");
  });

  test("Create Notification", async () => {
    expect.assertions(1);
    const response = await funcs.CreateNotification();
    expect(response.data.msg).toEqual("notification was created successfully");
  });

  test("get Notification By ID", async () => {
    expect.assertions(1);
    const response = await funcs.getNotificationByID();
    expect(response.data.msg).toEqual("Notification was recieved");
  });


