import Categorie from "../models/Categorie";
import Examen from "../models/Examen";
import SousCategorie from "../models/SousCategorie";

class ExamenRepository {
    static async create(data: { nom: string, description: string}){
        return Examen.create(data);
    }

    static async getAll(){
        return Examen.findAll({
          include: [
            {
              model: Categorie,
              include: [
                {
                  model: SousCategorie
                },
              ],
            },
          ]
        });
    }
}

export default ExamenRepository;