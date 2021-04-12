module.exports = x => {
    const router = x.Router();
    router
    .all('/', r => {
        router.stack.forEach(rr => console.log(r.route.path));
        router.all(/hello/, r => {
            router.stack.forEach(rr => console.log(r.route.path));
            r.res.send('Hello!');
        });
        r.res.send('not yaet implemented')
    });

    router
    .post('/moment', r => {
        r.res.send(r.body.name);
    });

    return router;
};