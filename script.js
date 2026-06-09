function orderNow(product){

let message =
`Hello PedexX Wear, I would like to order a ${product}`;

window.open(
`https://wa.me/233256355743?text=${encodeURIComponent(message)}`,
"_blank"
);

}
