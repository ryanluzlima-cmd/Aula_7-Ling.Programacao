import fs from "fs/promises";

const CAMINHO_LOG = "app.log";

export async function log(mensagem: string): Promise<void> {
  const timestamp = new Date().toISOString();
  const linha = `[${timestamp}] ${mensagem}\n`;

  await fs.appendFile(CAMINHO_LOG, linha, "utf-8");
}

export async function lerLogs(): Promise<string[]> {
  try {
    const conteudo = await fs.readFile(CAMINHO_LOG, "utf-8");

    return conteudo
      .split("\n")
      .filter((linha) => linha.trim().length > 0);
  } catch {
    return [];
  }
}