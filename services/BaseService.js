const mongoose = require('mongoose');

export default class BaseService {
  constructor() {
    mongoose.connect('mongodb://45.78.21.205/mockdb');
  }
}