async function cargarUsuarios() {
  const respuesta = await fetch("usuario/123", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const usuarios = await respuesta.json();

  console.log("jajaja");
}
