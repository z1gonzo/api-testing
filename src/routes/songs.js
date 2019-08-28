import { Router } from 'express';
import jwtAuth from '../middlewares/auth'
import songsController from '../controllers/songsController';
import { catchAsync } from '../middlewares/errors'

export default () => {
    const api = Router();

    // GET /songs/:id
    api.get('/:slug', catchAsync(songsController.findOne));

    // GET /songs
    api.get('/', catchAsync(songsController.findAll));

    // POST /songs
    api.post('/', jwtAuth, catchAsync(songsController.create));

    // PUT /songs/:id
    api.put('/:slug', catchAsync(songsController.update));
    
    // DELETE /songs/:id
    api.delete('/:slug', catchAsync(songsController.remove));

    
    return api;
}