export interface IUsuario {
  id: string;
  email: string;
  nome: string;
  projetos?: string[];
  token: string;
}
