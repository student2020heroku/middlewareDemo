module.exports = x => {
    const router = x.Router();
    router
    .route('/')
    .get(r => r.res('not yet implemented'))

    return router
};