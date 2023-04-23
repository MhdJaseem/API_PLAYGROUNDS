class ExampleService {
  constructor(exampleRepo) {
    this.exampleRepo = exampleRepo;
  }

  async getAllExamples() {
    return await this.exampleRepo.getAllExamples();
  }

  async getExampleById(id) {
    return await this.exampleRepo.getExampleById(id);
  }
}
