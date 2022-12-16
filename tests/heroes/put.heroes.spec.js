const { restoredb, api } = require('../helpers');

describe('PUT /heroes should work correct', () => {
  beforeEach(async () => await restoredb());

  it('Returns correct hero value after updating', async () => {
    const { data } = await api.put('/heroes/3', { name: 'Doom', ownerId: 13241 });
    expect(data.success).toEqual(true);
  });

  it('Returns error when hero is not found', async () => {
  const { data } = await api.put('/heroes/fGe#3', { name: 'Doom', ownerId: 13241 });

  expect(data.success).toEqual(false);
  });
});
