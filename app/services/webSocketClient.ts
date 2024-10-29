class WebSocketClient {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this.socket.onmessage = (event) => {
      console.log('Notification received:', event.data);
      // Handle the notification data here
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  sendMessage(message: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    }
  }
}

export default new WebSocketClient();