let dbOps = {};
dbOps.post = {};

module.exports = dbOps;

dbOps.getAll = (dbObj,collectionname) => {
    return new Promise ( (resolve,reject) => {
        dbObj.collection(collectionname).find({}).toArray( (err,result) => {
            if (err) reject("Error occurred while fetching ");
            if (result) resolve(result);
        })
    })
}

dbOps.insert = (dbObj,collectionname,data) => {
    return new Promise ( (resolve,reject) => {
        let query = {email : data.email };
        dbObj.collection(collectionname).findOne(query, (err,result) => {
            if (err) reject("Error occurred while finding user");
            if (result) { reject("User already exist"); }
            else {
                dbObj.collection(collectionname).insertOne(data, (err, result) => {
                    if (err) reject("Error occurred while creating user");
                    resolve(result);
                })
            }
        })
    })
}

dbOps.post.create = (dbObj,collectionname,data) => {
    return new Promise ( ( resolve, reject ) => {
        dbObj.collection(collectionname).insertOne(data, (err,result) => {
            if (err) reject("Error while creating post");
            resolve(result);
        })
    })
}

dbOps.post.getAll = (dbObj,collectionname) => dbOps.getAll(dbObj,collectionname);