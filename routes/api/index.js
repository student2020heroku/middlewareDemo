module.exports = x => {
    const router = x.Router();
    router
    .route('/')
    .get(r => r.res.send('Arithmetic: add, mpy'));

    router
    .route('/add/:n1/:n2')
    .get(r => {
        const sum = Number(r.params.n1) + Number(r.params.n2);
        r.res.format({
            'text/html': () => r.res.send(`<h2>got: ${sum}</h2>`),
            'application/json': () => r.res.json({'Got:': sum})
        });
    })
    .post(r => r.res.send('Posted:' + Number(r.params.n1) + Number(r.params.n2)));

    router
    .route('/mpy/:n1/:n2')
    .get(r => r.res.send('Got:' + Number(r.params.n1 * r.params.n2)))
    .post(r => r.res.send('Posted:' + Number(r.params.n1 * r.params.n2)));

    return router
};