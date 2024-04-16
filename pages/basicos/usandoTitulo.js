import Titulo from "@/components/Titulo"

export default function usandoTitulo() {
  return (
    <div>
      <Titulo 
        titulo="Pagina de Cadastro"
        descricao="Incluir, alterar e excluir."
      />
      <Titulo 
        titulo="Pagina de Login"
        descricao="Informe o seu email e senha"
        pequeno={true}
      />
      <Titulo 
        titulo="Pagina de Login"
        descricao="Informe o seu email e senha"
        pequeno
      />
    </div>
  )
}