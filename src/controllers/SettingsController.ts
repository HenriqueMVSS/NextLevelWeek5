import {Request, Response} from 'express'

import {getCustomRepository} from "typeorm";

import {SettingsRepository} from "../repositories/SettingsRepository"

/**
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas.
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas.
 *  http://localhost:3333/settings/1?search=algumacoisa
 * Body params =>  {
 * 
 * }
 */

class SettingsController {

  async create(req: Request, res: Response) {
    const {chat, username} = req.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings);

    return res.json(settings)
  }
}

export{SettingsController}