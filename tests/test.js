const funcs = require('./functions.js');

test('get External Entity', async () => {
  const Entity =  await funcs.GetEntity();
});
test('post  External Entity', async () => {
  const Entity =  await funcs.PostEntity();
expect(Entity.data.msg).toEqual("Entity was created successfully");
});

test(' update External Entity', async () => {
    const EntityUpdated = await funcs.PutEntity();
    expect(EntityUpdated.data.msg).toEqual("Entity updated successfully") 
});

test(' Delete External Entity', async () => {
  const EntityDeleted = await funcs.DeleteEntity();
  expect(EntityDeleted.data.msg).toEqual("Entity Deleted successfully")
});