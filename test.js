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