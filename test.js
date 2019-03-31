
const funcs = require('./fn.js');

test('get External Entity', async () => {
  const Entity =  await funcs.GetEntity();
  expect(Entity.data.data.length).toBeGreaterThan(0);
});

test('post  External Entity', async () => {
  const Entity =  await funcs.GetEntity();
  const oldlength = Entity.data.data.length;
  const response1 = await funcs.PostEntity({
    "name":"Mary",
    "username":"ammar_ah",
    "password":"ahumkcnsjkabjhbssnaknsdk",
  })
expect(response1.data.msg).toEqual("Entity was created successfully");
const response2 = await funcs.GetEntity();
expect(response2.data.data.length).toEqual(oldlength +1);
});

test(' update External Entity', async () => {
    const EntityUpdated = await funcs.PutEntity();
    expect(EntityUpdated.data.msg).toEqual("Entity updated successfully") 
});

test(' Delete External Entity', async () => {
  const EntityDeleted = await funcs.DeleteEntity();
  expect(EntityDeleted.data.msg).toEqual("Entity Deleted successfully")
});

test("get admin", async () => {
  expect.assertions(1);
  const response = await funcs.getAdmins();
  expect(response.data.data.length).toBeGreaterThan(0);
});
  test("Create Admin", async () => {
    expect.assertions(2);
    const response = await funcs.getAdmins();
    const oldlength = response.data.data.length;
    const response1 = await funcs.CreateAdmins(
     { "id":"23",
      "name":"sarahhh"  ,
      "email":"ayhaga@hotmail.com",
      "address":"asdasda",
      "username":"sarashh",
      "password":"56789"
    }
    );
    expect(response1.data.msg).toEqual("Admin was created successfully");
    const response2 = await funcs.getAdmins();
    expect(response2.data.data.length).toEqual(oldlength +1);
  });
  
  test("Update Admin", async () => {
      expect.assertions(1);
      const response = await funcs.UpdateAdmins();
      expect(response.data.msg).toEqual("Admin updated successfully");
    });
    test("Delete Admin", async () => {
      expect.assertions(1);
      const response = await funcs.DeleteAdmins();
      expect(response.data.msg).toEqual("Admin was deleted successfully");
    });

test("get comment", async () => {
  expect.assertions(1);
  const response = await funcs.getComments();
  expect(response.data.msg).toEqual("comment was recieved");
});
test("Create comment", async () => {
  expect.assertions(1);
  const response = await funcs.CreateComments();
  expect(response.data.msg).toEqual("Comment was created successfully");
});
test("Update comment", async () => {
    expect.assertions(1);
    const response = await funcs.UpdateComments();
    expect(response.data.msg).toEqual("Comment updated successfully");
  });
  test("Delete comment", async () => {
    expect.assertions(1);
    const response = await funcs.DeleteComments();
    expect(response.data.msg).toEqual("Comment was deleted successfully");
  });
