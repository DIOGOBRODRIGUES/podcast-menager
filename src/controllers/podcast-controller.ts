import {IncomingMessage, ServerResponse} from 'http';

export const getListEpisodes = (req: IncomingMessage, res: ServerResponse) => {
  res.end('List of episodes');
}