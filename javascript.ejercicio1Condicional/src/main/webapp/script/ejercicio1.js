const edad=Number(prompt("Introduce la edad"));

if(edad<1 || edad>100){
	alert(`** [ERROR] Introduciste ${edad} años, la edad debe estar entre 1 y 100 **`);
}
else {
	edad>=18?alert(`Tienes ${edad} años y tienes permiso para acceder`):alert(`Tienes ${edad} años y no tienes permiso para acceder`);
}