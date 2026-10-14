import fs from "fs/promises";

export async function buscarComSeguranca(
  caminho: string
): Promise<string | null> {
  try {
    const conteudo = await fs.readFile(caminho, "utf-8");
    return conteudo;
  } catch {
    return null;
  }
}

async function testar(): Promise<void> {
  const resultadoNaoExistente = await buscarComSeguranca(
    "arquivo_fantasma.txt"
  );

  console.log("Arquivo inexistente:", resultadoNaoExistente);

  const resultadoExistente = await buscarComSeguranca("app.log");

  console.log(
    "Arquivo existente:",
    resultadoExistente !== null ? "Conteúdo lido" : "Não encontrado"
  );
}

testar();