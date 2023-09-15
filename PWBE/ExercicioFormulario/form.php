<?php

// cobexão com banco de dados
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'clientes';

// cria uma conexão com o banco de dados
$conexao = mysqli_cennect($host, $usuario, $senha, $banco);

//Verifica se a conexão foi bem-sucedida
if ($conexao) {

    $nome = $_POST['nome '];
    $email = $_POST['email'];
    $data_nascimento = $_POST['data_nascimento'];
    $endreco = $_POST['endreco'];

    // Insere os dados na tabela do banco

    $sql = "INSERT INTO clientes (nome, email, data_nascimento, endereco) VALUES ('$nome','$email','$data_nascimento','$endereco')";
    mysqli_query($conexao, $sql);

    // verifica se a inserção foi bem sucedida
    if (mysqli_affected_rows($conexao) > 0) {

        // Redireciona para uma página de sucesso
        header('Location: sucesso.php');
    } else {
        // Redireciona para uma página de erro
        header('Location: erro.php');
    }
} else {
    header('Location: erro.php');
}

?>