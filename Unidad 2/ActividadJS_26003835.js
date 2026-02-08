var mes = prompt("Ingrese su mes de nacimiento (numero del 1 al 12):");
var dia = prompt("Ingrese su dia de nacimiento (numero del 1 al 31):");

var mes_nacimiento = parseInt(mes);
var dia_nacimiento  = parseInt(dia);

var signo = "";

if ((mes_nacimiento ==3 && dia_nacimiento >= 21) || (mes_nacimiento == 4 && dia_nacimiento <= 20))
{
  signo = "Aries";
}

else if ((mes_nacimiento == 4 && dia_nacimiento >= 21) || (mes_nacimiento == 5 && dia_nacimiento <= 20))
{
  signo = "Tauro";
}

else if ((mes_nacimiento == 5 && dia_nacimiento >= 21) || (mes_nacimiento == 6 && dia_nacimiento <= 20))
{
  signo = "Géminis";
}

else if ((mes_nacimiento == 6 && dia_nacimiento >= 21) || (mes_nacimiento == 7 && dia_nacimiento <= 22))
{
  signo = "Cáncer";
}

else if ((mes_nacimiento == 7 && dia_nacimiento >= 23) || (mes_nacimiento == 8 && dia_nacimiento <= 23))
{
  signo = "Leo";
}

else if ((mes_nacimiento == 8 && dia_nacimiento >= 24) || (mes_nacimiento == 9 && dia_nacimiento <= 22))
{
  signo = "Virgo";
}

else if ((mes_nacimiento == 9 && dia_nacimiento >= 23) || (mes_nacimiento == 10 && dia_nacimiento <= 23))
{
  signo = "Libra";
}

else if ((mes_nacimiento == 10 && dia_nacimiento >= 24) || (mes_nacimiento == 11 && dia_nacimiento <= 22))
{
  signo = "Escorpio";
}

else if ((mes_nacimiento == 11 && dia_nacimiento >= 23) || (mes_nacimiento == 12 && dia_nacimiento <= 21))
{
  signo = "Sagitario";
}

else if ((mes_nacimiento == 12 && dia_nacimiento >= 22) || (mes_nacimiento == 1 && dia_nacimiento <= 20))
{
  signo = "Capricornio";
}

else if ((mes_nacimiento == 1 && dia_nacimiento >= 21) || (mes_nacimiento == 2 && dia_nacimiento <= 19))
{
  signo = "Acuario";
}

else if ((mes_nacimiento == 2 && dia_nacimiento >= 20) || (mes_nacimiento == 3 && dia_nacimiento <= 20))
{
  signo = "Piscis";
}

else 
{
signo = "Fecha Inválida";
}

alert ("Tu signo Zodiacal es: " + signo);