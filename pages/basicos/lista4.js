function listaDeValores(valorSolicitado) {
  var lista = [];
  for (var i = 1; i <= valorSolicitado; i++) {
    lista.push(i);
  }
  return lista;
}

export default function lista() {
  var valorSolicitado = 10;
  var lista = listaDeValores(valorSolicitado);

  return (
    <div>
      {lista.map(numero => (
        <span key={numero}>{numero}<br/></span>
      ))}
    </div>
  )
}