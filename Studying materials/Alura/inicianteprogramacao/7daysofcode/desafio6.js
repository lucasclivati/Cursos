let verduras = ["cenoura"];
let legumes = [];
let congelados = [];
let doces = [];

let add = "sim";

while (add != "nao"){
    add = prompt("Deseja adicionar um item a lista? Responda SIM, NAO OU REMOVER.");
if(add=="SIM" || add=="Sim" || add=="sim" || add=="siM" || add=="sIm"){
    item = prompt("Qual item você deseja adicionar?");
    categoria = prompt("Qual categoria do item? Use VERDURAS, LEGUMES, CONGELADOS OU DOCES.");
        if(categoria == "VERDURA" || categoria == "VERDURAS" || categoria == "verdura" || categoria == "verduras"){
            verduras.push(item);
        } else if(categoria == "LEGUME" || categoria == "LEGUMES" || categoria == "legume" || categoria == "legumes"){
            legumes.push(item);
        } else if(categoria == "CONGELADO" || categoria == "CONGELADOS" || categoria == "congelado" || categoria == "congelados"){
            congelados.push(item);
        } else if (categoria == "DOCE" || categoria == "DOCES" || categoria == "doce" || categoria == "doces"){
            doces.push(item);
        } else {
            alert("Categoria inválida. Tente adicionar novamente.")
        }
    } else if (add=="NAO" || add=="NO" || add=="Não" || add=="NÃO" || add=="NÃo" || add=="não" || add=="nao" || add=="nÃo" || add=="nÃO"){
        break;
    } else if(add=="REMOVER" || add=="remover"){
            remove = prompt("Qual item deseja remover?");
            if(verduras.includes(remove)==true){
                verduras.splice(verduras.indexOf(remove),1);
                alert(remove+' removido com sucesso');
            } else if (legumes.includes(remove)==true){
                legumes.splice(legumes.indexOf(remove),1);
                alert(remove+' removido com sucesso');
            } else if (congelados.includes(remove)==true){
                congelados.splice(congelados.indexOf(remove),1);
                alert(remove+' removido com sucesso');
            } else if (doces.includes(remove)==true){
                doces.splice(doces.indexOf(remove),1);
                alert(remove+' removido com sucesso');
            } else {
                alert("Resposta não permitida. Por favor responda novamente.");
            }
    } else {
        alert("Resposta não permitida. Por favor responda novamente.");
        add = prompt("Deseja adicionar um item a lista? Responda SIM, NAO ou REMOVER.");
    }
}
    alert(`Lista de compras:\n  Verduras: ${verduras}\n  Legumes: ${legumes}\n  Doces: ${doces}\n  Congelados: ${congelados}`);


