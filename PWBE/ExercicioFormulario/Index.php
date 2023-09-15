<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario de cadastro de Cliente</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form action="form.php" method="post">
      <div class="conteiner">
        <h1>Cadastro de Cliente</h1>
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="E-mail" />
        <input
          type="date"
          name="data_nascimento"
          placeholder="Data de Nascimento"
        />
        <input type="text" name="endereco" placeholder="Endereço" />
        <input type="submit" value="Enviar" />
      </div>
    </form>
  </body>
</html>
