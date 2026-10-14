import fs from "fs/promises";

export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

export async function lerTarefas(caminho: string): Promise<Tarefa[]> {
  try {
    const dados = await fs.readFile(caminho, "utf-8");
    return JSON.parse(dados);
  } catch {
    return []; 
  }
}

export async function salvarTarefas(caminho: string, tarefas: Tarefa[]): Promise<void> {
  const dados = JSON.stringify(tarefas, null, 2);
  await fs.writeFile(caminho, dados, "utf-8");
}

export async function concluir(caminho: string, id: number): Promise<Tarefa | null> {
  const tarefas = await lerTarefas(caminho);
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return null; 
  }

  tarefa.concluida = true;
  await salvarTarefas(caminho, tarefas);
  return tarefa;
}

export async function remover(caminho: string, id: number): Promise<boolean> {
  const tarefas = await lerTarefas(caminho);
  const tarefasAtualizadas = tarefas.filter((t) => t.id !== id);

  if (tarefasAtualizadas.length === tarefas.length) {
    return false;
  }

  await salvarTarefas(caminho, tarefasAtualizadas);
  return true;
}
