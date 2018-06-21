<?php 
    // Define variables and set to empty values
    $cognome = $_POST['cognome'];
    $cognome_error = "";
    $nome = $_POST['nome'];
    $nome_error = "";
    $email = $_POST['email'];
    $email_error = "";
    $telefono = $_POST['telefono'];
    $telefono_error = "";
    $professione = $_POST['professione'];
    $professione_error = "";
    $soggetto_messaggio = $_POST['soggetto_messaggio'];
    $soggetto_messaggio_error = "";
    $messaggio = $_POST['messaggio'];
    $messaggio_error = "";
    $successo = "Message sent, thank you for contacting us!";
    $no_successo = "Message not sent, thank you for contacting us!";


    //Form is submitted with POST method
      if (empty($_POST["cognome"])) {
        $cognome_error = "Cognome richiesto";
      } else {
        $cognome = test_input($_POST["cognome"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$cognome)) {
          $cognome_error = "Solo lettere e spazi sono amessi"; 
        }
    }

    if (empty($_POST["nome"])) {
        $_nome = "";
    } else {
        $nome = test_input($_POST["nome"]);
     // check if name only contains letters and whitespace
     if (!preg_match("/^[a-zA-Z ]*$/",$nome)) {
          $nome_error = "Solo lettere e spazi sono amessi"; 
        }
    }
        
    if (empty($_POST["email"])) {
        $email_error = "Email richiesta";
    } else {
        $email = test_input($_POST["email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $email_error = "Formato email invalido"; 
        }
    }

    if (empty($_POST["telefono"])) {
        $telefono_error = "Numero di telefono richiesto";
    } else {
        $telefono = test_input($_POST["telefono"]);
        // check if number phone is well-formed
        if (!(preg_match("/^[0-9]{9}$/i",$telefono) or preg_match("/^[0-9]{10}$/i",$telefono) or preg_match("/^[0-9]{12}$/i",$telefono) or preg_match("/^[0-9]{13}$/i",$telefono) or preg_match("/^[0-9]{14}$/i",$telefono) or preg_match("/^[0-9]{16}$/i",$telefono))) {
          $telefono_error = "Formato numero di telefono invalido"; 
        }
    }

    if (empty($_POST["professione"])) {
        $professione_error = "Professione richiesta";
    } else {
        $professione = test_input($_POST["professione"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$professione)) {
          $professione_error = "Solo lettere e spazi sono amessi"; 
        }
    }

    if (empty($_POST["soggetto_messaggio"])) {
        $soggetto_messaggio_error = "Soggetto Messaggio richiesto";
    } else {
        $soggetto_messaggio = test_input($_POST["soggetto_messaggio"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$soggetto_messaggio)) {
          $soggetto_messaggio_error = "Solo lettere e spazi sono amessi"; 
        }
    }
        
    if (empty($_POST["messaggio"])) {
        $messaggio_error = "Messaggio obbligatorio";
    } else {
        $messaggio = test_input($_POST["messaggio"]);
    }

    if ($cognome_error == '' and $nome_error == '' and $email_error == '' and $telefono_error == '' and $professione_error == '' and $soggetto_messaggio_error == '' and $messaggio_error == '') {
        $messaggio_body = '';
        $to = 'nzeukangrandrin@gmail.com';
        $subject = 'Messaggio di Primo Contatto';
        $success = mail($to, $subject, $messaggio_body, "From:".$email);
            if ($success){
                echo "success";
            } else {
                echo "invalid";
            }
        }


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
    }
?>