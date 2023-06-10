export default class BaseRepository {
  async all() {
    return this.model.findAll();
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async findOne(query) {
    return this.model.findOne({ where: { query } });
  }

  async findAndCountAll() {
    return this.model.findAndCountAll();
  }
}
