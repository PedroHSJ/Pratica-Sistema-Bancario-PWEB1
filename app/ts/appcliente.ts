let cliente = new ClienteController;
let conta1 = new Conta('1', 170);
let cli1 = new Cliente('Fernando', '657', conta1);
let cleinte2 = new Cliente ('Manuel', '980', conta1 );
let cliespeci = new ClienteEspecial('Bruno', '398', conta1);

cliespeci.inserir(cli1);
cliespeci.inserir(cleinte2);

cliespeci.inserir(cli1);

