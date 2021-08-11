module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mutipleToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
