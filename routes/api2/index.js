module.exports = x => {
    const router = x.Router();
    router
    .route('/')
    .get(r => r.res.send('not yet implemented'))

    return router
};