class QueryFeatures {
    constructor(queryData, queryString) {
        this.queryData = queryData;
        this.queryString = queryString;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        this.pagination = { page, limit, skip: (page - 1) * limit };
        return this;
    }

    getPaginationMeta(total) {
        return {
            page: this.pagination.page,
            limit: this.pagination.limit,
            total
        };
    }
}
module.exports = QueryFeatures;
