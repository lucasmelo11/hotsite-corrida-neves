function TestaCPF() {
  var Soma;
  var Resto;
  Soma = 0;

  strCPF = RemoveMask(document.getElementById("input_cpf").value);

  if (strCPF == "00000000000") {
    return false;
  }

  if (strCPF == "") {
    document.querySelector("#input_cpf").classList.remove("is-valid");
    document.querySelector("#input_cpf").classList.add("is-invalid");
    return;
  }

  for (i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  }

  if (Resto == 10 || Resto == 11) {
    Resto = 0;
  }

  if (Resto != parseInt(strCPF.substring(9, 10))) {
    document.querySelector("#input_cpf").classList.remove("is-valid");
    document.querySelector("#input_cpf").classList.add("is-invalid");
    document.getElementById("input_cpf").focus();

    return false;
  }
  Soma = 0;

  for (i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  }

  if (Resto == 10 || Resto == 11) {
    Resto = 0;
  }

  if (Resto != parseInt(strCPF.substring(10, 11))) {
    return false;
  }

  document.querySelector("#input_cpf").classList.remove("is-invalid");
  document.querySelector("#input_cpf").classList.add("is-valid");

  return true;
}

function RemoveMask(valor) {
  var campo = valor;

  campo = campo.replace(".", "");
  campo = campo.replace(".", "");
  campo = campo.replace("-", "");
  campo = campo.replace("/", "");
  campo = campo.replace("/", "");

  return campo;
}

$("#formulario").submit(function () {
  TestaCPF();

  let nome = $("#nome");
  let nascimento = $("#nascimento");
  let telefone = $("#telefone");
  let cep = $("#cep");
  let email = $("#email");
  let logradouro = $("#logradouro");
  let numero = $("#nro");
  let genero = $("#genero");
  let bairro = $("#bairro");
  let cidade = $("#cidade");
  let uf = $("#uf");

  // let complemento = $("#complemento");
  // let campo = $("input");
  // let selecione = $("select");

  var emailFilter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if ($("#gridCheck").is(":checked") != true) {
    $("#gridCheck").addClass("is-invalid")
  }else{
    $("#gridCheck").removeClass("is-invalid")
    $("#gridCheck").addClass("is-valid")
  }

  if (nome.val().length < 8) {
    nome.addClass("is-invalid");
  } else {
    nome.removeClass("is-invalid");
    nome.addClass("is-valid");
  }

  if (nascimento.val().length != 10) {
    nascimento.addClass("is-invalid");
  } else {
    nascimento.removeClass("is-invalid");
    nascimento.addClass("is-valid");
  }

  if (telefone.val() == 0) {
    telefone.addClass("is-invalid");
  } else {
    telefone.removeClass("is-invalid");
    telefone.addClass("is-valid");
  }

  if (cep.val() == 0) {
    cep.addClass("is-invalid");
  } else {
    cep.removeClass("is-invalid");
    cep.addClass("is-valid");
  }

  if (!emailFilter.test(email.val())) {
    email.addClass("is-invalid");
  } else {
    email.removeClass("is-invalid");
    email.addClass("is-valid");
  }

  if (logradouro.val() == 0) {
    logradouro.addClass("is-invalid");
  } else {
    logradouro.removeClass("is-invalid");
    logradouro.addClass("is-valid");
  }

  if (numero.val() == 0) {
    numero.addClass("is-invalid");
  } else {
    numero.removeClass("is-invalid");
    numero.addClass("is-valid");
  }

  if (genero.val() == "") {
    genero.addClass("is-invalid");
    return false;
  } else {
    genero.removeClass("is-invalid");
    genero.addClass("is-valid");
  }

  if (bairro.val() == 0) {
    bairro.addClass("is-invalid");
  } else {
    bairro.removeClass("is-invalid");
    bairro.addClass("is-valid");
  }

  if (cidade.val() == 0) {
    cidade.addClass("is-invalid");
  } else {
    cidade.removeClass("is-invalid");
    cidade.addClass("is-valid");
  }

  if (uf.val() == "") {
    uf.addClass("is-invalid");
  } else {
    uf.removeClass("is-invalid");
    uf.addClass("is-valid");
  }

  if (complemento.val() == "") {
    return true
  }

  return false;
});
