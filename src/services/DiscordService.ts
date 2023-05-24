import axios, { AxiosInstance } from "axios";

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK!;

class DiscordService {
  discordService: AxiosInstance;

  constructor() {
    this.discordService = axios.create();
  }

  async sendMessage({ email, message, name }: { name: string, email: string, message: string }) {
    const dataMessage = {
      embeds: [
        {
          title: "New message",
          color: 0x682ae9,
          fields: [
            {
              name: `Name`,
              value: name,
              inline: true,
            },
            {
              name: `E-mail`,
              value: email,
              inline: true,
            },
            {
              name: `Message`,
              value: message,
            },
          ],
          timestamp: new Date(),
        },
      ],
    };
    const response = await axios.post(
      DISCORD_WEBHOOK,
      dataMessage
    );
    return response;
  }
}

export default new DiscordService();
