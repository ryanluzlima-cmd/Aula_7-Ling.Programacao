import fs from "fs/promises";

const CAMINHO_LOG = "app.log";

export async function log(mensagem: string): Promise<void> {
  const timestamp = new Date().toISOString();
  const linha = `[${timestamp}] ${mensagem}\n`;

  await fs.appendFile(CAMINHO_LOG, linha, "utf-8");
}

