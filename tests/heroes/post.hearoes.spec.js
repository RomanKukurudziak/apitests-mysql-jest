const { restoredb, api } = require('../helpers');

describe('POST /heroes should work correct', () => {
  beforeEach(async () => await restoredb());

  it('Returns correct hero value after saving', async () => {
    const { data } = await api.post(`/heroes`, { name: 'Doom', ownerId: 13241 });

    expect(data.data).toEqual({
      createdAt: expect.any(String),
      id: 4,
      name: 'Doom',
      ownerId: 13241,
      updatedAt: expect.any(String),
    });
  });
});
