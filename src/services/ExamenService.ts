import ExamenRepository from "../repositories/ExamenRepository";

class ExamenService {
  static async create(data: { nom: string, description: string}) {
    return ExamenRepository.create(data);
  }

  static async getAll() {
    return ExamenRepository.getAll();
  }
}

export default ExamenService;
