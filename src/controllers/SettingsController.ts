import {Request, Response} from 'express'

import { SettingsService } from '../services/SettingsService';

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

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({
        chat, 
        username
      })

      return res.json(settings)
    } catch (error) {
          return res.status(400).json({message:error.message})
    }
  }

  async findByUserName(req: Request, res: Response) {
      const {username} = req.params;

      const settingsService = new SettingsService();

      const settings = await settingsService.findByUsername(username);

      return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const {username} = req.params;
    const {chat} = req.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat)

    return res.json(settings);
}
}

export{SettingsController}