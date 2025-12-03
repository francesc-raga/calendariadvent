document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtenir el dia actual del mes (per exemple, si avui és 3 de Desembre, 'diaActual' serà 3)
    // NOTA: En un entorn real, això es basa en el rellotge de l'usuari, que pot ser manipulat.
    // Però per a un projecte personal, és suficient.
    const avui = new Date();
    const diaActual = avui.getDate(); 

    // 2. Seleccionar totes les boles del calendari
    const boles = document.querySelectorAll('.bola');

    boles.forEach(bola => {
        // Obtenir el número de dia d'aquesta bola (l'atribut data-dia)
        const diaBola = parseInt(bola.getAttribute('data-dia'));
        
        // 3. Comprovar si la bola pertany a un dia futur
        if (diaBola > diaActual) {
            // Si el dia de la bola és superior al dia actual (futur), la bloquegem
            bola.classList.add('bloquejada');
            
            // Per evitar que l'usuari vegi el link al passar el ratolí, treiem l'enllaç (href)
            bola.removeAttribute('href');
            
        } else {
            // El dia ja ha passat o és avui. L'enllaç està actiu!
            // Podem afegir un petit efecte visual aquí si volem, p. ex.:
            bola.style.boxShadow = '0 0 15px white';
        }
    });
});