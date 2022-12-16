const { restoredb, api } = require('../helpers');

describe('DELETE /heroes should work correct', () => {
  beforeEach(async () => await restoredb());

  it('Returns success after successful deletion', async () => {
    const { data } = await api.delete(`/heroes/3`);

    expect(data).toEqual({
      success: true,
    });
  });
});
