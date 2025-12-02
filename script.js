const OFFICE_LINK = "https://www.mapfre.es/oficina/es_ES/navalmoral-de-la-mata/L25598/?utm_source=google&utm_medium=mybusiness&utm_campaign=visitar_web";

const contents = {
    1: {
        title: "💳 Club Mapfre",
        text: "¿Todavía pagas la gasolina a precio normal? <br>🚨 <b>Error.</b> Los socios del Club Mapfre ahorramos cada vez que repostamos. <br>¿Aún no lo tienes activado?",
        cta: "Activar mis descuentos",
        link: OFFICE_LINK
    },
    2: {
        title: "🏥 Salud: Sin esperas",
        text: "¿Quieres la mejor atención con los mejores profesionales? <br>✅ Especialistas directos, y disponibles 24 horas. <br>✅ Pruebas diagnósticas rápidas. <br>Cotiza tu salud ahora.",
        cta: "Pedir precio Salud",
        link: OFFICE_LINK
    },
    3: {
        title: "🏠 Hogar: Bricolaje",
        text: "¿Un grifo que gotea? ¿Montar una estantería? <br>🛠️ Tu seguro de Hogar Mapfre incluye <b>servicio de Bricolaje</b> (manitas) gratuito al año. ¡Úsalo!",
        cta: "Más info",
        link: OFFICE_LINK
    },
    4: {
        title: "🚨 OFERTA: Baliza V16",
        text: "Adiós a los triángulos. La DGT obligará a usar la luz V16 conectada. <br>🎁 <b>Precio Exclusivo Socios Club Mapfre:</b> Consigue tu baliza V16 con un descuento brutal a través del Club.",
        cta: "Solicitar Baliza",
        link: OFFICE_LINK
    },
    5: {
        title: "💰 Ahorro Fiscal (Renta)",
        text: "⚠️ <b>Aviso:</b> Queda poco para acabar el año. <br>Si quieres pagar menos a Hacienda en la próxima declaración, necesitas un Plan de Pensiones YA.",
        cta: "Simular Ahorro Fiscal",
        link: OFFICE_LINK
    },
    6: {
        title: "🚗 Auto: Asistencia",
        text: "¿Te imaginas quedarte tirado en el Puente? <br>Nuestra asistencia es desde el km 0. Y si no podemos repararlo, te llevamos a casa.",
        cta: "Mejorar mi seguro",
        link: OFFICE_LINK
    },
    7: {
        title: "🛒 Club Mapfre: Amazon",
        text: "¿Vas a comprar regalos de Navidad en Amazon? <br>🤑 Hazlo a través del Club Mapfre y acumula Tréboles (Euros) para descontar de tu seguro.",
        cta: "Saber cómo funciona",
        link: OFFICE_LINK
    },
    8: {
        title: "🎁 Ven a la oficina",
        text: "¿Eres cliente Mapfre Navalmoral? <br>Pásate hoy a saludarnos y llévate un <b>cuaderno de notas con pósitos</b> para organizar tu 2026. <br>*(Solo presencial. Hasta fin de existencias)*",
        cta: "Ver ubicación",
        link: OFFICE_LINK
    },
    9: {
        title: "🦷 Seguro Dental",
        text: "Una endodoncia cuesta más que el seguro de todo el año. <br>💡 Los niños menores de 15 años entran GRATIS en tu póliza dental.",
        cta: "Contratar Dental",
        link: OFFICE_LINK
    },
    10: {
        title: "💼 Autónomos y PyMEs",
        text: "Tu negocio es tu vida. Si tú paras, ¿quién paga las facturas? <br>Seguros de Incapacidad Temporal para que cobres aunque estés de baja.",
        cta: "Proteger mi negocio",
        link: OFFICE_LINK
    },
    11: {
        title: "🚙 Coche de Sustitución",
        text: "Si tienes un golpe estas fiestas, no te quedes a pie. <br>Revisamos tu póliza para incluir vehículo de sustitución por muy poco más.",
        cta: "Revisar mi Póliza",
        link: OFFICE_LINK
    },
    12: {
        title: "💳 Tarjeta Bankinter",
        text: "¿Conoces la tarjeta Bankinter Mapfre? <br>Devuelve un % de tus compras para pagar tus seguros. <br>Literalmente: comprar comida te paga el seguro del coche.",
        cta: "Solicitar Tarjeta",
        link: OFFICE_LINK
    },
    13: {
        title: "🤑 Tréboles Mapfre",
        text: "1 Trébol = 1 Euro. <br>¿Sabes cuántos tienes acumulados? <br>Muchos clientes tienen dinero \"olvidado\" que pueden usar para pagar su recibo.",
        cta: "Consultar mis Tréboles",
        link: OFFICE_LINK
    },
    14: {
        title: "👴 Ahorro Jubilación",
        text: "El futuro de las pensiones públicas es incierto. <br>La única seguridad es tu propio ahorro. <br>Empieza con 50€ al mes.",
        cta: "Estudio gratuito",
        link: OFFICE_LINK
    },
    15: {
        title: "🐕 Seguros Mascotas",
        text: "Ahora es obligatorio tener seguro de RC para perros (Ley de Bienestar Animal). <br>Evita multas y protege a tu mejor amigo desde precios ridículos.",
        cta: "Asegurar Mascota",
        link: OFFICE_LINK
    },
    16: {
        title: "🏍️ Motos",
        text: "¿La moto parada en invierno? <br>Ojo: Aunque no la uses, debe tener seguro obligatorio. Tenemos tarifas de garaje.",
        cta: "Presupuesto Moto",
        link: OFFICE_LINK
    },
    17: {
        title: "🖊️ Regalo Oficina",
        text: "Ven a revisar tus coberturas para 2026 y llévate un <b>bolígrafo oficial Mapfre</b>. <br>Lo importante es que firmes tranquilo.",
        cta: "Pedir Cita",
        link: OFFICE_LINK
    },
    18: {
        title: "🛡️ Alarmas Securitas",
        text: "Socios Club Mapfre: <br>Instala tu alarma Securitas Direct con condiciones especiales y descuento en tu seguro de hogar.",
        cta: "Proteger mi casa",
        link: OFFICE_LINK
    },
    19: {
        title: "🖤 Decesos",
        text: "No es un tema agradable, pero es el seguro que más agradece la familia cuando llega el momento. <br>Todo resuelto con una llamada.",
        cta: "Más información",
        link: OFFICE_LINK
    },
    20: {
        title: "📉 Última llamada Fiscal",
        text: "¡Quedan 10 días para fin de año! <br>Última oportunidad para aportar a tu PIAS o Plan de Pensiones y desgravar en la Renta.",
        cta: "Aportar ahora",
        link: OFFICE_LINK
    },
    21: {
        title: "⛷️ Accidentes",
        text: "Si te caes esquiando o en bici, la recuperación puede ser lenta. <br>Seguro de accidentes personales: tu \"paracaídas\" económico ante imprevistos.",
        cta: "Ver opciones",
        link: OFFICE_LINK
    },
    22: {
        title: "🍀 Lotería de Navidad",
        text: "¿No tocó? <br>El mejor premio es ver cómo baja el precio de tus seguros agrupándolos en Mapfre. <br>Trae tus pólizas de la competencia y mejoramos precio.",
        cta: "Desafío Mapfre",
        link: OFFICE_LINK
    },
    23: {
        title: "🏡 Segunda Vivienda",
        text: "¿Tienes casa en el pueblo cerrada? <br>El robo de cobre o tuberías es muy común. Asegúrala por muy poco y duerme tranquilo.",
        cta: "Asegurar casa pueblo",
        link: OFFICE_LINK
    },
    24: {
        title: "🎅 Feliz Navidad",
        text: "Desde Mapfre Navalmoral te deseamos lo mejor. <br>Para 2026 solo te pedimos una cosa: Que nos dejes cuidarte.",
        cta: "Contactar",
        link: OFFICE_LINK
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('calendar-grid');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalCta = document.getElementById('modal-cta');
    const closeBtn = document.querySelector('.close-btn');

    // Load opened days from LocalStorage
    let openedDays = JSON.parse(localStorage.getItem('mapfreAdventCalendarOpened')) || [];

    // Date Check Logic
    const today = new Date();
    // For testing purposes, we can uncomment the line below to simulate a specific date
    // const today = new Date('2025-12-02'); 
    const currentMonth = today.getMonth(); // 0-11 (11 is December)
    const currentDay = today.getDate();

    // Generate Grid
    // Define some irregular sizes for visual interest
    // 1: Normal, 2: Wide, 3: Tall, 4: Big
    // We'll just assign them somewhat randomly or fixed for aesthetics
    const sizeClasses = {
        1: 'normal', 2: 'wide', 3: 'normal', 4: 'tall',
        5: 'normal', 6: 'normal', 7: 'big', 8: 'normal',
        9: 'wide', 10: 'normal', 11: 'normal', 12: 'tall',
        13: 'normal', 14: 'wide', 15: 'normal', 16: 'normal',
        17: 'big', 18: 'normal', 19: 'normal', 20: 'wide',
        21: 'normal', 22: 'tall', 23: 'wide', 24: 'big'
    };

    for (let i = 1; i <= 24; i++) {
        const dayCard = document.createElement('div');
        dayCard.classList.add('day-card');
        if (sizeClasses[i]) dayCard.classList.add(sizeClasses[i]);
        dayCard.dataset.day = i;

        // Door Structure
        const door = document.createElement('div');
        door.classList.add('door');

        // Content Behind Door (The Reward Note)
        const dayContent = document.createElement('div');
        dayContent.classList.add('day-content');
        // We can put the title or a small summary here
        if (contents[i]) {
            dayContent.innerHTML = `<p class="reward-preview">${contents[i].title}</p><span class="click-hint">Ver más</span>`;
        }

        // Front of Door
        const front = document.createElement('div');
        front.classList.add('door-front');

        const dayNumber = document.createElement('span');
        dayNumber.classList.add('day-number');
        dayNumber.textContent = i;

        const label = document.createElement('span');
        label.classList.add('door-label');
        label.textContent = "Abrir";

        front.appendChild(dayNumber);
        front.appendChild(label);

        // Back of Door
        const back = document.createElement('div');
        back.classList.add('door-back');
        back.innerHTML = "<span>🎁</span>"; // Simple icon for the back of the door itself

        door.appendChild(front);
        door.appendChild(back);

        dayCard.appendChild(dayContent); // Add content first (behind)
        dayCard.appendChild(door);       // Add door second (on top)

        // Logic for locked/unlocked
        let isLocked = false;

        if (currentMonth === 11) { // December
            if (i > currentDay) {
                isLocked = true;
            }
        } else if (currentMonth < 11) { // Before December
            isLocked = true;
        }

        if (isLocked) {
            dayCard.classList.add('locked');
            label.textContent = "Cerrado";
            // Add lock icon to front
            const lock = document.createElement('div');
            lock.innerHTML = "🔒";
            lock.style.fontSize = "1.5rem";
            lock.style.marginTop = "0.5rem";
            front.appendChild(lock);
        } else {
            // Click Event
            dayCard.addEventListener('click', () => {
                openDay(i);
            });

            if (openedDays.includes(i)) {
                dayCard.classList.add('opened');
                label.textContent = "Abierto"; // Though it will be hidden by rotation
            }
        }

        grid.appendChild(dayCard);
    }

    // Open Day Function
    function openDay(day) {
        // Double check just in case
        const now = new Date();
        if (now.getMonth() === 11 && day > now.getDate()) {
            alert("¡No hagas trampas! Aún no es el día 😉");
            return;
        }

        const card = document.querySelector(`.day-card[data-day="${day}"]`);

        // Animate Door Opening
        card.classList.add('opened');

        // Wait for animation to finish (approx) then show modal
        setTimeout(() => {
            const content = contents[day];
            if (!content) return;

            modalTitle.textContent = content.title;
            modalBody.innerHTML = content.text;
            modalCta.textContent = content.cta;
            modalCta.href = content.link;

            modal.classList.add('show');

            // Mark as opened in Storage
            if (!openedDays.includes(day)) {
                openedDays.push(day);
                localStorage.setItem('mapfreAdventCalendarOpened', JSON.stringify(openedDays));
            }
        }, 600); // Wait 600ms for door animation
    }

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
