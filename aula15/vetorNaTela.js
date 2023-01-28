let valores = [2,3,5,1,7,6,8,4];
valores.sort()
/*
for (let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
};
*/
for (pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}