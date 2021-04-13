const moment = require('moment');

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
        const z = moment().format('DD.MM.YYYY HH:mm:ss')
        r.res.send(`Hello, ${r.body.name}, right now ${z}`);
    });

    return router;
};