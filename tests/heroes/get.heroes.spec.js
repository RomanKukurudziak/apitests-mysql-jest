const { restoredb, api } = require('../helpers');

describe('GET /heroes should work correct', () => {

    beforeAll(async () => await restoredb())

    it('Returns  correct with correct params', async () => {
        const { data } = await api.get(`/heroes`);
        expect(data).toMatchSnapshot();
    }); 
});