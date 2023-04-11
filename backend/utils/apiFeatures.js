class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword
        ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            },
         }
         :{};

        this.query = this.query.find({...keyword});
        return this;
    }
    //Pagination is  number of items to show per page 
    pagination(resultPerPage){
        const currentPage = this.queryStr.page || 1;

        const skip = resultPerPage * (currentPage -1);
        
        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}

module.exports = ApiFeatures