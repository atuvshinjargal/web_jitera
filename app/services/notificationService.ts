import { Server } from 'ws';

class NotificationService {
  private wss: Server;

  constructor(port: number) {
    this.wss = new Server({ port });
    this.wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log('received: %s', message);
      });

      ws.send('Welcome to the notification service!');
    });
  }

  broadcast(data: string) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(data);
      }
    });
  }
}

export default NotificationService;