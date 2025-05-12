export const MovesText: { [id: IDEntry]: MoveText } = {
	"10000000voltthunderbolt": {
		name: "Gigarrayo fulminante",
		desc: "Tiene una probabilidad muy alta de realizar un golpe crítico.",
		shortDesc: "Probabilidad de golpe crítico muy alta.",
	},
	absorb: {
		name: "Absorber",
		desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia arriba. Si el usuario lleva una Raíz Grande, los PS recuperados son 1.3 veces los normales, redondeado hacia abajo.",
		shortDesc: "El usuario recupera el 50% del daño infligido.",
		gen4: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo. Si el usuario lleva una Raíz Grande, los PS recuperados son 1.3 veces los normales, redondeado hacia abajo.",
		},
		gen3: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo.",
		},
		gen2: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo. Si el objetivo tiene un sustituto, este movimiento falla.",
		},
		gen1: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo. Si este movimiento rompe el sustituto del objetivo, el usuario no recupera PS.",
		},
	},
	accelerock: {
		name: "Acelerock",
		desc: "No tiene efecto adicional.",
		shortDesc: "Normalmente va primero.",
	},
	acid: {
		name: "Ácido",
		desc: "Tiene un 10% de probabilidad de reducir la Defensa Especial del objetivo en 1 nivel.",
		shortDesc: "10% de reducir la Def. Esp. del objetivo en 1.",
		gen3: {
			desc: "Tiene un 10% de probabilidad de reducir la Defensa del objetivo en 1 nivel.",
			shortDesc: "10% de reducir la Defensa del objetivo en 1.",
		},
		gen1: {
			desc: "Tiene un 33% de probabilidad de reducir la Defensa del objetivo en 1 nivel.",
			shortDesc: "33% de reducir la Defensa del objetivo en 1.",
		},
		gen2: {
			shortDesc: "10% de reducir la Defensa del objetivo en 1.",
		},
	},
	acidarmor: {
		name: "Armadura Ácida",
		desc: "Aumenta la Defensa del usuario en 2 niveles.",
		shortDesc: "Aumenta la Defensa del usuario en 2.",
	},
	aciddownpour: {
		name: "Diluvio Corrosivo",
		shortDesc: "El poder es igual al Z-Poder del movimiento base.",
	},
	acidspray: {
		name: "Bomba Ácida",
		desc: "Tiene un 100% de probabilidad de reducir la Defensa Especial del objetivo en 2 niveles.",
		shortDesc: "100% de reducir la Def. Esp. del objetivo en 2.",
	},
	acrobatics: {
		name: "Acróbata",
		shortDesc: "Su potencia se duplica si el usuario no lleva un objeto.",
	},
	acupressure: {
		name: "Acupresión",
		desc: "Aumenta un atributo aleatorio del usuario o de un aliado adyacente en 2 niveles, siempre que el atributo no esté ya subido 6 niveles. Falla si no se puede aumentar ningún atributo o si se usa sobre un aliado con un sustituto.",
		shortDesc: "Aumenta un atributo aleatorio del usuario o un aliado en 2.",
		gen4: {
			desc: "Aumenta un atributo aleatorio del usuario o de un aliado en 2 niveles, siempre que el atributo no esté ya subido 6 niveles. Falla si no se puede aumentar ningún atributo o si el usuario o aliado tiene un sustituto.",
		},
	},
	aerialace: {
		name: "Golpe Aéreo",
		shortDesc: "Este movimiento ignora la precisión.",
	},
	aeroblast: {
		name: "Aerochorro",
		desc: "Tiene una mayor probabilidad de realizar un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	afteryou: {
		name: "Cede Paso",
		desc: "El objetivo realiza su movimiento inmediatamente después del usuario este turno, sin importar la prioridad del movimiento seleccionado. Falla si el objetivo se movería primero de todos modos o si el objetivo ya se movió este turno.",
		shortDesc: "El objetivo hace su movimiento justo después del usuario.",
		activate: "  ¡[TARGET] aceptó la amable oferta!",
	},
	agility: {
		name: "Agilidad",
		desc: "Aumenta la Velocidad del usuario en 2 niveles.",
		shortDesc: "Aumenta la Velocidad del usuario en 2.",
	},
	aircutter: {
		name: "Aire Afilado",
		desc: "Tiene una alta probabilidad de realizar un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico. Golpea a los enemigos adyacentes.",
	},
	airslash: {
		name: "Tajo aéreo",
		desc: "Tiene un 30% de probabilidad de amedrentar al objetivo.",
		shortDesc: "30% de probabilidad de amedrentar al objetivo.",
	},
	alloutpummeling: {
		name: "Ráfaga demoledora",
		shortDesc: "El poder es igual al Z-Poder del movimiento base.",
	},
	alluringvoice: {
		name: "Canto encantador",
		desc: "Tiene un 100% de probabilidad de confundir al objetivo si ha aumentado sus características este turno.",
		shortDesc: "100% de confundir al objetivo que haya aumentado sus características este turno.",
	},
	allyswitch: {
		name: "Cambio de banda",
		desc: "El usuario intercambia posiciones con su aliado. Falla si el usuario es el único Pokémon en su lado. Este movimiento tiene una probabilidad de éxito de 1/X, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si el movimiento falla o si el último movimiento realizado por el usuario no fue Cambio de banda.",
		shortDesc: "Intercambia posición con el aliado; usarlo nuevamente puede fallar.",
		gen8: {
			desc: "El usuario intercambia posiciones con su aliado. Falla si el usuario es el único Pokémon en su lado.",
			shortDesc: "El usuario intercambia posiciones con su aliado.",
		},
		gen6: {
			desc: "El usuario intercambia posiciones con su aliado en el lado opuesto del campo. Falla si no hay un Pokémon en esa posición, si el usuario es el único Pokémon en su lado o si el usuario está en el centro.",
			shortDesc: "Intercambia posición con el aliado en el lado opuesto.",
		},
	},
	amnesia: {
		name: "Amnesia",
		desc: "Aumenta la Defensa Especial del usuario en 2 niveles.",
		shortDesc: "Aumenta la Defensa Especial del usuario en 2.",
		gen1: {
			desc: "Aumenta la Defensa Especial del usuario en 2 niveles.",
			shortDesc: "Aumenta la Defensa Especial del usuario en 2.",
		},
	},
	anchorshot: {
		name: "Anclaje",
		desc: "Impide que el objetivo cambie o huya. El objetivo aún puede cambiar si lleva una Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el campo.",
		shortDesc: "Impide que el objetivo cambie o huya.",
		gen7: {
			desc: "Impide que el objetivo cambie de huya. El objetivo aún puede cambiar si lleva una Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si el objetivo abandona el campo usando Relevo, el reemplazo permanecerá atrapado. El efecto termina si el usuario abandona el campo.",
		},
	},
	ancientpower: {
		name: "Poder pasado",
		desc: "Tiene un 10% de probabilidad de aumentar el Ataque, Defensa, Ataque Especial, Defensa Especial y Velocidad del usuario en 1 nivel.",
		shortDesc: "10% de aumentar todos los atributos en 1 (no precisión/evasión).",
	},
	appleacid: {
		name: "Ácido málico",
		desc: "Tiene un 100% de probabilidad de reducir la Defensa Especial del objetivo en 1 nivel.",
		shortDesc: "100% de reducir la Def. Esp. del objetivo en 1.",
	},
	aquacutter: {
		name: "Tajo acuático",
		desc: "Tiene una alta probabilidad de realizar un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	aquajet: {
		name: "Acua jet",
		desc: "No tiene efecto adicional.",
		shortDesc: "Suele ir primero.",
	},
	aquaring: {
		name: "Acua aro",
		desc: "El usuario recupera 1/16 de sus PS máximos al final de cada turno mientras el efecto esté activo. Si el usuario lleva una Raíz grande, la recuperación es 1.3 veces la normal, redondeada hacia abajo. Si el usuario usa Relevo, el sustituto recibirá el efecto de curación.",
		shortDesc: "El usuario recupera 1/16 de sus PS máximos por turno.",
		start: "  ¡[POKEMON] se rodea con un velo de agua!",
		heal: "  ¡Un velo de agua restauró los PS de [POKEMON]!",
	},
	aquastep: {
		name: "Danza acuática",
		desc: "Tiene un 100% de probabilidad de aumentar la Velocidad del usuario en 1 nivel.",
		shortDesc: "100% de aumentar la Velocidad del usuario en 1.",
	},
	aquatail: {
		name: "Acua cola",
		shortDesc: "No tiene efecto adicional.",
	},
	armorcannon: {
		name: "Cañón armadura",
		desc: "Reduce la Defensa y la Defensa Especial del usuario en 1 nivel.",
		shortDesc: "Reduce la Defensa y la Def. Esp. del usuario en 1.",
	},
	armthrust: {
		name: "Empujón",
		desc: "Golpea entre dos y cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el usuario lleva Dado trucado, este movimiento golpeará entre 4 y 5 veces.",
		shortDesc: "Golpea entre 2 y 5 veces en un turno.",
		gen8: {
			desc: "Golpea entre dos y cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces.",
		},
		gen4: {
			desc: "Golpea entre dos y cinco veces. Tiene una probabilidad de 3/8 de golpear dos o tres veces, y una probabilidad de 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el objetivo lleva Banda Focus y tenía toda su PS al comenzar este movimiento, no será noqueado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea entre dos y cinco veces. Tiene una probabilidad de 3/8 de golpear dos o tres veces, y una probabilidad de 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes.",
		},
	},
	aromatherapy: {
		name: "Aromaterapia",
		desc: "Cada Pokémon en el equipo del usuario se cura de su condición de estado no volátil. Los Pokémon activos con la habilidad Absorbe Agua no se curan, a menos que sean el usuario.",
		shortDesc: "Cura al equipo del usuario de todas las condiciones de estado.",
		gen5: {
			desc: "Cada Pokémon en el equipo del usuario se cura de su condición de estado no volátil.",
		},
		activate: "¡Un aroma relajante se extendió por el área!",
	},
	nieblaaromatica: {
		name: "Niebla aromática",
		desc: "Aumenta la Defensa Especial del objetivo en 1 nivel. Falla si no hay un aliado adyacente al usuario.",
		shortDesc: "Aumenta la Def. Esp. de un aliado en 1.",
	},
	assist: {
		name: "Ayuda",
		desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Adaptación, Aguante, Amago, Antojo, Ayuda, Barrera espinosa, Bote, Buceo, Búnker, Caída libre, Celebración, Cháchara, Cola dragón, Contraataque, Copión, Coraza trampa, Detección, Eructo, Escudo real, Escudo tatami, Espejo, Esquema, Excavar, Feerichoque, Foco, Forcejeo, Golpe fantasma, Golpe umbrío, Ladrón, Llave giro, Manto espejo, Manos juntas, Metrónomo, Mimético, Mismo destino, Ominochoque, Ofrenda, Pico cañón, Pirochoque, Polvo ira, Ponzochoque, Protección, Puño certero, Pugnachoque, Refuerzo, Remolino, Robo, Rugido, Señuelo, Sonámbulo, Teraclúster, Trapicheo, Transformación, Truco, Vuelo ni Yo primero.",
		shortDesc: "Selecciona un movimiento aleatorio conocido por un miembro del equipo.",
		gen8: {
			desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Adaptación, Aguante, Amago, Antojo, Ayuda, Barrera espinosa, Bote, Buceo, Búnker, Caída libre, Celebración, Cháchara, Cola dragón, Contraataque, Copión, Coraza trampa, Detección, Eructo, Escudo real, Escudo tatami, Espejo, Esquema, Excavar, Foco, Forcejeo, Golpe fantasma, Golpe umbrío, Ladrón, Llave giro, Manos juntas, Manto espejo, Metrónomo, Mimético, Mismo destino, Ofrenda, Pico cañón, Polvo ira, Protección, Puño certero, Refuerzo, Remolino, Robo, Rugido, Señuelo, Sonámbulo, Transformación, Trapicheo, Truco, Vuelo ni Yo primero.",
		},
		gen7: {
			desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Adaptación, Aguante, Amago, Antojo, Ayuda, Barrera espinosa, Bote, Buceo, Búnker, Caída libre, Celebración, Cháchara, Cola dragón, Contraataque, Copión, Coraza trampa, Detección, Eructo, Escudo real, Escudo tatami, Espejo, Esquema, Excavar, Foco, Forcejeo, Golpe fantasma, Golpe umbrío, Llave giro, Ladrón, Manos juntas, Manto espejo, Metrónomo, Mimético, Mismo destino, Ofrenda, Pico cañón, Polvo ira, Protección, Puño certero, Refuerzo, Remolino, Robo, Rugido, Señuelo, Sonámbulo, Trapicheo, Transformación, Truco, Vuelo, Yo primero, ni cualquier movimiento Z.",
		},
		gen6: {
			desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Adaptación, Aguante, Amago, Antojo, Ayuda, Barrera espinosa, Bote, Buceo, Caída libre, Celebración, Cháchara, Cola dragón, Contraataque, Copión, Detección, Eructo, Escudo real, Escudo tatami, Espejo, Esquema, Excavar, Forcejeo, Golpe fantasma, Golpe umbrío, Ladrón, Llave giro, Manos juntas, Manto espejo, Metrónomo, Mimético, Mismo destino, Ofrenda, Polvo ira, Protección, Puño certero, Refuerzo, Remolino, Robo, Rugido, Señuelo, Sonámbulo, Transformación, Trapicheo, Truco, Vuelo ni Yo primero.",
		},
		gen5: {
			desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Adaptación, Aguante, Amago, Antojo, Ayuda, Cháchara, Cola dragón, Copión, Contraataque, Detección, Espejo, Esquema, Forcejeo, Ladrón, Llave giro, Manto espejo, Metrónomo, Mimético, Mismo destino, Ofrenda, Polvo ira, Protección, Puño certero, Refuerzo, Robo, Señuelo, Sonámbulo, Trapicheo, Transformación, Truco ni Yo primero",
		},
		gen4: {
			desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Aguante, Amago, Antojo, Ayuda, Cháchara, Copión, Contraataque, Detección, Espejo, Esquema, Forcejeo, Ladrón, Manto espejo, Metrónomo, Mímético, Mismo destino, Puño certero, Protección, Refuerzo, Robo, Señuelo, Sonámbulo, Trapicheo, Truco ni Yo primero",
		},
		gen3: {
			desc: "Se selecciona aleatoriamente un movimiento entre los conocidos por los miembros del equipo del usuario. No selecciona Aguante, Antojo, Ayuda, Contraataque, Detección, Espejo, Esquema, Forcejeo, Ladrón, Manto espejo, Metrónomo, Mimético, Mismo destino, Protección, Puño certero, Refuerzo, Robo, Señuelo, Sonámbulo ni Truco",
		},
	},
	assurance: {
		name: "Buena baza",
		desc: "El poder se duplica si el objetivo ya ha recibido daño este turno, excepto el daño directo de Tambor, Confusión, Maldición o Divide dolor.",
		shortDesc: "El poder se duplica si el objetivo recibió daño este turno.",
		gen4: {
			desc: "El poder se duplica si el objetivo ya ha recibido daño este turno.",
		},
	},
	astonish: {
		name: "Impresionar",
		desc: "Tiene un 30% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "30% de probabilidad de hacer retroceder al objetivo.",
		gen3: {
			desc: "Tiene un 30% de probabilidad de hacer retroceder al objetivo. El daño se duplica si el objetivo ha usado Reducción mientras está activo.",
		},
	},
	astralbarrage: {
		name: "Orbes espectro",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea a los oponentes adyacentes.",
	},
	attackorder: {
		name: "Al ataque",
		desc: "Tiene una probabilidad más alta de asestar un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	attract: {
		name: "Atracción",
		desc: "Causa que el objetivo se enamore, impidiéndole atacar el 50% de las veces. Falla si el usuario y el objetivo son del mismo género, si alguno no tiene género o si el objetivo ya está enamorado. El efecto termina cuando el usuario o el objetivo deja de estar activo. Los Pokémon con la habilidad Insomnia o protegidos por la habilidad Velo aroma son inmunes.",
		shortDesc: "Un objetivo del sexo opuesto se enamora.",
		gen5: {
			desc: "Causa que el objetivo se enamore, impidiéndole atacar el 50% de las veces. Falla si el usuario y el objetivo son del mismo género, si alguno no tiene género o si el objetivo ya está enamorado. El efecto termina cuando el usuario o el objetivo deja de estar activo. Los Pokémon con la habilidad Insomnia son inmunes.",
		},
		gen2: {
			desc: "Causa que el objetivo se enamore, impidiéndole atacar el 50% de las veces. Falla si el usuario y el objetivo son del mismo género, si alguno no tiene género o si el objetivo ya está enamorado. El efecto termina cuando el usuario o el objetivo deja de estar activo.",
		},
		start: "  ¡[POKEMON] se enamoró!",
		startFromItem: "  ¡[POKEMON] se enamoró debido a [ITEM]!",
		end: "  ¡[POKEMON] superó su enamoramiento!",
		endFromItem: "  ¡[POKEMON] curó su enamoramiento usando su [ITEM]!",
		activate: "  ¡[POKEMON] está enamorado de [TARGET]!",
		cant: "¡[POKEMON] está inmovilizado por el amor!",
	},
	aurasphere: {
		name: "Esfera aural",
		shortDesc: "Este movimiento no comprueba la precisión.",
	},
	aurawheel: {
		name: "Rueda aural",
		desc: "Tiene un 100% de probabilidad de aumentar la Velocidad del usuario en 1 nivel. Si el usuario es un Morpeko en forma saciada, este movimiento es de tipo Eléctrico. Si el usuario es un Morpeko en forma voraz, este movimiento es de tipo Siniestro. Este movimiento no puede usarse con éxito a menos que la forma actual del usuario, considerando Transformación, sea Morpeko en forma satisfecha o voraz.",
		shortDesc: "Morpeko: forma saciada Eléctrico; forma voraz Siniestro; 100% +1 Vel.",
	},
	aurorabeam: {
		name: "Rayo aurora",
		desc: "Tiene un 10% de probabilidad de bajar el Ataque del objetivo 1 nivel.",
		shortDesc: "10% de bajar el Ataque del objetivo 1 nivel.",
		gen1: {
			desc: "Tiene un 33% de probabilidad de bajar el Ataque del objetivo 1 nivel.",
			shortDesc: "33% de bajar el Ataque del objetivo 1 nivel.",
		},
	},
	auroraveil: {
		name: "Velo aurora",
		desc: "Durante 5 turnos, el usuario y sus aliados reciben la mitad de daño de ataques físicos y especiales, o x0,66 en combates dobles; no se reduce más con Reflejo o Pantalla de luz. Los críticos lo ignoran. Se elimina si el usuario o un aliado recibe con éxito Demolición, Colmillo psíquico, Despejar o Furia taurina. Dura 8 turnos con Refleluz. Falla a menos que el clima sea Nieve.",
		shortDesc: "5 turnos, daño a aliados a la mitad. Solo nieve.",
		gen8: {
			desc: "Durante 5 turnos, el usuario y sus aliados reciben la mitad de daño de ataques físicos y especiales, o x0,66 en combates dobles; no se reduce más con Reflejo o Pantalla de luz. Los críticos lo ignoran. Se elimina si el usuario o un aliado recibe con éxito Demolición, Colmillo psíquico o Despejar. Dura 8 turnos con Refleluz. Falla a menos que el clima sea Granizo.",
			shortDesc: "5 turnos, daño a aliados a la mitad. Solo granizo.",
		},
		start: "  ¡Velo aurora fortaleció a [TEAM] contra ataques físicos y especiales!",
		end: "  ¡El Velo aurora de [TEAM] desapareció!",
	},
	autotomize: {
		name: "Aligerar",
		desc: "Aumenta la Velocidad del usuario en 2 niveles. Si la Velocidad del usuario cambia, su peso se reduce en 100 kg mientras permanezca activo. Este efecto es acumulable, pero no puede reducir el peso del usuario por debajo de 0,1 kg.",
		shortDesc: "Aumenta la Velocidad en 2; pierde 100 kg.",
		start: "  ¡[POKEMON] se volvió ágil!",
	},
	avalanche: {
		name: "Alud",
		desc: "El poder se duplica si el usuario fue golpeado por el objetivo este turno.",
		shortDesc: "Poder x2 si recibe daño del objetivo.",
		gen4: {
			desc: "El poder se duplica si el usuario fue golpeado este turno por un Pokémon en la posición del objetivo.",
		},
	},
	axekick: {
		name: "Patada hacha",
		desc: "Tiene un 30% de probabilidad de confundir al objetivo. Si este ataque no tiene éxito, el usuario pierde la mitad de su PS máximo, redondeado hacia abajo, como daño por choque. Los Pokémon con la habilidad Muro mágico no se ven afectados por este daño.",
		shortDesc: "30% confusión; si falla, usuario pierde 50% PS.",
		damage: "#crash",
	},
	babydolleyes: {
		name: "Ojitos tiernos",
		desc: "Baja el Ataque del objetivo 1 nivel.",
		shortDesc: "Baja el Ataque del objetivo 1 nivel.",
	},
	baddybad: {
		name: "Umbreozona",
		desc: "Invoca Reflejo durante 5 turnos.",
		shortDesc: "Invoca Reflejo.",
	},
	banefulbunker: {
		name: "Búnker",
		desc: "El usuario está protegido de la mayoría de ataques de otros Pokémon durante este turno, y los Pokémon que entren en contacto con él quedan envenenados. Este movimiento tiene 1/X de probabilidades de funcionar, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X vuelve a 1 si falla, si el último movimiento del usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección se rompió. Falla si el usuario se mueve al final este turno.",
		shortDesc: "Protege de movimientos. Contacto: envenena.",
		gen8: {
			desc: "El usuario está protegido de la mayoría de ataques de otros Pokémon durante este turno, y los Pokémon que entren en contacto con él quedan envenenados. Este movimiento tiene 1/X de probabilidades de funcionar, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X vuelve a 1 si falla, si el último movimiento del usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección se rompió. Falla si el usuario se mueve al final este turno.",
		},
		gen7: {
			desc: "El usuario está protegido de la mayoría de ataques de otros Pokémon durante este turno, y los Pokémon que entren en contacto con él quedan envenenados. Este movimiento tiene 1/X de probabilidades de funcionar, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X vuelve a 1 si falla, si el último movimiento del usuario no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección se rompió. Falla si el usuario se mueve al final este turno.",
		},
	},
	barbbarrage: {
		name: "Mil púas tóxicas",
		desc: "Tiene un 50% de probabilidad de envenenar al objetivo. El poder se duplica si el objetivo ya está envenenado.",
		shortDesc: "50% enven.; poder x2 si ya envenenado.",
	},
	barrage: {
		name: "Bombardeo",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces.",
		shortDesc: "Golpea 2-5 veces.",
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces. Si el objetivo tiene Banda focus y tenía PS completos al inicio, no queda debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los restantes.",
		},
		gen1: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. El daño se calcula una vez para el primer golpe y se usa en todos ellos. Si uno rompe el sustituto, el movimiento termina.",
		},
	},
	barrier: {
		name: "Barrera",
		desc: "Aumenta la Defensa del usuario en 2 niveles.",
		shortDesc: "Aumenta la Defensa en 2.",
	},
	batonpass: {
		name: "Relevo",
		desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Acua aro, Maldición, Bramido dragón, Embargo, Foco energía, Bilis, Anticura, Arraigo, Drenadoras, Fijar blanco (Telépata), Levitón, Canto mortal, Truco fuerza, Telequinesis y un sustituto con su PS restante. El efecto de Bilis no se transfiere si el receptor tiene una habilidad que no puede ser afectada.",
		shortDesc: "El usuario cambia y transmite cambios de estadística y más.",
		gen8: {
			desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Acua aro, Maldición, Embargo, Foco energía, Bilis, Anticura, Arraigo, Drenadoras, Fijar blanco (Telépata), Levitón, Canto mortal, Truco fuerza, Telequinesis y un sustituto con su PS restante. El efecto de Bilis no se transfiere si el receptor tiene una habilidad que no puede ser afectada.",
		},
		gen7: {
			desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Acua aro, Maldición, Embargo, Foco energía, Bilis, Anticura, Arraigo, Drenadoras, Fijar blanco (Telépata), Levitón, Canto mortal, Truco fuerza, Telequinesis, el efecto de Mal de ojo (Bloqueo, Telaraña) y un sustituto con su PS restante. El efecto de Bilis no se transfiere si el receptor tiene una habilidad que no puede ser afectada. El efecto de Telequinesis no se transfiere si el receptor es Mega Gengar.",
		},
		gen5: {
			desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Acua aro, Maldición, Embargo, Foco energía, Bilis, Anticura, Arraigo, Drenadoras, Fijar blanco (Telépata), Levitón, Canto mortal, Truco fuerza, Telequinesis, el efecto de Mal de ojo (Bloqueo, Telaraña) y un sustituto con su PS restante.",
		},
		gen4: {
			desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Acua aro, Maldición, Embargo, Foco energía, Bilis, Anticura, Arraigo, Drenadoras, Fijar blanco (Telépata), Levitón, Chapoteo lodo, Canto mortal, Truco fuerza, Hidrochorro, el efecto de Mal de ojo (Bloqueo, Telaraña) y un sustituto con su PS restante.",
		},
		gen3: {
			desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Maldición, Foco energía, Arraigo, Drenadoras, Fijar blanco (Telépata), Chapoteo lodo, Canto mortal, Hidrochorro, el efecto de Mal de ojo (Bloqueo, Telaraña) y un sustituto con su PS restante.",
		},
		gen2: {
			desc: "El usuario es reemplazado por otro Pokémon de su equipo. El Pokémon seleccionado recibe los cambios de estadística del usuario, así como los efectos de Confusión, Maldición, Rizo defensa, Foco energía, Profecía, Drenadoras, Fijar blanco (Telépata), Reducción, Neblina, Canto mortal, el efecto de Mal de ojo (Telaraña) y un sustituto con su PS restante.",
		},
	},
	beakblast: {
		name: "Pico cañón",
		desc: "Si el usuario es golpeado por un movimiento de contacto este turno antes de ejecutar este movimiento, el atacante queda quemado.",
		shortDesc: "Quema al contacto antes de moverse.",
		start: "  ¡[POKEMON] calentó su pico!",
	},
	beatup: {
		name: "Paliza",
		desc: "Golpea una vez por el usuario y una vez por cada Pokémon desmayado sin condición de estado no volátil en el equipo del usuario. El poder de cada golpe es 5 + (X/10), donde X es el Ataque base de cada participante; cada golpe se considera provenir del usuario.",
		shortDesc: "Los aliados sanos ayudan a dañar al objetivo.",
		gen4: {
			desc: "Inflige daño sin tipo. Golpea 1-5 veces: 3/8 de prob. de 2 o 3 golpes, 1/8 de 4 o 5. Si uno rompe un sustituto, el objetivo recibe daño de los restantes. Con Encadenado siempre golpea 5 veces. Si el objetivo tiene Banda focus con PS completos al inicio, no queda debilitado.",
		},
		gen3: {
			desc: "Inflige daño sin tipo. Golpea una vez por cada Pokémon en el equipo que no esté desmayado ni tenga condición de estado no volátil. Cada golpe usa el Ataque base de ese Pokémon para Ataque y la Defensa base del objetivo para Defensa, ignorando cambios de estadísticas.",
		},
		gen2: {
			desc: "Inflige daño sin tipo. Golpea una vez por cada Pokémon en el equipo que no esté desmayado ni tenga condición de estado no volátil. Usa el nivel como Ataque, el Ataque base como stat de Ataque y la Defensa base del objetivo como Defensa, ignorando cambios de estadísticas. Falla si ningún Pokémon puede participar.",
		},
		activate: "¡El ataque de [NAME]!",
	},
	behemothbash: {
		name: "Embate supremo",
		shortDesc: "Sin efecto adicional.",
		gen8: {
			shortDesc: "Daño x2 si el objetivo está Dinamax.",
		},
	},
	behemothblade: {
		name: "Tajo supremo",
		shortDesc: "Sin efecto adicional.",
		gen8: {
			shortDesc: "Daño x2 si el objetivo está Dinamax.",
		},
	},
	belch: {
		name: "Eructo",
		desc: "Este movimiento no se puede seleccionar hasta que el usuario consuma una baya, ya sea comiendo una que llevaba, robándola a otro Pokémon con Picoteo o Picadura, o comiendo una que se le lance con Lanzamugre. Una vez cumplida la condición, puede usarse durante el resto de la batalla aunque el usuario cambie de objeto o salga del combate. Consumir una baya con Don natural no cuenta.",
		shortDesc: "No se puede seleccionar hasta que el usuario consuma una baya.",
	},
	bellydrum: {
		name: "Tambor",
		desc: "Aumenta el Ataque del usuario en 12 niveles a cambio de que pierda la mitad de sus PS máximos, redondeados hacia abajo. Falla si el usuario quedaría debilitado o si su estadística de Ataque ya está en 6.",
		shortDesc: "Usuario pierde 50% PS. Ataque al máximo.",
		gen2: {
			desc: "El usuario pierde la mitad de sus PS máximos, redondeados hacia abajo, a menos que quedaría debilitado o su estadística de Ataque esté en 6. Si no tenía suficientes PS, su Ataque aumenta 2 niveles. De lo contrario, mientras su Ataque sea menor que 6, aumenta 2 niveles; si su Ataque antes de esto era 999, la estadística baja 1 nivel y termina el bucle.",
		},
		boost: "¡[POKEMON] perdió la mitad de sus PS y maximizó su Ataque!",
	},
	bestow: {
		name: "Ofrenda",
		desc: "El objetivo recibe el objeto que llevaba el usuario. Falla si el usuario no tiene objeto o lleva una carta o un Cristal Z, si el objetivo ya lleva un objeto, si el usuario es un Kyogre con Prisma Azul, un Groudon con Prisma Rojo, un Giratina con Griseosfera, un Arceus con tabla, un Genesect con cartucho, un Silvally con disco, un Pokémon que puede Megaevolucionar con su Mega Piedra, o si el objetivo es uno de esos Pokémon y el usuario lleva el objeto respectivo.",
		shortDesc: "El usuario pasa su objeto al objetivo.",
		gen6: {
			desc: "El objetivo recibe el objeto que llevaba el usuario. Falla si el usuario no tiene objeto o lleva una carta, si el objetivo ya lleva un objeto, si el usuario es un Kyogre con Prisma Azul, un Groudon con Prisma Rojo, un Giratina con Griseosfera, un Arceus con tabla, un Genesect con cartucho o un Pokémon que puede Megaevolucionar con su Mega Piedra, o si el objetivo es uno de esos Pokémon y el usuario lleva el objeto respectivo.",
		},
		gen5: {
			desc: "El objetivo recibe el objeto que llevaba el usuario. Falla si el usuario no tiene objeto o lleva una carta, si el objetivo ya lleva un objeto, si el usuario es un Giratina con Griseosfera, un Arceus con tabla o un Genesect con cartucho, o si el objetivo es uno de esos Pokémon y el usuario lleva el objeto respectivo.",
		},
		takeItem: "¡[SOURCE] le dio a [POKEMON] su [ITEM]!",
	},
	bide: {
		name: "Venganza",
		desc: "El usuario pasa dos turnos inmovilizado y luego, en el segundo turno tras usarlo, ataca al último Pokémon que lo golpeó, infligiendo el doble del daño en PS que perdió durante esos dos turnos. Si ese Pokémon ya no está activo, ataca a un oponente aleatorio. Si se impide el movimiento del usuario, el efecto termina. Este movimiento no comprueba precisión y no ignora inmunidad de tipo.",
		shortDesc: "Espera 2 turnos; inflige el doble del daño recibido.",
		gen4: {
			desc: "El usuario pasa dos turnos inmovilizado y luego, en el segundo turno tras usarlo, ataca al último Pokémon que lo golpeó, infligiendo el doble del daño en PS que perdió durante esos dos turnos. Si ese Pokémon ya no está activo, ataca a un oponente aleatorio. Si el movimiento se impide, el efecto termina. Este movimiento no comprueba precisión e ignora inmunidad de tipo.",
		},
		gen3: {
			desc: "El usuario pasa dos turnos inmovilizado y luego, en el segundo turno tras usarlo, ataca al último Pokémon que lo golpeó, infligiendo el doble del daño en PS que perdió durante esos dos turnos. Si ese Pokémon ya no está activo, ataca a un oponente aleatorio. Si se impide el movimiento, el efecto termina. Este movimiento no ignora inmunidad de tipo.",
		},
		gen2: {
			desc: "El usuario pasa dos o tres turnos inmovilizado y luego, en el segundo o tercer turno tras usarlo, ataca al oponente, infligiendo el doble del daño en PS que perdió durante esos turnos. Si se impide el movimiento, el efecto termina. Este movimiento no ignora inmunidad de tipo.",
			shortDesc: "Espera 2-3 turnos; inflige 2x el daño recibido.",
		},
		gen1: {
			desc: "El usuario pasa dos o tres turnos inmovilizado y luego, en el segundo o tercer turno tras usarlo, ataca al oponente, infligiendo el doble del daño en PS que perdió durante esos turnos. Este movimiento ignora inmunidad de tipo y no puede evitarse, incluso si el objetivo usa Excavar o Vuelo. El usuario puede cambiar durante el efecto; si cambia o se le impide moverse, el efecto termina. Durante el efecto, si el rival cambia o usa Rayo confuso, Conversión, Foco energía, Deslumbrar, Niebla, Drenadoras, Pantalla de luz, Mimético, Neblina, Gas venenoso, Polvo veneno, Recuperación, Reflejo, Descanso, Ovocuración, Salpicadura, Paralizador, Sustituto, Supersónico, Teletransporte, Onda trueno, Tóxico o Transformación, el daño previo al usuario se suma al total.",
		},
		start: "¡[POKEMON] está almacenando energía!",
		end: "¡[POKEMON] desató su energía!",
		activate: "¡[POKEMON] está almacenando energía!",
	},
	bind: {
		name: "Atadura",
		desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro mortífero, Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
		shortDesc: "Atrapa y daña al objetivo 4-5 turnos.",
		gen8: {
			desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/8 de sus PS máximos (1/6 si lleva Banda atadura). El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona, o si el objetivo usa Giro rápido o Sustituto con éxito. No es acumulable ni se reinicia con otro movimiento de trampa.",
		},
		gen7: {
			desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa daño igual a 1/8 de sus PS máximos (1/6 con Banda atadura) al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Viraje, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona, o si el objetivo usa Giro rápido o Sustituto. No es acumulable ni se reinicia con otro movimiento de trampa.",
		},
		gen5: {
			desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa daño igual a 1/16 de sus PS máximos (1/8 con Banda atadura) al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona, o si usa Giro rápido o Sustituto. No es acumulable ni se reinicia.",
		},
		gen4: {
			desc: "Impide que el objetivo cambie de posición durante dos a cinco turnos (siempre cinco con Garra garfio). Causa daño igual a 1/16 de sus PS máximos al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo o Ida y vuelta. El efecto termina si el usuario o el objetivo abandona, o si usa Giro rápido o Sustituto. No es acumulable ni se reinicia.",
			shortDesc: "Atrapa y daña al objetivo 2-5 turnos.",
		},
		gen3: {
			desc: "Impide que el objetivo cambie de posición durante dos a cinco turnos. Causa daño igual a 1/16 de sus PS máximos al final de cada turno. El objetivo aún puede cambiar si usa Relevo. El efecto termina si el usuario o el objetivo abandona, o si usa Giro rápido o Sustituto. No es acumulable ni se reinicia.",
		},
		gen1: {
			desc: "El usuario pasa dos a cinco turnos usando este movimiento (3/8 de prob. 2-3 turnos, 1/8 de 4-5). El daño calculado en el primer turno se aplica en todos los demás. El usuario no puede seleccionar otro movimiento y el objetivo no puede moverse, pero ambos pueden cambiar; si cambian, el efecto termina. Puede impedir al objetivo moverse incluso con inmunidad de tipo, pero no inflige daño.",
			shortDesc: "Impide al objetivo moverse 2-5 turnos.",
		},
		start: "¡[POKEMON] aprieta a [SOURCE]!",
		move: "#wrap", // gen1 only
	},
	bite: {
		name: "Mordisco",
		desc: "Tiene un 30% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "30% de probabilidad de hacer retroceder al objetivo.",
		gen1: {
			desc: "Tiene un 10% de probabilidad de hacer retroceder al objetivo.",
			shortDesc: "10% de probabilidad de hacer retroceder al objetivo.",
		},
	},
	bitterblade: {
		name: "Espada lamento",
		desc: "El usuario recupera la mitad de los PS que el objetivo perdió, redondeando a la alza. Si el usuario lleva Raíz grande, los PS recuperados son 1,3x los normales, redondeando a la baja.",
		shortDesc: "Usuario recupera 50% del daño infligido.",
	},
	bittermalice: {
		name: "Rencor reprimido",
		desc: "Tiene un 100% de probabilidad de bajar el Ataque del objetivo 1 nivel.",
		shortDesc: "100% de bajar el Ataque del objetivo 1 nivel.",
	},
	blackholeeclipse: {
		name: "Agujero negro aniquilador",
		shortDesc: "El poder equivale al Poder Z del movimiento base.",
	},
	blastburn: {
		name: "Anillo ígneo",
		desc: "Si este movimiento tiene éxito, el usuario debe recargarse el siguiente turno y no puede seleccionar otro movimiento.",
		shortDesc: "El usuario no puede moverse el próximo turno.",
	},
	blazekick: {
		name: "Patada ígnea",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo y alta probabilidad de golpe crítico.",
		shortDesc: "Alta prob. crítico. 10% de quemar.",
	},
	blazingtorque: {
		name: "Pirochoque",
		desc: "Tiene un 30% de probabilidad de quemar al objetivo.",
		shortDesc: "30% de quemar al objetivo.",
	},
	bleakwindstorm: {
		name: "Vendaval gélido",
		desc: "Tiene un 30% de probabilidad de bajar la Velocidad del objetivo 1 nivel. Si el clima es Mar del Albor o Danza lluvia, no comprueba precisión.",
		shortDesc: "30% de bajar Vel. 1 niv. Lluvia: no falla.",
	},
	blizzard: {
		name: "Ventisca",
		desc: "Tiene un 10% de probabilidad de congelar al objetivo. Si el clima es Granizo, no comprueba precisión.",
		shortDesc: "10% de congelar. No falla con Granizo.",
		gen8: {
			desc: "Tiene un 10% de probabilidad de congelar al objetivo. Si el clima es Granizo, no comprueba precisión.",
			shortDesc: "10% de congelar. No falla con Granizo.",
		},
		gen3: {
			desc: "Tiene un 10% de probabilidad de congelar al objetivo.",
			shortDesc: "10% de congelar.",
		},
		gen2: {
			shortDesc: "10% de congelar al objetivo.",
		},
	},
	block: {
		name: "Bloqueo",
		desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el combate.",
		shortDesc: "Impide que el objetivo cambie de posición.",
		gen7: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si el objetivo abandona el combate usando Relevo, su reemplazo permanecerá atrapado. El efecto termina si el usuario abandona el combate.",
		},
	},
	bloodmoon: {
		name: "Luna roja",
		shortDesc: "No puede seleccionarse el turno siguiente.",
	},
	bloomdoom: {
		name: "Megatón floral",
		shortDesc: "El poder equivale al Poder Z del movimiento base.",
	},
	blueflare: {
		name: "Llama azul",
		desc: "Tiene un 20% de probabilidad de quemar al objetivo.",
		shortDesc: "20% de quemar al objetivo.",
	},
	bodypress: {
		name: "Plancha corporal",
		desc: "El daño se calcula usando la Defensa del usuario como Ataque, incluyendo cambios de nivel de estadística. Otros efectos que modifican Ataque se aplican normalmente.",
		shortDesc: "Usa Def del usuario como Atq.",
	},
	bodyslam: {
		name: "Golpe cuerpo",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo. El daño se duplica y no comprueba precisión si el objetivo ha usado Reducción mientras está activo.",
		shortDesc: "30% de paralizar al objetivo.",
		gen5: {
			desc: "Tiene un 30% de probabilidad de paralizar al objetivo.",
		},
	},
	boltbeak: {
		name: "Electropico",
		desc: "El poder se duplica si el usuario actúa antes que el objetivo.",
		shortDesc: "Poder x2 si actúa antes que el objetivo.",
	},
	boltstrike: {
		name: "Ataque fulgor",
		desc: "Tiene un 20% de probabilidad de paralizar al objetivo.",
		shortDesc: "20% de paralizar al objetivo.",
	},
	boneclub: {
		name: "Hueso palo",
		desc: "Tiene un 10% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "10% de retroceder al objetivo.",
	},
	bonemerang: {
		name: "Huesomerang",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño del segundo golpe. Si el objetivo lleva Banda aguante y tenía PS completos al inicio, no queda debilitado sin importar el número de golpes.",
		shortDesc: "Golpea 2 veces en un turno.",
		gen4: {
			desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño del segundo golpe. Si el objetivo lleva Banda aguante y tenía PS completos al inicio, no queda debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño del segundo golpe.",
		},
		gen1: {
			desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, el movimiento termina.",
		},
	},
	bonerush: {
		name: "Ataque óseo",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces. Si el usuario lleva Dado trucado, golpea 4-5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen8: {
			desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces.",
		},
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces. Si el objetivo llevaba Banda aguante y tenía PS completos al inicio, no queda debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes.",
		},
	},
	boomburst: {
		name: "Estruendo",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea Pokémon adyacentes.",
	},
	bounce: {
		name: "Bote",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo. Este ataque se carga el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Vendaval, Gancho alto, Antiaéreo, Mil flechas, Trueno y Ciclón, y Tornado y Ciclón tienen el doble de poder al usarse contra él. Si el usuario lleva Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Carga T1; ataca T2. 30% paraliza.",
		gen5: {
			desc: "Tiene un 30% de probabilidad de paralizar al objetivo. Este ataque se carga el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Vendaval, Gancho alto, Antiaéreo, Trueno y Ciclón, y Tornado y Ciclón tienen el doble de poder al usarse contra él. Si el usuario lleva Hierba única, el movimiento se completa en un solo turno.",
		},
		gen4: {
			desc: "Tiene un 30% de probabilidad de paralizar al objetivo. Este ataque se carga el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Gancho alto, Trueno y Ciclón, y Tornado y Ciclón tienen el doble de poder al usarse contra él. Si el usuario lleva Hierba única, el movimiento se completa en un solo turno.",
		},
		gen3: {
			desc: "Tiene un 30% de probabilidad de paralizar al objetivo. Este ataque se carga el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Gancho alto, Trueno y Ciclón, y Tornado y Ciclón tienen el doble de poder al usarse contra él.",
		},
		prepare: "¡[POKEMON] saltó hacia arriba!",
	},
	bouncybubble: {
		name: "Vapodrenaje",
		desc: "El usuario recupera la mitad de los PS que el objetivo perdió, redondeando a la alza. Si el usuario lleva Raíz grande, los PS recuperados son 1,3x los normales, redondeando a la baja.",
		shortDesc: "Usuario recupera 50% del daño infligido.",
	},
	branchpoke: {
		name: "Punzada rama",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional.",
	},
	bravebird: {
		name: "Pájaro osado",
		desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual al 33% de los PS perdidos por el objetivo, redondeando a la alza, pero no menos de 1 PS.",
		shortDesc: "Retroceso de 33%.",
		gen4: {
			desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/3 de los PS perdidos por el objetivo, redondeando a la baja, pero no menos de 1 PS.",
			shortDesc: "Retroceso de 1/3.",
		},
	},
	breakingswipe: {
		name: "Vasto impacto",
		desc: "Tiene un 100% de probabilidad de bajar el Ataque del objetivo 1 nivel.",
		shortDesc: "100% de bajar el Ataque del objetivo 1 nivel.",
	},
	breakneckblitz: {
		name: "Carrera arrolladora",
		shortDesc: "El poder equivale al Poder Z del movimiento base.",
	},
	brickbreak: {
		name: "Demolición",
		desc: "Si este ataque no falla, los efectos de Reflejo, Pantalla de luz y Velo aurora se eliminan en el campo del objetivo antes de calcular el daño.",
		shortDesc: "Destruye pantallas, salvo si el objetivo es inmune.",
		gen6: {
			desc: "Si este ataque no falla, los efectos de Reflejo y Pantalla de luz se eliminan en el campo del objetivo antes de calcular el daño.",
		},
		gen4: {
			desc: "Si este ataque no falla e independientemente de la inmunidad del objetivo, los efectos de Reflejo y Pantalla de luz se eliminan en el campo del objetivo antes de calcular el daño.",
			shortDesc: "Destruye pantallas, incluso si el objetivo es inmune.",
		},
		gen3: {
			desc: "Si este ataque no falla e independientemente de la inmunidad del objetivo, los efectos de Reflejo y Pantalla de luz se eliminan en el campo del oponente antes de calcular el daño.",
		},
		activate: "¡[POKEMON] destrozó las protecciones de [TEAM]!",
	},
	brine: {
		name: "Salmuera",
		desc: "El poder se duplica si el objetivo tiene la mitad o menos de sus PS máximos.",
		shortDesc: "Poder x2 si PS del objetivo ≤50%.",
	},
	brutalswing: {
		name: "Giro vil",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea Pokémon adyacentes.",
	},
	bubble: {
		name: "Burbuja",
		desc: "Tiene un 10% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "10% de bajar Vel. 1 nivel.",
		gen1: {
			desc: "Tiene un 33% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
			shortDesc: "33% de bajar Vel. 1 nivel.",
		},
		gen2: {
			shortDesc: "10% de bajar Vel. 1 nivel.",
		},
	},
	bubblebeam: {
		name: "Rayo burbuja",
		desc: "Tiene un 10% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "10% de bajar Vel. 1 nivel.",
		gen1: {
			desc: "Tiene un 33% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
			shortDesc: "33% de bajar Vel. 1 nivel.",
		},
	},
	bugbite: {
		name: "Picadura",
		desc: "Si tiene éxito y el usuario no queda debilitado, le roba la baya que lleva el objetivo (si la tiene) y la ingiere de inmediato, obteniendo sus efectos incluso si el objeto del usuario está siendo ignorado. Los objetos perdidos a causa de este movimiento no se pueden recuperar con Reciclaje o con la habilidad Cosecha.",
		shortDesc: "Usuario roba e ingiere la baya del objetivo.",
		gen4: {
			desc: "El usuario roba la baya que lleva el objetivo (si la tiene) y la ingiere de inmediato, obteniendo sus efectos a menos que el usuario quede debilitado o su objeto esté siendo ignorado. Los objetos perdidos a causa de este movimiento sí pueden recuperarse con Reciclaje.",
		},
		removeItem: "¡[SOURCE] robó y comió la baya de su objetivo!",
	},
	bugbuzz: {
		name: "Zumbido",
		desc: "Tiene un 10% de probabilidad de bajar la Defensa Especial del objetivo 1 nivel.",
		shortDesc: "10% de bajar Def. Esp. 1 nivel.",
	},
	bulkup: {
		name: "Corpulencia",
		desc: "Aumenta el Ataque y la Defensa del usuario 1 nivel.",
		shortDesc: "Aumenta Ataque y Defensa 1 nivel.",
	},
	bulldoze: {
		name: "Terratemblor",
		desc: "Tiene un 100% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "100% de bajar la Vel. de Pokémon adyacentes 1 nivel.",
	},
	bulletpunch: {
		name: "Puño bala",
		desc: "Sin efecto adicional.",
		shortDesc: "Generalmente va primero.",
	},
	bulletseed: {
		name: "Semilladora",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces. Si el usuario lleva Dado trucado, golpea 4-5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen8: {
			desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces.",
		},
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces. Si el objetivo lleva Banda aguante y tenía PS completos al inicio, no queda debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes.",
		},
	},
	burningbulwark: {
		name: "Llama protectora",
		desc: "El usuario está protegido de la mayoría de ataques de otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto con él quedan quemados. Los movimientos sin daño atraviesan esta protección. Este movimiento tiene 1/X de probabilidades de funcionar, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X vuelve a 1 si falla, si el último movimiento del usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección se rompió. Falla si el usuario actúa al final este turno.",
		shortDesc: "Protege de ataques dañinos. Contacto: quema.",
	},
	burningjealousy: {
		name: "Envidia ardiente",
		desc: "Tiene un 100% de probabilidad de quemar al objetivo si este aumentó alguna estadística durante el turno.",
		shortDesc: "100% quema a objetivos que subieron estadís. este turno.",
	},
	burnup: {
		name: "Llama final",
		desc: "Falla a menos que el usuario sea de tipo Fuego. Si tiene éxito y el usuario no está Teracristalizado, su tipo Fuego se vuelve sin tipo mientras permanezca activo.",
		shortDesc: "Tipo Fuego del usuario → sin tipo; debe ser Fuego.",
		gen8: {
			desc: "Falla a menos que el usuario sea de tipo Fuego. Si tiene éxito, su tipo Fuego se vuelve sin tipo mientras permanezca activo.",
		},
		typeChange: "  ¡[POKEMON] perdió su tipo Fuego!",
	},
	buzzybuzz: {
		name: "Joltioparálisis",
		desc: "Tiene un 100% de probabilidad de paralizar al objetivo.",
		shortDesc: "100% de paralizar al objetivo.",
	},
	calmmind: {
		name: "Paz mental",
		desc: "Aumenta el Ataque Especial y la Defensa Especial del usuario 1 nivel.",
		shortDesc: "Aumenta Atq. Esp. y Def. Esp. 1 nivel.",
	},
	camouflage: {
		name: "Camuflaje",
		desc: "El tipo del usuario cambia según el terreno de combate: tipo Normal en el terreno Wi-Fi normal, tipo Eléctrico en Campo eléctrico, tipo Hada en Campo de niebla, tipo Planta en Campo de hierba y tipo Psíquico en Campo psíquico. Falla si el tipo no puede cambiarse o si ya es puro de ese tipo.",
		shortDesc: "Cambia tipo según terreno (Normal predeterminado).",
		gen6: {
			desc: "El tipo del usuario cambia según el terreno de combate: tipo Normal en el terreno Wi-Fi normal, tipo Eléctrico en Campo eléctrico, tipo Hada en Campo de niebla y tipo Planta en Campo de hierba. Falla si el tipo no puede cambiarse o si ya es puro de ese tipo.",
		},
		gen5: {
			desc: "El tipo del usuario cambia según el terreno de combate: tipo Tierra en el terreno Wi-Fi normal. Falla si el tipo no puede cambiarse o si ya es puro de ese tipo.",
			shortDesc: "Cambia tipo según terreno (Tierra).",
		},
		gen4: {
			desc: "El tipo del usuario cambia según el terreno de combate: tipo Normal en el terreno Wi-Fi normal. Falla si tiene la habilidad Multitipo o si ese tipo ya es uno de los del usuario.",
			shortDesc: "Cambia tipo según terreno (Normal).",
		},
		gen3: {
			desc: "El tipo del usuario cambia a Normal en el terreno Wi-Fi normal. Falla si ese tipo ya es uno de los del usuario.",
		},
	},
	captivate: {
		name: "Seducción",
		desc: "Baja el Ataque Especial del objetivo 2 niveles. No funciona si el usuario y el objetivo son del mismo género o alguno no tiene género. Los Pokémon con la habilidad Insomne son inmunes.",
		shortDesc: "Baja Atq. Esp. 2 si género opuesto.",
	},
	catastropika: {
		name: "Pikavoltio letal",
		shortDesc: "Sin efecto adicional.",
	},
	ceaselessedge: {
		name: "Tajo metralla",
		desc: "Si tiene éxito, coloca una capa de púas en el campo rival que daña a cada Pokémon rival que entre, a menos que sea de tipo Volador o tenga la habilidad Levitación. Se pueden acumular hasta tres capas; con una capa pierden 1/8 de sus PS máximos, con dos 1/6 y con tres 1/4, redondeado hacia abajo. Puede eliminarse si un Pokémon usa Limpieza general, o si un rival usa giro mortífero, giro rápido o despejar con éxito, o es alcanzado por despejar.",
		shortDesc: "Coloca una capa de púas en el campo rival.",
	},
	celebrate: {
		name: "Celebración",
		shortDesc: "Sin uso competitivo.",
		activate: "¡Felicidades, [ENTRENADOR]!",
	},
	charge: {
		name: "Carga",
		desc: "Aumenta la Defensa Especial del usuario 1 nivel. El siguiente movimiento de tipo Eléctrico tendrá el doble de potencia; el efecto termina cuando el usuario deja de estar activo o tras intentar usar cualquier movimiento de tipo Eléctrico distinto de Carga, aun si falla.",
		shortDesc: "+1 Def. Esp.; siguiente mov. eléctrico x2.",
		gen8: {
			desc: "Aumenta la Defensa Especial del usuario 1 nivel. Si usa un ataque de tipo Eléctrico en el siguiente turno, su potencia se duplica.",
			shortDesc: "+1 Def. Esp.; siguiente mov. eléctrico x2.",
		},
		gen3: {
			desc: "Si usa un ataque de tipo Eléctrico en el siguiente turno, su potencia se duplica.",
			shortDesc: "Siguiente mov. eléctrico x2.",
		},
		start: "  ¡[POKEMON] comenzó a cargarse!",
	},
	chargebeam: {
		name: "Rayo carga",
		desc: "Tiene un 70% de probabilidad de aumentar el Ataque Especial del usuario 1 nivel.",
		shortDesc: "70% de subir Atq. Esp. 1 nivel.",
	},
	charm: {
		name: "Encanto",
		desc: "Baja el Ataque del objetivo 2 niveles.",
		shortDesc: "Baja el Ataque 2 niveles.",
	},
	chatter: {
		name: "Cháchara",
		desc: "Tiene un 100% de probabilidad de confundir al objetivo. En G5, tiene X% de probabilidad si el usuario es un Chatot que no se ha transformado (0% con grabación baja o nula, 10% con volumen medio o alto). En G4, X es 1%, 11% o 31% según el volumen de la grabación del grito de Chatot.",
		shortDesc: "100% de confundir al objetivo.",
		gen5: {
			desc: "Tiene X% de probabilidad de confundir al objetivo si el usuario es un Chatot que no se ha transformado (0% con grabación baja o nula, 10% con volumen medio o alto).",
			shortDesc: "Para Chatot: 10% de confundir al objetivo.",
		},
		gen4: {
			desc: "Tiene X% de probabilidad de confundir al objetivo si el usuario es un Chatot que no se ha transformado (1%, 11% o 31% según el volumen de la grabación del grito).",
			shortDesc: "Para Chatot: 31% de confundir al objetivo.",
		},
	},
	chillingwater: {
		name: "Agua fría",
		desc: "Tiene un 100% de probabilidad de bajar el Ataque del objetivo 1 nivel.",
		shortDesc: "100% de bajar el Ataque del objetivo 1 nivel.",
	},
	chillyreception: {
		name: "Fría acogida",
		desc: "Durante 5 turnos, el clima cambia a Nieve. El usuario cambia de posición incluso si está atrapado, reemplazado inmediatamente.",
		shortDesc: "Inicia Nieve. Usuario cambia.",
		prepare: "¡[POKEMON] se prepara para un chiste escalofriante!",
	},
	chipaway: {
		name: "Guardia baja",
		desc: "Ignora los cambios de nivel de estadística del objetivo, incluyendo evasión.",
		shortDesc: "Ignora los cambios de estadística del objetivo.",
	},
	chloroblast: {
		name: "Clorofiláser",
		desc: "Si tiene éxito, el usuario pierde la mitad de sus PS máximos, redondeando al alza, a menos que tenga las habilidades Muro mágico o Cabeza roca.",
		shortDesc: "Usuario pierde 50% PS máximos.",
	},
	circlethrow: {
		name: "Llave giro",
		desc: "Si tanto el usuario como el objetivo no quedan debilitados, el objetivo es forzado a cambiarse por un aliado al azar. Falla si el objetivo está sujeto por Arraigo, tiene la habilidad Ventosas o si alcanzó un sustituto.",
		shortDesc: "Fuerza al objetivo a cambiarse por un aliado al azar.",
	},
	clamp: {
		name: "Tenaza",
		desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro mortífero, Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
		shortDesc: "Atrapa y daña al objetivo 4-5 turnos.",
		gen8: {
			desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
		},
		gen7: {
			desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Viraje, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
		},
		gen5: {
			desc: "Impide que el objetivo cambie de posición durante cuatro o cinco turnos (siete si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/16 de sus PS máximos (1/8 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
		},
		gen4: {
			desc: "Impide que el objetivo cambie de posición durante dos a cinco turnos (siempre cinco si el usuario lleva Garra garfio). Causa al objetivo un daño igual a 1/16 de sus PS máximos, redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo o Ida y vuelta. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
			shortDesc: "Atrapa y daña al objetivo 2-5 turnos.",
		},
		gen3: {
			desc: "Impide que el objetivo cambie de posición durante dos a cinco turnos. Causa al objetivo un daño igual a 1/16 de sus PS máximos, redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si usa Relevo. El efecto termina si el usuario o el objetivo abandona el combate, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar otro movimiento de trampa.",
		},
		gen1: {
			desc: "El usuario pasa dos a cinco turnos usando este movimiento (3/8 prob. 2-3 turnos; 1/8 prob. 4-5). El daño calculado en el primer turno se aplica en todos los demás. El usuario no puede seleccionar otro movimiento y el objetivo no puede actuar, pero ambos pueden cambiar; si cambian, el efecto termina. Puede impedir al objetivo moverse incluso con inmunidad de tipo, pero no inflige daño.",
			shortDesc: "Impide al objetivo moverse 2-5 turnos.",
		},
		start: "  ¡[SOURCE] aprieta a [POKEMON] con sus tenazas!",
		move: "#wrap", // gen1 only
	},
	clangingscales: {
		name: "Fragor escamas",
		desc: "Baja la Defensa del usuario 1 nivel.",
		shortDesc: "Baja la Defensa 1 nivel.",
	},
	clangoroussoul: {
		name: "Estruendo escama",
		desc: "El usuario sacrifica 1/3 de sus PS máximos para subir Ataque, Defensa, Atq. Esp., Def. Esp. y Velocidad 1 nivel cada uno.",
		shortDesc: "Pierde 1/3 PS; sube todas las estad. 1 nivel.",
	},
	clangoroussoulblaze: {
		name: "Estruendo implacable",
		desc: "Sube Ataque, Defensa, Atq. Esp., Def. Esp. y Velocidad del usuario 1 nivel cada uno.",
		shortDesc: "Sube todas las estad. 1 nivel.",
	},
	clearsmog: {
		name: "Niebla clara",
		shortDesc: "Resetea todas las estad. del objetivo a 0.",
	},
	closecombat: {
		name: "A bocajarro",
		desc: "Baja la Defensa y la Def. Esp. del usuario 1 nivel cada una.",
		shortDesc: "Baja Def. y Def. Esp. 1 nivel.",
	},
	coaching: {
		name: "Motivación",
		desc: "Aumenta el Ataque y la Defensa del objetivo 1 nivel. Falla si no hay un aliado adyacente al usuario.",
		shortDesc: "Sube Ataque y Defensa de un aliado 1 nivel.",
	},
	coil: {
		name: "Enrosque",
		desc: "Aumenta el Ataque, la Defensa y la Precisión del usuario 1 nivel.",
		shortDesc: "Sube Ataque, Defensa y Precisión 1 nivel.",
	},
	collisioncourse: {
		name: "Nitrochoque",
		desc: "El daño se multiplica por 1,3333 si el movimiento es superefectivo contra el objetivo.",
		shortDesc: "Daño x1,3333 si es superefectivo.",
	},
	combattorque: {
		name: "Pugnachoque",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo.",
		shortDesc: "30% de paralizar al objetivo.",
	},
	cometpunch: {
		name: "Puño cometa",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes. Si el usuario tiene la habilidad Encadenado, siempre golpea cinco veces. Si el objetivo lleva Banda aguante y tenía PS completos al inicio, no queda debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño de los restantes.",
		},
		gen1: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear dos o tres veces y 1/8 de probabilidad de golpear cuatro o cinco veces. El daño se calcula una vez para el primer golpe y se aplica en todos. Si uno de los golpes rompe el sustituto del objetivo, el movimiento termina.",
		},
	},
	comeuppance: {
		name: "Resarcimiento",
		desc: "Inflige daño al último Pokémon rival que golpeó al usuario este turno con un ataque físico o especial igual a 1.5x los PS que el usuario perdió por ese ataque, redondeado hacia abajo. Si el usuario no perdió PS, este movimiento inflige 1 PS de daño. Si la posición de ese rival ya no está en uso y hay otro rival en el campo, el daño se aplica a este en su lugar. Solo se cuenta el último golpe de un ataque múltiple. Falla si el usuario no fue golpeado por un ataque físico o especial este turno.",
		shortDesc: "Si recibe un ataque, devuelve 1.5x el daño.",
	},
	confide: {
		name: "Confidencia",
		desc: "Baja el Ataque Especial del objetivo 1 nivel.",
		shortDesc: "Baja Atq. Esp. 1 nivel.",
	},
	confuseray: {
		name: "Rayo confuso",
		desc: "Causa confusión al objetivo.",
		shortDesc: "Confunde al objetivo.",
	},
	confusion: {
		name: "Confusión",
		desc: "Tiene un 10% de probabilidad de confundir al objetivo.",
		shortDesc: "10% de confundir al objetivo.",
	},
	constrict: {
		name: "Restricción",
		desc: "Tiene un 10% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "10% de bajar Velocidad 1 nivel.",
		gen1: {
			desc: "Tiene un 33% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
			shortDesc: "33% de bajar Velocidad 1 nivel.",
		},
	},
	continentalcrush: {
		name: "Aplastamiento gigalítico",
		shortDesc: "El poder equivale al Poder Z del movimiento base.",
	},
	conversion: {
		name: "Conversión",
		desc: "El tipo del usuario cambia para coincidir con el tipo original del movimiento en su primera ranura. Falla si el usuario no puede cambiar de tipo o si ese tipo ya es uno de los tipos actuales.",
		shortDesc: "Cambia el tipo del usuario según su primer movimiento.",
		gen5: {
			desc: "El tipo del usuario cambia para coincidir con el tipo original de uno de sus movimientos conocidos, excepto este, al azar, pero no con sus tipos actuales. Falla si el usuario no puede cambiar de tipo o si sólo podría elegir uno de sus tipos actuales.",
			shortDesc: "Cambia el tipo del usuario según un movimiento conocido.",
		},
		gen4: {
			desc: "El tipo del usuario cambia para coincidir con el tipo original de uno de sus movimientos conocidos, excepto este y Maldición, al azar, pero no con sus tipos actuales. Falla si el usuario no puede cambiar de tipo o si sólo podría elegir uno de sus tipos actuales.",
		},
		gen3: {
			desc: "El tipo del usuario cambia para coincidir con el tipo original de uno de sus movimientos conocidos, excepto Maldición, al azar, pero no con sus tipos actuales. Falla si el usuario no puede cambiar de tipo o si sólo podría elegir uno de sus tipos actuales.",
		},
		gen1: {
			desc: "Hace que el tipo del usuario sea igual al tipo actual del objetivo.",
			shortDesc: "Usuario toma el tipo del objetivo.",
		},
		typeChange: "¡[POKEMON] cambió su tipo al de [SOURCE]!",
	},
	conversion2: {
		name: "Conversión2",
		desc: "El tipo del usuario cambia para resistir el tipo del último movimiento usado por el objetivo, pero no con sus tipos actuales. Se usa el tipo determinado del movimiento. Falla si el objetivo no ha usado un movimiento, si el usuario no puede cambiar de tipo o si sólo podría elegir uno de sus tipos actuales.",
		shortDesc: "Cambia el tipo del usuario para resistir el último movimiento del objetivo.",
		gen4: {
			desc: "El tipo del usuario cambia para resistir el tipo del último movimiento exitoso usado contra él, pero no con sus tipos actuales. Se usa el tipo determinado del movimiento. Falla si ese movimiento no fue exitoso, si el usuario tiene la habilidad Multitipo o si sólo podría elegir uno de sus tipos actuales.",
			shortDesc: "Cambia el tipo del usuario para resistir el último mov. dado.",
		},
		gen3: {
			desc: "El tipo del usuario cambia para resistir el tipo del último movimiento exitoso usado contra él, pero no con sus tipos actuales. Se usa el tipo determinado del movimiento y Struggle se considera Normal. Falla si ese movimiento no fue exitoso o si sólo podría elegir uno de sus tipos actuales.",
		},
		gen2: {
			desc: "El tipo del usuario cambia para resistir el tipo del último movimiento usado por el rival, incluso si es uno de sus tipos actuales. Se usa el tipo original del movimiento. Falla si el rival no ha usado un movimiento.",
			shortDesc: "Cambia el tipo del usuario para resistir el último mov. rival.",
		},
	},
	copycat: {
		name: "Copión",
		desc: "El usuario usa el último movimiento usado en la batalla por cualquier Pokémon, incluso por sí mismo. Falla si no se ha usado ningún movimiento o si el último fue Ayuda, Búnker, Pico cañón, Embate supremo, Tajo supremo, Eructo, Ofrenda, Pirochoque, Celebración, Cháchara, Llave giro, Copión, Contraataque, Antojo, Mismo destino, Detección, Cola dragón, Cañón Dinamax, Aguante, Finta, Puño certero, Señuelo, Refuerzo, Manos juntas, Escudo real, Feerichoque, Escudo tatami, Yo primero, Metrónomo, Imitación, Espejo, Espejo, Adaptación, Ponzochoque, Protección, Polvo ira, Rugido, Cepo, Esquema, Sonámbulo, Robo, Barrera espinosa, Foco, Forcejeo, Trapicheo, Teraclúster, Ladrón, Transformación, Truco, Remolino u Ominochoque.",
		shortDesc: "Usa el último movimiento usado en la batalla.",
		gen8: {
			desc: "El usuario usa el último movimiento usado en la batalla por cualquier Pokémon, incluso por sí mismo. Se considera el movimiento base de los movimientos Max y G-Max. Falla si no se ha usado ningún movimiento o si el último fue Ayuda, Búnker, Pico cañón, Embate supremo, Tajo supremo, Eructo, Ofrenda, Celebración, Cháchara, Llave giro, Copión, Contraataque, Antojo, Mismo destino, Detección, Cola dragón, Cañón Dinamax, Aguante, Finta, Puño certero, Señuelo, Refuerzo, Manos juntas, Escudo real, Escudo tatami, Yo primero, Metrónomo, Imitación, Espejo, Adaptación, Protección, Polvo ira, Rugido, Cepo, Esquema, Sonámbulo, Robo, Barrera espinosa, Foco, Forcejeo, Trapicheo, Ladrón, Transformación, Truco o Remolino.",
		},
		gen7: {
			desc: "El usuario usa el último movimiento usado en la batalla por cualquier Pokémon, incluso por sí mismo. Falla si no se ha usado ningún movimiento o si el último fue Ayuda, Búnker, Pico cañón, Eructo, Ofrenda, Celebración, Cháchara, Llave giro, Copión, Contraataque, Antojo, Mismo destino, Detección, Cola dragón, Aguante, Finta, Puño certero, Señuelo, Refuerzo, Manos juntas, Escudo real, Escudo tatami, Yo primero, Metrónomo, Imitación, Espejo, Adaptación, Protección, Polvo ira, Rugido, Cepo, Esquema, Sonámbulo, Robo, Barrera espinosa, Foco, Forcejeo, Trapicheo, Ladrón, Transformación, Truco, Remolino o cualquier Movimiento Z.",
		},
		gen6: {
			desc: "El usuario usa el último movimiento usado en la batalla por cualquier Pokémon, incluso por sí mismo. Falla si no se ha usado ningún movimiento o si el último fue Ayuda, Eructo, Ofrenda, Celebración, Cháchara, Llave giro, Copión, Contraataque, Antojo, Mismo destino, Detección, Cola dragón, Aguante, Finta, Puño certero, Señuelo, Refuerzo, Manos juntas, Escudo real, Yo primero, Metrónomo, Imitación, Espejo, Adaptación, Protección, Polvo ira, Rugido, Esquema, Sonámbulo, Robo, Barrera espinosa, Forcejeo, Trapicheo, Ladrón, Transformación, Truco o Remolino.",
		},
		gen5: {
			desc: "El usuario usa el último movimiento usado en la batalla por cualquier Pokémon, incluso por sí mismo. Falla si no se ha usado ningún movimiento o si el último fue Ayuda, Ofrenda, Cháchara, Llave giro, Copión, Contraataque, Antojo, Mismo destino, Detección, Cola dragón, Aguante, Finta, Puño certero, Señuelo, Refuerzo, Yo primero, Metrónomo, Imitación, Espejo, Adaptación, Protección, Polvo ira, Esquema, Sonámbulo, Robo, Forcejeo, Trapicheo, Ladrón, Transformación o Truco.",
		},
		gen4: {
			desc: "El usuario usa el último movimiento usado en la batalla por cualquier Pokémon, incluso por sí mismo. Falla si no se ha usado ningún movimiento o si el último fue Ayuda, Cháchara, Copión, Contraataque, Antojo, Mismo destino, Detección, Aguante, Finta, Puño certero, Señuelo, Refuerzo, Yo primero, Metrónomo, Imitación, Espejo, Adaptación, Protección, Esquema, Sonámbulo, Robo, Forcejeo, Trapicheo, Ladrón o Truco.",
		},
	},
	coreenforcer: {
		name: "Núcleo castigo",
		desc: "Si el usuario actúa después que el objetivo, la habilidad del objetivo queda anulada mientras esté activo. Si el objetivo usa Relevo, el reemplazo también queda bajo este efecto. No funciona si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo daruma o Cambio heroico; si se transfiere por Relevo, el efecto termina.",
		shortDesc: "Anula la habilidad del rival si éste actúa primero.",
		gen8: {
			desc: "Si el usuario actúa después que el objetivo, la habilidad del objetivo queda anulada mientras esté activo. Si el objetivo usa Relevo, el reemplazo también queda bajo este efecto. No funciona si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo daruma o Cambio heroico; si se transfiere por Relevo, el efecto termina.",
		},
		gen7: {
			desc: "Si el usuario actúa después que el objetivo, la habilidad del objetivo queda anulada mientras esté activo. Si el objetivo usa Relevo, el reemplazo también queda bajo este efecto. No funciona si la habilidad del objetivo es Fuerte afecto, Letargo perenne, Disfraz, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico o Modo daruma; si se transfiere por Relevo, el efecto termina.",
		},
	},
	corkscrewcrash: {
		name: "Hélice trepanadora",
		shortDesc: "El poder equivale al Poder Z del movimiento base.",
	},
	corrosivegas: {
		name: "Gas corrosivo",
		desc: "El objetivo pierde su objeto. No funciona contra Pokémon con la habilidad Agarre indestructible ni contra Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian o Zamazenta para sus respectivos orbes o componentes. Los objetos perdidos no se pueden recuperar con Reciclaje o Cosecha.",
		shortDesc: "Quita el objeto a Pokémon adyacentes.",
		fail: "#healblock",
		removeItem: "  ¡[SOURCE] corroyó el objeto de [POKEMON]!",
	},
	cosmicpower: {
		name: "Masa cósmica",
		desc: "Aumenta la Defensa y la Defensa Especial del usuario 1 nivel.",
		shortDesc: "Aumenta Def. y Def. Esp. 1 nivel.",
	},
	cottonguard: {
		name: "Rizo algodón",
		desc: "Aumenta la Defensa del usuario 3 niveles.",
		shortDesc: "Aumenta la Defensa 3 niveles.",
	},
	cottonspore: {
		name: "Esporagodón",
		desc: "Baja la Velocidad del objetivo 2 niveles.",
		shortDesc: "Baja Velocidad 2 niveles.",
	},
	counter: {
		name: "Contraataque",
		desc: "Inflige daño al último Pokémon rival que golpeó al usuario este turno con un ataque físico igual al doble de los PS que el usuario perdió por ese ataque. Si no perdió PS, inflige 1 PS de daño. Si la posición de ese rival ya no está en uso y hay otro rival, el daño se aplica a este. Solo cuenta el último golpe de ataques múltiples. Falla si no fue golpeado por un ataque físico este turno.",
		shortDesc: "Si recibe ataque físico, devuelve 2x el daño.",
		gen6: {
			desc: "Inflige daño al último Pokémon rival que golpeó al usuario este turno con un ataque físico igual al doble de los PS que el usuario perdió por ese ataque. Si no perdió PS, inflige 1 PS de daño. Si la posición de ese rival ya no está en uso, el daño se aplica a un rival al azar. Solo cuenta el último golpe de ataques múltiples. Falla si no fue golpeado por un ataque físico este turno.",
		},
		gen4: {
			desc: "Inflige daño al último Pokémon rival que golpeó al usuario este turno con un ataque físico igual al doble de los PS que el usuario perdió por ese ataque. Si la posición de ese rival ya no está en uso y hay otro rival, el daño se aplica a este. Solo cuenta el último golpe de ataques múltiples. Falla si no fue golpeado por un ataque físico este turno o si no perdió PS.",
		},
		gen3: {
			desc: "Inflige daño al último Pokémon rival que golpeó al usuario este turno con un ataque físico igual al doble de los PS que el usuario perdió por ese ataque. Si la posición de ese rival ya no está en uso y hay otro rival, el daño se aplica a este. Solo cuenta el último golpe de ataques múltiples y considera Polvo Ira como tipo Normal. Falla si no fue golpeado por un ataque físico este turno o si no perdió PS.",
		},
		gen2: {
			desc: "Inflige daño al rival igual al doble de los PS que el usuario perdió por un ataque físico este turno. Solo cuenta el último golpe de ataques múltiples y considera Polvo Ira como tipo Normal. Falla si el usuario actúa primero, si no fue golpeado por un ataque físico o si no perdió PS. Si el rival usó Fisura u Perforador y falló, inflige 65535 de daño.",
		},
		gen1: {
			desc: "Inflige daño al rival igual al doble del daño del último movimiento usado en la batalla. Ignora inmunidad de tipo. Falla si el usuario actúa primero, o si el último movimiento rival fue Contraataque, tuvo 0 de potencia o no fue de tipo Normal o Lucha, o si no hizo daño y no fue Rayo confuso, Conversión, Foco energía, Deslumbrar, Niebla, Drenadoras, Pantalla de luz, Mimético, Neblina, Gas venenoso, Polvo veneno, Recuperación, Reflejo, Descanso, Ovocuración, Salpicadura, Somnífero, Sustituto, Supersónico, Teletransporte, Onda trueno, Tóxico o Transformación.",
			shortDesc: "Si recibe Normal/Lucha, devuelve 2x el daño.",
		},
	},
	courtchange: {
		name: "Cambio de cancha",
		desc: "Intercambia los efectos de Neblina, Pantalla de luz, Reflejo, Púas, Velo sagrado, Viento afín, Púas tóxicas, Trampa rocas, Voto agua, Voto fuego, Voto planta, Red viscosa, Velo aurora, Gigatrampa acero, Gigacañonazo, Gigalianas y Gigallamarada entre ambos lados.",
		shortDesc: "Intercambia los efectos de campo con el rival.",
		activate: "¡[POKEMON] intercambió los efectos de campo de ambos lados!",
	},
	covet: {
		name: "Antojo",
		desc: "Si este ataque tiene éxito y el usuario no queda debilitado, le roba el objeto que lleva el objetivo si el usuario no lleva uno. Falla si el usuario no tiene objeto o lleva una Carta o un Cristal Z, si el objetivo ya lleva un objeto, si el usuario es un Kyogre con Prisma Azul, un Groudon con Prisma Rojo, un Giratina con Griseosfera, un Arceus con Tabla, un Genesect con Cartucho, un Silvally con Disco o un Pokémon que puede Megaevolucionar con su Mega Piedra; o si el objetivo es uno de esos Pokémon y el usuario lleva el objeto respectivo. Los objetos perdidos no se pueden recuperar con Reciclaje o la habilidad Cosecha.",
		shortDesc: "Si el usuario no lleva objeto, roba el del objetivo.",
		gen6: {
			desc: "Si este ataque tiene éxito y el usuario no queda debilitado, le roba el objeto que lleva el objetivo si el usuario no lleva uno. Falla si el usuario no tiene objeto o lleva una Carta, si el objetivo ya lleva un objeto, si el usuario es un Kyogre con Prisma Azul, un Groudon con Prisma Rojo, un Giratina con Griseosfera, un Arceus con Tabla, un Genesect con Cartucho o un Pokémon que puede Megaevolucionar con su Mega Piedra; o si el objetivo es uno de esos Pokémon y el usuario lleva el objeto respectivo. Los objetos perdidos no se pueden recuperar con Reciclaje o la habilidad Cosecha.",
		},
		gen5: {
			desc: "Si este ataque tiene éxito y el usuario no queda debilitado, le roba el objeto que lleva el objetivo si el usuario no lleva uno. Falla si el usuario no tiene objeto o lleva una Carta, si el objetivo ya lleva un objeto, si el usuario es un Giratina con Griseosfera, un Arceus con Tabla o un Genesect con Cartucho; o si el objetivo es uno de esos Pokémon y el usuario lleva el objeto respectivo. Los objetos perdidos no se pueden recuperar con Reciclaje o la habilidad Cosecha.",
		},
		gen4: {
			desc: "Si este ataque tiene éxito y el usuario no queda debilitado, le roba el objeto que lleva el objetivo si el usuario no lleva uno. Falla si el usuario no tiene objeto o lleva una Carta o Griseosfera, o si el objetivo tiene la habilidad Multitipo. Los objetos perdidos no se pueden recuperar con Reciclaje.",
		},
		gen3: {
			desc: "Si este ataque tiene éxito y el usuario no queda debilitado, le roba el objeto que lleva el objetivo si el usuario no lleva uno. Falla si el usuario no tiene objeto o lleva una Carta o Baya Enigma. Los objetos perdidos no se pueden recuperar con Reciclaje.",
		},
	},
	crabhammer: {
		name: "Martillazo",
		desc: "Tiene alta probabilidad de golpe crítico.",
		shortDesc: "Alta prob. crítico.",
	},
	craftyshield: {
		name: "Truco defensa",
		desc: "El usuario y sus aliados quedan protegidos de ataques no dañinos de otros Pokémon durante este turno. Falla si el usuario actúa al final este turno o si ya está activo en el campo propio.",
		shortDesc: "Protege a los aliados de movimientos de estado este turno.",
		start: "¡Truco defensa protegió a [TEAM]!",
		block: "¡Truco defensa protegió a [POKEMON]!",
	},
	crosschop: {
		name: "Tajo cruzado",
		desc: "Alta probabilidad de golpe crítico.",
		shortDesc: "Alta prob. crítico.",
	},
	crosspoison: {
		name: "Veneno X",
		desc: "Tiene un 10% de probabilidad de envenenar al objetivo y alta probabilidad de golpe crítico.",
		shortDesc: "Alta prob. crítico. 10% de envenenar.",
	},
	crunch: {
		name: "Triturar",
		desc: "Tiene un 20% de probabilidad de bajar la Defensa del objetivo 1 nivel.",
		shortDesc: "20% de bajar Defensa 1 nivel.",
		gen3: {
			desc: "Tiene un 20% de probabilidad de bajar la Defensa Especial del objetivo 1 nivel.",
			shortDesc: "20% de bajar Def. Esp. 1 nivel.",
		},
	},
	crushclaw: {
		name: "Garra brutal",
		desc: "Tiene un 50% de probabilidad de bajar la Defensa del objetivo 1 nivel.",
		shortDesc: "50% de bajar la Defensa 1 nivel.",
	},
	crushgrip: {
		name: "Agarrón",
		desc: "El poder equivale a 120 x (PS actuales del objetivo / PS máximos del objetivo), redondeando a la baja, pero no menos de 1.",
		shortDesc: "Poder según PS restantes del objetivo.",
		gen4: {
			desc: "El poder equivale a 120 x (PS actuales del objetivo / PS máximos del objetivo) + 1, redondeando a la baja.",
		},
	},
	curse: {
		name: "Maldición",
		desc: "Si el usuario no es de tipo Fantasma, baja su Velocidad 1 nivel y sube su Ataque y Defensa 1 nivel. Si es de tipo Fantasma, pierde la mitad de sus PS máximos, redondeando hacia abajo e incluso si se debilita, y el objetivo pierde 1/4 de sus PS máximos, redondeando hacia abajo, al final de cada turno. Si el objetivo usa Relevo, el reemplazo también queda maldecido. Falla si no hay objetivo o ya está afectado.",
		shortDesc: "Fantasma: debilita al usuario y daña al objetivo; otro: -1 Vel, +1 Atq, +1 Def.",
		gen4: {
			desc: "Si el usuario no es de tipo Fantasma, baja su Velocidad 1 nivel y sube su Ataque y Defensa 1 nivel. Si es de tipo Fantasma, pierde la mitad de sus PS máximos, redondeando hacia abajo e incluso si se debilita, y el objetivo pierde 1/4 de sus PS máximos al final de cada turno. Si el objetivo usa Relevo o tiene Sustituto, el efecto continúa o falla, respectivamente. Falla si no hay objetivo o ya está afectado.",
		},
		gen2: {
			desc: "Si el usuario no es de tipo Fantasma, baja su Velocidad 1 nivel y sube su Ataque y Defensa 1 nivel, a menos que ya estén en +6. Si es de tipo Fantasma, pierde la mitad de sus PS máximos e incluso si se debilita, y el objetivo pierde 1/4 de sus PS máximos al final de cada turno. Si el objetivo usa Relevo o tiene Sustituto, el efecto continúa o falla, respectivamente. Falla si el objetivo ya está afectado.",
		},
		start: "¡[SOURCE] perdió la mitad de sus PS y maldijo a [POKEMON]!",
		damage: "¡[POKEMON] está afectado por la maldición!",
	},
	cut: {
		name: "Corte",
		shortDesc: "Sin efecto adicional.",
	},
	darkestlariat: {
		name: "Lariat oscuro",
		desc: "Ignora los cambios de estadística del objetivo, incluida la evasión.",
		shortDesc: "Ignora cambios de estad. del objetivo.",
	},
	darkpulse: {
		name: "Pulso umbrío",
		desc: "Tiene un 20% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "20% de hacer retroceder al objetivo.",
	},
	darkvoid: {
		name: "Brecha negra",
		desc: "Hace dormir al objetivo. Solo funciona si el usuario es Darkrai.",
		shortDesc: "Darkrai: hace dormir a los rivales.",
		gen6: {
			desc: "Hace dormir al objetivo.",
			shortDesc: "Hace dormir al objetivo.",
		},
		fail: "¡Pero [POKEMON] no puede usar el movimiento!",
		failWrongForme: "¡Pero [POKEMON] no puede usarlo en su forma actual!",
	},
	dazzlinggleam: {
		name: "Brillo mágico",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea a Pokémon adyacentes.",
	},
	decorate: {
		name: "Decoración",
		desc: "Aumenta el Ataque y el Ataque Especial del objetivo 2 niveles.",
		shortDesc: "Sube Atq. y Atq. Esp. del objetivo 2 niveles.",
	},
	defendorder: {
		name: "A defender",
		desc: "Aumenta la Defensa y la Defensa Especial del usuario 1 nivel.",
		shortDesc: "Sube Def. y Def. Esp. 1 nivel.",
	},
	defensecurl: {
		name: "Rizo defensa",
		desc: "Aumenta la Defensa del usuario 1 nivel. Mientras permanezca activo, el poder de Bola hielo y Rodar se duplica (no acumulable).",
		shortDesc: "Aumenta la Defensa 1 nivel.",
		gen2: {
			desc: "Aumenta la Defensa del usuario 1 nivel. Mientras permanezca activo, el poder de Rodar se duplica (no acumulable). Puede transferirse con Relevo.",
		},
		gen1: {
			desc: "Aumenta la Defensa del usuario 1 nivel.",
		},
	},
	defog: {
		name: "Despejar",
		desc: "Baja la evasión del objetivo 1 nivel. Si tiene éxito, elimina en el lado rival los efectos de Reflejo, Pantalla de luz, Velo aurora, Velo sagrado, Neblina, Púas, Púas tóxicas, Trampa rocas y Red viscosa, y en el propio los de Púas, Púas tóxicas, Trampa rocas y Red viscosa. Ignora sustitutos (aunque estos bloquean la bajada de evasión). Si hay un terreno activo y tiene éxito, también lo despeja.",
		shortDesc: "-1 evasión; limpia trampas y terreno.",
		gen7: {
			desc: "Baja la evasión del objetivo 1 nivel. Si tiene éxito, elimina en el lado rival los efectos de Reflejo, Pantalla de luz, Velo aurora, Velo sagrado, Neblina, Púas, Púas tóxicas, Trampa rocas y Red viscosa, y en el propio los de Púas, Púas tóxicas, Trampa rocas y Red viscosa. Ignora sustitutos (aunque estos bloquean la bajada de evasión).",
			shortDesc: "-1 evasión; limpia trampas.",
		},
		gen6: {
			desc: "Baja la evasión del objetivo 1 nivel. Si tiene éxito, elimina en el lado rival los efectos de Reflejo, Pantalla de luz, Velo aurora, Velo sagrado, Neblina, Púas, Púas tóxicas, Trampa rocas y Red viscosa, y en el propio los de Púas, Púas tóxicas, Trampa rocas y Red viscosa. Ignora sustitutos (aunque estos bloquean la bajada de evasión).",
		},
		gen5: {
			desc: "Baja la evasión del objetivo 1 nivel. Si tiene éxito, elimina en el lado rival los efectos de Reflejo, Pantalla de luz, Velo sagrado, Neblina, Púas, Púas tóxicas y Trampa rocas. Ignora sustitutos (aunque estos bloquean la bajada de evasión).",
			shortDesc: "-1 evasión; limpia trampas y pantallas.",
		},
	},
	destinybond: {
		name: "Mismo destino",
		desc: "Hasta el próximo turno del usuario, si un rival lo debilita con un ataque, ese rival también queda debilitado, a menos que el ataque sea Deseo oculto o Premonición. Falla si su último movimiento usado fue Mismo destino, ignorando usos por Pareja de baile.",
		shortDesc: "Si un rival debilita al usuario, también queda debilitado.",
		gen6: {
			desc: "Hasta el próximo turno del usuario, si un rival lo debilita con un ataque, ese rival también queda debilitado, a menos que el ataque sea Deseo oculto o Premonición.",
		},
		gen2: {
			desc: "Hasta el próximo turno del usuario, si un rival lo debilita con un ataque, ese rival también queda debilitado.",
		},
		start: "  ¡[POKEMON] espera llevarse al atacante con él!",
		activate: "  ¡[POKEMON] se llevó al atacante con él!",
	},
	detect: {
		name: "Detección",
		desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Esta acción falla si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de ellos y la protección quedó rota. Falla si el usuario actúa después.",
		shortDesc: "Evita que movimientos afecten al usuario este turno.",
		gen8: {
			desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Falla si el último movimiento usado no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia.",
		},
		gen7: {
			desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Falla si el último movimiento usado no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia.",
		},
		gen6: {
			desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Falla si el último movimiento usado no es Detección, Aguante, Escudo real, Protección, Anticipo o Barrera espinosa.",
		},
		gen5: {
			desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Falla si el último movimiento usado no es Detección, Aguante, Protección, Anticipo o Vasta guardia.",
		},
		gen4: {
			desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Falla si el último movimiento usado no es Detección, Aguante o Protección.",
		},
		gen3: {
			desc: "El usuario queda protegido de la mayoría de ataques de otros Pokémon este turno. Este movimiento tiene una probabilidad de X/65536 de tener éxito, donde X comienza en 65535 y se divide por 2, redondeado hacia abajo, cada vez que se usa con éxito. Tras el cuarto uso exitoso consecutivo, X baja a 118 y sigue valores aparentemente aleatorios de 0 a 65535. X vuelve a 65535 si falla o si el último movimiento no es Detección, Aguante o Protección. Falla si el usuario actúa después.",
		},
		gen2: {
			desc: "El usuario queda protegido de ataques del oponente este turno. Este movimiento tiene una probabilidad de X/255 de tener éxito, donde X comienza en 255 y se divide por 2, redondeado hacia abajo, cada vez que se usa con éxito. X vuelve a 255 si falla o si el último movimiento no es Detección, Aguante o Protección. Falla si el usuario tiene un sustituto o actúa después.",
		},
	},
	devastatingdrake: {
		name: "Dracoaliento devastador",
		shortDesc: "La potencia equivale al poder Z de la acción base.",
	},
	diamondstorm: {
		name: "Tormenta de diamantes",
		desc: "Tiene un 50% de probabilidad de subir la Defensa del usuario 2 niveles.",
		shortDesc: "50% de subir la Defensa del usuario 2 niveles.",
		gen6: {
			desc: "Tiene un 50% de probabilidad de subir la Defensa del usuario 1 nivel por cada objetivo golpeado.",
			shortDesc: "50% de subir la Def del usuario 1 nivel por impacto.",
		},
	},
	dig: {
		name: "Excavar",
		desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Terremoto y Magnitud, que infligen el doble de daño cuando se usan contra él, y no se ve afectado por el clima. Si el usuario lleva Hierba única, el movimiento se completa en un turno.",
		shortDesc: "Se entierra turno 1, ataca turno 2.",
		gen4: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Terremoto y Magnitud, que tienen doble poder cuando se usan contra él, y no se ve afectado por el clima. Si lleva Hierba única, el movimiento se completa en un turno.",
		},
		gen3: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Terremoto y Magnitud, que tienen doble poder cuando se usan contra él, y no se ve afectado por el clima.",
		},
		gen2: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Terremoto, Fisura y Magnitud; no se ve afectado por el clima, y Terremoto y Magnitud infligen el doble de daño cuando se usan contra él.",
		},
		gen1: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Venganza, Meteoros y Transformación. Si el usuario está totalmente paralizado en el segundo turno, continúa evitando ataques hasta que cambie de Pokémon o ejecute con éxito el segundo turno de este movimiento o Vuelo.",
		},
		prepare: "[POKEMON] se enterró bajo tierra!",
	},
	direclaw: {
		name: "Garra nociva",
		desc: "Tiene un 50% de probabilidad de causar que el objetivo caiga dormido, se envenene o se paralice.",
		shortDesc: "50% de causar sueño, veneno o parálisis.",
	},
	disable: {
		name: "Anulación",
		desc: "Durante 4 turnos, el último movimiento usado por el objetivo queda inhabilitado. Falla si uno de sus movimientos ya está inhabilitado, si no ha usado ningún movimiento, si ya no lo conoce o si fue un Movimiento Z o Máx.",
		shortDesc: "Durante 4 turnos, inhabilita el último movimiento del objetivo.",
		gen7: {
			desc: "Durante 4 turnos, el último movimiento usado por el objetivo queda inhabilitado. Falla si uno de sus movimientos ya está inhabilitado, si no ha usado ningún movimiento, si ya no lo conoce o si fue un Movimiento Z. Los movimientos Z aún pueden seleccionarse y ejecutarse.",
		},
		gen6: {
			desc: "Durante 4 turnos, el último movimiento usado por el objetivo queda inhabilitado. Falla si uno de sus movimientos ya está inhabilitado, si no ha usado ningún movimiento o si ya no lo conoce.",
		},
		gen4: {
			desc: "Durante 4-7 turnos, el último movimiento usado por el objetivo queda inhabilitado. Falla si uno de sus movimientos ya está inhabilitado, si no ha usado ningún movimiento, si ya no lo conoce o si tiene 0 PP.",
			shortDesc: "4-7 turnos, inhabilita el último movimiento del objetivo.",
		},
		gen3: {
			desc: "Durante 2-5 turnos, el último movimiento usado por el objetivo queda inhabilitado. Falla si uno de sus movimientos ya está inhabilitado, si no ha usado ningún movimiento, si ya no lo conoce o si tiene 0 PP.",
			shortDesc: "2-5 turnos, inhabilita el último movimiento del objetivo.",
		},
		gen2: {
			desc: "Durante 1-7 turnos, el último movimiento usado por el objetivo queda inhabilitado. Falla si uno de sus movimientos ya está inhabilitado, si no ha usado ningún movimiento, si ya no lo conoce o si tiene 0 PP.",
			shortDesc: "1-7 turnos, inhabilita el último movimiento del objetivo.",
		},
		gen1: {
			desc: "Durante 0-7 turnos, uno de los movimientos conocidos del objetivo con al menos 1 PP restante queda inhabilitado al azar. Falla si ya tiene uno inhabilitado o si ninguno tiene PP. Si un Pokémon usa Niebla, el efecto termina. Cuenta como impacto para Furia.",
			shortDesc: "0-7 turnos, inhabilita un movimiento del objetivo.",
		},
		start: "  ¡[POKEMON] ya no puede usar [MOVE]!",
		end: "  ¡[MOVE] de [POKEMON] ya no está inhabilitado!",
		cant: "¡[POKEMON] no puede usar [MOVE]!",
	},
	disarmingvoice: {
		name: "Voz cautivadora",
		desc: "Este movimiento no comprueba precisión. Golpea a ambos rivales.",
		shortDesc: "No comprueba precisión. Golpea a ambos rivales.",
	},
	discharge: {
		name: "Chispazo",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo.",
		shortDesc: "30% de paralizar a Pokémon adyacentes.",
	},
	dive: {
		name: "Buceo",
		desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Surf y Torbellino, que infligen el doble de daño cuando se usan contra él, y no se ve afectado por el clima. Si el usuario lleva Hierba única, el movimiento se completa en un turno.",
		shortDesc: "Se sumerge turno 1, ataca turno 2.",
		gen4: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Surf y Torbellino, que tienen doble poder cuando se usan contra él, y no se ve afectado por el clima. Si lleva Hierba única, el movimiento se completa en un turno.",
		},
		gen3: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques excepto Surf y Torbellino, que tienen doble poder cuando se usan contra él, y no se ve afectado por el clima.",
		},
		prepare: "[POKEMON] se sumergió bajo el agua!",
	},
	dizzypunch: {
		name: "Puño mareo",
		desc: "Tiene un 20% de probabilidad de confundir al objetivo.",
		shortDesc: "20% de confundir al objetivo.",
		gen1: {
			desc: "Sin efecto adicional.",
			shortDesc: "Sin efecto adicional.",
		},
	},
	doodle: {
		name: "Decalcomanía",
		desc: "El usuario y su aliado cambian su habilidad a la del objetivo. No funciona si su habilidad es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo daruma, Cambio heroico o ya coincide con la del objetivo. Falla si ambos ya coinciden o si la habilidad del objetivo es alguna de esas.",
		shortDesc: "Cambia la habilidad de aliado/usuario por la del objetivo.",
	},
	doomdesire: {
		name: "Deseo oculto",
		desc: "Inflige daño dos turnos después de usar este movimiento. Al final de ese turno, el daño se calcula y se aplica al Pokémon en la posición original del objetivo. Si el usuario ya no está en combate, el daño se calcula con su Ataque Especial base, tipo y nivel, sin bonificaciones de objeto o habilidad. Falla si ya está en efecto Deseo oculto o Premonición en esa posición.",
		shortDesc: "Golpea dos turnos después de usarlo.",
		gen4: {
			desc: "Inflige daño sin tipo dos turnos después de usar este movimiento y no puede producir golpe crítico. El daño se calcula al usarse y se aplica al final del turno a la posición original del objetivo. Falla si ya está en efecto Deseo oculto o Premonición en esa posición.",
		},
		start: "  ¡[POKEMON] eligió Deseo oculto!",
		activate: "  ¡[TARGET] recibió el ataque de Deseo oculto!",
	},
	doubleedge: {
		name: "Doble filo",
		desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual al 33% del daño infligido, redondeado hacia arriba, pero no menos de 1 PS.",
		shortDesc: "Tiene 33% de retroceso.",
		gen4: {
			desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/3 del daño infligido, redondeado hacia abajo, pero no menos de 1 PS.",
			shortDesc: "Tiene 1/3 de retroceso.",
		},
		gen2: {
			desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/4 del daño infligido, redondeado hacia abajo, pero no menos de 1 PS. Si rompe sustituto, el retroceso es 1 PS.",
			shortDesc: "Tiene 1/4 de retroceso.",
		},
		gen1: {
			desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/4 del daño infligido, redondeado hacia abajo, pero no menos de 1 PS. Si rompe sustituto, no recibe retroceso.",
		},
	},
	doublehit: {
		name: "Doble golpe",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe.",
		shortDesc: "Golpea 2 veces en un turno.",
		gen4: {
			desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe. Si el objetivo lleva Banda aguante y tenía PS completos al iniciar, no caerá debilitado sin importar el número de golpes.",
		},
	},
	doubleironbash: {
		name: "Ferropuño doble",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe. Tiene un 30% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "Golpea dos veces. 30% de retroceder al objetivo.",
	},
	doublekick: {
		name: "Doble patada",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe.",
		shortDesc: "Golpea 2 veces en un turno.",
		gen4: {
			desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe. Si el objetivo lleva Banda aguante y tenía PS completos al iniciar, no caerá debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe.",
		},
		gen1: {
			desc: "Golpea dos veces. El daño se calcula una vez para el primer golpe y se aplica a ambos. Si el primer golpe rompe el sustituto del objetivo, el movimiento termina.",
		},
	},
	doubleshock: {
		name: "Double Shock",
		desc: "Falla a menos que el usuario sea de tipo Eléctrico. Si tiene éxito y el usuario no está Terastallizado, su tipo Eléctrico se vuelve incoloro mientras permanezca activo.",
		shortDesc: "Tipo Eléctrico del usuario: incoloro; debe ser Eléctrico.",
		typeChange: "  [POKEMON] gastó toda su electricidad!",
	},
	doubleslap: {
		name: "Doble bofetón",
		desc: "Golpea entre dos y cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los impactos rompe el sustituto del objetivo, éste recibirá daño por los impactos restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre impactará cinco veces.",
		shortDesc: "Impacta 2-5 veces en un turno.",
		gen4: {
			desc: "Golpea entre dos y cinco veces. Tiene probabilidad 3/8 de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los impactos rompe el sustituto del objetivo, éste recibirá daño por los impactos restantes. Si el usuario tenía los PS al máximo y llevaba una Banda aguante, no será debilitado independientemente del número de impactos. Si el usuario tiene la habilidad Encadenado, este movimiento siempre impactará cinco veces.",
		},
		gen3: {
			desc: "Golpea entre dos y cinco veces. Tiene probabilidad 3/8 de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. Si uno de los impactos rompe el sustituto del objetivo, éste recibirá daño por los impactos restantes.",
		},
		gen1: {
			desc: "Golpea entre dos y cinco veces. Tiene probabilidad 3/8 de golpear dos o tres veces y 1/8 de golpear cuatro o cinco veces. El daño se calcula una vez para el primer impacto y se usa para todos ellos. Si uno de los impactos rompe el sustituto del objetivo, el movimiento termina.",
		},
	},
	doubleteam: {
		name: "Doble equipo",
		desc: "Aumenta la evasión del usuario en 1 nivel.",
		shortDesc: "Aumenta la evasión del usuario en 1.",
	},
	dracometeor: {
		name: "Cometa draco",
		desc: "Reduce el Ataque Especial del usuario 2 niveles.",
		shortDesc: "Reduce el Ataque Especial del usuario 2 niveles.",
	},
	dragonascent: {
		name: "Ascenso draco",
		desc: "Reduce la Defensa y la Defensa Especial del usuario 1 nivel.",
		shortDesc: "Reduce la Defensa y la Defensa Especial del usuario 1 nivel.",
		megaNoItem: "¡El ferviente deseo de [TRAINER] ha llegado a [POKEMON]!",
	},
	dragonbreath: {
		name: "Dragoaliento",
		desc: "30% de paralizar al objetivo.",
		shortDesc: "30% de paralizar al objetivo.",
	},
	dragoncheer: {
		name: "Bramido dragón",
		desc: "Aumenta en 1 nivel la probabilidad de golpe crítico del aliado, o en 2 niveles si el aliado es de tipo Dragón. Falla si no hay un aliado adyacente al usuario, o si el objetivo ya tiene este efecto o el efecto de Foco energía. Se puede usar Relevo para transferir este efecto a un aliado.",
		shortDesc: "Aliado: +1 prob. crítico o +2 si es tipo Dragón.",
		start: "#focusenergy",
	},
	dragonclaw: {
		name: "Garra dragón",
		shortDesc: "Sin efecto adicional.",
	},
	dragondance: {
		name: "Danza dragón",
		desc: "Sube el Ataque y la Velocidad del usuario 1 nivel.",
		shortDesc: "Sube el Ataque y la Velocidad del usuario 1 nivel.",
	},
	dragondarts: {
		name: "Dracoflechas",
		desc: "Golpea dos veces. En combates dobles, intenta golpear al Pokémon objetivo y a su aliado una vez cada uno. Si golpear a uno se ve impedido por inmunidad, protección, semiinvulnerabilidad, habilidad o precisión, intenta golpear al otro dos veces. Si este movimiento es redirigido, golpea ese objetivo dos veces.",
		shortDesc: "Golpea dos veces. Dobles: intenta golpear a cada rival una vez.",
	},
	dragonenergy: {
		name: "Dracoenergía",
		desc: "El poder es igual a (PS actuales del usuario x 150 / PS máximos del usuario), redondeado hacia abajo, pero como mínimo 1.",
		shortDesc: "Menor poder según PS del usuario. Golpea a ambos rivales.",
	},
	dragonhammer: {
		name: "Martillo dragón",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional.",
	},
	dragonpulse: {
		name: "Pulso dragón",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional.",
	},
	dragonrage: {
		name: "Furia dragón",
		desc: "Inflige 40 PS de daño al objetivo.",
		shortDesc: "Inflige 40 PS de daño al objetivo.",
	},
	dragonrush: {
		name: "Carga dragón",
		desc: "Tiene un 20% de probabilidad de hacer retroceder al objetivo. El daño se duplica y no comprueba precisión si el objetivo ha usado Reducción.",
		shortDesc: "20% de retroceder; 2x si usó Reducción.",
		gen5: {
			desc: "Tiene un 20% de probabilidad de hacer retroceder al objetivo.",
		},
	},
	dragontail: {
		name: "Cola dragón",
		desc: "Si tanto el usuario como el objetivo no se han debilitado, el objetivo es obligado a cambiarse por un aliado al azar que no lo esté. Falla si el objetivo ha usado Arraigo anteriormente, tiene la habilidad Ventosas o golpeó un sustituto.",
		shortDesc: "Obliga al objetivo a cambiarse por un aliado al azar.",
	},
	drainingkiss: {
		name: "Beso drenaje",
		desc: "El usuario recupera 3/4 de los PS que perdió el objetivo, redondeado hacia arriba. Si lleva Raíz grande, la recuperación es 1.3x la normal, redondeado hacia abajo.",
		shortDesc: "Recupera 75% del daño infligido.",
	},
	drainpunch: {
		name: "Puño drenaje",
		desc: "El usuario recupera 1/2 de los PS que perdió el objetivo, redondeado hacia arriba. Si lleva Raíz grande, la recuperación es 1.3x la normal, redondeado hacia abajo.",
		shortDesc: "Recupera 50% del daño infligido.",
		gen4: {
			desc: "El usuario recupera 1/2 de los PS que perdió el objetivo, redondeado hacia abajo. Si lleva Raíz grande, la recuperación es 1.3x la normal, redondeado hacia abajo.",
		},
	},
	dreameater: {
		name: "Comesueños",
		desc: "El objetivo no se ve afectado a menos que esté dormido. El usuario recupera la mitad de los PS que el objetivo perdió, redondeado hacia arriba. Si lleva Raíz grande, la recuperación es 1.3x la normal, redondeado hacia abajo.",
		shortDesc: "Recupera 50% del daño infligido. Solo si el objetivo está dormido.",
		gen4: {
			desc: "El objetivo no se ve afectado a menos que esté dormido y no tenga sustituto. El usuario recupera la mitad de los PS que el objetivo perdió, redondeado hacia abajo, pero como mínimo 1 PS. Si lleva Raíz grande, la recuperación es 1.3x la normal, redondeado hacia abajo.",
		},
		gen3: {
			desc: "El objetivo no se ve afectado a menos que esté dormido y no tenga sustituto. El usuario recupera la mitad de los PS que el objetivo perdió, redondeado hacia abajo, pero como mínimo 1 PS.",
		},
		gen1: {
			desc: "El objetivo no se ve afectado a menos que esté dormido. El usuario recupera la mitad de los PS que el objetivo perdió, redondeado hacia abajo, pero como mínimo 1 PS. Si rompe el sustituto del objetivo, no recupera PS.",
		},
	},
	drillpeck: {
		name: "Pico taladro",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional.",
	},
	drillrun: {
		name: "Taladradora",
		desc: "Tiene una mayor probabilidad de golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	drumbeating: {
		name: "Batería asalto",
		desc: "Tiene un 100% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "100% de bajar la Velocidad del objetivo 1 nivel.",
	},
	dualchop: {
		name: "Golpe bis",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe.",
		shortDesc: "Golpea 2 veces en un turno.",
	},
	dualwingbeat: {
		name: "Ala bis",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe.",
		shortDesc: "Golpea 2 veces en un turno.",
	},
	dynamaxcannon: {
		name: "Cañón Dinamax",
		shortDesc: "Sin efecto adicional.",
		gen8: {
			shortDesc: "El daño se duplica si el objetivo está Dinamax.",
		},
	},
	dynamicpunch: {
		name: "Puño dinámico",
		desc: "Tiene un 100% de probabilidad de confundir al objetivo.",
		shortDesc: "100% de confundir al objetivo.",
	},
	earthpower: {
		name: "Tierra viva",
		desc: "Tiene un 10% de probabilidad de bajar la Defensa Especial del objetivo 1 nivel.",
		shortDesc: "10% de bajar Def. Esp. 1 nivel.",
	},
	earthquake: {
		name: "Terremoto",
		desc: "El daño se duplica si el objetivo está usando Excavar.",
		shortDesc: "Golpea a Pokémon adyacentes. Daño x2 en Excavar.",
		gen4: {
			desc: "El poder se duplica si el objetivo está usando Excavar.",
			shortDesc: "Golpea a Pokémon adyacentes. Daño x2 en Excavar.",
		},
		gen1: {
			desc: "Sin efecto adicional.",
			shortDesc: "Sin efecto adicional.",
		},
		gen2: {
			shortDesc: "Daño x2 en Excavar.",
		},
	},
	echoedvoice: {
		name: "Eco voz",
		desc: "Por cada turno consecutivo en que al menos un Pokémon use este movimiento, su potencia se multiplica por el número de turnos, hasta un máximo de 5.",
		shortDesc: "Potencia aumenta en turnos consecutivos.",
	},
	eerieimpulse: {
		name: "Onda anómala",
		desc: "Baja el Ataque Especial del objetivo 2 niveles.",
		shortDesc: "Baja el Ataque Especial del objetivo 2 niveles.",
	},
	eeriespell: {
		name: "Conjuro funesto",
		desc: "Si tiene éxito y el usuario no se ha debilitado, el objetivo pierde 3 PP de su último movimiento.",
		shortDesc: "Hace perder 3 PP al último movimiento del objetivo.",
		activate: "#spite",
	},
	eggbomb: {
		name: "Bomba huevo",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional.",
	},
	electricterrain: {
		name: "Campo eléctrico",
		desc: "Durante 5 turnos, el terreno se convierte en Campo eléctrico. Mientras dura, los ataques de tipo Eléctrico de Pokémon en el suelo infligen 1.3x daño y los Pokémon en el suelo no pueden quedarse dormidos; los ya dormidos no se despiertan. Los Pokémon en el suelo no pueden verse afectados por Bostezo ni quedarse dormidos por su efecto. Camuflaje se convierte en tipo Eléctrico, Adaptación pasa a ser Rayo y Daño secreto tiene un 30% de probabilidad de paralizar. Falla si el terreno actual ya es Campo eléctrico.",
		shortDesc: "5 turnos. Pokémon en el suelo: +1.3x Eléctrico, no duermen.",
		gen7: {
			desc: "Durante 5 turnos, el terreno se convierte en Campo eléctrico. Mientras dura, los ataques de tipo Eléctrico de Pokémon en el suelo infligen 1.5x daño y los Pokémon en el suelo no pueden quedarse dormidos; los ya dormidos no se despiertan. Los Pokémon en el suelo no pueden verse afectados por Bostezo ni quedarse dormidos por su efecto. Camuflaje se convierte en tipo Eléctrico, Adaptación pasa a ser Rayo y Daño secreto tiene un 30% de probabilidad de paralizar. Falla si el terreno actual ya es Campo eléctrico.",
			shortDesc: "5 turnos. Pokémon en el suelo: +1.5x Eléctrico, no duermen.",
		},
	},
	electrify: {
		name: "Electrificación",
		desc: "Hace que el movimiento del objetivo sea de tipo Eléctrico este turno. Entre los efectos que cambian el tipo de un movimiento, este efecto ocurre al final. Falla si el objetivo ya se movió este turno.",
		shortDesc: "Cambia el movimiento del objetivo a Eléctrico este turno.",

		start: "¡[POKEMON] electrificó sus movimientos!",
	},
	electroball: {
		name: "Bola voltio",
		desc: "La potencia de este movimiento depende de (velocidad actual del usuario / velocidad actual del objetivo), redondeado hacia abajo. Es 150 si el resultado es 4 o más, 120 si es 3, 80 si es 2, 60 si es 1 y 40 si es menos de 1. Si la velocidad del objetivo es 0, la potencia es 40.",
		shortDesc: "Mayor potencia cuanto más rápido es el usuario que el objetivo.",
		gen5: {
			desc: "La potencia de este movimiento depende de (velocidad actual del usuario / velocidad actual del objetivo), redondeado hacia abajo. Es 150 si el resultado es 4 o más, 120 si es 3, 80 si es 2, 60 si es 1 y 40 si es menos de 1. Si la velocidad del objetivo es 0, se trata como 1.",
		},
	},
	electrodrift: {
		name: "Electroderrape",
		desc: "El daño se multiplica por 1.3333 si este movimiento es súper efectivo contra el objetivo.",
		shortDesc: "1.3333x de daño con impactos supereficaces.",
	},
	electroshot: {
		name: "Electrorrayo",
		desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. Aumenta el Ataque especial del usuario en 1 nivel en el primer turno. Si el usuario lleva equipada una Hierba única o el clima es Mar del albor o Danza lluvia, el movimiento se completa en un solo turno. Si el usuario lleva equipado un Parasol multiuso y el clima es Mar del albor o Danza lluvia, el movimiento aún requiere un turno de carga.",
		shortDesc: "Sube Atq. Esp. en 1, golpea turno 2. Lluvia: sin carga.",

		prepare: "¡[POKEMON] absorbió electricidad!",
	},
	electroweb: {
		name: "Electrotela",
		desc: "Tiene un 100% de probabilidad de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "100% de bajar la Velocidad del objetivo 1 nivel.",
	},
	embargo: {
		name: "Embargo",
		desc: "Durante 5 turnos, el objeto que lleva el objetivo no tiene efecto. El efecto de un objeto que cambia la forma no se ve afectado, pero cualquier otro efecto de dichos objetos se anula. Durante este efecto, Lanzamiento y Don natural no pueden ser usados por el objetivo. Los objetos lanzados al objetivo con Lanzamiento seguirán activándose para él. Si el objetivo usa Relevo, el Pokémon que lo sustituya tampoco podrá usar objetos.",
		shortDesc: "Durante 5 turnos, el objeto del objetivo no tiene efecto.",
		start: "  ¡[POKEMON] no puede usar objetos!",
		end: "  ¡[POKEMON] puede usar objetos de nuevo!",
	},
	ember: {
		name: "Ascuas",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo.",
		shortDesc: "10% de quemar al objetivo.",
	},
	encore: {
		name: "Otra vez",
		desc: "Durante los siguientes 3 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP, o si el movimiento es Ayuda, Pirochoque, Pugnachoque, Copión, Cañón Dinamax, Otra vez, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Esquema, Sonámbulo, Forcejeo, Transformación o Ominochoque.",
		shortDesc: "Objetivo repite último mov. 3 turnos.",

		gen8: {
			desc: "Durante los siguientes 3 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP, si el objetivo está Dinamaxizado, o si el movimiento es Ayuda, Copión, Cañón Dinamax, Otra vez, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Esquema, Sonámbulo, Forcejeo o Transformación.",
		},
		gen7: {
			desc: "Durante los siguientes 3 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP, si el movimiento es Ayuda, Copión, Otra vez, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Esquema, Sonámbulo, Forcejeo, Transformación o cualquier Movimiento Z! Los movimientos Z aún pueden seleccionarse y ejecutarse durante este efecto.",
		},
		gen6: {
			desc: "Durante 3 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP o si el movimiento es Otra vez, Mimético, Espejo, Esquema, Forcejeo o Transformación.",
		},
		gen4: {
			desc: "Durante 4 a 8 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP o si el movimiento es Otra vez, Mimético, Espejo, Esquema, Forcejeo o Transformación.",
			shortDesc: "Objetivo repite último mov. 4-8 turnos.",
		},
		gen3: {
			desc: "Durante 3 a 6 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP o si el movimiento es Otra vez, Mimético, Espejo, Esquema, Forcejeo o Transformación.",
			shortDesc: "Objetivo repite mov. 3-6 turnos.",
		},
		gen2: {
			desc: "Durante 3 a 6 turnos, el objetivo debe repetir su último movimiento usado. Si el movimiento afectado se queda sin PP, el efecto termina. Falla si el objetivo ya está bajo este efecto, si no ha usado ningún movimiento, si el movimiento tiene 0 PP o si el movimiento es Otra vez, Metrónomo, Mimético, Espejo, Esquema, Sonámbulo, Forcejeo o Transformación.",
		},

		start: "¡[POKEMON] debe usar Otra vez!",
		end: "¡El efecto de Otra vez de [POKEMON] terminó!",
	},
	endeavor: {
		name: "Esfuerzo",
		desc: "Inflige daño al objetivo igual a (PS actual del objetivo - PS actual del usuario). El objetivo no se ve afectado si sus PS actuales son menores o iguales a los del usuario.",
		shortDesc: "Baja PS del objetivo a los del usuario.",
	},
	endure: {
		name: "Aguante",
		desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X empieza en 1 y se triplica cada vez que se usa con éxito. X se reinicia a 1 si falla, si el último movimiento del usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último este turno.",
		shortDesc: "Usuario sobrevive ataques este turno con ≥1 PS.",

		gen8: {
			desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X empieza en 1 y se triplica cada vez que se usa con éxito. X se reinicia a 1 si falla, si el último movimiento del usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último este turno.",
		},
		gen7: {
			desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X empieza en 1 y se triplica cada vez que se usa con éxito. X se reinicia a 1 si falla, si el último movimiento del usuario no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último este turno.",
		},
		gen6: {
			desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X empieza en 1 y se triplica cada vez que se usa con éxito. X se reinicia a 1 si falla, si el último movimiento del usuario no es Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último este turno.",
		},
		gen5: {
			desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X empieza en 1 y se duplica cada vez que se usa con éxito. X se reinicia a 1 si falla o si el último movimiento del usuario no es Detección, Aguante, Protección, Anticipo o Vasta guardia. Falla si el usuario actúa el último este turno.",
		},
		gen4: {
			desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X empieza en 1 y se duplica cada vez que se usa con éxito, hasta un máximo de 8. X se reinicia a 1 si falla o si el último movimiento del usuario no es Detección, Aguante o Protección. Falla si el usuario actúa el último este turno.",
		},
		gen3: {
			desc: "El usuario sobrevive a los ataques de otros Pokémon este turno con al menos 1 PS. Este movimiento tiene una probabilidad de X/65536 de tener éxito, donde X empieza en 65535 y se reduce a la mitad (redondeado hacia abajo) cada vez que se usa con éxito. Tras el cuarto uso exitoso en fila, X baja a 118 y sigue con valores aparentemente aleatorios entre 0 y 65535 en usos posteriores exitosos. X se reinicia a 65535 si falla o si el último movimiento del usuario no es Detección, Aguante o Protección. Falla si el usuario actúa el último este turno.",
		},
		gen2: {
			desc: "El usuario sobrevive a los ataques del oponente este turno con al menos 1 PS. Este movimiento tiene una probabilidad de X/255 de tener éxito, donde X empieza en 255 y se reduce a la mitad (redondeado hacia abajo) cada vez que se usa con éxito. X se reinicia a 255 si falla o si el último movimiento del usuario no es Detección, Aguante o Protección. Falla si el usuario tiene un Sustituto o actúa el último este turno.",
		},

		start: "[POKEMON] preparó el Aguante.",
		activate: "[POKEMON] resistió el golpe.",
	},
	energyball: {
		name: "Energibola",
		desc: "Tiene un 10% de probabilidad de bajar 1 nivel de la Defensa especial del objetivo.",
		shortDesc: "10% baja 1 nivel Def. Esp.",
	},
	entrainment: {
		name: "Danza amiga",
		desc: "Hace que la habilidad del objetivo se convierta en la misma que la del usuario. Falla si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema Alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Pereza, Modo daruma o Cambio heroico, o la misma habilidad que la del usuario, o si la habilidad del usuario es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Evocarrecuerdos, Don floral, Predicción, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Títere tóxico, Reacción química, Paleosíntesis, Carga cuark, Receptor, Sistema Alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Teracambio, Teraformación 0, Calco, Superguarda o Cambio heroico.",
		shortDesc: "Hab. objetivo iguala a la del usuario.",
		gen8: {
			desc: "Hace que la habilidad del objetivo se convierta en la misma que la del usuario. Falla si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema Alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Pereza, Modo daruma o Cambio heroico.",
		},
	},
	eruption: {
		name: "Estallido",
		desc: "La potencia es igual a (PS actuales del usuario x 150 / PS máximos), redondeado hacia abajo, pero nunca inferior a 1.",
		shortDesc: "Menos potencia si los PS del usuario bajan. Golpea rivales.",
	},
	esperwing: {
		name: "Ala aural",
		desc: "Tiene un 100% de probabilidad de subir la Velocidad del usuario en 1 nivel y una mayor probabilidad de golpe crítico.",
		shortDesc: "100% de subir Velocidad. Crítico alto.",
	},
	eternabeam: {
		name: "Rayo infinito",
		desc: "Si tiene éxito, el usuario debe recargar en el siguiente turno y no puede elegir movimiento.",
		shortDesc: "Usuario no se mueve el próximo turno.",
	},
	expandingforce: {
		name: "Vasta fuerza",
		desc: "Si el terreno actual es Campo psíquico y el usuario está en el suelo, este movimiento golpea a todos los Pokémon rivales y su potencia se multiplica por 1,5.",
		shortDesc: "En Campo psíquico: 1,5x potencia, golpea rivales.",
	},
	explosion: {
		name: "Explosión",
		desc: "El usuario se debilita tras usar este movimiento, incluso si falla por no tener objetivo. Este movimiento no se ejecuta si algún Pokémon activo tiene la habilidad Humedad.",
		shortDesc: "Golpea adyacentes. Usuario se debilita.",
		gen4: {
			desc: "El usuario se debilita tras usar este movimiento, a menos que no haya objetivo. La Defensa del objetivo se reduce a la mitad al calcular el daño. Este movimiento no se ejecuta si algún Pokémon activo tiene la habilidad Humedad.",
			shortDesc: "Def. rival a la mitad. Usuario se debilita.",
		},
		gen3: {
			desc: "El usuario se debilita tras usar este movimiento. La Defensa del objetivo se reduce a la mitad al calcular el daño. Este movimiento no se ejecuta si algún Pokémon activo tiene la habilidad Humedad.",
		},
		gen2: {
			desc: "El usuario se debilita tras usar este movimiento. La Defensa del objetivo se reduce a la mitad al calcular el daño.",
		},
		gen1: {
			desc: "El usuario se debilita tras usar este movimiento, a menos que haya roto el sustituto del objetivo. La Defensa del objetivo se reduce a la mitad al calcular el daño.",
		},
	},
	extrasensory: {
		name: "Paranormal",
		desc: "Tiene un 10% de probabilidad de amedrentar al objetivo.",
		shortDesc: "10% de prob. de amedrentar al objetivo.",
		gen3: {
			desc: "Tiene un 10% de probabilidad de amedrentar al objetivo. El daño se duplica si el objetivo usó Reducción mientras estaba activo.",
		},
	},
	extremeevoboost: {
		name: "Novena potencia",
		desc: "Aumenta en 2 niveles el Ataque, la Defensa, el Ataque Especial, la Defensa Especial y la Velocidad del usuario.",
		shortDesc: "Sube 2 niveles Atq., Def., Atq. Esp., Def. Esp. y Vel.",
	},
	extremespeed: {
		name: "Velocidad extrema",
		desc: "Sin efecto adicional.",
		shortDesc: "Casi siempre ataca primero.",
		gen4: {
			shortDesc: "Normalmente ataca primero.",
		},
	},
	facade: {
		name: "Imagen",
		desc: "La potencia se duplica si el usuario está quemado, paralizado o envenenado. Se ignora la reducción de daño físico por quemadura.",
		shortDesc: "Potencia x2 si está quemado/paralizado/envenenado.",
		gen5: {
			desc: "La potencia se duplica si el usuario está quemado, paralizado o envenenado.",
		},
	},
	fairylock: {
		name: "Cerrojo feérico",
		desc: "Impide que todos los Pokémon activos cambien el próximo turno. Aún pueden cambiar si llevan Muda concha o usan Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. Falla si el efecto ya está activo.",
		shortDesc: "Evita que todos los Pokémon cambien el próximo turno.",
		gen7: {
			desc: "Impide que todos los Pokémon activos cambien el próximo turno. Aún pueden cambiar si llevan Muda concha o usan Relevo, Última palabra, Ida y vuelta o Voltiocambio. Falla si el efecto ya está activo.",
		},

		activate: "¡Nadie podrá huir durante el próximo turno!",
	},
	fairywind: {
		name: "Viento feérico",
		shortDesc: "Sin efecto adicional.",
	},
	fakeout: {
		name: "Sorpresa",
		desc: "Tiene un 100% de probabilidad de amedrentar al objetivo. Falla salvo en el primer turno tras entrar en combate.",
		shortDesc: "Golpea primero. Solo en primer turno. 100% de amedrentamiento.",
	},
	faketears: {
		name: "Llanto falso",
		desc: "Reduce la Defensa Especial del objetivo en 2 niveles.",
		shortDesc: "Baja 2 niveles la Def. Esp. rival.",
	},
	falsesurrender: {
		name: "Irreverencia",
		shortDesc: "No comprueba precisión.",
	},
	falseswipe: {
		name: "Falso tortazo",
		desc: "Deja al objetivo con al menos 1 PS.",
		shortDesc: "Siempre deja al objetivo con ≥1 PS.",
	},
	featherdance: {
		name: "Danza pluma",
		desc: "Reduce el Ataque del objetivo en 2 niveles.",
		shortDesc: "Reduce 2 niveles el Atq. del objetivo.",
	},
	feint: {
		name: "Amago",
		desc: "Si este movimiento tiene éxito, atraviesa el Búnker, Detección, Escudo real, Protección o Barrera espinosa del objetivo durante este turno, permitiendo que otros Pokémon lo ataquen normalmente. Si el lado del objetivo está protegido por Truco defensa, Escudo tatami, Anticipo o Vasta guardia, esa protección también queda anulada durante este turno y otros Pokémon pueden atacar el lado del objetivo con normalidad.",
		shortDesc: "Anula Detección, Protección y Anticipo/Vasta guardia.",
		gen6: {
			desc: "Si este movimiento tiene éxito, atraviesa Detección, Escudo real, Protección o Barrera espinosa del objetivo durante este turno, permitiendo que otros Pokémon lo ataquen normalmente. Si el lado del objetivo está protegido por Truco defensa, Escudo tatami, Anticipo o Vasta guardia, esa protección también queda anulada durante este turno.",
		},
		gen5: {
			desc: "Si este movimiento tiene éxito, atraviesa Detección o Protección del objetivo durante este turno, permitiendo que otros Pokémon lo ataquen normalmente. Si el objetivo es un rival y su lado está protegido por Anticipo o Vasta guardia, esa protección también queda anulada durante este turno y otros Pokémon pueden atacar el lado del rival con normalidad.",
		},
		gen4: {
			desc: "Falla a menos que el objetivo esté usando Detección o Protección. Si este movimiento tiene éxito, atraviesa Detección o Protección del objetivo durante este turno, permitiendo que otros Pokémon lo ataquen normalmente.",
			shortDesc: "Rompe protección. Falla si el objetivo no se está protegiendo.",
		},

		activate: " ¡[TARGET] cayó en la finta!",
	},
	feintattack: {
		name: "Finta",
		shortDesc: "Este movimiento no comprueba precisión.",
	},
	fellstinger: {
		name: "Aguijón letal",
		desc: "Aumenta el Ataque del usuario en 3 niveles si este movimiento noquea al objetivo.",
		shortDesc: "Si noquea, sube 3 niveles Atq. usuario.",
		gen6: {
			desc: "Aumenta el Ataque del usuario en 2 niveles si este movimiento noquea al objetivo.",
			shortDesc: "Si noquea, sube 2 niveles Atq. usuario.",
		},
	},
	ficklebeam: {
		name: "Láser veleidoso",
		shortDesc: "30% prob. duplicar potencia.",
		activate: "¡[POKEMON] lo da todo con este ataque!",
	},
	fierydance: {
		name: "Danza llama",
		desc: "Tiene un 50% de probabilidad de subir 1 nivel el Ataque Especial del usuario.",
		shortDesc: "50% de prob. de subir 1 nivel el Atq. Esp.",
	},
	fierywrath: {
		name: "Furia candente",
		desc: "Tiene un 20% de probabilidad de amedrentar al objetivo.",
		shortDesc: "20% de prob. de amedrentar al objetivo.",
	},
	filletaway: {
		name: "Deslome",
		desc: "Aumenta en 2 niveles el Ataque, el Ataque Especial y la Velocidad del usuario a cambio de perder 1/2 PS máximos, redondeado hacia abajo. Falla si el usuario se debilita o si los niveles no cambiarían.",
		shortDesc: "+2 niveles Atq., Atq. Esp. y Vel. a cambio de 1/2 PS máx.",
	},
	finalgambit: {
		name: "Sacrificio",
		desc: "Inflige al objetivo un daño igual a los PS actuales del usuario. Si este movimiento tiene éxito, el usuario se debilita.",
		shortDesc: "Daño igual a los PS del usuario. Usuario debilitado.",
	},
	fireblast: {
		name: "Llamarada",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo.",
		shortDesc: "10% de quemar al objetivo.",
		gen1: {
			desc: "Tiene un 30% de probabilidad de quemar al objetivo.",
			shortDesc: "30% de quemar al objetivo.",
		},
	},
	firefang: {
		name: "Colmillo ígneo",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo y un 10% de probabilidad de amedrentar.",
		shortDesc: "10% de quemar. 10% de amedrentar.",
		gen4: {
			desc: "Tiene un 10% de probabilidad de quemar al objetivo y un 10% de probabilidad de amedrentar. Este movimiento puede golpear a Pokémon con la habilidad Superguarda, independientemente de su tipo.",
		},
	},
	firelash: {
		name: "Látigo ígneo",
		desc: "Hace siempre bajar un nivel la Defensa del objetivo.",
		shortDesc: "100% baja 1 nivel Def. rival.",
	},
	firepledge: {
		name: "Voto fuego",
		desc: "Si uno de los aliados del usuario eligió usar voto planta o voto agua este turno y aún no ha actuado, actuará inmediatamente después del usuario y el movimiento del usuario no hará nada. Si se combina con voto planta, el aliado usará voto fuego con potencia 150 y aparecerá un mar de llamas en el lado del objetivo durante 4 turnos, lo que inflige daño a los de tipo no fuego igual a 1/8 de sus PS máximos, redondeado hacia abajo, al final de cada turno de efecto, incluido el último turno. Si se combina con voto agua, el aliado usará voto agua con potencia 150 y aparecerá un arcoíris en el lado del usuario durante 4 turnos, lo que duplica las probabilidades de efectos secundarios y se acumula con la habilidad Dicha, excepto los efectos que causan amedrentar, cuya probabilidad solo puede duplicarse una vez. Al usarse como movimiento combinado, recibe STAB sin importar el tipo del usuario. Este movimiento no consume la Gema fuego del usuario.",
		shortDesc: "Usar con voto planta o voto agua para efecto extra.",

		activate: "#waterpledge",
		start: "¡Un mar de llamas envolvió a [TEAM]!",
		end: "¡El mar de llamas alrededor de [TEAM] desapareció!",
		damage: "¡[POKEMON] resultó dañado por el mar de llamas!",
	},
	firepunch: {
		name: "Puño fuego",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo.",
		shortDesc: "10% prob. quemar al objetivo.",
	},
	firespin: {
		name: "Giro fuego",
		desc: "Evita que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Inflige 1/8 de los PS máximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del combate, o si el objetivo usa Giro mortífero, Giro rápido o Sustituto con éxito. No se acumula ni reinicia al usar otro movimiento de retención.",
		shortDesc: "Atrapa y daña al objetivo durante 4-5 turnos.",
		gen8: {
			desc: "Evita que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Inflige 1/8 de los PS máximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del combate, o si el objetivo usa Giro rápido o Sustituto con éxito. No se acumula ni reinicia al usar otro movimiento de retención.",
		},
		gen7: {
			desc: "Evita que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Inflige 1/8 de los PS máximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del combate, o si el objetivo usa Giro rápido o Sustituto con éxito. No se acumula ni reinicia al usar otro movimiento de retención.",
		},
		gen5: {
			desc: "Evita que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Inflige 1/16 de los PS máximos del objetivo (1/8 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del combate, o si el objetivo usa Giro rápido o Sustituto con éxito. No se acumula ni reinicia al usar otro movimiento de retención.",
		},
		gen4: {
			desc: "Evita que el objetivo cambie durante 2 a 5 turnos (5 si el usuario lleva Garra garfio). Inflige 1/16 de los PS máximos del objetivo, redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo o Ida y vuelta. El efecto termina si el usuario o el objetivo sale del combate, o si el objetivo usa Giro rápido o Sustituto con éxito. No se acumula ni reinicia al usar otro movimiento de retención.",
			shortDesc: "Atrapa y daña al objetivo durante 2-5 turnos.",
		},
		gen3: {
			desc: "Evita que el objetivo cambie durante 2 a 5 turnos. Inflige 1/16 de los PS máximos del objetivo, redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si usa Relevo. El efecto termina si el usuario o el objetivo sale del combate, o si el objetivo usa Giro rápido o Sustituto con éxito. No se acumula ni reinicia al usar otro movimiento de retención.",
		},
		gen1: {
			desc: "El usuario ataca durante 2 a 5 turnos (3/8 de prob. de 2-3 turnos; 1/8 de prob. de 4-5 turnos). El daño del primer turno se mantiene en los siguientes. Durante el efecto, ni el usuario ni el objetivo pueden atacar, aunque ambos pueden cambiarse. Si el usuario cambia, el objetivo queda inmóvil ese turno. Si el objetivo cambia, el usuario repite este movimiento automáticamente y recupera 63 PP si estaba en 0. El efecto termina si cualquiera cambia o si el usuario queda imposibilitado de moverse. Puede inmovilizar incluso a objetivos inmunes, pero sin infligir daño.",
			shortDesc: "Impide que el objetivo actúe durante 2-5 turnos.",
		},

		start: "  [POKEMON] ¡Quedó atrapado en el vórtice ígneo!",
		move: "#wrap", // gen 1 only
	},
	firstimpression: {
		name: "Escaramuza",
		desc: "Falla a menos que sea el primer turno del usuario en el campo.",
		shortDesc: "Casi siempre ataca primero. Solo primer turno.",
	},
	fishiousrend: {
		name: "Branquibocado",
		desc: "La potencia se duplica si el usuario ataca antes que el objetivo.",
		shortDesc: "Potencia x2 si usuario ataca primero.",
	},
	fissure: {
		name: "Fisura",
		desc: "Inflige daño al objetivo igual a sus PS máximos. Ignora modificadores de precisión y evasión. La precisión de este ataque es [(nivel del usuario - nivel del objetivo) + 30] % y falla si el nivel del objetivo es superior. Los Pokémon con la habilidad Robustez son inmunes.",
		shortDesc: "KO directo; falla si el objetivo es de nivel superior.",
		gen2: {
			desc: "Inflige 65535 de daño al objetivo. La precisión sobre 256 es el menor valor entre (2 x (nivel del usuario - nivel del objetivo) + 76) y 255, antes de aplicar modificadores de precisión y evasión. Falla si el nivel del objetivo es superior. Puede golpear a un objetivo usando Excavar.",
		},
		gen1: {
			desc: "Inflige 65535 de daño al objetivo. Falla si la Velocidad del objetivo es mayor que la del usuario.",
			shortDesc: "Inflige 65535; falla si el objetivo es más rápido.",
		},
	},
	flail: {
		name: "Azote",
		desc: "La potencia de este movimiento es 20 si X está entre 33 y 48, 40 si X está entre 17 y 32, 80 si X está entre 10 y 16, 100 si X está entre 5 y 9, 150 si X está entre 2 y 4 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 48 / PS máximos del usuario), redondeado hacia abajo.",
		shortDesc: "Más potencia cuanto menos PS le queden al usuario.",
		gen4: {
			desc: "La potencia de este movimiento es 20 si X está entre 43 y 48, 40 si X está entre 22 y 42, 80 si X está entre 13 y 21, 100 si X está entre 6 y 12, 150 si X está entre 2 y 5 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 64 / PS máximos del usuario), redondeado hacia abajo.",
		},
		gen3: {
			desc: "La potencia de este movimiento es 20 si X está entre 33 y 48, 40 si X está entre 17 y 32, 80 si X está entre 10 y 16, 100 si X está entre 5 y 9, 150 si X está entre 2 y 4 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 48 / PS máximos del usuario), redondeado hacia abajo.",
		},
		gen2: {
			desc: "La potencia de este movimiento es 20 si X está entre 33 y 48, 40 si X está entre 17 y 32, 80 si X está entre 10 y 16, 100 si X está entre 5 y 9, 150 si X está entre 2 y 4 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 48 / PS máximos del usuario), redondeado hacia abajo. Este movimiento no aplica variación de daño y no puede asestar un golpe crítico.",
		},
	},
	flameburst: {
		name: "Pirotecnia",
		desc: "Si este movimiento impacta, el aliado del objetivo pierde 1/16 de sus PS máximos, redondeado hacia abajo, salvo que tenga la habilidad Muro mágico.",
		shortDesc: "Daña también a Pokémon adyacentes.",
		gen6: {
			desc: "Si este movimiento impacta, cada aliado adyacente al objetivo pierde 1/16 de sus PS máximos, redondeado hacia abajo, salvo que tenga la habilidad Muro mágico.",
		},
		damage: "¡La llama explosiva golpeó a [POKEMON]!",
	},
	flamecharge: {
		name: "Nitrocarga",
		desc: "Tiene un 100% de probabilidad de subir 1 nivel la Velocidad del usuario.",
		shortDesc: "100% de prob. de subir 1 nivel la Vel. del usuario.",
	},
	flamewheel: {
		name: "Rueda fuego",
		desc: "Rueda fuego causa daño y tiene una probabilidad del 10% de quemar al objetivo. Además, si el usuario está congelado, se descongelará al ejecutar este movimiento.",
		shortDesc: "10% de prob. de quemar al objetivo. Descongela al usuario.",
	},
	flamethrower: {
		name: "Lanzallamas",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo.",
		shortDesc: "10% de prob. de quemar al objetivo.",
	},
	flareblitz: {
		name: "Envite ígneo",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo. Si el objetivo pierde PS, el usuario recibe daño de retroceso igual al 33% de los PS perdidos por el objetivo, redondeado por exceso, pero no menos de 1 PS.",
		shortDesc: "Retroceso 33%. 10% prob. quemar. Descongela.",
		gen4: {
			desc: "Tiene un 10% de probabilidad de quemar al objetivo. Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/3 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS.",
			shortDesc: "Retroceso 1/3. 10% prob. quemar. Descongela.",
		},
	},
	flash: {
		name: "Destello",
		desc: "Reduce la Precisión del objetivo en 1 nivel.",
		shortDesc: "Reduce Precisión del objetivo 1 nivel.",
	},
	flashcannon: {
		name: "Foco resplandor",
		desc: "Tiene un 10% de probabilidad de bajar la Defensa Especial del objetivo en 1 nivel.",
		shortDesc: "10% prob. bajar Def. Esp. del objetivo 1 nivel.",
	},
	flatter: {
		name: "Camelo",
		desc: "Confunde al objetivo y aumenta en 1 nivel su Ataque Especial.",
		shortDesc: "Sube 1 nivel Atq. Esp. del objetivo y lo confunde.",
	},
	fleurcannon: {
		name: "Cañón floral",
		desc: "Causa daño, pero reduce en 2 niveles el Ataque Especial del usuario.",
		shortDesc: "Baja 2 niveles Atq. Esp. del usuario.",
	},
	fling: {
		name: "Lanzamiento",
		desc: "El poder de este movimiento depende del objeto que lleve el usuario. El objeto se pierde y se activa si procede. Si no hay objetivo o este evita el movimiento con Protección, el objeto se pierde igualmente. El usuario puede recuperar el objeto lanzado con Reciclaje o con la habilidad Cosecha. Falla si el usuario no lleva objeto, si el objeto no se puede lanzar, si el usuario está bajo los efectos de Embargo o Zona Mágica, o si tiene la habilidad Zoquete.",
		shortDesc: "Lanza el objeto del usuario al objetivo. El poder varía.",
		gen4: {
			desc: "El poder de este movimiento depende del objeto que lleve el usuario. El objeto se pierde y activa su efecto si procede. Si el objetivo evita este movimiento con Protección, el objeto se pierde igualmente. El usuario puede recuperarlo con Reciclaje. Falla si el usuario no lleva objeto, si el objeto no se puede lanzar o si el usuario está bajo los efectos de Embargo.",
		},

		removeItem: "¡[POKEMON] lanzó su [ITEM]!",
	},
	flipturn: {
		name: "Viraje",
		desc: "Si este movimiento tiene éxito y el usuario no ha quedado debilitado, éste se cambia aunque esté atrapado y es reemplazado inmediatamente por un miembro seleccionado del equipo. El usuario no se cambia si no hay otros miembros del equipo sin debilitar, o si el objetivo cambió usando un Botón escape o por efecto de las habilidades Retirada o Huida.",
		shortDesc: "Usuario cambia tras dañar al objetivo.",
		switchOut: "#uturn",
	},
	floatyfall: {
		name: "Pikapicado",
		desc: "Tiene una probabilidad del 30 % de amedrentar al objetivo.",
		shortDesc: "30 % de prob. de amedrentar al objetivo.",
	},
	floralhealing: {
		name: "Cura floral",
		desc: "El objetivo restaura la mitad de sus PS máximos (redondeado hacia arriba). Si el terreno es Campo de hierba, en su lugar restaura dos tercios de sus PS máximos (redondeado hacia abajo).",
		shortDesc: "Cura al objetivo 50 % de sus PS máx.",
	},
	flowershield: {
		name: "Defensa floral",
		desc: "Aumenta la defensa de todos los Pokémon activos de tipo planta en 1 nivel. Falla si no hay Pokémon de tipo planta activos.",
		shortDesc: "Sube 1 nivel la defensa de todos los Pokémon tipo planta activos.",
	},
	flowertrick: {
		name: "Truco floral",
		desc: "Este movimiento siempre resulta en un golpe crítico, a menos que el objetivo esté bajo el efecto de Conjuro o tenga las habilidades Armadura batalla o Caparazón. Este movimiento no comprueba la precisión.",
		shortDesc: "Crítico garantizado; no comprueba precisión.",
	},
	fly: {
		name: "Vuelo",
		desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Vendaval, Gancho alto, Antiaéreo, Mil flechas, Trueno y Ciclón, y la potencia de Tornado y Ciclón se duplica cuando los usa contra él. Si el usuario tiene equipada la Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Se eleva un turno; ataca al siguiente.",
		gen5: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Vendaval, Gancho alto, Antiaéreo, Trueno y Ciclón, y la potencia de Tornado y Ciclón se duplica cuando los usa contra él. Si el usuario tiene equipada la Hierba única, el movimiento se completa en un solo turno.",
		},
		gen4: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Gancho alto, Trueno y Ciclón, y la potencia de Tornado y Ciclón se duplica cuando los usa contra él. Si el usuario tiene equipada la Hierba única, el movimiento se completa en un solo turno.",
		},
		gen3: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Gancho alto, Trueno y Ciclón, y la potencia de Tornado y Ciclón se duplica cuando los usa contra él.",
		},
		gen2: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Tornado, Trueno, Ciclón y Remolino, y la potencia de Tornado y Ciclón se duplica cuando los usa contra él.",
		},
		gen1: {
			desc: "Este ataque se prepara en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques salvo Venganza, Meteoros y Transformación. Si el usuario está completamente paralizado en el segundo turno, sigue evitando ataques hasta que cambie de Pokémon o ejecute exitosamente la segunda fase de este movimiento o Excavar.",
		},
		prepare: "¡[POKEMON] vuela muy alto!",
	},
	flyingpress: {
		name: "Plancha voladora",
		desc: "Este movimiento combina al tipo Volador en su efectividad contra el objetivo. El daño se duplica y no se realiza comprobación de precisión si el objetivo ha usado Reducción mientras estaba activo.",
		shortDesc: "Combina la efectividad del tipo Volador.",
	},
	focusblast: {
		name: "Onda certera",
		desc: "Tiene un 10 % de probabilidad de bajar la Defensa Especial del objetivo en 1 nivel.",
		shortDesc: "10 % de bajar 1 nivel la Def. Esp. del objetivo.",
	},
	focusenergy: {
		name: "Foco energía",
		desc: "Aumenta en 2 niveles la probabilidad de golpe crítico del usuario. Falla si ya tiene este efecto. Se puede usar Relevo para transferirlo a un aliado.",
		shortDesc: "Aumenta el índice de golpe crítico del usuario en 2.",
		gen2: {
			desc: "Aumenta en 1 nivel la probabilidad de golpe crítico del usuario. Falla si ya tiene este efecto. Se puede usar Relevo para transferirlo a un aliado.",
			shortDesc: "Aumenta el índice de golpe crítico del usuario en 1.",
		},
		gen1: {
			desc: "Mientras el usuario permanece activo, su probabilidad de golpe crítico se reduce a la cuarta parte. Falla si ya tiene este efecto. Si algún Pokémon usa Niebla, este efecto termina.",
			shortDesc: "Reduce a la cuarta parte la probabilidad de golpe crítico del usuario.",
		},

		start: " ¡[POKEMON] está cargando energía!",
		startFromItem: " ¡[POKEMON] usó el [ITEM] para cargar energía!",
		startFromZEffect: " ¡[POKEMON] aumentó su índice de golpe crítico con su Poder Z!",
	},
	focuspunch: {
		name: "Puño certero",
		desc: "El usuario pierde la concentración y no hace nada si recibe un movimiento que causa daño directo este turno antes de ejecutar el movimiento.",
		shortDesc: "Falla si recibe daño antes de golpear.",
		gen4: {
			desc: "El usuario pierde la concentración y no hace nada si recibe un movimiento que causa daño directo este turno antes de ejecutar el movimiento, pero aún así pierde PP.",
		},

		start: "¡[POKEMON] está concentrando su energía!",
		cant: "¡[POKEMON] perdió la concentración y no pudo moverse!",
	},
	followme: {
		name: "Señuelo",
		desc: "Hasta el final del turno, todos los ataques de un solo objetivo del bando opuesto que puedan alcanzarlo se redirigen al usuario antes de que puedan ser reflejados por Capa mágica o por la habilidad Espejo mágico, o atraídos por las habilidades Pararrayos o Colector. Falla si no es un Combate doble o Battle Royale. Este efecto se ignora mientras el usuario esté bajo el efecto de Caída libre.",
		shortDesc: "Los ataques rivales apuntan al usuario ese turno.",
		gen6: {
			desc: "Hasta el final del turno, todos los ataques de un solo objetivo del bando opuesto que puedan alcanzarlo se redirigen al usuario antes de que puedan ser reflejados por Capa mágica o por la habilidad Espejo mágico, o atraídos por las habilidades Pararrayos o Colector. Falla si no es un Combate doble o triple. Este efecto se ignora mientras el usuario esté bajo el efecto de Caída libre.",
		},
		gen4: {
			desc: "Hasta el final del turno, todos los ataques de un solo objetivo del bando opuesto se redirigen al usuario antes de que puedan ser reflejados por Capa mágica o atraídos por Pararrayos o Colector. Este efecto permanece activo aunque el usuario abandone el terreno. Falla si no es un Combate doble.",
		},
		gen3: {
			desc: "Hasta el final del turno, todos los ataques de un solo objetivo del bando opuesto se redirigen al usuario antes de que puedan ser reflejados por Capa mágica o atraídos por Pararrayos. Este efecto permanece activo aunque el usuario abandone el terreno. Falla si no es un Combate doble.",
		},

		start: "¡[POKEMON] se convirtió en el centro de atención!",
		startFromZEffect: "¡[POKEMON] se convirtió en el centro de atención!",
	},
	forcepalm: {
		name: "Palmeo",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo.",
		shortDesc: "30% prob. paraliza al objetivo.",
	},
	foresight: {
		name: "Profecía",
		desc: "Siempre que el objetivo permanezca activo, su nivel de evasión se ignora durante las comprobaciones de Precisión si es mayor que 0, y los ataques de tipo Normal y Lucha pueden golpearlo si es de tipo Fantasma. Falla si el objetivo ya está afectado o está bajo el efecto de Gran ojo o Rastreo.",
		shortDesc: "Normal y Lucha golpean Fantasma. Evasión ignorada.",
		gen4: {
			desc: "Siempre que el objetivo permanezca activo, su nivel de evasión se ignora durante las comprobaciones de Precisión si es mayor que 0, y los ataques de tipo Normal y Lucha pueden golpearlo si es de tipo Fantasma.",
		},
		gen3: {
			desc: "Siempre que el objetivo permanezca activo, su nivel de evasión se ignora durante las comprobaciones de Precisión, y los ataques de tipo Normal y Lucha pueden golpearlo si es de tipo Fantasma.",
		},
		gen2: {
			desc: "Siempre que el objetivo permanezca activo, si su nivel de evasión supera el nivel de Precisión del atacante, ambos se ignoran durante las comprobaciones de Precisión, y los ataques de tipo Normal y Lucha pueden golpearlo si es de tipo Fantasma. Si el objetivo abandona el campo mediante Relevo, el sustituto permanecerá bajo este efecto. Falla si el objetivo ya está afectado.",
		},

		start: "¡[POKEMON] fue identificado!",
	},
	forestscurse: {
		name: "Condena silvana",
		desc: "Hace que el tipo Planta se añada al objetivo, haciéndolo tener dos o tres tipos. Falla si el objetivo ya es de tipo Planta. Si Halloween añade un tipo al objetivo, este reemplaza al tipo añadido por este movimiento y viceversa.",
		shortDesc: "Añade tipo Planta al objetivo.",
	},
	foulplay: {
		name: "Juego sucio",
		desc: "El daño se calcula usando la estadística Ataque del objetivo, incluidos los cambios de nivel. La habilidad, el Objeto y la quemadura del usuario se utilizan con normalidad.",
		shortDesc: "Usa Ataque del objetivo para calcular daño.",
	},
	freezedry: {
		name: "Liofilización",
		desc: "Tiene un 10% de probabilidad de congelar al objetivo. La efectividad contra el tipo Agua es siempre súper efectiva, sin importar su tipo.",
		shortDesc: "10% de congelar. Supereficaz contra Agua.",
	},
	freezeshock: {
		name: "Rayo gélido",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo. Este ataque se prepara en el primer turno y se ejecuta en el segundo. Si el usuario tiene equipada la Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Un turno de carga; ataca al siguiente. 30% prob. paralizar.",
		prepare: "¡[POKEMON] quedó envuelto en un brillo helado!",
	},
	freezingglare: {
		name: "Mirada heladora",
		desc: "Tiene una probabilidad del 10% de congelar al objetivo.",
		shortDesc: "10% de prob. de congelar al objetivo.",
	},
	freezyfrost: {
		name: "Glaceoprisma",
		desc: "Restablece las etapas de estadísticas de todos los Pokémon en combate a 0.",
		shortDesc: "Restablece estadísticas a 0.",
	},
	frenzyplant: {
		name: "Planta feroz",
		desc: "Si este movimiento tiene éxito, el usuario descansará el siguiente turno y no podrá seleccionar ningún movimiento.",
		shortDesc: "Recarga el siguiente turno.",
	},
	frostbreath: {
		name: "Vaho gélido",
		desc: "Este movimiento siempre asesta un golpe crítico, a menos que el objetivo esté bajo los efectos de Conjuro o tenga la habilidad Armadura Batalla o Caparazón.",
		shortDesc: "Golpe crítico garantizado.",
	},
	frustration: {
		name: "Frustración",
		desc: "La potencia es igual al mayor de ((255 - Amistad del usuario) x 2/5), redondeado hacia abajo, o 1.",
		shortDesc: "Potencia máx. 102 con Amistad mínima.",
	},
	furyattack: {
		name: "Ataque furia",
		desc: "Golpea de 2 a 5 veces. Tiene un 35 % de probabilidad de golpear 2 o 3 veces y un 15 % de probabilidad de golpear 4 o 5 veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpea 5 veces. Si el usuario lleva equipado Dado trucado, golpeará de 4 a 5 veces.",
		shortDesc: "Golpea de 2 a 5 veces.",
		gen8: {
			desc: "Golpea de 2 a 5 veces. Tiene un 35 % de probabilidad de golpear 2 o 3 veces y un 15 % de probabilidad de golpear 4 o 5 veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpea 5 veces.",
		},
		gen4: {
			desc: "Golpea de 2 a 5 veces. Tiene una probabilidad de 3/8 de golpear 2 o 3 veces y de 1/8 de golpear 4 o 5 veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpea 5 veces. Si el objetivo tiene la Banda aguante y tenía PS completos al inicio, no se desmayará sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de 2 a 5 veces. Tiene una probabilidad de 3/8 de golpear 2 o 3 veces y de 1/8 de golpear 4 o 5 veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes.",
		},
		gen1: {
			desc: "Golpea de 2 a 5 veces. Tiene una probabilidad de 3/8 de golpear 2 o 3 veces y de 1/8 de golpear 4 o 5 veces. El daño se calcula una vez para el primer golpe y se aplica en cada uno. Si uno rompe el sustituto, el movimiento termina.",
		},
	},
	furycutter: {
		name: "Corte furia",
		desc: "La potencia se duplica con cada golpe exitoso, hasta un máximo de 160. La potencia se restablece si este movimiento falla o si se usa otro movimiento.",
		shortDesc: "Potencia duplica con cada golpe, máx. 160.",
	},
	furyswipes: {
		name: "Golpes furia",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el usuario lleva el objeto Dado trucado, este movimiento golpeará 4-5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen8: {
			desc: "Golpea de dos a cinco veces. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de probabilidad de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces.",
		},
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene una probabilidad de 3/8 de golpear dos o tres veces y de 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el objetivo lleva la Banda aguante y tenía PS completos al iniciar este movimiento, no será debilitado sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene una probabilidad de 3/8 de golpear dos o tres veces y de 1/8 de golpear cuatro o cinco veces. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes.",
		},
		gen1: {
			desc: "Golpea de dos a cinco veces. Tiene una probabilidad de 3/8 de golpear dos o tres veces y de 1/8 de golpear cuatro o cinco veces. El daño se calcula una vez para el primer golpe y se usa para todos los golpes. Si uno de los golpes rompe el sustituto del objetivo, el movimiento termina.",
		},
	},
	fusionbolt: {
		name: "Rayo fusión",
		desc: "El poder se duplica si el último movimiento usado este turno por cualquier Pokémon fue Llama fusión.",
		shortDesc: "Poder x2 si se usa tras Llama fusión este turno.",
	},
	fusionflare: {
		name: "Llama fusión",
		desc: "El poder se duplica si el último movimiento usado este turno por cualquier Pokémon fue Rayo fusión.",
		shortDesc: "Poder x2 si se usa tras Rayo fusión este turno.",
	},
	futuresight: {
		name: "Premonición",
		desc: "Inflige daño dos turnos después de usar este movimiento. Al final de ese turno, se calcula y aplica el daño al Pokémon que ocupe la posición del objetivo al usarlo. Si el usuario ya no está activo, se calcula el daño según su Ataque Especial base, sus tipos y su nivel, sin incluir aumentos de objeto ni de habilidad. Falla si este movimiento o Deseo oculto ya está en efecto en la posición del objetivo.",
		shortDesc: "Golpea dos turnos después de usarse.",
		gen4: {
			desc: "Inflige daño sin tipo que no puede ser crítico dos turnos después de usar este movimiento. Se calcula contra el objetivo al usarlo y, al final del turno final, el daño inflige al Pokémon en la posición original. Falla si este movimiento o Deseo oculto ya está en efecto en la posición del objetivo.",
		},
		gen2: {
			desc: "Inflige daño sin tipo que no puede ser crítico dos turnos después de usar este movimiento. Se calcula contra el objetivo al usarlo y, al final del turno final, el daño inflige al Pokémon en la posición original. Falla si este movimiento ya está en efecto en la posición del objetivo.",
		},

		start: "[POKEMON] previó un ataque",
		activate: "[TARGET] recibió el ataque de Premonición",
	},
	gastroacid: {
		name: "Bilis",
		desc: "Hace que la habilidad del objetivo no surta efecto mientras permanezca activo. Si usa Relevo, el sustituto conserva este efecto. Falla si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio o Modo daruma, y terminará si se transfiere por Relevo.",
		shortDesc: "Anula la habilidad del objetivo.",
		gen8: {
			desc: "Hace que la habilidad del objetivo no surta efecto mientras permanezca activo. Si usa Relevo, el sustituto conserva este efecto. Falla si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico o Modo daruma, y terminará si se transfiere por Relevo.",
		},
		gen7: {
			desc: "Hace que la habilidad del objetivo no surta efecto mientras permanezca activo. Si usa Relevo, el sustituto conserva este efecto. Falla si la habilidad del objetivo es Fuerte afecto, Letargo perenne, Disfraz, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico o Modo daruma, y terminará si se transfiere por Relevo.",
		},
		gen6: {
			desc: "Hace que la habilidad del objetivo no surta efecto mientras permanezca activo. Si usa Relevo, el sustituto conserva este efecto. Falla si la habilidad del objetivo es Multitipo o Cambio táctico, y terminará si se transfiere por Relevo.",
		},

		start: "La habilidad de [POKEMON] quedó anulada",
	},
	geargrind: {
		name: "Rueda doble",
		desc: "Golpea dos veces. Si el primer golpe rompe el sustituto del objetivo, este recibirá daño por el segundo golpe.",
		shortDesc: "Golpea 2 veces en un turno.",
	},
	gearup: {
		name: "Piñón auxiliar",
		desc: "Sube en 1 nivel el Ataque y el Ataque Especial de los Pokémon del equipo del usuario con las habilidades Más o Menos.",
		shortDesc: "Sube Atq. y Atq. Esp. de aliados con Más/Menos 1 nivel.",
	},
	genesissupernova: {
		name: "Supernova original",
		desc: "Si este movimiento tiene éxito, el terreno pasa a ser Campo psíquico.",
		shortDesc: "Invoca Campo psíquico.",
	},
	geomancy: {
		name: "Geocontrol",
		desc: "Sube en 2 niveles el Ataque Especial, la Defensa Especial y la Velocidad del usuario. Este ataque se prepara en el primer turno y se ejecuta en el segundo. Si el usuario tiene equipada la Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Carga un turno; en el siguiente sube Atq. Esp., Def. Esp. y Vel. 2 niveles.",

		prepare: "¡[POKEMON] está absorbiendo energía!",
	},
	gigadrain: {
		name: "Gigadrenado",
		desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia arriba. Si tiene la Raíz grande, los PS recuperados son 1,3x los normales, redondeado hacia abajo.",
		shortDesc: "Recupera el 50 % de los PS perdidos.",
		gen4: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo. Si tiene la Raíz grande, los PS recuperados son 1,3x los normales, redondeado hacia abajo.",
		},
		gen3: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo.",
		},
	},
	gigaimpact: {
		name: "Gigaimpacto",
		desc: "Si este movimiento tiene éxito, el usuario debe recargar el siguiente turno y no puede seleccionar ningún movimiento.",
		shortDesc: "No puede moverse el siguiente turno.",
	},
	gigatonhammer: {
		name: "Martillo colosal",
		shortDesc: "No puede seleccionarse el turno siguiente tras su uso.",
	},
	gigavolthavoc: {
		name: "Gigavoltio destructor",
		shortDesc: "La potencia es igual al Poder Z del movimiento base.",
	},
	glaciallance: {
		name: "Lanza glacial",
		desc: "Sin efecto secundario.",
		shortDesc: "Sin efecto secundario. Golpea oponentes adyacentes.",
	},
	glaciate: {
		name: "Mundo gélido",
		desc: "100% de probabilidad de bajar 1 nivel la velocidad del rival.",
		shortDesc: "100% prob. de bajar 1 nivel la Vel. del rival.",
	},
	glaiverush: {
		name: "Asalto espadón",
		desc: "Si este movimiento tiene éxito, los movimientos dirigidos al usuario infligen el doble de daño y no comprueban la precisión hasta el siguiente turno del usuario.",
		shortDesc: "Usuario recibe daño x2 sin fallo hasta su próximo turno.",
	},
	glare: {
		name: "Deslumbrar",
		desc: "Paraliza al objetivo.",
		shortDesc: "Paraliza al objetivo.",
		gen3: {
			desc: "Paraliza al objetivo. Este movimiento no ignora inmunidad de tipo.",
		},
		gen1: {
			desc: "Paraliza al objetivo.",
		},
	},
	glitzyglow: {
		name: "Espeaura",
		desc: "Este movimiento invoca pantalla de luz durante 5 turnos al usarse.",
		shortDesc: "Invoca pantalla de luz.",
	},
	gmaxbefuddle: {
		name: "Gigaestupor",
		desc: "Su potencia es igual a la potencia del mov. Máx. del movimiento base. Si este movimiento tiene éxito, cada Pokémon del bando opuesto se duerme, se envenena o se paraliza, incluso si tienen Sustituto.",
		shortDesc: "Potencia mov. base. Rivales: slp o psn o par.",
	},
	gmaxcannonade: {
		name: "Gigacañonazo",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, durante 4 turnos cada Pokémon que no sea de tipo Agua en el bando opuesto recibe daño equivalente a 1/6 de sus PS máximos, redondeado hacia abajo, al final de cada turno durante la duración del efecto, incluido el último turno.",
		shortDesc: "Pot. mov. base. Rivales: -1/6 PS, 4 turnos",

		start: "¡[PARTY] quedó atrapado en el vórtice de agua!",
		damage: "[POKEMON] recibe daño por el vórtice de Gigacañonazo.",
	},
	gmaxcentiferno: {
		name: "Gigacienfuegos",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon en el bando opuesto queda atrapado durante 4 o 5 turnos (7 si el usuario lleva Garra garfio), incluso si tienen Sustituto. Causa daño equivalente a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno durante la duración del efecto. Aun así pueden cambiar si llevan muda concha o usan Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina para un objetivo si abandona el campo o usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia con este u otro movimiento de agarre.",
		shortDesc: "Pot. mov. base. Rivales: atrapados 4-5 t.",
	},
	gmaxchistrike: {
		name: "Gigapuñición",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon en el bando aliado ve aumentado su índice de golpe crítico en 1, incluso si tienen Sustituto.",
		shortDesc: "Pot. mov. base. Aliados: índice crítico +1.",

		start: "#focoenergía",
	},
	gmaxcuddle: {
		name: "Gigaternura",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del bando opuesto queda enamorado, incluso si tienen Sustituto. Este efecto no ocurre si ambos son del mismo género, si alguno es sin género o si el objetivo ya está enamorado.",
		shortDesc: "Pot. mov. base. Rivales: enamorados.",
	},
	gmaxdepletion: {
		name: "Gigadesgaste",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del bando opuesto pierde 2 PP de su último movimiento usado, incluso si tienen Sustituto.",
		shortDesc: "Pot. mov. base. Rivales: último mov. -2 PP.",

		activate: "  [TARGET] perdió PP.",
	},
	gmaxdrumsolo: {
		name: "Gigarredoble",
		desc: "La potencia es siempre 160, independientemente de la potencia de Movimiento Dinamax del movimiento base. Este movimiento y sus efectos ignoran las habilidades de otros Pokémon.",
		shortDesc: "Siempre 160 de potencia. Ignora habilidades.",
	},
	gmaxfinale: {
		name: "Gigacolofón",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del bando aliado restaura 1/6 de sus PS máximos actuales, incluso si tienen Sustituto.",
		shortDesc: "Pot. mov. base. Aliados: +1/6 PS máx.",
	},
	gmaxfireball: {
		name: "Gigaesfera Ígnea",
		desc: "La potencia es 160 independientemente de la potencia de Movimiento Dinamax del movimiento base. Este movimiento y sus efectos ignoran las habilidades de otros Pokémon.",
		shortDesc: "Siempre pot. 160. Ignora habilidades.",
	},
	gmaxfoamburst: {
		name: "Gigaespuma",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, la Velocidad de cada Pokémon en el lado opuesto se reduce en 2 niveles, incluso si tienen un Sustituto.",
		shortDesc: "Mov. base determina pot. Rivales: -2 Vel.",
	},
	gmaxgoldrush: {
		name: "Gigamonedas",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon en el lado opuesto queda Confundido, incluso si tienen un Sustituto.",
		shortDesc: "Mov. base determina pot. Rivales: Confundido.",
	},
	gmaxgravitas: {
		name: "Gigabóveda",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, comienza el efecto de Gravedad.",
		shortDesc: "Mov. base determina pot. Activa Gravedad.",
	},
	gmaxhydrosnipe: {
		name: "Gigadisparo",
		desc: "La potencia es 160 independientemente de la potencia de Movimiento Dinamax del movimiento base. Este movimiento y sus efectos ignoran las habilidades de otros Pokémon.",
		shortDesc: "Siempre pot. 160. Ignora habilidades.",
	},
	gmaxmalodor: {
		name: "Gigapestilencia",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon en el lado opuesto queda Envenenado, incluso si tienen un Sustituto.",
		shortDesc: "Mov. base determina pot. Rivales: Envenenado.",
	},
	gmaxmeltdown: {
		name: "Gigafundido",
		desc: "La potencia es igual a la de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, comienza el efecto de Tormento en cada Pokémon del lado opuesto, incluso si tienen un Sustituto.",
		shortDesc: "Mov. base determina pot. Rivales: Tormento.",
	},
	gmaxoneblow: {
		name: "Gigagolpe brusco",
		desc: "La potencia es igual a la potencia de movimiento Dinamax del movimiento base. Este movimiento ignora todos los efectos de protección, incluyendo Maxibarrera.",
		shortDesc: "Mov. base afecta potencia. Ignora Maxibarrera.",
	},
	gmaxrapidflow: {
		name: "Gigagolpe fluido",
		desc: "La potencia es igual a la potencia de movimiento Dinamax del movimiento base. Este movimiento ignora todos los efectos de protección, incluyendo Maxibarrera.",
		shortDesc: "Mov. base afecta potencia. Ignora Maxibarrera.",
	},
	gmaxreplenish: {
		name: "Gigarreciclaje",
		desc: "La potencia es igual a la potencia de movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, hay un 50 % de probabilidad de que todos los Pokémon en el lado del usuario recuperen su baya, incluso si tienen un sustituto.",
		shortDesc: "Mov. base afecta potencia. 50 % restaura bayas.",
	},
	gmaxresonance: {
		name: "Gigamelodía",
		desc: "La potencia es igual a la potencia de movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, se activa Velo aurora en el lado del usuario.",
		shortDesc: "Mov. base afecta potencia. Aliados: Velo aurora.",
	},
	gmaxsandblast: {
		name: "Gigapolvareda",
		desc: "La potencia es igual a la potencia de movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon en el lado opuesto queda impedido de cambiar durante cuatro o cinco turnos (siete turnos si el usuario lleva Garra garfio), incluso si tienen un sustituto. Causa daño igual a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno mientras dura el efecto. Aún pueden cambiar si llevan Muda concha o usan Relevo, Puño Certero, Ida y vuelta, Última Palabra, Teletransporte, Viraje o Voltiocambio. El efecto termina para un objetivo si abandona el campo o si usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar este u otro movimiento de atadura.",
		shortDesc: "Mov. base afecta potencia. Rivales: atrapados 4-5 turnos.",
	},
	gmaxsmite: {
		name: "Gigacastigo",
		desc: "Potencia igual a la del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon en el lado opuesto queda confundido, incluso si tiene un Sustituto.",
		shortDesc: "Pot. según Mov. base. Rivales: confusión.",
	},
	gmaxsnooze: {
		name: "Gigasopor",
		desc: "Potencia igual a la del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, hay un 50% de probabilidad de que el efecto de Bostezo comience en el objetivo, incluso si tiene un Sustituto.",
		shortDesc: "Pot. según Mov. base. Objetivo: 50% Bostezo.",
	},
	gmaxsteelsurge: {
		name: "Gigatrampa acero",
		desc: "Potencia igual a la del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, coloca piezas de acero en el lado opuesto del campo, dañando a cada Pokémon rival que entre en combate. Los rivales pierden 1/32, 1/16, 1/8, 1/4 o 1/2 de sus PS máximos, redondeado hacia abajo, según su debilidad al tipo acero; 0,25x, 0,5x, neutro, 2x o 4x, respectivamente. Puede eliminarse del lado opuesto si algún Pokémon rival usa Giro rápido o Despejar con éxito, o si es afectado por Despejar.",
		shortDesc: "Pot. según Mov. base. Rivales: trampa acero.",

		start: "¡Piezas puntiagudas de acero empezaron a flotar alrededor de [PARTY]!",
		end: "¡Las piezas de acero que rodeaban a [PARTY] desaparecieron!",
		damage: "¡El acero puntiagudo mordió a [POKEMON]!",
	},
	gmaxstonesurge: {
		name: "Gigatrampa rocas",
		desc: "Potencia igual a la del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, coloca piezas de roca en el lado opuesto del campo, dañando a cada Pokémon rival que entre en combate. Los rivales pierden 1/32, 1/16, 1/8, 1/4 o 1/2 de sus PS máximos, redondeado hacia abajo, según su debilidad al tipo roca; 0,25x, 0,5x, neutro, 2x o 4x, respectivamente. Puede eliminarse del lado opuesto si algún Pokémon rival usa Giro rápido o Despejar con éxito, o si es afectado por Despejar.",
		shortDesc: "Pot. según Mov. base. Rivales: Trampa rocas.",
	},
	gmaxstunshock: {
		name: "Gigadescarga",
		desc: "La potencia es igual a la potencia del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del lado contrario queda envenenado o paralizado, incluso si tienen un sustituto.",
		shortDesc: "Mov. base afec. pot. Riv.: enven. o paral.",
	},
	gmaxsweetness: {
		name: "Giganéctar",
		desc: "La potencia es igual a la potencia del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del lado aliado cura sus problemas de estado, incluso si tienen un sustituto.",
		shortDesc: "Mov. base afec. pot. Aliados: cura cond.",
	},
	gmaxtartness: {
		name: "Gigacorrosión",
		desc: "La potencia es igual a la potencia del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, la evasión de cada Pokémon del lado contrario baja 1 nivel, incluso si tienen un sustituto.",
		shortDesc: "Mov. base ajusta pot. Rivales: -1 evasión.",
	},
	gmaxterror: {
		name: "Gigaaparición",
		desc: "La potencia es igual a la potencia del Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del lado contrario queda atrapado, incluso si tienen un sustituto. Aún pueden cambiar si llevan Muda concha o usan Relevo, Viraje, Última palabra, Teletransporte, Ida y Vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del campo.",
		shortDesc: "Mov. base ajusta pot. Rivales: atrapados.",
	},
	gmaxvinelash: {
		name: "Gigalianas",
		desc: "Su potencia es igual a la del movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, durante 4 turnos cada Pokémon no de tipo Planta del lado opuesto recibe un daño igual a 1/6 de sus PS máximos, redondeado hacia abajo, al final de cada turno mientras dure el efecto, incluido el último turno.",
		shortDesc: "Potencia = mov. base. Rivales: -1/6 PS, 4 turnos.",

		start: "  ¡[PARTY] quedó atrapado en las enredaderas!",
		damage: "  ¡[POKEMON] recibe un castigo feroz de Gigalianas!",
	},
	gmaxvolcalith: {
		name: "Gigarroca ígnea",
		desc: "Su potencia es igual a la del movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, durante 4 turnos cada Pokémon no de tipo Roca del lado opuesto recibe un daño igual a 1/6 de sus PS máximos, redondeado hacia abajo, al final de cada turno mientras dure el efecto, incluido el último turno.",
		shortDesc: "Potencia = mov. base. Rivales: -1/6 PS, 4 turnos.",

		start: "  ¡[PARTY] quedó rodeado de rocas!",
		damage: "  ¡[POKEMON] recibe un castigo de rocas de Gigarroca ígnea!",
	},
	gmaxvoltcrash: {
		name: "Gigatronada",
		desc: "Su potencia es igual a la del movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, cada Pokémon del lado opuesto queda paralizado, incluso si tiene sustituto.",
		shortDesc: "Potencia = mov. base. Rivales: paralizados.",
	},
	gmaxwildfire: {
		name: "Gigallamarada",
		desc: "La potencia es igual a la potencia de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, durante 4 turnos cada Pokémon que no sea de tipo Fuego en el bando rival recibe al final de cada turno un daño igual a 1/6 de sus PS máximos, redondeado hacia abajo, incluyendo el último turno.",
		shortDesc: "Pot. según mov. base. Rivales: -1/6 PS, 4 turnos.",

		start: "  [PARTY] quedaron rodeados de fuego.",
		damage: "  [POKEMON] está ardiendo en las llamas de Gigallamarada.",
	},
	gmaxwindrage: {
		name: "Gigahuracán",
		desc: "La potencia es igual a la potencia de Movimiento Dinamax del movimiento base. Si este movimiento tiene éxito, terminan los efectos de Campo eléctrico, Campo de hierba, Campo de niebla y Campo psíquico; terminan los efectos de Reflejo, Pantalla de luz, Velo aurora, Velo sagrado, Neblina, Gigatrampa acero, Púas, Púas tóxicas, Trampa rocas y Red viscosa en el bando del objetivo; y terminan los efectos de Gigatrampa acero, Púas, Púas tóxicas, Trampa rocas y Red viscosa en el bando propio.",
		shortDesc: "Pot. según mov. base. Elimina Campos y trampas.",
	},
	grassknot: {
		name: "Hierba lazo",
		desc: "La potencia de este movimiento es 20 si el objetivo pesa menos de 10 kg, 40 si pesa menos de 25 kg, 60 si pesa menos de 50 kg, 80 si pesa menos de 100 kg, 100 si pesa menos de 200 kg y 120 si pesa 200 kg o más.",
		shortDesc: "Más pot. cuanto más pese el objetivo.",
	},
	grasspledge: {
		name: "Voto Planta",
		desc: "Si uno de los aliados del usuario eligió usar Voto Fuego o Voto Agua este turno y aún no ha actuado, actúa inmediatamente después del usuario y el movimiento del usuario no surte efecto. Si se combina con Voto Fuego, el aliado usa Voto Fuego con 150 de potencia y aparece un mar de llamas en el lado del objetivo durante 4 turnos, que causa daño a los Pokémon que no son tipo Fuego igual a 1/8 de sus PS máximos, redondeado hacia abajo, al final de cada turno durante el efecto, incluido el último. Si se combina con Voto Agua, el aliado usa Voto Planta con 150 de potencia y aparece un pantano en el lado del objetivo durante 4 turnos, lo que reduce a la cuarta parte la Velocidad de cada Pokémon en ese lado. Cuando se utiliza como movimiento combinado, este movimiento recibe STAB sin importar el tipo del usuario. Este movimiento no consume la Gema planta del usuario.",
		shortDesc: "Úsalo con Voto Fuego o Voto Agua para efecto extra.",

		activate: "#waterpledge",
		start: "¡Un pantano envolvió a [TEAM]!",
		end: "¡El pantano alrededor de [TEAM] desapareció!",
	},
	grasswhistle: {
		name: "Silbato",
		shortDesc: "Duerme al objetivo.",
	},
	grassyglide: {
		name: "Fitoimpulso",
		desc: "Si el Campo de hierba está activo y el usuario está en el suelo, este movimiento tiene su prioridad aumentada en 1.",
		shortDesc: "Con Campo de hierba: +1 prioridad.",
	},
	grassyterrain: {
		name: "Campo de hierba",
		desc: "Durante 5 turnos, el terreno se convierte en Campo de hierba. Mientras dure, la potencia de los movimientos de tipo planta usados por Pokémon en el suelo se multiplica por 1,3; la potencia de Terratemblor, Terremoto y Magnitud usados contra Pokémon en el suelo se multiplica por 0,5; y los Pokémon en el suelo recuperan 1/16 de sus PS máximos, redondeado hacia abajo, al final de cada turno, incluido el último. Camuflaje transforma al usuario en tipo planta, Adaptación se convierte en Energibola y Daño secreto tiene un 30 % de probabilidad de causar sueño. Falla si el terreno actual ya es Campo de hierba.",
		shortDesc: "5 turnos. Suelo: +pot. planta, +1/16 PS.",
		gen7: {
			desc: "Durante 5 turnos, el terreno se convierte en Campo de hierba. Mientras dure, la potencia de los movimientos de tipo planta usados por Pokémon en el suelo se multiplica por 1,5; la potencia de Terratemblor, Terremoto y Magnitud usados contra Pokémon en el suelo se multiplica por 0,5; y los Pokémon en el suelo recuperan 1/16 de sus PS máximos, redondeado hacia abajo, al final de cada turno, incluido el último. Camuflaje transforma al usuario en tipo planta, Adaptación se convierte en Energibola y Daño secreto tiene un 30 % de probabilidad de causar sueño. Falla si el terreno actual ya es Campo de hierba.",
		},
	},
	gravapple: {
		name: "Fuerza G",
		desc: "Tiene un 100 % de probabilidad de bajar la Defensa del objetivo en 1 nivel. Durante Gravedad, la potencia se multiplica por 1,5.",
		shortDesc: "Objetivo: 100 % -1 Def. Con Gravedad: x1,5 potencia.",
	},
	gravity: {
		name: "Gravedad",
		desc: "Durante 5 turnos, la evasión de todos los Pokémon activos se multiplica por 0,6. Al usarse, Bote, Vuelo, Levitón, Caída libre y Telequinesis finalizan inmediatamente para todos los Pokémon activos. Mientras dura el efecto, se impide el uso de Bote, Vuelo, Plancha voladora, Patada salto alta, Patada salto, Levitón, Caída libre, Salpicadura y Telequinesis por parte de todos los Pokémon activos. Los ataques de tipo Tierra, Púas, Púas tóxicas, Red viscosa y la habilidad Trampa arena pueden afectar a los Pokémon de tipo Volador o con la habilidad Levitación. Falla si este movimiento ya está en efecto.",
		shortDesc: "5 turnos: sin inmunidades al tipo Tierra, precisión x1,67.",
		gen7: {
			desc: "Durante 5 turnos, la evasión de todos los Pokémon activos se multiplica por 0,6. Al usarse, Bote, Vuelo, Levitón, Caída libre y Telequinesis finalizan inmediatamente para todos los Pokémon activos. Mientras dura el efecto, se impide el uso de Bote, Vuelo, Plancha voladora, Patada salto alta, Patada salto, Levitón, Caída libre, Salpicadura y Telequinesis por parte de todos los Pokémon activos. Los ataques de tipo Tierra, Púas, Púas tóxicas, Red viscosa y la habilidad Trampa arena pueden afectar a los Pokémon de tipo Volador o con la habilidad Levitación. Falla si este movimiento ya está en efecto. Los movimientos Z relevantes aún pueden seleccionarse, pero su ejecución quedará impedida durante este efecto.",
		},
		gen6: {
			desc: "Durante 5 turnos, la evasión de todos los Pokémon activos se multiplica por 0,6. Al usarse, Bote, Vuelo, Levitón, Caída libre y Telequinesis finalizan inmediatamente para todos los Pokémon activos. Mientras dura el efecto, se impide el uso de Bote, Vuelo, Plancha voladora, Patada salto alta, Patada salto, Levitón, Caída libre, Salpicadura y Telequinesis por parte de todos los Pokémon activos. Los ataques de tipo Tierra, Púas, Púas tóxicas, Red viscosa y la habilidad Trampa arena pueden afectar a los Pokémon de tipo Volador o con la habilidad Levitación. Falla si este movimiento ya está en efecto.",
		},
		gen5: {
			desc: "Durante 5 turnos, la evasión de todos los Pokémon activos se multiplica por 0,6. Al usarse, Bote, Vuelo, Levitón, Caída libre y Telequinesis finalizan inmediatamente para todos los Pokémon activos. Mientras dura el efecto, se impide el uso de Bote, Vuelo, Patada salto alta, Patada salto, Levitón, Caída libre, Salpicadura y Telequinesis por parte de todos los Pokémon activos. Los ataques de tipo Tierra, Púas, Púas tóxicas y la habilidad Trampa arena pueden afectar a los Pokémon de tipo Volador o con la habilidad Levitación. Falla si este movimiento ya está en efecto.",
		},
		gen4: {
			desc: "Durante 5 turnos, la evasión de todos los Pokémon activos se multiplica por 0,6. Al usarse, Bote, Vuelo y Levitón finalizan inmediatamente para todos los Pokémon activos. Mientras dura el efecto, se impide el uso de Bote, Vuelo, Patada salto alta, Patada salto, Levitón y Salpicadura por parte de todos los Pokémon activos. Los ataques de tipo Tierra, Púas, Púas tóxicas y la habilidad Trampa arena pueden afectar a los Pokémon de tipo Volador o con la habilidad Levitación. Falla si este movimiento ya está en efecto.",
		},
	},
	growl: {
		name: "Gruñido",
		desc: "Baja el Ataque del objetivo 1 nivel.",
		shortDesc: "Baja el Atq. del oponente 1.",
		gen2: {
			shortDesc: "Baja el Atq. del objetivo 1.",
		},
	},
	growth: {
		name: "Desarrollo",
		desc: "Incrementa el Ataque y el Ataque Especial del usuario en 1 nivel. Si el clima es Día soleado o Tierra del ocaso, este movimiento incrementa el Ataque y el Ataque Especial del usuario en 2 niveles. Si el usuario lleva Parasol multiuso, este movimiento solo incrementa el Ataque y el Ataque Especial del usuario en 1 nivel, incluso si el clima es Día soleado o Tierra del ocaso.",
		shortDesc: "Incrementa Atq. y Atq. Esp. en 1; 2 en sol.",

		gen7: {
			desc: "Incrementa el Ataque y el Ataque Especial del usuario en 1 nivel. Si el clima es Día soleado o Tierra del ocaso, este movimiento incrementa el Ataque y el Ataque Especial del usuario en 2 niveles.",
		},
		gen5: {
			desc: "Incrementa el Ataque y el Ataque Especial del usuario en 1 nivel. Si el clima es Día soleado, este movimiento incrementa el Ataque y el Ataque Especial del usuario en 2 niveles.",
		},
		gen4: {
			desc: "Incrementa el Ataque Especial del usuario en 1 nivel.",
			shortDesc: "Incrementa 1 nivel Ataque Esp.",
		},
		gen1: {
			desc: "Incrementa el Especial del usuario en 1 nivel.",
			shortDesc: "Incrementa 1 nivel Especial.",
		},
	},
	grudge: {
		name: "Rabia",
		desc: "Hasta el siguiente turno del usuario, si un Pokémon oponente debilita al usuario con un ataque, ese movimiento pierde todos sus PP restantes.",
		shortDesc: "Si el usuario se debilita, el ataque usado pierde todos sus PP.",

		activate: "¡Los PP de [MOVE] de [POKEMON] se redujeron a cero debido a Rabia!",
		start: "¡[POKEMON] desea que su objetivo guarde rencor!",
	},
	guardianofalola: {
		name: "Cólera del guardián",
		desc: "Cólera del guardián resta al objetivo el 75 % de sus PS actuales.",
		shortDesc: "Resta 75 % PS actuales del objetivo.",
	},
	guardsplit: {
		name: "Isoguardia",
		desc: "Isoguardia suma la defensa y la defensa especial del usuario y del objetivo y las divide a partes iguales entre ambos, sin tener en cuenta cambios en las características.",
		shortDesc: "Promedia Def. y Def. Esp. con objetivo.",
		activate: "¡[POKEMON] compartió su defensa con el objetivo!",
	},
	guardswap: {
		name: "Cambiadefensa",
		desc: "Cambiadefensa intercambia las modificaciones en las estadísticas de defensa y defensa especial del usuario con las del objetivo.",
		shortDesc: "Intercambia Def. y Def. Esp. con objetivo.",
	},
	guillotine: {
		name: "Guillotina",
		desc: "Inflige daño al objetivo igual al PS máximo de este. Ignora modificadores de precisión y evasión. La precisión de este ataque es igual al nivel del usuario menos el nivel del objetivo más 30 %, y falla si el objetivo tiene un nivel superior. Los Pokémon con la habilidad Robustez son inmunes.",
		shortDesc: "Derriba de un solo golpe al objetivo. Falla si el usuario es de nivel inferior.",
		gen2: {
			desc: "Inflige 65535 de daño al objetivo. La precisión de este ataque en base 256 es igual al menor entre 2 x (nivel del usuario - nivel del objetivo) + 76 y 255, antes de aplicar modificadores de precisión y evasión. Falla si el objetivo está a un nivel superior.",
		},
		gen1: {
			desc: "Inflige 65535 de daño al objetivo. Falla si la Velocidad del objetivo es mayor que la del usuario.",
			shortDesc: "Inflige 65535 de daño. Falla si el objetivo es más rápido.",
		},
	},
	gunkshot: {
		name: "Lanzamugre",
		desc: "Tiene un 30 % de probabilidad de envenenar al objetivo.",
		shortDesc: "30 % de probabilidad de envenenar al objetivo.",
	},
	gust: {
		name: "Tornado",
		desc: "La potencia se duplica si el objetivo está usando Bote, Vuelo o Caída libre, o está bajo el efecto de Caída libre.",
		shortDesc: "Potencia duplica en Bote, Vuelo y Caída libre.",
		gen4: {
			desc: "La potencia se duplica si el objetivo está usando Bote o Vuelo.",
			shortDesc: "Potencia duplica en Bote y Vuelo.",
		},
		gen2: {
			desc: "La potencia se duplica si el objetivo está usando Vuelo.",
			shortDesc: "Potencia duplica en Vuelo.",
		},
		gen1: {
			desc: "Sin efecto adicional.",
			shortDesc: "Sin efecto adicional.",
		},
	},
	gyroball: {
		name: "Giro bola",
		desc: "La potencia es igual a (25 x velocidad actual del objetivo / velocidad actual del usuario) + 1, redondeado hacia abajo, pero sin superar 150. Si la velocidad actual del usuario es 0, la potencia de este movimiento es 1.",
		shortDesc: "Más potente cuanto más lento sea el usuario.",
		gen5: {
			desc: "La potencia es igual a (25 x velocidad actual del objetivo / velocidad actual del usuario) + 1, redondeado hacia abajo, pero sin superar 150. Si la velocidad actual del usuario es 0, se considera 1 en su lugar.",
		},
	},
	hail: {
		name: "Granizo",
		desc: "Durante 5 turnos, el clima cambia a Granizo. Al final de cada turno excepto el último, todos los Pokémon activos pierden 1/16 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo hielo o tengan la habilidad Cuerpo helado, Muro mágico, Funda o Manto níveo. Dura 8 turnos si el usuario lleva equipada la Roca helada. Falla si el clima actual ya es Granizo.",
		shortDesc: "Durante 5 turnos, graniza.",
		gen4: {
			desc: "Durante 5 turnos, el clima cambia a Granizo. Al final de cada turno excepto el último, todos los Pokémon activos pierden 1/16 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo hielo o tengan la habilidad Cuerpo helado, Muro mágico o Manto níveo. Dura 8 turnos si el usuario lleva equipada la Roca helada. Falla si el clima actual ya es Granizo.",
		},
		gen3: {
			desc: "Durante 5 turnos, el clima cambia a Granizo. Al final de cada turno excepto el último, todos los Pokémon activos pierden 1/16 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo hielo. Falla si el clima actual ya es Granizo.",
		},
	},
	hammerarm: {
		name: "Machada",
		desc: "Baja la Velocidad del usuario 1 nivel.",
		shortDesc: "Baja Vel. 1 nivel.",
	},
	happyhour: {
		name: "Paga extra",
		shortDesc: "Sin uso competitivo.",
		activate: "¡Todos quedan contagiados por la atmósfera festiva!",
	},
	harden: {
		name: "Fortaleza",
		desc: "Aumenta la Defensa del usuario 1 nivel.",
		shortDesc: "Sube Def. 1 nivel.",
	},
	hardpress: {
		name: "Prensa metálica",
		desc: "La potencia es igual a 100 x (PS actuales del objetivo / PS máximos del objetivo), redondeada hacia abajo en caso de .5, pero no inferior a 1.",
		shortDesc: "Más potencia cuanto más PS le queden al objetivo.",
	},
	haze: {
		name: "Niebla",
		desc: "Restablece las etapas de estadísticas de todos los Pokémon activos a 0.",
		shortDesc: "Elimina todos los cambios de estadística.",
		gen1: {
			desc: "Restablece las etapas de estadísticas de ambos Pokémon a 0 y elimina las reducciones de estadísticas por quemadura y parálisis. Restablece los contadores de Tóxico a 0 y elimina el efecto de Confusión, Anulación, Foco Energía, Drenadoras, Pantalla de Luz, Niebla y Reflejo en ambos Pokémon. Elimina la condición de estado no volátil del rival.",
			shortDesc: "Restablece cambios estadísticos y elimina el estado rival.",
		},

		// Only used in Gen 1
		activate: "  ¡Todos los cambios de ESTADO han sido eliminados!",
	},
	headbutt: {
		name: "Cabezazo",
		desc: "Tiene un 30 % prob. de retroceder al objetivo.",
		shortDesc: "30 % prob. de retroceder al objetivo.",
	},
	headcharge: {
		name: "Ariete",
		desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeado hacia arriba, pero no menos de 1 PS.",
		shortDesc: "Retroceso 1/4.",
	},
	headlongrush: {
		name: "Arremetida",
		desc: "Reduce la Defensa y la Defensa Especial del usuario en 1 nivel.",
		shortDesc: "Reduce Def. y Def. Esp. en 1.",
	},
	headsmash: {
		name: "Testarazo",
		desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/2 de los PS perdidos por el objetivo, redondeado hacia arriba, pero no menos de 1 PS.",
		shortDesc: "Retroceso 1/2.",
		gen4: {
			desc: "Si el objetivo pierde PS, el usuario recibe retroceso igual a 1/2 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS.",
		},
	},
	healbell: {
		name: "Cascabel cura",
		desc: "Todos los Pokémon del equipo del usuario se curan de su condición de estado no volátil. Los Pokémon activos con la habilidad Insonorizar no se curan.",
		shortDesc: "Cura al equipo del usuario de alteraciones de estado.",
		gen7: {
			desc: "Todos los Pokémon del equipo del usuario se curan de su condición de estado no volátil. Los Pokémon activos con la habilidad Insonorizar no se curan.",
		},
		gen5: {
			desc: "Todos los Pokémon del equipo del usuario se curan de su condición de estado no volátil. Los Pokémon activos con la habilidad Insonorizar también se curan.",
		},
		gen4: {
			desc: "Todos los Pokémon del equipo del usuario se curan de su condición de estado no volátil. Los Pokémon con la habilidad Insonorizar no se curan.",
		},
		gen2: {
			desc: "Todos los Pokémon del equipo del usuario se curan de su condición de estado no volátil.",
		},
		activate: "  ¡Una campana repicó!",
	},
	healblock: {
		name: "Anticura",
		desc: "Durante 5 turnos, el objetivo tiene prevenida la restauración de PS mientras permanezca en combate. Durante el efecto, los movimientos de curación y drenaje no se pueden usar, y las habilidades y objetos que otorgan curación no curarán al usuario. Si un Pokémon afectado usa Relevo, el Pokémon entrante seguirá sin poder recuperar sus PS. Divide dolor y la habilidad Regeneración no se ven afectados.",
		shortDesc: "Durante 5 turnos, el rival no puede recuperar PS.",
		gen7: {
			desc: "Durante 5 turnos, el objetivo tiene prevenida la restauración de PS mientras permanezca en combate. Durante el efecto, los movimientos de curación y drenaje no se pueden usar, y las habilidades y objetos que otorgan curación no curarán al usuario. Si un Pokémon afectado usa Relevo, el Pokémon entrante seguirá sin poder recuperar sus PS. Divide dolor y la habilidad Regeneración no se ven afectados. Los movimientos Z relevantes aún pueden seleccionarse y ejecutarse durante este efecto.",
		},
		gen6: {
			desc: "Durante 5 turnos, el objetivo tiene prevenida la restauración de PS mientras permanezca en combate. Durante el efecto, los movimientos de curación y drenaje no se pueden usar, y las habilidades y objetos que otorgan curación no curarán al usuario. Si un Pokémon afectado usa Relevo, el Pokémon entrante seguirá sin poder recuperar sus PS. Divide dolor y la habilidad Regeneración no se ven afectados.",
		},
		gen4: {
			desc: "Durante 5 turnos, el objetivo tiene prevenida la restauración de PS mientras permanezca en combate. Los movimientos de curación no se pueden usar, los efectos de movimientos que otorgan curación no curarán, pero las habilidades y objetos seguirán curando al usuario. Si un Pokémon afectado usa Relevo, el reemplazo permanecerá bajo el efecto. Divide dolor no se ve afectado.",
		},
		start: "  ¡[POKEMON] no pudo curarse!",
		end: "  ¡Anticura de [POKEMON] terminó!",
		cant: "[POKEMON] no puede usar [MOVE] debido a Anticura.",
		fail: "  ¡Pero falló y no afectó a [POKEMON]!",
	},
	healingwish: {
		name: "Deseo cura",
		desc: "El usuario se debilita y, si el Pokémon que sale para sustituirlo no tiene los PS al máximo o tiene una condición de estado no volátil, sus PS se restauran por completo y su condición de estado no volátil se cura. El reemplazo sale al final del turno, y la curación ocurre antes de que los peligros de entrada surtan efecto. Este efecto persiste hasta que un Pokémon que cumpla alguna de estas condiciones entre al combate en la posición del usuario o sea intercambiado a esa posición mediante el movimiento Cambio de banda. Falla si el usuario es el último Pokémon sin debilitar de su equipo.",
		shortDesc: "El usuario se debilita; el siguiente Pokémon se cura completamente.",
		gen7: {
			desc: "El usuario se debilita y el Pokémon que lo sustituye ve sus PS restaurados por completo y recupera su condición de estado no volátil. El nuevo Pokémon sale al final del turno y la curación ocurre antes de que los peligros de entrada surtan efecto. Falla si el usuario es el último Pokémon sin debilitar de su equipo.",
			shortDesc: "Usuario se debilita; reemplazo se cura por completo.",
		},
		gen4: {
			desc: "El usuario se debilita y el Pokémon que lo sustituye ve sus PS restaurados por completo y recupera su condición de estado no volátil. El nuevo Pokémon sale inmediatamente y la curación ocurre después de que los peligros de entrada surtan efecto. Falla si el usuario es el último Pokémon sin debilitar de su equipo.",
		},

		heal: "  ¡El deseo de curación se hizo realidad para [POKEMON]!",
	},
	healorder: {
		name: "Auxilio",
		desc: "El usuario restaura la mitad de sus PS máximos, redondeando hacia arriba en caso de .5.",
		shortDesc: "Recupera al usuario el 50 % de sus PS máximos.",
		gen4: {
			desc: "El usuario restaura la mitad de sus PS máximos, redondeando hacia abajo.",
		},
	},
	healpulse: {
		name: "Pulso cura",
		desc: "El objetivo restaura la mitad de sus PS máximos, redondeado hacia arriba. Si el usuario tiene la habilidad Megadisparador, el objetivo en su lugar restaura 3/4 de sus PS máximos, redondeado hacia abajo.",
		shortDesc: "Restaura 50 % de los PS del objetivo.",
		gen5: {
			desc: "El objetivo restaura la mitad de sus PS máximos, redondeado hacia arriba.",
		},
	},
	heartstamp: {
		name: "Arrumaco",
		desc: "Tiene un 30 % de probabilidad de causar retroceso en el objetivo.",
		shortDesc: "30 % de probabilidad de retroceder al objetivo.",
	},
	heartswap: {
		name: "Cambiaalmas",
		desc: "El usuario intercambia todos sus cambios de estadísticas con el objetivo.",
		shortDesc: "Intercambia los cambios de estadísticas con el objetivo.",
	},
	heatcrash: {
		name: "Golpe calor",
		desc: "La potencia depende de (peso del usuario / peso del objetivo), redondeado hacia abajo. Es 120 si el resultado es ≥ 5; 100 si es 4; 80 si es 3; 60 si es 2; y 40 si es ≤ 1. Si el objetivo usó Reducción, se duplica el daño y no hay comprobación de precisión.",
		shortDesc: "Más potente cuanto más pese el usuario que el objetivo.",
		gen5: {
			desc: "La potencia depende de (peso del usuario / peso del objetivo), redondeado hacia abajo. Es 120 si el resultado es ≥ 5; 100 si es 4; 80 si es 3; 60 si es 2; y 40 si es ≤ 1.",
		},
	},
	heatwave: {
		name: "Onda ígnea",
		desc: "Tiene un 10 % de probabilidad de quemar al objetivo.",
		shortDesc: "10 % prob. de quemar al rival(es).",
	},
	heavyslam: {
		name: "Cuerpo pesado",
		desc: "La potencia de este movimiento depende de (peso del usuario / peso del objetivo), redondeado hacia abajo. La potencia es 120 si el resultado es 5 o más, 100 si es 4, 80 si es 3, 60 si es 2 y 40 si es 1 o menos. El daño se duplica y no se realiza comprobación de precisión si el objetivo ha usado Reducción mientras esté en combate.",
		shortDesc: "Más potencia cuanto más pese el usuario que el objetivo.",
		gen6: {
			desc: "La potencia de este movimiento depende de (peso del usuario / peso del objetivo), redondeado hacia abajo. La potencia es 120 si el resultado es 5 o más, 100 si es 4, 80 si es 3, 60 si es 2 y 40 si es 1 o menos.",
		},
	},
	helpinghand: {
		name: "Refuerzo",
		desc: "La potencia del movimiento del objetivo este turno se multiplica por 1,5 (efecto acumulable). Falla si no hay un aliado adyacente al usuario o si el aliado ya ha actuado este turno, pero no falla si el aliado está usando un movimiento de dos turnos.",
		shortDesc: "Pot. mov. aliado adyacente x1,5 este turno.",
		start: "  ¡[SOURCE] está listo para ayudar a [POKEMON]!",
	},
	hex: {
		name: "Infortunio",
		desc: "La potencia se duplica si el objetivo tiene una alteración de estado no volátil.",
		shortDesc: "Pot. x2 si el objetivo tiene alteración de estado.",
	},
	hiddenpower: {
		name: "Poder oculto",
		desc: "El tipo de este movimiento depende de los valores individuales (IV) del usuario y puede ser cualquiera excepto Normal y Hada.",
		shortDesc: "Varía de tipo según los IV del usuario.",
		gen5: {
			desc: "El tipo y la potencia de este movimiento dependen de los valores individuales (IV) del usuario. La potencia varía entre 30 y 70, y el tipo puede ser cualquiera excepto Normal.",
			shortDesc: "Varía en potencia y tipo según los IV del usuario.",
		},
	},
	hiddenpowerbug: {
		name: "Poder oculto Bicho",
	},
	hiddenpowerdark: {
		name: "Poder oculto Siniestro",
	},
	hiddenpowerdragon: {
		name: "Poder oculto Dragón",
	},
	hiddenpowerelectric: {
		name: "Poder oculto Eléctrico",
	},
	hiddenpowerfighting: {
		name: "Poder oculto Lucha",
	},
	hiddenpowerfire: {
		name: "Poder oculto Fuego",
	},
	hiddenpowerflying: {
		name: "Poder oculto Volador",
	},
	hiddenpowerghost: {
		name: "Poder oculto Fantasma",
	},
	hiddenpowergrass: {
		name: "Poder oculto Planta",
	},
	hiddenpowerground: {
		name: "Poder oculto Tierra",
	},
	hiddenpowerice: {
		name: "Poder oculto Hielo",
	},
	hiddenpowerpoison: {
		name: "Poder oculto Veneno",
	},
	hiddenpowerpsychic: {
		name: "Poder oculto Psíquico",
	},
	hiddenpowerrock: {
		name: "Poder oculto Roca",
	},
	hiddenpowersteel: {
		name: "Poder oculto Acero",
	},
	hiddenpowerwater: {
		name: "Poder oculto Agua",
	},
	highjumpkick: {
		name: "Patada salto alta",
		desc: "Si este ataque no tiene éxito, el usuario pierde la mitad de sus PS máximos, redondeado hacia abajo, como daño de choque. Los Pokémon con la habilidad Muro Mágico no se ven afectados por el daño de choque.",
		shortDesc: "Daño choque 1/2 al fallar.",
		gen4: {
			desc: "Si este ataque no tiene éxito, el usuario pierde PS igual a la mitad de los PS máximos del objetivo si este era inmune, redondeado hacia abajo; de lo contrario, mitad del daño que el objetivo habría recibido, redondeado hacia abajo, pero como mínimo 1 PS y como máximo la mitad de los PS máximos del objetivo, como daño de choque. Los Pokémon con la habilidad Muro Mágico no se ven afectados por el daño de choque.",
			shortDesc: "Si falla, recibe 1/2 del daño que habría causado.",
		},
		gen3: {
			desc: "Si este ataque no tiene éxito y el objetivo no era inmune, el usuario pierde PS igual a la mitad del daño que el objetivo habría recibido, redondeado hacia abajo, con un mínimo de 1 PS y un máximo de la mitad de los PS máximos del objetivo, como daño de choque.",
			shortDesc: "Si falla, recibe 1/2 del daño que habría causado.",
		},
		gen2: {
			desc: "Si este ataque no tiene éxito y el objetivo no era inmune, el usuario pierde PS igual a 1/8 del daño que el objetivo habría recibido, redondeado hacia abajo, pero no menos de 1 PS, como daño de choque.",
			shortDesc: "Si falla, recibe 1/8 del daño que habría causado.",
		},
		gen1: {
			desc: "Si este ataque falla en el objetivo, el usuario recibe 1 PS de daño de choque. Si el usuario tiene un sustituto, el daño de choque se aplica al sustituto del objetivo si lo tiene; de lo contrario, no se inflige daño de choque.",
			shortDesc: "Recibe 1 PS de daño si falla.",
		},

		damage: "#crash",
	},
	holdback: {
		name: "Clemencia",
		desc: "Deja al objetivo con al menos 1 PS.",
		shortDesc: "Siempre deja al objetivo con al menos 1 PS.",
	},
	holdhands: {
		name: "Manos juntas",
		desc: "Sin uso competitivo. Falla si no hay un aliado adyacente al usuario.",
		shortDesc: "Sin uso competitivo.",
	},
	honeclaws: {
		name: "Afilagarras",
		desc: "Aumenta en 1 nivel el Ataque y la Precisión del usuario.",
		shortDesc: "Sube Ataq. y Prec. 1 nivel.",
	},
	hornattack: {
		name: "Cornada",
		shortDesc: "Sin efecto adicional.",
	},
	horndrill: {
		name: "Perforador",
		desc: "Inflige daño al objetivo igual a sus PS máximos. Ignora modificadores de Precisión y Evasión. La Precisión de este ataque es (nivel del usuario - nivel del objetivo + 30) %; falla si el objetivo tiene nivel superior. Los Pokémon con la habilidad Robustez son inmunes.",
		shortDesc: "KO de un golpe. Falla si usuario de nivel inferior.",
		gen2: {
			desc: "Inflige 65535 puntos de daño al objetivo. La Precisión de este ataque (en escala de 256) es igual al menor valor entre (2 x (nivel del usuario - nivel del objetivo) + 76) y 255, antes de aplicar modificadores de Precisión y Evasión. Falla si el objetivo tiene nivel superior.",
		},
		gen1: {
			desc: "Inflige 65535 puntos de daño al objetivo. Falla si la Velocidad del rival es mayor que la del usuario.",
			shortDesc: "Inflige 65535 puntos de daño. Falla si rival más rápido.",
		},
	},
	hornleech: {
		name: "Asta drenaje",
		desc: "El usuario recupera la mitad de los PS que perdió el objetivo, redondeado hacia arriba. Si el usuario lleva la Raíz grande, los PS recuperados son 1,3x la cantidad normal, redondeados hacia abajo.",
		shortDesc: "Recupera el 50% del daño infligido.",
	},
	howl: {
		name: "Aullido",
		desc: "Sube el Ataque del usuario y de todos los aliados 1 nivel.",
		shortDesc: "Sube el Ataque propio y de aliados 1 nivel.",
		gen7: {
			desc: "Sube el Ataque del usuario 1 nivel.",
			shortDesc: "Sube el Ataque propio 1 nivel.",
		},
	},
	hurricane: {
		name: "Vendaval",
		desc: "Tiene un 30 % de prob. de confundir al objetivo. Puede golpear a un objetivo usando Bote, Vuelo o Caída libre, o bajo el efecto de Caída libre. Si el clima es Diluvio o Lluvia, no hace chequeo de precisión. Si el clima es Sol abrasador o Sol, su precisión es del 50 %. Contra un Pokémon que lleve Parasol multiuso, la precisión sigue siendo del 70 %.",
		shortDesc: "30 % prob. de confusión. No falla con lluvia.",
		gen7: {
			desc: "Tiene un 30 % de prob. de confundir al objetivo. Puede golpear a un objetivo usando Bote, Vuelo o Caída libre, o bajo el efecto de Caída libre. Si el clima es Diluvio o Lluvia, no hace chequeo de precisión. Si el clima es Sol abrasador o Sol, su precisión es del 50 %.",
		},
		gen5: {
			desc: "Tiene un 30 % de prob. de confundir al objetivo. Puede golpear a un objetivo usando Bote, Vuelo o Caída libre, o bajo el efecto de Caída libre. Si el clima es Lluvia, no hace chequeo de precisión. Si el clima es Sol, su precisión es del 50 %.",
		},
	},
	hydrocannon: {
		name: "Hidrocañón",
		desc: "Si este movimiento tiene éxito, el usuario debe descansar el siguiente turno y no puede seleccionar otro movimiento.",
		shortDesc: "Usuario no puede actuar el siguiente turno.",
	},
	hydropump: {
		name: "Hidrobomba",
		shortDesc: "Sin efecto adicional.",
	},
	hydrosteam: {
		name: "Hidrovapor",
		desc: "Si el clima es Día soleado y el usuario no lleva Parasol multiuso, el daño de este movimiento se multiplica por 1,5 en lugar de reducirse a la mitad por ser de tipo Agua.",
		shortDesc: "En Día soleado: daño x1,5 en vez de x0,5.",
	},
	hydrovortex: {
		name: "Hidrovórtice abisal",
		shortDesc: "La potencia es igual a la Potencia Z del movimiento base.",
	},
	hyperbeam: {
		name: "Hiperrayo",
		desc: "Si este movimiento tiene éxito, el usuario debe recargar en el siguiente turno y no puede seleccionar un movimiento.",
		shortDesc: "El usuario no se mueve el siguiente turno.",
		gen1: {
			desc: "Si este movimiento tiene éxito, el usuario debe recargar en el siguiente turno y no puede realizar otro movimiento, a menos que el objetivo o su sustituto fueran debilitados por este movimiento.",
			shortDesc: "No se mueve el siguiente turno si el objetivo o su sustituto no fue debilitado.",
		},
	},
	hyperdrill: {
		name: "Hipertaladro",
		shortDesc: "Ignora la protección sin inutilizarla.",
	},
	hyperfang: {
		name: "Hipercolmillo",
		desc: "Tiene un 10 % de probabilidad de que el rival retroceda.",
		shortDesc: "10 % prob. de que el rival retroceda.",
	},
	hyperspacefury: {
		name: "Cerco dimensión",
		desc: "Baja la Defensa del usuario 1 nivel. Este movimiento solo puede usarse si el usuario está en forma Hoopa desatado. Si tiene éxito, atraviesa Detección, Escudo real, Protección o Barrera espinosa, y también atraviesa Truco defensa, Escudo tatami, Anticipo o Vasta guardia durante este turno, permitiendo que otros Pokémon ataquen con normalidad.",
		shortDesc: "Hoopa desatado: baja Def. 1 nivel; atraviesa protecciones.",
		gen6: {
			desc: "Baja la Defensa del usuario 1 nivel. Solo puede usarse si el usuario está en forma Hoopa desatado. Si tiene éxito, atraviesa Detección, Escudo real, Protección o Barrera espinosa; también atraviesa Truco defensa, Escudo tatami, Anticipo o Vasta guardia durante este turno.",
		},
		activate: "#shadowforce",
		fail: "#darkvoid",
	},
	hyperspacehole: {
		name: "Paso dimensional",
		desc: "Si este movimiento tiene éxito, atraviesa Búnker, Detección, Escudo Real, Protección o Barrera Espinosa del objetivo este turno y elimina sus efectos, permitiendo que otros Pokémon lo ataquen con normalidad. Si el lado del objetivo está protegido por Truco Defensa, Escudo Tatami, Anticipo o Vasta Guardia, esa protección también se anula para este turno.",
		shortDesc: "Anula protecciones este turno.",
		gen6: {
			desc: "Si este movimiento tiene éxito, atraviesa Detección, Escudo Real, Protección o Barrera Espinosa del objetivo este turno y elimina sus efectos, permitiendo que otros Pokémon lo ataquen con normalidad. Si el lado del objetivo está protegido por Truco Defensa, Escudo Tatami, Anticipo o Vasta Guardia, esa protección también se anula para este turno.",
		},

		activate: "#shadowforce",
	},
	hypervoice: {
		name: "Vozarrón",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea a rivales adyacentes.",
	},
	hypnosis: {
		name: "Hipnosis",
		shortDesc: "Provoca sueño al objetivo.",
	},
	iceball: {
		name: "Bola hielo",
		desc: "Si este movimiento tiene éxito, el usuario queda fijado y no puede hacer otro movimiento hasta que falle, pasen 5 turnos, o el ataque no pueda usarse. La potencia se duplica con cada acierto exitoso y vuelve a duplicarse si antes el usuario usó Rizo defensa. Si este movimiento es invocado por Sonámbulo, se usa durante un turno.",
		shortDesc: "Potencia duplica cada turno; repite 5 turnos.",
		gen7: {
			desc: "Si este movimiento tiene éxito, el usuario queda fijado y no puede hacer otro movimiento hasta que falle, pasen 5 turnos, o el ataque no pueda usarse. La potencia se duplica con cada acierto exitoso y vuelve a duplicarse si antes el usuario usó Rizo defensa. Si es invocado por Sonámbulo, se usa un turno. Si golpea un Disfraz activo, el multiplicador de potencia se pausa pero el contador sigue, permitiendo usar el multiplicador en el siguiente movimiento.",
		},
		gen6: {
			desc: "Si este movimiento tiene éxito, el usuario queda fijado y no puede hacer otro movimiento hasta que falle, pasen 5 turnos, o el ataque no pueda usarse. La potencia se duplica con cada acierto exitoso y vuelve a duplicarse si antes el usuario usó Rizo defensa. Si este movimiento es invocado por Sonámbulo, se usa durante un turno.",
		},
	},
	icebeam: {
		name: "Rayo hielo",
		desc: "Tiene un 10 % de probabilidad de congelar al objetivo.",
		shortDesc: "10 % de probabilidad de congelar.",
	},
	iceburn: {
		name: "Llama gélida",
		desc: "Tiene un 30 % de probabilidad de quemar al objetivo. Este ataque se carga el primer turno y se ejecuta en el segundo. Si el usuario lleva Hierba única, se completa en un turno.",
		shortDesc: "Carga T1. Golpea T2. 30 % de quemar.",
		prepare: "  ¡[POKEMON] se cubrió de aire helado!",
	},
	icefang: {
		name: "Colmillo hielo",
		desc: "Tiene un 10 % de probabilidad de congelar al objetivo y un 10 % de probabilidad de hacer que retroceda.",
		shortDesc: "10 % prob. de congelar. 10 % prob. de retroceder.",
	},
	icehammer: {
		name: "Martillo hielo",
		desc: "Baja la Velocidad del usuario un nivel.",
		shortDesc: "Baja Velocidad 1 nivel.",
	},
	icepunch: {
		name: "Puño hielo",
		desc: "Tiene un 10 % de probabilidad de congelar al objetivo.",
		shortDesc: "10 % prob. de congelar al objetivo.",
	},
	iceshard: {
		name: "Esquirla helada",
		desc: "Sin efecto adicional.",
		shortDesc: "Normalmente va primero.",
	},
	icespinner: {
		name: "Pirueta helada",
		desc: "Termina los efectos de Campo eléctrico, Campo de hierba, Campo de niebla y Campo psíquico.",
		shortDesc: "Termina efectos del terreno.",
	},
	iciclecrash: {
		name: "Chuzos",
		desc: "Tiene un 30 % de probabilidad de hacer que retroceda al objetivo.",
		shortDesc: "30 % prob. de hacer retroceder al rival.",
	},
	iciclespear: {
		name: "Carámbano",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de prob. de golpear dos o tres veces y un 15% de prob. de golpear cuatro o cinco veces. Si uno de los golpes destruye el Sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el usuario lleva el objeto Dado trucado, este movimiento golpeará de 4 a 5 veces.",
		shortDesc: "Golpea de 2 a 5 veces en un turno.",
		gen8: {
			desc: "Golpea de dos a cinco veces. Tiene un 35% de prob. de golpear dos o tres veces y un 15% de prob. de golpear cuatro o cinco veces. Si uno de los golpes destruye el Sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces.",
		},
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene una prob. de 3/8 de golpear dos o tres veces y una prob. de 1/8 de golpear cuatro o cinco veces. Si uno de los golpes destruye el Sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el objetivo lleva la Banda aguante y tenía los PS completos al inicio, no se debilitará sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene una prob. de 3/8 de golpear dos o tres veces y una prob. de 1/8 de golpear cuatro o cinco veces. Si uno de los golpes destruye el Sustituto del objetivo, este recibirá daño por los golpes restantes.",
		},
	},
	icywind: {
		name: "Viento hielo",
		desc: "Tiene un 100% de prob. de reducir la Velocidad del objetivo en 1 nivel.",
		shortDesc: "100% de prob. de reducir la Velocidad rival 1 nivel.",
		gen2: {
			shortDesc: "100% de prob. de reducir la Velocidad del objetivo en 1 nivel.",
		},
	},
	imprison: {
		name: "Sellar",
		desc: "El usuario impide que todos los Pokemon rivales usen cualquier movimiento que el usuario tambien conozca mientras permanezca activo.",
		shortDesc: "Ningun rival puede usar movimientos que el usuario conozca.",
		gen7: {
			desc: "El usuario impide que todos los Pokemon rivales usen cualquier movimiento que el usuario tambien conozca mientras permanezca activo. Los movimientos Z aun pueden seleccionarse y ejecutarse durante este efecto.",
		},
		gen6: {
			desc: "El usuario impide que todos los Pokemon rivales usen cualquier movimiento que el usuario tambien conozca mientras permanezca activo.",
		},
		gen4: {
			desc: "El usuario impide que todos los Pokemon rivales usen cualquier movimiento que el usuario tambien conozca mientras permanezca activo. Falla si ningun rival comparte movimientos con el usuario.",
		},

		start: "  [POKEMON] sello los movimientos compartidos con su objetivo!",
		cant: "[POKEMON] no puede usar su [MOVE] sellado!",
	},
	incinerate: {
		name: "Calcinacion",
		desc: "El objetivo pierde su objeto portado si es una baya o una gema. Este movimiento no puede causar que los Pokemon con la habilidad Viscosidad pierdan su objeto portado. Los objetos perdidos con este movimiento no pueden recuperarse con Reciclaje o la habilidad Cosecha.",
		shortDesc: "Destruye la baya o gema del rival.",
		gen5: {
			desc: "El objetivo pierde su objeto portado si es una baya. Este movimiento no puede causar que los Pokemon con la habilidad Viscosidad pierdan su objeto portado. Los objetos perdidos con este movimiento no pueden recuperarse con Reciclaje o la habilidad Cosecha.",
			shortDesc: "Destruye la baya del rival.",
		},

		removeItem: "  [POKEMON] su [ITEM] se quemo!",
	},
	infernalparade: {
		name: "Marcha espectral",
		desc: "Tiene un 30 % de probabilidad de quemar al objetivo. La potencia se duplica si el objetivo tiene ya una alteracion de estado no volatil.",
		shortDesc: "30 % prob. de quemar. Pot. x2 si objetivo alterado.",
	},
	inferno: {
		name: "Infierno",
		desc: "Tiene un 100 % de probabilidad de quemar al objetivo.",
		shortDesc: "100 % prob. de quemar al objetivo.",
	},
	infernooverdrive: {
		name: "Hecatombe pírica",
		shortDesc: "La potencia es igual al poder Z del movimiento base.",
	},
	infestation: {
		name: "Acoso",
		desc: "Impide que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Causa daño igual a 1/8 de los PS maximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aun puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el campo, o si el objetivo usa Giro rapido o Sustituto con exito. No es acumulable ni se reinicia usando este u otro movimiento de atrapamiento.",
		shortDesc: "Atrapa y daña al rival 4-5 turnos.",
		gen8: {
			desc: "Impide que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Causa daño igual a 1/8 de los PS maximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aun puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el campo, o si el objetivo usa Giro rapido o Sustituto con exito. No es acumulable ni se reinicia usando este u otro movimiento de atrapamiento.",
		},
		gen7: {
			desc: "Impide que el objetivo cambie durante 4 o 5 turnos (7 si el usuario lleva Garra garfio). Causa daño igual a 1/8 de los PS maximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aun puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el campo, o si el objetivo usa Giro rapido o Sustituto con exito. No es acumulable ni se reinicia usando este u otro movimiento de atrapamiento.",
		},
		start: "  ¡[POKEMON] ha sido infectado por Acoso de [SOURCE]!",
	},
	ingrain: {
		name: "Arraigo",
		desc: "El usuario recupera 1/16 de sus PS maximos al final de cada turno, pero no puede cambiar y otros no pueden forzarlo. Aun puede cambiar si usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si abandona con Relevo, el reemplazo sigue atrapado y se cura. Durante el efecto, el usuario puede ser golpeado por movimientos tipo tierra y afectado por Púas, Púas tóxicas y Red viscosa, aunque sea tipo volador o tenga Levitación.",
		shortDesc: "Atrapa al usuario; cura 1/16 PS por turno.",
		gen7: {
			desc: "El usuario recupera 1/16 de sus PS maximos al final de cada turno, pero no puede cambiar y otros no pueden forzarlo. Aun puede cambiar si usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si abandona con Relevo, el reemplazo sigue atrapado y se cura. Durante el efecto, el usuario puede ser golpeado por movimientos tipo tierra y afectado por Púas, Púas tóxicas y Red viscosa, aunque sea tipo volador o tenga Levitación.",
		},
		gen5: {
			desc: "El usuario recupera 1/16 de sus PS maximos al final de cada turno, pero no puede cambiar y otros no pueden forzarlo. Aun puede cambiar si usa Relevo, Ida y vuelta o Voltiocambio. Si abandona con Relevo, el reemplazo sigue atrapado y se cura. Durante el efecto, el usuario puede ser golpeado por movimientos tipo tierra y afectado por Púas y Púas tóxicas, aunque sea tipo volador o tenga Levitación.",
		},
		gen4: {
			desc: "El usuario recupera 1/16 de sus PS maximos al final de cada turno, pero no puede cambiar y otros no pueden forzarlo. Aun puede cambiar si usa Relevo o Ida y vuelta. Si abandona con Relevo, el reemplazo sigue atrapado y se cura. Durante el efecto, el usuario puede ser golpeado por movimientos tipo tierra y afectado por Púas y Púas tóxicas, aunque sea tipo volador o tenga Levitación.",
		},
		gen3: {
			desc: "El usuario recupera 1/16 de sus PS maximos al final de cada turno, pero no puede cambiar y otros no pueden forzarlo. Aun puede cambiar si usa Relevo, y el reemplazo seguira atrapado y se cura.",
			shortDesc: "Usuario recupera 1/16 PS maximos por turno. Atrapa al usuario.",
		},
		start: "  ¡[POKEMON] arraigo sus raices!",
		block: "  ¡[POKEMON] esta anclado con sus raices!",
		heal: "  ¡[POKEMON] absorbio nutrientes con sus raices!",
	},
	instruct: {
		name: "Mandato",
		desc: "El objetivo usa inmediatamente su último movimiento. Falla si no ha usado ningún movimiento, si el movimiento no tiene PP, si se está preparando para usar Pico cañón, Puño certero o Trampa caparazón, o si el movimiento es Ayuda, Pico cañón, Eructo, Venganza, Feerichoque, Celebración, Cháchara, Pugnachoque, Copión, Cañón Dinamax, Puño certero, Manos juntas, Bola hielo, Mandato, Escudo Real, Feerichoque, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Obstrucción, Enfado, Danza pétalo, Rodar, Trampa caparazón, Esquema, Sonámbulo, Forcejeo, Alboroto, Transformación, Uproar, Ominochoque, cualquier movimiento de dos turnos o cualquier movimiento de recarga.",
		shortDesc: "El objetivo usa inmediatamente su último movimiento.",
		gen8: {
			desc: "El objetivo usa inmediatamente su último movimiento. Falla si no ha usado ningún movimiento, si no tiene PP, si está dinamaxizado, si se prepara para usar Pico cañón, Puño certero o Trampa caparazón, o si el movimiento es Ayuda, Pico cañón, Eructo, Venganza, Feerichoque, Celebración, Cháchara, Pugnachoque, Copión, Cañón Dinamax, Puño certero, Manos juntas, Bola hielo, Mandato, Escudo Real, Feerichoque, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Obstrucción, Enfado, Danza pétalo, Rodar, Trampa caparazón, Esquema, Sonámbulo, Forcejeo, Alboroto, Transformación, Uproar, cualquier Movimiento Máx o Gigamax.",
		},
		gen7: {
			desc: "El objetivo usa inmediatamente su último movimiento. Falla si no ha usado ningún movimiento, si no tiene PP, si se prepara para usar Pico cañón, Puño certero o Trampa caparazón, o si el movimiento es Ayuda, Pico cañón, Eructo, Venganza, Feerichoque, Celebración, Cháchara, Pugnachoque, Copión, Puño certero, Manos juntas, Bola hielo, Mandato, Escudo Real, Feerichoque, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Obstrucción, Enfado, Danza pétalo, Rodar, Trampa caparazón, Esquema, Sonámbulo, Forcejeo, Alboroto, Transformación, Uproar o cualquier Z-Move.",
		},

		activate: "  ¡[TARGET] siguió las órdenes de [POKEMON]!",
	},
	iondeluge: {
		name: "Cortina plasma",
		desc: "Convierte todos los movimientos de tipo Normal en tipo Eléctrico este turno. El efecto ocurre después de otros cambios de tipo.",
		shortDesc: "Los movimientos Normal pasan a Eléctrico este turno.",
		activate: "  ¡Un torrente iónico inunda el campo de batalla!",
	},
	irondefense: {
		name: "Defensa férrea",
		desc: "Aumenta la Defensa del usuario en 2 niveles.",
		shortDesc: "Aumenta la Defensa del usuario en 2.",
	},
	ironhead: {
		name: "Cabeza de hierro",
		desc: "Tiene un 30% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "30% de probabilidad de hacer retroceder al objetivo.",
	},
	irontail: {
		name: "Cola férrea",
		desc: "Tiene un 30% de probabilidad de bajar la Defensa del objetivo en 1 nivel.",
		shortDesc: "30% de probabilidad de bajar Def. en 1 nivel.",
	},
	ivycudgel: {
		name: "Garrote liana",
		desc: "Tiene una mayor probabilidad de crítico. Si el usuario es un Ogerpon, el tipo de este movimiento cambia según su forma: tipo Agua con Máscara fuente, tipo Fuego con Máscara horno y tipo Roca con Máscara cimiento.",
		shortDesc: "Alto ratio de crítico. Tipo según forma.",
	},
	jawlock: {
		name: "Presa maxilar",
		desc: "Impide que el usuario y el objetivo cambien de Pokémon. Ambos aún pueden cambiar si llevan Muda concha o usan Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si alguno sale del campo.",
		shortDesc: "Impide que usuario y objetivo cambien.",
	},
	jetpunch: {
		name: "Puño Jet",
		desc: "Sin efecto adicional.",
		shortDesc: "Suele ir primero.",
	},
	judgment: {
		name: "Sentencia",
		desc: "El tipo de este movimiento depende de la tabla que lleve el usuario.",
		shortDesc: "Tipo varía según la tabla.",
	},
	jumpkick: {
		name: "Patada salto",
		desc: "Si este ataque falla, el usuario recibe daño de retroceso igual a la mitad de sus PS máximos, redondeado hacia abajo. Los Pokémon con la habilidad Muro mágico no sufren daño de retroceso.",
		shortDesc: "Si falla, recibe 1/2 PS máx. de retroceso.",
		gen4: {
			desc: "Si falla, el usuario pierde PS iguales a la mitad de los PS máximos del objetivo si era inmune, redondeado hacia abajo; de lo contrario, pierde la mitad del daño que habría infligido, redondeado hacia abajo, pero no menos de 1 PS ni más de la mitad de los PS máximos del objetivo. Los Pokémon con Muro mágico no se ven afectados.",
			shortDesc: "Si falla, recibe 1/2 del daño que habría infligido.",
		},
		gen3: {
			desc: "Si falla y el objetivo no era inmune, el usuario pierde PS iguales a la mitad del daño que habría infligido, redondeado hacia abajo, pero no menos de 1 PS ni más de la mitad de los PS máximos del objetivo.",
			shortDesc: "Si falla, recibe 1/2 del daño que habría infligido.",
		},
		gen2: {
			desc: "Si falla y el objetivo no era inmune, el usuario pierde PS iguales a 1/8 del daño que habría infligido, redondeado hacia abajo pero no menos de 1 PS.",
			shortDesc: "Si falla, recibe 1/8 del daño que habría infligido.",
		},
		gen1: {
			desc: "Si falla, el usuario recibe 1 PS de daño de retroceso. Si tiene un Sustituto, el daño va al Sustituto del objetivo si lo tiene.",
			shortDesc: "Si falla, recibe 1 PS de retroceso.",
		},
		damage: "#crash",
	},
	junglehealing: {
		name: "Cura selvática",
		desc: "Cada Pokémon del lado del usuario recupera 1/4 de sus PS máximos, redondeado hacia arriba, y se cura su condición de estado.",
		shortDesc: "Usuario y aliados: +1/4 PS y estado curado.",
	},
	karatechop: {
		name: "Golpe kárate",
		desc: "Tiene una mayor probabilidad de golpe crítico.",
		shortDesc: "Alta prob. de golpe crítico.",
	},
	kinesis: {
		name: "Kinético",
		desc: "Reduce la Precisión del objetivo en 1 nivel.",
		shortDesc: "Baja Precisión del objetivo en 1.",
	},
	kingsshield: {
		name: "Escudo real",
		desc: "El usuario se protege de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto con el usuario verán su Ataque reducido en 1 nivel. Los movimientos que no causan daño atraviesan esta protección. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa en último lugar este turno.",
		shortDesc: "Protege de ataques dañinos. Contacto: -1 Atq.",
		gen8: {
			desc: "El usuario se protege de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto con el usuario verán su Ataque reducido en 1 nivel. Los movimientos que no causan daño atraviesan esta protección. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa en último lugar este turno.",
		},
		gen7: {
			desc: "El usuario se protege de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto con el usuario verán su Ataque reducido en 2 niveles. Los movimientos que no causan daño atraviesan esta protección. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa en último lugar este turno.",
			shortDesc: "Protege de ataques dañinos. Contacto: -2 Atq.",
		},
		gen6: {
			desc: "El usuario se protege de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto con el usuario verán su Ataque reducido en 2 niveles. Los movimientos que no causan daño atraviesan esta protección. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa en último lugar este turno.",
		},
	},
	knockoff: {
		name: "Desarme",
		desc: "Si el objetivo lleva un objeto que pueda perderse, ignorando la habilidad Viscosidad, la potencia de este movimiento se multiplica por 1.5. Si el usuario no se ha debilitado, el objetivo pierde su objeto. Este movimiento no puede hacer que Pokémon con la habilidad Viscosidad pierdan su objeto, ni que un Kyogre, un Groudon, un Giratina, un Arceus, un Genesect, un Silvally, un Zacian o un Zamazenta pierdan respectivamente su Prisma azul, su Prisma rojo, su Griseosfera, su tabla, su cartucho, su disco, su Espada oxidada o su Escudo oxidado. Los objetos perdidos con este movimiento no pueden recuperarse con Reciclaje o la habilidad Cosecha.",
		shortDesc: "1.5x daño si el rival lleva objeto. Elimina el objeto.",

		gen7: {
			desc: "Si el objetivo lleva un objeto que pueda perderse, ignorando la habilidad Viscosidad, la potencia de este movimiento se multiplica por 1.5. Si el usuario no se ha debilitado, el objetivo pierde su objeto. Este movimiento no puede eliminar Cristales Z, ni hacer que Pokémon con la habilidad Viscosidad pierdan su objeto, ni que Pokémon capaces de Megaevolucionar pierdan su Mega Piedra, ni que un Kyogre, un Groudon, un Giratina, un Arceus, un Genesect o un Silvally pierdan respectivamente su Prisma azul, su Prisma rojo, su Griseosfera, su tabla, su cartucho o su disco. Los objetos perdidos con este movimiento no pueden recuperarse con Reciclaje o la habilidad Cosecha.",
		},
		gen6: {
			desc: "Si el objetivo lleva un objeto que pueda perderse, ignorando la habilidad Viscosidad, la potencia de este movimiento se multiplica por 1.5. Si el usuario no se ha debilitado, el objetivo pierde su objeto. Este movimiento no puede hacer que Pokémon con la habilidad Viscosidad pierdan su objeto, ni que Pokémon capaces de Megaevolucionar pierdan su Mega Piedra, ni que un Kyogre, un Groudon, un Giratina, un Arceus o un Genesect pierdan respectivamente su Prisma azul, su Prisma rojo, su Griseosfera, su Placa o su ROM. Los objetos perdidos con este movimiento no pueden recuperarse con Reciclaje o la habilidad Cosecha.",
		},
		gen5: {
			desc: "Si el usuario no se ha debilitado, el objetivo pierde su objeto. Este movimiento no puede hacer que Pokémon con la habilidad Viscosidad pierdan su objeto, ni forzar a un Giratina, un Arceus o un Genesect a perder respectivamente su Griseosfera, su tabla o su cartucho. Los objetos perdidos con este movimiento no pueden recuperarse con Reciclaje o la habilidad Cosecha.",
			shortDesc: "Elimina el objeto del objetivo.",
		},
		gen4: {
			desc: "El objetivo pierde su objeto para el resto de la batalla, a menos que sea una Griseosfera o que el objetivo tenga las habilidades Multitipo o Viscosidad. Durante el efecto, el objetivo no puede obtener un nuevo objeto por ningún medio.",
			shortDesc: "El objetivo pierde su objeto y no puede obtener otro.",
		},
		gen3: {
			desc: "El objetivo pierde su objeto para el resto de la batalla, a menos que tenga la habilidad Viscosidad. Durante el efecto, el objetivo no puede conseguir un nuevo objeto por ningún medio.",
		},

		removeItem: "  [SOURCE] despojó a [POKEMON] de su [ITEM]!",
	},
	kowtowcleave: {
		name: "Genufendiente",
		shortDesc: "Este movimiento no comprueba precisión.",
	},
	landswrath: {
		name: "Fuerza telúrica",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea rivales adyacentes.",
	},
	laserfocus: {
		name: "Aguzar",
		desc: "Hasta el final del siguiente turno, los ataques del usuario serán golpes críticos.",
		shortDesc: "Hasta fin sig. turno, movs. usuario son críticos.",

		start: "  ¡[POKEMON] aguzó la concentración!",
	},
	lashout: {
		name: "Desahogo",
		desc: "La potencia se duplica si al usuario le bajó una característica este turno.",
		shortDesc: "Doble pot. si caract. del usuario bajó este turno.",
	},
	lastresort: {
		name: "Última baza",
		desc: "Este movimiento falla a menos que el usuario conozca este movimiento y al menos otro más, y haya usado todos los demás movimientos que conoce al menos una vez cada uno desde que entró a combatir o se Transformó.",
		shortDesc: "Falla salvo que cada mov. conocido se haya usado.",
	},
	lastrespects: {
		name: "Homenaje póstumo",
		desc: "La potencia es igual a 50+(X*50), donde X es el número total de veces que cualquier Pokémon se ha debilitado en el bando del usuario, y X no puede ser mayor que 100.",
		shortDesc: "+50 potencia por cada Pokémon aliado debilitado.",
	},
	lavaplume: {
		name: "Humareda",
		desc: "Tiene un 30% de probabilidad de quemar al objetivo.",
		shortDesc: "30% de quemar Pokémon adyacentes.",
	},
	leafage: {
		name: "Follaje",
		shortDesc: "Sin efecto adicional.",
	},
	leafblade: {
		name: "Hoja aguda",
		desc: "Tiene una mayor probabilidad de golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	leafstorm: {
		name: "Lluevehojas",
		desc: "Baja en dos niveles el ataque especial del usuario.",
		shortDesc: "Baja Atq. Esp. del usuario en 2.",
	},
	leaftornado: {
		name: "Ciclon de hojas",
		desc: "Tiene un 50% de probabilidad de reducir la precision del objetivo en un nivel.",
		shortDesc: "50% de reducir precision del objetivo en 1.",
	},
	leechlife: {
		name: "Chupavidas",
		desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia arriba. Si lleva Raíz grande, la cantidad recuperada es 1.3x la normal, redondeado hacia abajo.",
		shortDesc: "El usuario recupera el 50 % del daño infligido.",
		gen4: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo. Si lleva Raíz grande, la cantidad recuperada es 1.3x la normal, redondeado hacia abajo.",
		},
		gen3: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo.",
		},
	},
	leechseed: {
		name: "Drenadoras",
		desc: "El Pokemon en la posición del usuario roba 1/8 de los PS máximos del objetivo, redondeado hacia abajo, al final de cada turno. Si lleva Raíz grande, la cantidad recuperada es 1.3x la normal, redondeado hacia abajo. Si el objetivo usa Relevo, el sustituto seguirá siendo drenado. Si el objetivo cambia o usa Giro mortífero o Giro rápido con éxito, el efecto termina. Los Pokemon de tipo Planta son inmunes a este movimiento al usarlo, pero no a su efecto.",
		shortDesc: "1/8 de los PS del objetivo se restauran al usuario cada turno.",
		gen8: {
			desc: "El Pokemon en la posición del usuario roba 1/8 de los PS máximos del objetivo, redondeado hacia abajo, al final de cada turno. Si lleva Raíz grande, la cantidad recuperada es 1.3x la normal, redondeado hacia abajo. Si el objetivo usa Relevo, el sustituto seguirá siendo drenado. Si el objetivo cambia o usa Giro rápido con éxito, el efecto termina. Los Pokemon de tipo Planta son inmunes a este movimiento al usarlo, pero no a su efecto.",
		},
		gen3: {
			desc: "El Pokemon en la posición del usuario roba 1/8 de los PS máximos del objetivo, redondeado hacia abajo, al final de cada turno. Si el objetivo usa Relevo, el sustituto seguirá siendo drenado. Si el objetivo cambia o usa Giro rápido, el efecto termina. Los Pokemon de tipo Planta son inmunes a este movimiento al usarlo, pero no a su efecto.",
		},
		gen1: {
			desc: "Al final de cada turno del objetivo, el Pokemon en la posición del usuario roba 1/16 de los PS máximos del objetivo, redondeado hacia abajo y multiplicado por el contador de Tóxico del objetivo, incluso si este tiene menos PS restantes. Si el objetivo cambia o cualquier Pokemon usa Niebla, el efecto termina. Los Pokemon de tipo Planta son inmunes a este movimiento.",
		},

		start: "¡[POKEMON] fue sembrado!",
		end: "¡[POKEMON] quedó libre de Drenadoras!",
		damage: "¡La salud de [POKEMON] es drenada por Drenadoras!",
	},
	leer: {
		name: "Malicioso",
		desc: "Reduce la defensa del objetivo en 1 nivel.",
		shortDesc: "Baja 1 nivel la Def. del rival.",
		gen2: {
			shortDesc: "Baja 1 nivel la Def. del objetivo.",
		},
	},
	letssnuggleforever: {
		name: "Somanta amistosa",
		shortDesc: "Sin efecto adicional.",
	},
	lick: {
		name: "Lengüetazo",
		desc: "Tiene un 30% de probabilidad de paralizar al objetivo.",
		shortDesc: "30% de prob. de paralizar al objetivo.",
	},
	lifedew: {
		name: "Gota vital",
		desc: "Cada Pokémon del equipo del usuario restaura 1/4 de sus PS máximos redondeado al alza.",
		shortDesc: "Cura al usuario y aliados 1/4 PS máx.",
	},
	lightofruin: {
		name: "Luz aniquiladora",
		desc: "Si el objetivo perdió PS, el usuario recibe la mitad del daño sufrido por aquel, redondeado al alza, pero como mínimo 1 PS.",
		shortDesc: "Retroceso 1/2.",
	},
	lightscreen: {
		name: "Pantalla de luz",
		desc: "Durante 5 turnos, el usuario y sus aliados reciben 0.5x de daño de ataques especiales, o 0.66x en Combates Dobles. Los golpes críticos lo ignoran. Se elimina si el usuario o un aliado recibe un golpe de Demolición, Psicocolmillo o Despejar. Dura 8 turnos si lleva Refleluz. Falla si ya está activo en el lado del usuario.",
		shortDesc: "Durante 5 turnos, daño especial a aliados a la mitad.",
		gen6: {
			desc: "Durante 5 turnos, el usuario y sus aliados reciben 0.5x de daño de ataques especiales, o 0.66x en Combates Dobles o Triples. Los golpes críticos lo ignoran. Se elimina si el usuario o un aliado recibe un golpe de Demolición o Despejar. Dura 8 turnos si lleva Refleluz. Falla si ya está activo en el lado del usuario.",
		},
		gen4: {
			desc: "Durante 5 turnos, el usuario y sus aliados reciben 0.5x de daño de ataques especiales, o 0.66x si hay varios Pokémon activos en su lado. Los golpes críticos lo ignoran. Se elimina si el usuario o un aliado recibe un golpe de Demolición o Despejar. Dura 8 turnos si lleva Refleluz. Falla si ya está activo en el lado del usuario.",
		},
		gen3: {
			desc: "Durante 5 turnos, el usuario y sus aliados reciben 0.5x de daño de ataques especiales, o 0.66x si hay varios Pokémon activos en su lado. Los golpes críticos lo ignoran. Se elimina si el usuario o un aliado recibe un golpe de Demolición. Falla si ya está activo en el lado del usuario.",
		},
		gen2: {
			desc: "Durante 5 turnos, la Defensa Especial del usuario y su equipo se duplica. Los golpes críticos lo ignoran. Falla si ya está activo en el lado del usuario.",
			shortDesc: "Durante 5 turnos, equipo con 2x Def. Esp.",
		},
		gen1: {
			desc: "Mientras el usuario permanezca en combate, su Especial se duplica al recibir daño. Los golpes críticos lo ignoran. Termina si alguien usa Hielo.",
			shortDesc: "Mientras activo, Especial 2x al dañarse.",
			start: "  ¡[POKEMON] está protegido contra ataques especiales!",
		},

		start: "  ¡Pantalla de luz fortaleció a [TEAM] contra movimientos especiales!",
		end: "  ¡La Pantalla de luz de [TEAM] desapareció!",
	},
	lightthatburnsthesky: {
		name: "Fotodestrucción apocalíptica",
		desc: "Este movimiento es físico si el Ataque del usuario supera a su Ataque especial, incluidos cambios de etapa. Ignora las habilidades de otros Pokémon.",
		shortDesc: "Físico si Atq. > Atq. Esp. Ignora Hab.",
	},
	liquidation: {
		name: "Hidroariete",
		desc: "Tiene un 20% de probabilidad de bajar un nivel la Defensa del objetivo.",
		shortDesc: "20% de prob. de bajar Def. del objetivo en 1.",
	},
	lockon: {
		name: "Fijar blanco",
		desc: "Hasta el final del siguiente turno, el objetivo no puede evadir los movimientos del usuario, incluso si está en medio de un movimiento de dos turnos. El efecto termina si el usuario o el objetivo abandona el campo. Falla si este efecto ya está activo para el usuario.",
		shortDesc: "El siguiente movimiento del usuario no fallará al objetivo.",
		gen4: {
			desc: "Hasta el final del siguiente turno, el objetivo no puede evadir los movimientos del usuario, incluso si está en medio de un movimiento de dos turnos. Cuando este efecto se inicia contra el objetivo, los efectos de este movimiento y de Telépata terminan para todos los demás Pokémon que ataquen a ese objetivo. Si el objetivo abandona el campo usando Relevo, el sustituto permanece bajo este efecto. Si el usuario abandona el campo usando Relevo, este efecto se reinicia contra el mismo objetivo para el sustituto. El efecto termina si el usuario o el objetivo abandona el campo.",
		},
		gen2: {
			desc: "La siguiente comprobación de precisión contra el objetivo tendrá éxito. El objetivo aún puede evadir Terremoto, Fisura y Magnitud si está usando Buceo. Si el objetivo abandona el campo usando Relevo, el sustituto permanece bajo este efecto. Este efecto termina cuando el objetivo abandona el campo o se hace una comprobación de precisión contra él.",
			shortDesc: "El siguiente movimiento no fallará al objetivo.",
		},

		start: "  ¡[SOURCE] se preparó para atacar a [POKEMON]!",
	},
	lovelykiss: {
		name: "Beso amoroso",
		shortDesc: "Hace que el objetivo caiga dormido.",
	},
	lowkick: {
		name: "Patada baja",
		desc: "Este movimiento tiene 20 de potencia si el objetivo pesa menos de 10 kg, 40 si pesa menos de 25 kg, 60 si pesa menos de 50 kg, 80 si pesa menos de 100 kg, 100 si pesa menos de 200 kg y 120 si pesa 200 kg o más.",
		shortDesc: "Más potencia cuanto más pesado está el objetivo.",
		gen2: {
			desc: "Tiene un 30 % de probabilidad de hacer retroceder al objetivo.",
			shortDesc: "30 % de probabilidad de hacer retroceder al objetivo.",
		},
	},
	lowsweep: {
		name: "Puntapié",
		desc: "Tiene un 100% de probabilidad de bajar la Velocidad del objetivo en 1 nivel.",
		shortDesc: "100% de prob. de bajar 1 nivel la Vel. del objetivo.",
	},
	luckychant: {
		name: "Conjuro",
		desc: "Durante 5 turnos, ni el usuario ni su equipo pueden recibir un golpe crítico. Falla si el efecto ya está activo en el equipo del usuario.",
		shortDesc: "5 turnos, protege al equipo de golpes críticos.",

		start: "  ¡Conjuro protegió a [TEAM] de golpes críticos!",
		end: "  ¡El Conjuro de [TEAM] terminó!",
	},
	luminacrash: {
		name: "Fotocolisión",
		desc: "Tiene un 100% de probabilidad de bajar la Defensa Especial del objetivo en 2 niveles.",
		shortDesc: "100% de prob. de bajar 2 niveles la Def. Esp. del objetivo.",
	},
	lunarblessing: {
		name: "Plegaria lunar",
		desc: "Cada Pokémon del equipo del usuario restaura 1/4 de sus PS máximos redondeado al alza y cura sus problemas de estado.",
		shortDesc: "Equipo: cura 1/4 PS máx. y estado.",
	},
	lunardance: {
		name: "Danza lunar",
		desc: "El usuario cae debilitado y, si el Pokémon que lo reemplaza no tiene los PS o PP al máximo, o padece una condición de estado no volátil, sus PS y PP se restauran por completo y se cura cualquier condición de estado no volátil. El reemplazo entra al final del turno y la curación ocurre antes de que entren en efecto los peligros de entrada. Este efecto continúa hasta que un Pokémon que cumpla alguna de estas condiciones cambie a la posición del usuario o entre mediante Cambio aliado. Falla si el usuario es el último Pokémon no debilitado de su equipo.",
		shortDesc: "Usuario se debilita. Reemplazo curado y PS/PP llenos.",
		gen7: {
			desc: "El usuario cae debilitado y el Pokémon que lo reemplaza recupera por completo sus PS y PP y se cura de cualquier condición de estado no volátil. El reemplazo entra al final del turno y la curación ocurre antes de que entren en efecto los peligros de entrada. Falla si el usuario es el último Pokémon no debilitado de su equipo.",
			shortDesc: "Usuario se debilita. Reemplazo totalmente curado.",
		},
		gen4: {
			desc: "El usuario cae debilitado y el Pokémon que lo reemplaza recupera por completo sus PS y PP y se cura de cualquier condición de estado no volátil. El reemplazo entra inmediatamente y la curación ocurre después de que entren en efecto los peligros de entrada. Falla si el usuario es el último Pokémon no debilitado de su equipo.",
		},

		heal: "  ¡[POKEMON] quedó envuelto en un místico resplandor lunar!",
	},
	lunge: {
		name: "Plancha",
		desc: "Tiene un 100% de probabilidad de bajar un nivel el Ataque del objetivo.",
		shortDesc: "100% de prob. de bajar Atq. del objetivo en 1.",
	},
	lusterpurge: {
		name: "Resplandor",
		desc: "Tiene un 50% de probabilidad de bajar un nivel la Defensa Especial del objetivo.",
		shortDesc: "50% de prob. de bajar Def. Esp. del objetivo en 1.",
	},
	machpunch: {
		name: "Ultrapuño",
		desc: "Ningún efecto adicional.",
		shortDesc: "Suele ir primero.",
	},
	magicalleaf: {
		name: "Hoja mágica",
		shortDesc: "Este movimiento ignora la precisión.",
	},
	magicaltorque: {
		name: "Feerichoque",
		desc: "Tiene un 30 % de probabilidad de confundir al objetivo.",
		shortDesc: "30 % de probabilidad de confundir al objetivo.",
	},
	magiccoat: {
		name: "Capa mágica",
		desc: "Hasta el final del turno, el usuario no se ve afectado por ciertos movimientos de categoría de estado dirigidos a él y, en su lugar, devolverá dichos movimientos al usuario original. Los movimientos reflejados de esta manera no pueden volver a reflejarse ni por este movimiento ni por el efecto de la habilidad Espejo mágico. Púas, Trampa rocas, Red viscosa y Púas tóxicas solo pueden reflejarse una vez por bando, por el Pokémon más a la izquierda bajo este efecto o bajo el efecto de la habilidad Espejo mágico. Las habilidades Pararrayos y Colector redirigen sus respectivos movimientos antes de que este movimiento surta efecto.",
		shortDesc: "Devuelve ciertos movimientos de estado.",
		gen5: {
			desc: "Hasta el final del turno, el usuario no se ve afectado por ciertos movimientos de categoría de estado dirigidos a él y, en su lugar, devolverá dichos movimientos al usuario original. Los movimientos reflejados de esta manera no pueden volver a reflejarse ni por este movimiento ni por el efecto de la habilidad Espejo mágico. Púas, Trampa rocas y Púas tóxicas solo pueden reflejarse una vez por bando, por el Pokémon más a la izquierda bajo este efecto o bajo el efecto de la habilidad Espejo mágico. Las habilidades Pararrayos y Colector redirigen sus respectivos movimientos antes de que este movimiento surta efecto.",
		},
		gen4: {
			desc: "El usuario no se ve afectado por ciertos movimientos de categoría de estado dirigidos a él y, en su lugar, devolverá dichos movimientos al usuario original. Si el movimiento afecta a ambos Pokémon oponentes, el Pokémon bajo este efecto reflejará el movimiento solo contra el usuario original. El efecto termina una vez que se refleja un movimiento o al final del turno. Las habilidades Pararrayos y Colector redirigen sus respectivos movimientos antes de que este movimiento surta efecto.",
		},
		gen3: {
			desc: "El usuario no se ve afectado por ciertos movimientos de categoría de estado dirigidos a él y, en su lugar, devolverá dichos movimientos al usuario original. Si el movimiento afecta a ambos Pokémon oponentes y el Pokémon bajo este efecto está a la izquierda, reflejará el movimiento dirigido a ambos Pokémon oponentes y su compañero no se verá afectado; de lo contrario, si está a la derecha, su compañero se verá afectado y este Pokémon reflejará el movimiento solo contra el usuario original. El efecto termina una vez que se refleja un movimiento o al final del turno. Los movimientos reflejados de esta manera pueden volver a reflejarse por otro Pokémon bajo este efecto. Si el usuario tiene la habilidad Insonorizar, ésta anula los movimientos de tipo sonido antes de que ocurra este efecto. La habilidad Pararrayos redirige los movimientos de tipo eléctrico antes de que este movimiento surta efecto.",
		},

		start: "  ¡[POKEMON] se cubrió con Capa mágica!",
		move: "¡[POKEMON] devolvió el [MOVE]!",
	},
	magicpowder: {
		name: "Polvo mágico",
		desc: "Transforma al objetivo en tipo psíquico. Falla si el objetivo es un Arceus o un Silvally, si ya es únicamente de tipo psíquico, o si está teracristalizado.",
		shortDesc: "Cambia tipo del objetivo a psíquico.",
		gen8: {
			desc: "Transforma al objetivo en tipo psíquico. Falla si el objetivo es un Arceus o un Silvally, o si ya es únicamente de tipo psíquico.",
		},
	},
	magicroom: {
		name: "Zona mágica",
		desc: "Durante 5 turnos, los objetos equipados de todos los Pokémon activos no tienen efecto. El efecto de cambio de forma de los objetos no se ve afectado, pero se anulan los demás. Durante el efecto, no pueden usarse Lanzamiento ni Don natural. Si este movimiento se usa mientras está activo, el efecto termina.",
		shortDesc: "5 turnos, los objetos equipados no tienen efecto.",
	},
	magmastorm: {
		name: "Lluvia ígnea",
		desc: "Evita que el objetivo cambie de Pokémon durante 4-5 turnos (7 si el usuario lleva Garra garfio). Al final de cada turno durante el efecto, causa daño igual a 1/8 de los PS máximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo. El objetivo aún puede cambiarse usando Muda concha o los movimientos Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el campo, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se restablece al usar este u otro movimiento de aprisionamiento.",
		shortDesc: "Atrapa y daña 4-5 turnos.",
		gen8: {
			desc: "Evita que el objetivo cambie de Pokémon durante 4-5 turnos (7 si el usuario lleva Garra garfio). Al final de cada turno, causa daño igual a 1/8 de los PS máximos del objetivo (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo.",
		},
		gen7: {
			desc: "Evita que el objetivo cambie de Pokémon durante 4-5 turnos (7 si el usuario lleva Garra garfio). Al final de cada turno, causa daño igual a 1/8 de los PS máximos del objetivo, redondeado hacia abajo.",
		},
		gen5: {
			desc: "Evita que el objetivo cambie de Pokémon durante 4-5 turnos (7 si el usuario lleva Garra garfio). Al final de cada turno, causa daño igual a 1/16 de los PS máximos del objetivo, redondeado hacia abajo.",
		},
		gen4: {
			desc: "Evita que el objetivo cambie de Pokémon durante 2-5 turnos (siempre 5 turnos si el usuario lleva Garra garfio). Al final de cada turno, causa daño igual a 1/16 de los PS máximos del objetivo, redondeado hacia abajo.",
			shortDesc: "Atrapa y daña 2-5 turnos.",
		},

		start: "  ¡[POKEMON] quedó aprisionado por la lluvia ígnea!",
	},
	magnetbomb: {
		name: "Bomba imán",
		shortDesc: "No comprueba precisión.",
	},
	magneticflux: {
		name: "Aura magnética",
		desc: "Aumenta en un nivel la Defensa y la Defensa Especial de los Pokemon en el lado del usuario con la habilidad Más o Menos.",
		shortDesc: "Aumenta Def. y Def. Esp. de aliados con Más/Menos en 1.",
	},
	magnetrise: {
		name: "Levitón",
		desc: "Durante 5 turnos, el usuario es inmune a ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas, Red viscosa y la habilidad Trampa Arena mientras esté activo. Si usa Relevo, el reemplazo obtendrá el efecto. Arraigo, Antiaéreo, Mil flechas y Bola férrea anulan este movimiento si el usuario está bajo alguno de sus efectos. Falla si el usuario ya está bajo este efecto o bajo los de Arraigo, Antiaéreo o Mil flechas.",
		shortDesc: "Durante 5 turnos, inmunidad a Tierra.",
		gen5: {
			desc: "Durante 5 turnos, el usuario es inmune a ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas y la habilidad Trampa Arena mientras esté activo. Si usa Relevo, el reemplazo obtendrá el efecto. Arraigo, Antiaéreo y Bola férrea anulan este movimiento si el usuario está bajo alguno de sus efectos. Falla si el usuario ya está bajo este efecto o los de Arraigo o Antiaéreo.",
		},
		gen4: {
			desc: "Durante 5 turnos, el usuario es inmune a ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas y la habilidad Trampa Arena mientras esté activo. Si usa Relevo, el reemplazo obtendrá el efecto. Arraigo y Bola férrea anulan este movimiento si el usuario está bajo alguno de sus efectos. Falla si el usuario ya está bajo este efecto o el de Arraigo.",
		},

		start: "  ¡[POKEMON] se elevó con electromagnetismo!",
		end: "  ¡El electromagnetismo de [POKEMON] desapareció!",
	},
	magnitude: {
		name: "Magnitud",
		desc: "La potencia de este movimiento varía: 5% de probabilidad de 10 o 150, 10% de 30 o 110, 20% de 50 o 90 y 30% de 70. El daño se duplica si el objetivo está usando Excavar.",
		shortDesc: "Golpea a Pokemon adyacentes. Potencia variable; 2x con Excavar.",
		gen4: {
			desc: "La potencia de este movimiento varía. 5% de probabilidad de 10 o 150, 10% de 30 o 110, 20% de 50 o 90 y 30% de 70. La potencia se duplica si el objetivo está usando Excavar.",
		},

		activate: "  ¡Magnitud [NUMBER]!",
	},
	makeitrain: {
		name: "Fiebre dorada",
		desc: "Baja en un nivel el Ataque Especial del usuario.",
		shortDesc: "Baja Atq. Esp. del usuario en 1. Afecta a ambos oponentes.",

		activate: "#payday",
	},
	maliciousmoonsault: {
		name: "Hiperplancha oscura",
		desc: "El daño se duplica y no se comprueba la precisión si el objetivo usó Reducción mientras estaba activo.",
		shortDesc: "Daño x2 si el objetivo usó Reducción.",
	},
	malignantchain: {
		name: "Cadena virulenta",
		desc: "Tiene un 50 % de probabilidad de envenenar gravemente al objetivo.",
		shortDesc: "50 % de probabilidad de envenenar gravemente al objetivo.",
	},
	matblock: {
		name: "Escudo tatami",
		desc: "El usuario y sus compañeros están protegidos de ataques que causan daño realizados por otros Pokémon, incluidos aliados, durante este turno. Falla a menos que sea el primer turno del usuario en el campo, el usuario se mueva último este turno o este movimiento ya esté en efecto para el bando del usuario.",
		shortDesc: "Protege aliados de ataques que dañan. Solo turno 1.",

		start: "  ¡[POKEMON] se dispone a alzar un tatami y bloquear ataques entrantes!",
		block: "  ¡[MOVE] fue bloqueado por el tatami levantado!",
	},
	matchagotcha: {
		name: "Cañón batidor",
		desc: "Tiene un 20 % de probabilidad de quemar al objetivo. El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia arriba. Si lleva Raíz grande, los PS recuperados son 1,3x los normales, redondeado hacia abajo. El objetivo se descongela si estaba congelado.",
		shortDesc: "20 % quemar. Recupera 50 % del daño. Descongela.",
	},
	maxairstream: {
		name: "Maxiciclón",
		desc: "La potencia es igual a la potencia de la Movimiento Máximo base. Si este movimiento tiene éxito, la Velocidad de cada Pokémon del bando del usuario sube 1 nivel, incluso si tienen sustituto. Este efecto no ocurre si el usuario no está Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia basada en Movimiento Máximo. Aliados: +1 Vel.",
	},
	maxdarkness: {
		name: "Maxisombra",
		desc: "La potencia es igual a la del movimiento Dinamax base. Si este movimiento tiene éxito, la Defensa Especial de cada Pokémon del equipo contrario baja 1 nivel, incluso si tienen sustituto. Este efecto no ocurre si el usuario no está Dinamax. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Pot. según mov. base. Rivales: -1 Def. Esp.",
	},
	maxflare: {
		name: "Maxignición",
		desc: "La potencia es igual a la del movimiento Dinamax base. Si este movimiento tiene éxito, comienza el efecto de Día soleado. Este efecto no ocurre si el usuario no está Dinamax. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Pot. según mov. base. Activa Día soleado.",
	},
	maxflutterby: {
		name: "Maxinsecto",
		desc: "La potencia es igual a la del movimiento Dinamax base. Si este movimiento tiene éxito, el Ataque Especial de cada Pokémon del equipo contrario baja 1 nivel, incluso si tienen sustituto. Este efecto no ocurre si el usuario no está Dinamax. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Pot. según mov. base. Rivales: -1 Atq. Esp.",
	},
	maxgeyser: {
		name: "Maxichorro",
		desc: "La potencia es igual a la del movimiento Dinamax base. Si este movimiento tiene éxito, comienza el efecto de Danza lluvia. Este efecto no ocurre si el usuario no está Dinamax. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Pot. según mov. base. Activa Danza lluvia.",
	},
	maxguard: {
		name: "Maxibarrera",
		desc: "El usuario queda protegido de casi todos los ataques durante este turno, incluidos movimientos Dinamax y Gigamax. Este movimiento tiene probabilidad 1/X de tener éxito, donde X empieza en 1 y se triplica tras cada uso exitoso. X se restablece a 1 si falla, si el último movimiento del usuario no fue Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de ellos y la protección se rompió. Falla si el usuario actúa último.",
		shortDesc: "Protege al usuario de ataques y movimientos Dinamax este turno.",
		activate: "  ¡[POKEMON] se protegió!",
	},
	maxhailstorm: {
		name: "Maxihelada",
		desc: "La potencia es igual a la del movimiento Dinamax base. Si este movimiento tiene éxito, comienza el efecto de Granizo. Este efecto no ocurre si el usuario no está Dinamax. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Pot. según mov. base. Activa Granizo.",
	},
	maxknuckle: {
		name: "Maxipuño",
		desc: "La potencia es igual a la del movimiento Dinamax base. Si este movimiento tiene éxito, el Ataque del usuario y sus aliados sube 1 nivel. Este efecto no ocurre si el usuario no está Dinamax. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Pot. según mov. base. Aliados: +1 Atq.",
	},
	maxlightning: {
		name: "Maxitormenta",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, comienza Campo eléctrico. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Inicia Campo eléctrico.",
	},
	maxmindstorm: {
		name: "Maxionda",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, comienza Campo psíquico. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Inicia Campo psíquico.",
	},
	maxooze: {
		name: "Maxiácido",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, aumenta en un nivel el Ataque Especial de cada Pokémon del lado del usuario, incluso con sustituto. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Aliados: +1 Atq. Esp.",
	},
	maxovergrowth: {
		name: "Maxiflora",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, comienza Campo de hierba. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Inicia Campo de hierba.",
	},
	maxphantasm: {
		name: "Maxiespectro",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, reduce en 1 el Ataque de cada Pokémon del lado rival, incluso con sustituto. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Rivales: -1 Atq.",
	},
	maxquake: {
		name: "Maxitemblor",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, aumenta en un nivel la Defensa Especial de cada Pokémon del lado del usuario, incluso con sustituto. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Aliados: +1 Def. Esp.",
	},
	maxrockfall: {
		name: "Maxilito",
		desc: "La potencia equivale a la del Movimiento Dinamax base. Si este movimiento tiene éxito, comienza Tormenta de arena. Este efecto no ocurre si el usuario no está en estado Dinamax. Si se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento. Inicia Tormenta de arena.",
	},
	maxstarfall: {
		name: "Maxiestela",
		desc: "La potencia es igual a la potencia de movimiento Dinamax base. Si este movimiento tiene éxito, comienza el efecto de Campo de niebla. Este efecto no ocurre si el usuario no está dinamaxizado. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento Dinamax. Inicia Campo de niebla.",
	},
	maxsteelspike: {
		name: "Maximetal",
		desc: "La potencia es igual a la potencia de movimiento Dinamax base. Si este movimiento tiene éxito, la Defensa de cada Pokemon del bando del usuario sube 1 nivel, incluso si tienen sustituto. Este efecto no ocurre si el usuario no está dinamaxizado. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento Dinamax. Aliados: +1 Def.",
	},
	maxstrike: {
		name: "Maxiataque",
		desc: "La potencia es igual a la potencia de movimiento Dinamax base. Si este movimiento tiene éxito, la Velocidad de cada Pokemon del bando oponente baja 1 nivel, incluso si tienen sustituto. Este efecto no ocurre si el usuario no está dinamaxizado. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento Dinamax. Enemigos: -1 Vel.",
	},
	maxwyrmwind: {
		name: "Maxidraco",
		desc: "La potencia es igual a la potencia de movimiento Dinamax base. Si este movimiento tiene éxito, el Ataque de cada Pokemon del bando oponente baja 1 nivel, incluso si tienen sustituto. Este efecto no ocurre si el usuario no está dinamaxizado. Si este movimiento se usa como movimiento base, inflige daño con potencia 0.",
		shortDesc: "Potencia según movimiento Dinamax. Enemigos: -1 Atq.",
	},
	meanlook: {
		name: "Mal de ojo",
		desc: "Impide que el objetivo cambie de Pokemon. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandonan el campo.",
		shortDesc: "Impide al objetivo cambiar de Pokemon.",
		gen7: {
			desc: "Impide que el objetivo cambie de Pokemon. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si el objetivo abandona el campo con Relevo, el sustituto permanece atrapado. El efecto termina si el usuario abandona el campo.",
		},
		gen5: {
			desc: "Impide que el objetivo cambie de Pokemon. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Ida y vuelta o Voltiocambio. Si el objetivo abandona el campo con Relevo, el sustituto permanece atrapado. El efecto termina si el usuario abandona el campo.",
		},
		gen4: {
			desc: "Impide que el objetivo cambie de Pokemon. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo o Ida y vuelta. Si el objetivo abandona el campo con Relevo, el sustituto permanece atrapado. El efecto termina si el usuario abandona el campo, a menos que use Relevo, en cuyo caso el objetivo seguirá atrapado.",
		},
		gen3: {
			desc: "Impide que el objetivo cambie de Pokemon. El objetivo aún puede cambiar si usa Relevo. Si el objetivo abandona el campo con Relevo, el sustituto permanece atrapado. El efecto termina si el usuario abandona el campo, a menos que use Relevo, en cuyo caso el objetivo seguirá atrapado.",
		},
	},
	meditate: {
		name: "Meditación",
		desc: "Sube 1 nivel el Ataque del usuario.",
		shortDesc: "Sube 1 nivel el Atq. del usuario.",
	},
	mefirst: {
		name: "Yo primero",
		desc: "El usuario emplea el movimiento que el objetivo eligió usar este turno contra él, si es posible, con su potencia multiplicada por 1,5. El movimiento debe ser un movimiento que cause daño, distinto de Pico cañón, Eructo, Pirochoque, Pugnachoque, Resarcimiento, Contraataque, Antojo, Puño certero, Feerichoque, Yo primero, Represión metal, Manto espejo, Ponzochoque, Cepo, Forcejeo, Ladrón u Ominochoque. Falla si el objetivo se mueve antes que el usuario. Ignora el sustituto del objetivo a efectos de copiar el movimiento.",
		shortDesc: "Copia un rival con potencia x1,5. Usuario debe ser más rápido.",
		gen8: {
			desc: "El usuario emplea el movimiento que el objetivo eligió usar este turno contra él, si es posible, con su potencia multiplicada por 1,5. El movimiento debe ser un movimiento que cause daño, distinto de Pico cañón, Eructo, Cháchara, Contraataque, Antojo, Puño certero, Feerichoque, Yo primero, Represión metal, Manto espejo, Cepo, Forcejeo o Ladrón. Falla si el objetivo se mueve antes que el usuario. Ignora el sustituto del objetivo a efectos de copiar el movimiento.",
		},
		gen7: {
			desc: "El usuario emplea el movimiento que el objetivo eligió usar este turno contra él, si es posible, con su potencia multiplicada por 1,5. El movimiento debe ser un movimiento que cause daño, distinto de Pico cañón, Eructo, Cháchara, Contraataque, Antojo, Puño certero, Yo primero, Represión metal, Manto espejo, Cepo, Forcejeo, Ladrón o cualquier Movimiento Z. Falla si el objetivo se mueve antes que el usuario. Ignora el sustituto del objetivo a efectos de copiar el movimiento.",
		},
		gen6: {
			desc: "El usuario emplea el movimiento que el objetivo eligió usar este turno contra él, si es posible, con su potencia multiplicada por 1,5. El movimiento debe ser un movimiento que cause daño, distinto de Eructo, Cháchara, Contraataque, Antojo, Puño certero, Yo primero, Represión metal, Manto espejo, Forcejeo o Ladrón. Falla si el objetivo se mueve antes que el usuario. Ignora el sustituto del objetivo a efectos de copiar el movimiento.",
		},
		gen5: {
			desc: "El usuario emplea el movimiento que el objetivo eligió usar este turno contra él, si es posible, con su potencia multiplicada por 1,5. El movimiento debe ser un movimiento que cause daño, distinto de Cháchara, Contraataque, Antojo, Puño certero, Yo primero, Represión metal, Manto espejo, Forcejeo o Ladrón. Falla si el objetivo se mueve antes que el usuario. Ignora el sustituto del objetivo a efectos de copiar el movimiento.",
		},
		gen4: {
			desc: "El usuario emplea el movimiento que el objetivo eligió usar este turno contra él, si es posible, con su potencia multiplicada por 1,5. El movimiento debe ser un movimiento que cause daño, distinto de Cháchara, Contraataque, Antojo, Puño certero, Yo primero, Manto espejo, Forcejeo o Ladrón. Falla si el objetivo se mueve antes que el usuario. Ignora el sustituto del objetivo a efectos de copiar el movimiento.",
		},
	},
	megadrain: {
		name: "Megaagotar",
		desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia arriba. Si lleva Raíz grande, los PS recuperados son 1,3x los normales, redondeado hacia abajo.",
		shortDesc: "El usuario recupera el 50 % del daño infligido.",
		gen4: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo. Si lleva Raíz grande, los PS recuperados son 1,3x los normales, redondeado hacia abajo.",
		},
		gen3: {
			desc: "El usuario recupera la mitad de los PS perdidos por el objetivo, redondeado hacia abajo.",
		},
	},
	megahorn: {
		name: "Megacuerno",
		shortDesc: "Sin efecto adicional.",
	},
	megakick: {
		name: "Megapatada",
		shortDesc: "Sin efecto adicional.",
	},
	megapunch: {
		name: "Megapuño",
		shortDesc: "Sin efecto adicional.",
	},
	memento: {
		name: "Legado",
		desc: "Reduce en 2 niveles el Ataque y el Ataque Especial del objetivo. El usuario se debilita a menos que el movimiento falle o no haya objetivo. Falla por completo si golpea un sustituto, pero no falla si no se pueden cambiar las estadísticas del objetivo.",
		shortDesc: "Reduce Atq. y Atq. Esp. en 2. Usuario se debilita.",
		gen4: {
			desc: "Reduce en 2 niveles el Ataque y el Ataque Especial del objetivo. El usuario se debilita, incluso si el movimiento falla. Este movimiento puede golpear objetivos en medio de un movimiento de dos turnos. Falla por completo si no hay objetivo, pero no falla si no se pueden cambiar las estadísticas del objetivo.",
		},
		gen3: {
			desc: "Reduce en 2 niveles el Ataque y el Ataque Especial del objetivo. El usuario se debilita. Este movimiento no comprueba precisión y puede golpear objetivos en medio de un movimiento de dos turnos. Falla por completo si las etapas de Ataque y Ataque Especial del objetivo ya están en -6.",
		},

		heal: "  ¡[POKEMON] recuperó todos sus PS con el Poder Z!",
	},
	menacingmoonrazemaelstrom: {
		name: "Deflagración lunar",
		desc: "Este movimiento y sus efectos ignoran las habilidades de otros Pokemon.",
		shortDesc: "Ignora habilidades de otros Pokemon.",
	},
	metalburst: {
		name: "Represión metal",
		desc: "Inflige al último Pokémon oponente que golpeó al usuario este turno con un ataque físico o especial un daño igual a 1,5x los PS perdidos por el usuario en ese ataque, redondeado hacia abajo. Si el usuario no perdió PS por ese ataque, este movimiento inflige 1 PS de daño. Si la posición de ese Pokémon oponente ya no está en uso y hay otro Pokémon oponente en el campo, el daño se inflige a este en su lugar. Solo se cuenta el último impacto de un ataque de varios golpes. Falla si el usuario no fue golpeado por un ataque físico o especial de un Pokémon oponente este turno.",
		shortDesc: "Si recibe un ataque, devuelve x1,5 de daño.",
		gen6: {
			desc: "Inflige al último Pokémon oponente que golpeó al usuario este turno con un ataque físico o especial un daño igual a 1,5x los PS perdidos por el usuario en ese ataque, redondeado hacia abajo. Si el usuario no perdió PS por ese ataque, este movimiento inflige 1 PS de daño. Si la posición de ese Pokémon oponente ya no está en uso, el daño se inflige a un Pokémon oponente aleatorio en rango. Solo se cuenta el último impacto de un ataque de varios golpes. Falla si el usuario no fue golpeado por un ataque físico o especial de un Pokémon oponente este turno.",
		},
		gen4: {
			desc: "Inflige al último Pokémon oponente que golpeó al usuario este turno con un ataque físico o especial un daño igual a 1,5x los PS perdidos por el usuario en ese ataque, redondeado hacia abajo. Si la posición de ese Pokémon oponente ya no está en uso y hay otro Pokémon oponente en el campo, el daño se inflige a este en su lugar. Solo se cuenta el último impacto de un ataque de varios golpes. Falla si el usuario no fue golpeado por un ataque físico o especial de un Pokémon oponente este turno o si el usuario no perdió PS por ese ataque.",
		},
	},
	metalclaw: {
		name: "Garra metal",
		desc: "Tiene un 10 % de probabilidad de aumentar un nivel el Ataque del usuario.",
		shortDesc: "10 % de probabilidad de subir 1 nivel el Atq. del usuario.",
	},
	metalsound: {
		name: "Eco metálico",
		desc: "Reduce en 2 niveles la Defensa Especial del objetivo.",
		shortDesc: "Baja 2 niveles la Def. Esp. del objetivo.",
	},
	meteorassault: {
		name: "Asalto estelar",
		desc: "Si el movimiento tiene éxito, el usuario debe recargar en el siguiente turno y no puede seleccionar un movimiento.",
		shortDesc: "El usuario no puede actuar el siguiente turno.",
	},
	meteorbeam: {
		name: "Rayo meteórico",
		desc: "Este ataque se carga el primer turno y ataca en el segundo. Sube 1 nivel el Ataque Especial del usuario en el primer turno. Si el usuario lleva Hierba única, el movimiento se completa en un turno.",
		shortDesc: "Sube 1 nivel el Atq. Esp. en el 1er turno. Ataca en el 2do.",
		prepare: "¡[POKEMON] rebosa poder espacial!",
	},
	meteormash: {
		name: "Puño meteoro",
		desc: "Tiene un 20 % de probabilidad de aumentar 1 nivel el Ataque del usuario.",
		shortDesc: "20 % de subir 1 nivel el Atq. del usuario.",
	},
	metronome: {
		name: "Metrónomo",
		desc: "Se selecciona un movimiento al azar para usar, excepto After You, Apple Acid, Armor Cannon, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Blazing Torque, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Chilling Water, Chilly Reception, Clangorous Soul, Collision Course, Combat Torque, Comeuppance, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Doodle, Double Iron Bash, Double Shock, Dragon Ascent, Dragon Energy, Drum Beating, Dynamax Cannon, Electro Drift, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fillet Away, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyper Drill, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jet Punch, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Magical Torque, Make It Rain, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Noxious Torque, Obstruct, Order Up, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Population Bomb, Pounce, Power Shift, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Fist, Rage Powder, Raging Bull, Raging Fury, Relic Song, Revival Blessing, Ruination, Salt Cure, Secret Sword, Shed Tail, Shell Trap, Silk Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Snowscape, Spectral Thief, Spicy Extract, Spiky Shield, Spirit Break, Spotlight, Springtide Storm, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Tera Starstorm, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Tidy Up, Trailblaze, Transform, Trick, Twin Beam, V-create, Wicked Blow, Wicked Torque, or Wide Guard.",
		shortDesc: "Elige un movimiento al azar.",
		gen8: {
			desc: "Se selecciona un movimiento al azar para usar, excepto After You, Apple Acid, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Clangorous Soul, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Double Iron Bash, Dragon Ascent, Dragon Energy, Dragon Hammer, Drum Beating, Dynamax Cannon, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Obstruct, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spirit Break, Spotlight, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Transform, Trick, V-create, Wicked Blow, or Wide Guard.",
		},
		gen7: {
			desc: "Se selecciona un movimiento al azar para usar, excepto After You, Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Dragon Ascent, Endure, Feint, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, King's Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Nature Power, Origin Pulse, Photon Geyser, Plasma Fists, Precipice Blades, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spotlight, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
		},
		gen6: {
			desc: "Se selecciona un movimiento al azar para usar, excepto After You, Assist, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Dragon Ascent, Endure, Feint, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Hold Hands, Hyperspace Fury, Hyperspace Hole, Ice Burn, King's Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Origin Pulse, Precipice Blades, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spiky Shield, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
		},
		gen5: {
			desc: "Se selecciona un movimiento al azar para usar, excepto After You, Assist, Bestow, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Endure, Feint, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Ice Burn, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Sketch, Sleep Talk, Snarl, Snatch, Snore, Struggle, Switcheroo, Techno Blast, Thief, Transform, Trick, V-create, or Wide Guard.",
		},
		gen4: {
			desc: "Se selecciona un movimiento al azar para usar, excepto Assist, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Protect, Sketch, Sleep Talk, Snatch, Struggle, Switcheroo, Thief, Trick, o cualquier movimiento que el usuario ya conozca.",
		},
		gen3: {
			desc: "Se selecciona un movimiento al azar para usar, excepto Counter, Covet, Destiny Bond, Detect, Endure, Focus Punch, Follow Me, Helping Hand, Metronome, Mimic, Mirror Coat, Protect, Sketch, Sleep Talk, Snatch, Struggle, Thief, o Trick.",
		},
		gen2: {
			desc: "Se selecciona un movimiento al azar para usar, excepto Counter, Destiny Bond, Detect, Endure, Metronome, Mimic, Mirror Coat, Protect, Sketch, Sleep Talk, Struggle, Thief, o cualquier movimiento que el usuario ya conozca.",
		},
		gen1: {
			desc: "Se selecciona un movimiento al azar para usar, excepto Metronome o Struggle.",
		},

		move: "Sacudiendo un dedo, usó [MOVE].",
	},
	mightycleave: {
		name: "Filo potente",
		shortDesc: "Ignora la protección sin romperla.",
	},
	milkdrink: {
		name: "Batido",
		desc: "El usuario restaura la mitad de sus PS máximos, redondeado hacia arriba.",
		shortDesc: "Restaura el 50 % de los PS máximos del usuario.",
		gen4: {
			desc: "El usuario restaura la mitad de sus PS máximos, redondeado hacia abajo.",
		},
	},
	mimic: {
		name: "Mimético",
		desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene la máxima PP. Falla si el objetivo no ha usado ningún movimiento, si el usuario se ha Transformado, si ya conoce el movimiento o si el movimiento es Ayuda, Embate supremo, Tajo supremo, Eructo, Pirochoque, Celebración, Cháchara, Pugnachoque, Copión, Cañón Dinamax, Manos juntas, Feerichoque, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Esquema, Sonámbulo, Forcejeo, Teraclúster, Transformación u Ominochoque.",
		shortDesc: "Reemplaza este movimiento por el último del objetivo.",
		gen8: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene la máxima PP. Falla si el objetivo no ha usado ningún movimiento, si el usuario se ha Transformado, si ya conoce el movimiento o si el movimiento es Embate supremo, Tajo supremo, Cháchara, Cañón Dinamax, Mimético, Esquema, Forcejeo, Transformación o cualquier Movimiento Dinamax o Movimiento Gigamax.",
		},
		gen7: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene la máxima PP. Falla si el objetivo no ha usado ningún movimiento, si el usuario se ha Transformado, si ya conoce el movimiento o si el movimiento es Cháchara, Mimético, Esquema, Forcejeo, Transformación o cualquier Movimiento Z.",
		},
		gen6: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene la máxima PP. Falla si el objetivo no ha usado ningún movimiento, si el usuario se ha Transformado, si ya conoce el movimiento o si el movimiento es Cháchara, Mimético, Esquema, Forcejeo o Transformación.",
		},
		gen4: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene 5 PP. Falla si el objetivo no ha usado ningún movimiento, si el usuario se ha Transformado, si ya conoce el movimiento o si el movimiento es Cháchara, Metrónomo, Mimético, Esquema o Forcejeo.",
		},
		gen3: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene 5 PP. Falla si el objetivo no ha usado ningún movimiento, si el usuario se ha Transformado, si ya conoce el movimiento o si el movimiento es Metrónomo, Mimético, Esquema o Forcejeo.",
		},
		gen2: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza por el último movimiento usado por el objetivo. El movimiento copiado tiene 5 PP. Falla si el objetivo no ha usado ningún movimiento, si ya conoce el movimiento o si el movimiento es Forcejeo.",
		},
		gen1: {
			desc: "Mientras el usuario permanece activo, este movimiento se reemplaza aleatoriamente por uno conocido del objetivo, incluso si el usuario ya lo conoce. El movimiento copiado conserva la PP restante, independientemente de la máxima. Cada PP usado consume uno de este movimiento.",
			shortDesc: "Reemplaza este movimiento por uno aleatorio del objetivo.",
		},

		start: "  [POKEMON] aprendió [MOVE]!",
	},
	mindblown: {
		name: "Cabeza sorpresa",
		desc: "Independientemente de si este movimiento tiene éxito, el usuario pierde la mitad de su PS máximo, redondeado hacia arriba, a menos que posea la habilidad Muro mágico. Este movimiento queda impedido y el usuario no pierde PS si algún Pokémon activo tiene la habilidad Humedad, o si este movimiento es de tipo Fuego y el usuario está afectado por Polvo explosivo o el clima es Mar del albor.",
		shortDesc: "Usuario pierde 50% PS máx. Afecta a Pokémon adyacentes.",

		damage: "  ([POKEMON] sacrificó PS para potenciar su movimiento!)",
	},
	mindreader: {
		name: "Telépata",
		desc: "Hasta el final del siguiente turno, el objetivo no puede evitar los movimientos del usuario, incluso si está en medio de un movimiento de dos turnos. El efecto termina si el usuario o el objetivo abandona el campo. Falla si este efecto ya está activo para el usuario.",
		shortDesc: "El siguiente movimiento del usuario no fallará.",
		gen4: {
			desc: "Hasta el final del siguiente turno, el objetivo no puede evitar los movimientos del usuario, incluso si está en medio de un movimiento de dos turnos. Cuando este efecto se aplica sobre el objetivo, los efectos de Telépata y Fijar blanco terminan para cualquier otro Pokémon contra ese objetivo. Si el objetivo abandona el campo mediante Relevo, el reemplazo permanece bajo este efecto. Si el usuario abandona el campo mediante Relevo, este efecto se reinicia contra el mismo objetivo para el reemplazo. El efecto termina si el usuario o el objetivo abandona el campo.",
		},
		gen2: {
			desc: "La siguiente comprobación de precisión contra el objetivo tendrá éxito. El objetivo seguirá evitando Terremoto, Fisura y Magnitud si está usando Vuelo. Si el objetivo abandona el campo mediante Relevo, el reemplazo permanece bajo este efecto. Este efecto termina cuando el objetivo abandona el campo o se realiza una comprobación de precisión contra él.",
			shortDesc: "El siguiente movimiento no fallará.",
		},
		start: "#lockon",
	},
	minimize: {
		name: "Reducción",
		desc: "Sube la evasión del usuario 2 niveles. Aunque no cambie su evasión, los movimientos Golpe cuerpo, Carga dragón, Plancha voladora, Golpe calor, Cuerpo pesado, Hiperplancha oscura, Rodillo de púas, Pisotón y Plancha voltaica no revisarán precisión y duplicarán su daño si se usan contra el usuario mientras esté activo.",
		shortDesc: "Aumenta la evasión del usuario 2 niveles.",
		gen8: {
			desc: "Sube la evasión del usuario 2 niveles. Aunque no cambie su evasión, los movimientos Golpe cuerpo, Carga dragón, Plancha voladora, Golpe calor, Cuerpo pesado, Hiperplancha oscura, Rodillo de púas y Pisotón no revisarán precisión y duplicarán su daño si se usan contra el usuario mientras esté activo.",
		},
		gen6: {
			desc: "Sube la evasión del usuario 2 niveles. Aunque no cambie su evasión, los movimientos Golpe cuerpo, Carga dragón, Plancha voladora, Golpe calor, Fuerza fantasma, Golpe umbrío, Rodillo de púas y Pisotón no revisarán precisión y duplicarán su daño si se usan contra el usuario mientras esté activo.",
		},
		gen5: {
			desc: "Sube la evasión del usuario 2 niveles. Aunque no cambie su evasión, Pisotón y Rodillo de púas duplicarán su daño si se usan contra el usuario mientras esté activo.",
		},
		gen4: {
			desc: "Sube la evasión del usuario 1 nivel. Aunque no cambie su evasión, Pisotón duplicará su potencia si se usa contra el usuario mientras esté activo.",
			shortDesc: "Aumenta la evasión del usuario 1 nivel.",
		},
		gen3: {
			desc: "Sube la evasión del usuario 1 nivel. Aunque no cambie su evasión, los movimientos Impresionar, Clarividencia, Brazo pincho y Pisotón duplicarán su daño si se usan contra el usuario mientras esté activo.",
		},
		gen2: {
			desc: "Sube la evasión del usuario 1 nivel. Aunque no cambie su evasión, Pisotón duplicará su potencia si se usa contra el usuario mientras esté activo. Relevo puede usarse para pasar este efecto a un aliado.",
		},
		gen1: {
			desc: "Sube la evasión del usuario 1 nivel.",
		},
	},
	miracleeye: {
		name: "Gran ojo",
		desc: "Mientras el objetivo permanezca activo, se ignora su etapa de evasión en las comprobaciones de precisión si es mayor que 0, y los ataques de tipo Psíquico pueden golpear a un objetivo de tipo Siniestro. Falla si el objetivo ya está afectado o si ya está bajo Profecía o Rastreo.",
		shortDesc: "Psíquico golpea Siniestro. Evasión ignorada.",
		gen4: {
			desc: "Mientras el objetivo permanezca activo, se ignora su etapa de evasión en las comprobaciones de precisión si es mayor que 0, y los ataques de tipo Psíquico pueden golpear a un objetivo de tipo Siniestro.",
		},

		start: "#foresight",
	},
	mirrorcoat: {
		name: "Manto espejo",
		desc: "Inflige daño al último Pokémon rival que golpeó al usuario con un movimiento de categoría especial este turno, igual al doble de los PS que el usuario perdió por ese ataque. Si el usuario no perdió PS por el ataque, este movimiento inflige 1 PS de daño en su lugar. Si la posición de ese Pokémon rival ya no está en uso y hay otro Pokémon rival en el campo, el daño se aplica a este. Solo se cuenta el último golpe de un ataque de varios impactos. Falla si el usuario no fue golpeado por un movimiento de categoría especial de un Pokémon rival este turno.",
		shortDesc: "Si recibe un ataque especial, devuelve el doble de daño.",
		gen6: {
			desc: "Inflige daño al último Pokémon rival que golpeó al usuario con un movimiento de categoría especial este turno, igual al doble de los PS que el usuario perdió por ese ataque. Si el usuario no perdió PS por el ataque, este movimiento inflige daño con una potencia de 1 en su lugar. Si la posición de ese Pokémon rival ya no está en uso, el daño se aplica a un Pokémon rival aleatorio en rango. Solo se cuenta el último golpe de un ataque de varios impactos. Falla si el usuario no fue golpeado por un movimiento de categoría especial de un Pokémon rival este turno.",
		},
		gen4: {
			desc: "Inflige daño al último Pokémon rival que golpeó al usuario con un movimiento de categoría especial este turno, igual al doble de los PS que el usuario perdió por ese ataque. Si la posición de ese Pokémon rival ya no está en uso y hay otro Pokémon rival en el campo, el daño se aplica a este. Solo se cuenta el último golpe de un ataque de varios impactos. Falla si el usuario no fue golpeado por un movimiento de categoría especial de un Pokémon rival este turno o si el usuario no perdió PS por el ataque.",
		},
		gen3: {
			desc: "Inflige daño al último Pokémon rival que golpeó al usuario con un movimiento de categoría especial este turno, igual al doble de los PS que el usuario perdió por ese ataque. Si la posición de ese Pokémon rival ya no está en uso y hay otro Pokémon rival en el campo, el daño se aplica a este. Este movimiento considera a Poder oculto como tipo Normal, y solo se cuenta el último golpe de un ataque de varios impactos. Falla si el usuario no fue golpeado por un movimiento de categoría especial de un Pokémon rival este turno o si el usuario no perdió PS por el ataque.",
		},
		gen2: {
			desc: "Inflige daño al Pokémon rival igual al doble de los PS que el usuario perdió por un movimiento de categoría especial este turno. Este movimiento considera a Poder oculto como tipo Normal, y solo se cuenta el último golpe de un ataque de varios impactos. Falla si el usuario se mueve primero, si no fue golpeado por un ataque especial este turno, o si no perdió PS por el ataque.",
		},
	},
	mirrormove: {
		name: "Espejo",
		desc: "El usuario usa el último movimiento usado por el objetivo. El movimiento copiado se usa contra dicho objetivo, si es posible. Falla si el objetivo no ha hecho ningún movimiento, o si el último movimiento usado no puede ser copiado por este movimiento.",
		shortDesc: "Usa el último movimiento del objetivo contra él.",
		gen4: {
			desc: "El usuario usa el último movimiento que le haya afectado con éxito. El movimiento copiado se usa sin un objetivo específico. Falla si ningún movimiento ha afectado al usuario, si el movimiento fue invocado por otro movimiento, si el movimiento fue Otra vez, o si el movimiento no puede ser copiado por este movimiento.",
		},
		gen3: {
			desc: "El usuario usa el último movimiento que le haya afectado con éxito. El movimiento copiado se usa sin un objetivo específico. Falla si ningún movimiento ha afectado al usuario, si el movimiento falló, no tuvo efecto o no le afectó, o si el movimiento no puede ser copiado por este movimiento.",
		},
		gen2: {
			desc: "El usuario usa el último movimiento usado por el objetivo. Falla si el objetivo no ha usado ningún movimiento desde que el usuario entró en combate, o si el último movimiento usado fue Metrónomo, Mimético, Espejo, Esquema, Sonámbulo, Transformación, o cualquier movimiento que el usuario conozca.",
		},
		gen1: {
			desc: "El usuario usa el último movimiento usado por el objetivo. Falla si el objetivo no ha usado ningún movimiento desde que el usuario entró en combate, o si el último movimiento usado fue Espejo.",
		},
	},
	mirrorshot: {
		name: "Disparo espejo",
		desc: "Tiene un 30% de probabilidad de bajar un nivel la precisión del objetivo.",
		shortDesc: "30% de probabilidad de bajar un nivel la precisión del objetivo.",
	},
	mist: {
		name: "Neblina",
		desc: "Rodea de una niebla blanquecina al bando del usuario e impide que otros Pokémon reduzcan sus características durante cinco turnos. Falla si el efecto ya está activo en el bando del usuario.",
		shortDesc: "Durante 5 turnos, protege al equipo del usuario de bajadas de características.",
		gen2: {
			desc: "Mientras el usuario permanece activo, está protegido de que sus características sean reducidas por otros Pokémon. Falla si el usuario ya tiene el efecto. Relevo puede usarse para transferir este efecto a un aliado.",
			shortDesc: "Mientras esté activo, el usuario está protegido de bajadas de características.",
			start: "  ¡[POKEMON] se cubre de Neblina!",
			block: "  ¡[POKEMON] está protegido por Neblina!",
		},
		gen1: {
			desc: "Mientras el usuario permanece activo, está protegido de que sus características sean reducidas por otros Pokémon, a menos que sea por el efecto secundario de un movimiento. Falla si el usuario ya tiene el efecto. Si algún Pokémon usa Niebla, este efecto termina.",
			start: "  ¡[POKEMON] queda envuelto en Neblina!",
			block: "  ¡Pero falló!",
		},

		start: "  ¡[TEAM] quedó cubierto por Neblina!",
		end: "  ¡[TEAM] ya no está protegido por Neblina!",
		block: "  ¡[POKEMON] está protegido por Neblina!",
	},
	mistball: {
		name: "Bola neblina",
		desc: "Tiene un 50% de probabilidad de bajar un nivel el Ataque Especial del objetivo.",
		shortDesc: "50% de probabilidad de bajar un nivel el Atq. Esp. del objetivo.",
	},
	mistyexplosion: {
		name: "Bruma explosiva",
		desc: "Si el terreno está cubierto por Campo de niebla y el usuario está en contacto con el suelo, la potencia de este movimiento se multiplica por 1,5. El usuario se debilita después de usarlo, incluso si no hay objetivo. Este movimiento no se ejecuta si algún Pokémon activo tiene la habilidad Humedad.",
		shortDesc: "Usuario se debilita. En Campo de niebla: potencia x1,5.",
	},
	mistyterrain: {
		name: "Campo de niebla",
		desc: "Durante 5 turnos, el terreno se convierte en Campo de niebla. Mientras dure el efecto, el poder de los ataques de tipo Dragón usados contra Pokémon en el suelo se multiplica por 0.5 y no pueden sufrir una alteración de estado no volátil ni confusión. Los Pokémon en el suelo pueden verse afectados por Bostezo, pero no pueden quedarse dormidos por su efecto. Camuflaje transforma al usuario en tipo Hada, Adaptación se convierte en Fuerza lunar, y Daño secreto tiene un 30% de probabilidad de bajar el Ataque Especial 1 nivel. Falla si el terreno actual ya es Campo de niebla.",
		shortDesc: "5 turnos. Sin estados; Dragón x0.5 suelo.",

		gen6: {
			desc: "Durante 5 turnos, el terreno se convierte en Campo de niebla. Mientras dure el efecto, el poder de los ataques de tipo Dragón usados contra Pokémon en el suelo se multiplica por 0.5 y no pueden sufrir una alteración de estado no volátil. Los Pokémon en el suelo pueden verse afectados por Bostezo, pero no pueden quedarse dormidos por su efecto. Camuflaje transforma al usuario en tipo Hada, Adaptación se convierte en Fuerza lunar, y Daño secreto tiene un 30% de probabilidad de bajar el Ataque Especial 1 nivel. Falla si el terreno actual ya es Campo de niebla.",
		},
	},
	moonblast: {
		name: "Fuerza lunar",
		desc: "Tiene un 30% de probabilidad de bajar en 1 nivel el Ataque Especial del objetivo.",
		shortDesc: "30% de prob. de bajar Atq. Esp. 1 nivel.",
	},
	moongeistbeam: {
		name: "Rayo umbrío",
		desc: "Este movimiento y sus efectos ignoran las habilidades de otros Pokémon.",
		shortDesc: "Ignora las habilidades de otros Pokémon.",
	},
	moonlight: {
		name: "Luz lunar",
		desc: "El usuario restaura 1/2 de sus PS máximos si Ráfaga delta o ausencia de clima está en efecto o lleva Parasol multiuso, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Mar del albor, Danza lluvia, Tormenta de arena o Granizo, todo redondeado hacia abajo en 0.5.",
		shortDesc: "Cura al usuario según clima.",
		gen8: {
			desc: "El usuario restaura 1/2 de sus PS máximos si Ráfaga delta, ausencia de clima o Parasol multiuso están en efecto, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo en 0.5.",
		},
		gen7: {
			desc: "El usuario restaura 1/2 de sus PS máximos si Ráfaga delta o ausencia de clima está en efecto, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo en 0.5.",
		},
		gen5: {
			desc: "El usuario restaura 1/2 de sus PS máximos si no hay clima en efecto, 2/3 de sus PS máximos si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo en 0.5.",
		},
		gen4: {
			desc: "El usuario restaura 1/2 de sus PS máximos si no hay clima en efecto, 2/3 de sus PS máximos si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo.",
		},
		gen2: {
			desc: "El usuario restaura 1/2 de sus PS máximos si no hay clima en efecto, todos sus PS si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Danza lluvia o Tormenta de arena, todo redondeado hacia abajo.",
		},
	},
	morningsun: {
		name: "Sol matinal",
		desc: "El usuario restaura 1/2 de sus PS máximos si Ráfaga delta o ausencia de clima está en efecto o lleva Parasol multiuso, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Mar del albor, Danza lluvia, Tormenta de arena o Granizo, todo redondeado hacia abajo en 0.5.",
		shortDesc: "Cura al usuario según clima.",
		gen8: {
			desc: "El usuario restaura 1/2 de sus PS máximos si Ráfaga delta, ausencia de clima o Parasol multiuso están en efecto, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo en 0.5.",
		},
		gen7: {
			desc: "El usuario restaura 1/2 de sus PS máximos si Ráfaga delta o ausencia de clima está en efecto, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo en 0.5.",
		},
		gen5: {
			desc: "El usuario restaura 1/2 de sus PS máximos si no hay clima en efecto, 2/3 de sus PS máximos si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo en 0.5.",
		},
		gen4: {
			desc: "El usuario restaura 1/2 de sus PS máximos si no hay clima en efecto, 2/3 de sus PS máximos si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Danza lluvia o Tormenta de arena, todo redondeado hacia abajo.",
		},
		gen2: {
			desc: "El usuario restaura 1/2 de sus PS máximos si no hay clima en efecto, todos sus PS si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Danza lluvia o Tormenta de arena, todo redondeado hacia abajo.",
		},
	},
	mortalspin: {
		name: "Giro mortífero",
		desc: "Si este movimiento tiene éxito y el usuario no se ha debilitado, terminan los efectos de Drenadoras y de movimientos de aprisionamiento en él, y se eliminan todos los peligros de entrada de su lado del campo. Tiene un 100% de probabilidad de envenenar al objetivo.",
		shortDesc: "Envenena y elimina trampas/ataduras/Drenadoras.",
	},
	mountaingale: {
		name: "Viento carámbano",
		desc: "Tiene un 30% de probabilidad de que el objetivo retroceda.",
		shortDesc: "30% de prob. de que el objetivo retroceda.",
	},
	mudbomb: {
		name: "Bomba fango",
		desc: "Tiene un 30% de probabilidad de bajar 1 nivel la precisión del objetivo.",
		shortDesc: "30% de prob. de bajar precisión 1 nivel.",
	},
	mudshot: {
		name: "Disparo lodo",
		desc: "Tiene un 100% de probabilidad de bajar 1 nivel la Velocidad del objetivo.",
		shortDesc: "100% de prob. de bajar Vel. 1 nivel.",
	},
	mudslap: {
		name: "Bofetón lodo",
		desc: "Tiene un 100% de probabilidad de bajar 1 nivel la precisión del objetivo.",
		shortDesc: "100% de prob. de bajar precisión 1 nivel.",
	},
	mudsport: {
		name: "Chapoteo lodo",
		desc: "Durante 5 turnos, todos los ataques de tipo Eléctrico usados por cualquier Pokémon activo tienen su potencia multiplicada por 0,33. Falla si este efecto ya está activo.",
		shortDesc: "Durante 5 turnos, los ataques de tipo Eléctrico tienen 1/3 de potencia.",
		gen5: {
			desc: "Mientras el usuario está activo, todos los ataques de tipo Eléctrico usados por cualquier Pokémon activo tienen su potencia multiplicada por 0,33. Falla si este efecto ya está activo en algún Pokémon.",
			shortDesc: "Debilita ataques de tipo Eléctrico a 1/3 de potencia.",
		},
		gen4: {
			desc: "Mientras el usuario está activo, todos los ataques de tipo Eléctrico usados por cualquier Pokémon activo tienen su potencia reducida a la mitad. Falla si este efecto ya está activo en el usuario. Relevo puede usarse para transferir este efecto a un aliado.",
			shortDesc: "Debilita ataques de tipo Eléctrico a la mitad de potencia.",
		},
	},
	muddywater: {
		name: "Agua lodosa",
		desc: "Tiene un 30% de probabilidad de bajar un nivel la Precisión del objetivo.",
		shortDesc: "30% de probabilidad de bajar un nivel la Precisión del objetivo.",
	},
	multiattack: {
		name: "Multiataque",
		desc: "El tipo de este movimiento depende del disco que lleve equipado el usuario.",
		shortDesc: "Tipo varía según el disco equipado.",
	},
	mysticalfire: {
		name: "Llama embrujada",
		desc: "Tiene un 100% de probabilidad de bajar en 1 nivel el Ataque Especial del objetivo.",
		shortDesc: "100% de prob. de bajar Atq. Esp. 1 nivel.",
	},
	mysticalpower: {
		name: "Poder místico",
		desc: "Tiene un 100% de probabilidad de subir en 1 nivel el Ataque Especial del usuario.",
		shortDesc: "100% de prob. de subir Atq. Esp. 1 nivel.",
	},
	nastyplot: {
		name: "Maquinación",
		desc: "Sube el Ataque Especial del usuario 2 niveles.",
		shortDesc: "Sube Atq. Esp. 2 niveles.",
	},
	naturalgift: {
		name: "Don natural",
		desc: "El tipo y la potencia de este movimiento dependen de la baya que lleve el usuario, y la baya se pierde. Falla si el usuario no lleva una baya, si tiene la habilidad Zoquete, o si Embargo o Zona mágica están en efecto para el usuario.",
		shortDesc: "Tipo y potencia dependen de la baya del usuario.",
		gen4: {
			desc: "El tipo y la potencia de este movimiento dependen de la baya que lleve el usuario, y la baya se pierde. Falla si el usuario no lleva una baya, si tiene la habilidad Zoquete, o si Embargo está en efecto para el usuario.",
		},
	},
	naturepower: {
		name: "Adaptación",
		desc: "Este movimiento invoca otro movimiento según el terreno de combate: Triataque en terreno normal de Wi-Fi, Rayo en Campo eléctrico, Fuerza lunar en Campo de niebla, Energibola en Campo de hierba y Psíquico en Campo psíquico.",
		shortDesc: "Depende del terreno (Triataque por defecto).",
		gen6: {
			desc: "Este movimiento invoca otro movimiento según el terreno de combate: Triataque en terreno normal de Wi-Fi, Rayo en Campo eléctrico, Fuerza lunar en Campo de niebla y Energibola en Campo de hierba.",
		},
		gen5: {
			desc: "Este movimiento invoca otro movimiento según el terreno de combate: Terremoto en terreno normal de Wi-Fi.",
			shortDesc: "Ataque cambia según el terreno (Terremoto).",
		},
		gen4: {
			desc: "Este movimiento invoca otro movimiento según el terreno de combate: Triataque en combates Wi-Fi.",
			shortDesc: "Cambia según el terreno (Triataque).",
		},
		gen3: {
			desc: "Este movimiento invoca otro movimiento según el terreno de combate: Meteoros en combates Wi-Fi.",
		},
		move: "  ¡Adaptación se transformó en [MOVE]!",
	},
	naturesmadness: {
		name: "Furia natural",
		desc: "Inflige daño al objetivo igual a la mitad de sus PS actuales, redondeado hacia abajo, pero no menos de 1 PS.",
		shortDesc: "Hace daño igual a 1/2 de los PS actuales del objetivo.",
	},
	needlearm: {
		name: "Brazo pincho",
		desc: "Tiene un 30% de probabilidad de hacer retroceder al objetivo.",
		shortDesc: "30% de probabilidad de hacer retroceder al objetivo.",
		gen3: {
			desc: "Tiene un 30% de probabilidad de hacer retroceder al objetivo. El daño se duplica si el objetivo ha usado Meteoros mientras está activo.",
		},
	},
	neverendingnightmare: {
		name: "Presa espectral",
		shortDesc: "Potencia igual al Z-Poder base.",
	},
	nightdaze: {
		name: "Pulso noche",
		desc: "Tiene un 40% de prob. de bajar 1 nivel la precisión del objetivo.",
		shortDesc: "40% de prob. de bajar precisión 1 nivel.",
	},
	nightmare: {
		name: "Pesadilla",
		desc: "Hace que el objetivo pierda 1/4 de sus PS máximos, redondeado hacia abajo, al final de cada turno mientras esté dormido. Este movimiento no afecta al objetivo a menos que esté dormido. El efecto termina cuando el objetivo se despierta, incluso si vuelve a dormirse en el mismo turno.",
		shortDesc: "Un objetivo dormido pierde 1/4 PS máx. por turno.",
		start: "  [POKEMON] comenzó a tener una pesadilla!",
		damage: "  [POKEMON] está atrapado en una pesadilla!",
	},
	nightshade: {
		name: "Tinieblas",
		desc: "Inflige daño al objetivo igual al nivel del usuario.",
		shortDesc: "Daño = nivel del usuario.",
		gen1: {
			desc: "Inflige daño al objetivo igual al nivel del usuario. Este movimiento ignora inmunidad de tipo.",
			shortDesc: "Daño = nivel del usuario. Puede golpear tipo Normal.",
		},
	},
	nightslash: {
		name: "Tajo umbrío",
		desc: "Tiene una alta probabilidad de asestar un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	nobleroar: {
		name: "Rugido de guerra",
		desc: "Reduce en un nivel el Ataque y el Ataque Especial del objetivo.",
		shortDesc: "Baja Ataque y Atq. Esp. del objetivo 1 nivel.",
	},
	noretreat: {
		name: "Bastión final",
		desc: "Sube en 1 nivel el Ataque, la Defensa, el Ataque Especial, la Defensa Especial y la Velocidad del usuario, pero le impide cambiar. El usuario aún puede cambiar si usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. Falla si el usuario ya había quedado atrapado por este efecto.",
		shortDesc: "Sube todas las carac. 1 nivel (no pre/eva). Atrapa usuario.",
		start: "  ¡[POKEMON] ya no puede escapar porque usó Bastión final!",
	},
	noxioustorque: {
		name: "Ponzochoque",
		desc: "Tiene un 30% de probabilidad de envenenar al objetivo.",
		shortDesc: "30% de probabilidad de envenenar al objetivo.",
	},
	nuzzle: {
		name: "Moflete estático",
		desc: "Tiene un 100% de probabilidad de paralizar al objetivo.",
		shortDesc: "100% de probabilidad de paralizar al objetivo.",
	},
	oblivionwing: {
		name: "Ala mortífera",
		desc: "El usuario recupera 3/4 de los PS que el objetivo perdió, redondeado al alza. Si el usuario lleva equipada Raíz grande, los PS recuperados son 1.3x los normales, redondeado a la baja.",
		shortDesc: "Usuario recupera 75% del daño infligido.",
	},
	obstruct: {
		name: "Obstrucción",
		desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto verán su Defensa reducida en 2 niveles. Los movimientos sin daño traspasan esta protección. Este movimiento tiene una probabilidad de 1/X de éxito, donde X comienza en 1 y se triplica cada vez que se usa con éxito; X se restablece a 1 si falla, si el último movimiento del usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Barrera espinosa, Pico cañón o Vasta guardia, o si fue uno de esos movimientos y su protección fue rota. Falla si el usuario actúa el último en este turno.",
		shortDesc: "Protege de ataques. Contacto: -2 Def.",
		gen8: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto verán su Defensa reducida en 2 niveles. Los movimientos sin daño traspasan esta protección. Este movimiento tiene una probabilidad de 1/X de éxito, donde X comienza en 1 y se triplica cada vez que se usa con éxito; X se restablece a 1 si falla, si el último movimiento del usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Barrera espinosa, Pico cañón o Vasta guardia, o si fue uno de esos movimientos y su protección fue rota. Falla si el usuario actúa el último en este turno.",
		},
	},
	oceanicoperetta: {
		name: "Sinfonía de la diva marina",
		shortDesc: "Sin efecto adicional.",
	},
	octazooka: {
		name: "Pulpocañón",
		desc: "Tiene un 50% de probabilidad de bajar 1 nivel la precisión del objetivo.",
		shortDesc: "50% de prob. de bajar precisión 1 nivel.",
	},
	octolock: {
		name: "Octopresa",
		desc: "Impide que el objetivo abandone el combate o cambie de Pokémon. El objetivo puede seguir cambiándose si lleva equipada la Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. Al final de cada turno durante el efecto, la Defensa y la Defensa Especial del objetivo se reducen en 1 nivel. El efecto termina si el usuario o el objetivo abandona el campo.",
		shortDesc: "Atrapa al objetivo; -1 Def/DefEsp cada turno.",
		start: "  ¡[POKEMON] no puede escapar debido a Octopresa!",
	},
	odorsleuth: {
		name: "Rastreo",
		desc: "Mientras el objetivo permanezca activo, se ignora su estadística de evasión en los cálculos de precisión si es mayor que 0, y los ataques de tipo Normal y Lucha pueden golpear a objetivos de tipo Fantasma. Falla si el objetivo ya está afectado, o está afectado por Profecía o Gran ojo.",
		shortDesc: "Lucha y Normal golpean Fantasma. Evasión ignorada.",
		gen4: {
			desc: "Mientras el objetivo permanezca activo, se ignora su estadística de evasión en los cálculos de precisión si es mayor que 0, y los ataques de tipo Normal y Lucha pueden golpear a objetivos de tipo Fantasma.",
		},
		gen3: {
			desc: "Mientras el objetivo permanezca activo, se ignora su estadística de evasión en los cálculos de precisión, y los ataques de tipo Normal y Lucha pueden golpear a objetivos de tipo Fantasma.",
		},
	},
	ominouswind: {
		name: "Viento aciago",
		desc: "Tiene un 10% de probabilidad de subir un nivel el Ataque, la Defensa, el Ataque Especial, la Defensa Especial y la Velocidad del usuario.",
		shortDesc: "10% de probabilidad de subir todas las carac. 1 nivel (no pre/eva).",
	},
	orderup: {
		name: "Oído cocina",
		desc: "Si un aliado Tatsugiri ha activado su habilidad Comandar, este movimiento sube en 1 nivel el Ataque del usuario si el Tatsugiri está en forma curvada, la Defensa si está en forma lánguida, o la Velocidad si está en forma recta. El efecto sucede incluso si el Tatsugiri que activó la habilidad ya se ha debilitado.",
		shortDesc: "Forma curvada|lánguida|recta: +1 Atq.|Def.|Vel.",
	},
	originpulse: {
		name: "Pulso primigenio",
		desc: "Sin efecto adicional. Golpea a objetivos adyacentes.",
		shortDesc: "Sin efecto adicional. Golpea a objetivos adyacentes.",
	},
	outrage: {
		name: "Enfado",
		desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde inmediatamente despues de usarlo en el ultimo turno del efecto si no lo esta ya. Este movimiento apunta a un Pokemon oponente aleatorio en cada turno. Si el usuario no puede moverse, esta dormido al comienzo de un turno, o el ataque no tiene exito contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin causar confusiones. Si este movimiento es invocado por Sonámbulo y el usuario esta dormido, el movimiento se usa un turno y no confunde al usuario.",
		shortDesc: "Dura 2-3 turnos. Confunde al usuario despues.",
		gen6: {
			desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde inmediatamente despues de usarlo en el ultimo turno del efecto si no lo esta ya. Este movimiento apunta a un Pokemon oponente adyacente aleatorio en cada turno. Si el usuario no puede moverse, esta dormido al comienzo de un turno, o el ataque no tiene exito contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin causar confusiones. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen4: {
			desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde al final del ultimo turno del efecto si no lo esta ya. Este movimiento apunta a un Pokemon oponente aleatorio en cada turno. Si el usuario no puede moverse, esta dormido al comienzo de un turno, o el ataque no tiene exito contra el objetivo, el efecto termina sin causar confusiones. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen3: {
			desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde al final del ultimo turno del efecto si no lo esta ya. Este movimiento apunta a un Pokemon oponente aleatorio en cada turno. Si el usuario no puede moverse, cae dormido, se congela, o el ataque no tiene exito contra el objetivo, el efecto termina sin causar confusiones. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen2: {
			desc: "Tanto si el movimiento tiene exito como si no, el usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde inmediatamente despues de usarlo en el ultimo turno del efecto, aunque ya este confundido. Si el usuario no puede moverse, el efecto termina sin causar confusiones. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
	},
	overdrive: {
		name: "Amplificador",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea a ambos oponentes.",
	},
	overheat: {
		name: "Sofoco",
		desc: "Reduce en 2 niveles el Ataque Especial del usuario.",
		shortDesc: "Baja Atq. Esp. del usuario 2 niveles.",
	},
	painsplit: {
		name: "Divide dolor",
		desc: "El usuario y el objetivo comparten sus PS actuales, redondeando hacia abajo y sin exceder los PS máximos de ninguno.",
		shortDesc: "Reparte PS entre usuario y objetivo.",
		activate: "  ¡Los combatientes compartieron su dolor!",
	},
	paleowave: {
		name: "Onda paleolítica",
		desc: "Tiene un 20% de probabilidad de reducir el Ataque del objetivo en 1 nivel.",
		shortDesc: "20% de prob. de bajar el Atq. del objetivo en 1.",
	},
	paraboliccharge: {
		name: "Carga parábola",
		desc: "El usuario recupera 1/2 de los PS perdidos por el objetivo, redondeándolo hacia arriba. Si lleva equipada una Raíz grande, los PS recuperados son 1.3x los normales, redondeados hacia abajo.",
		shortDesc: "El usuario recupera el 50% del daño infligido.",
	},
	partingshot: {
		name: "Última palabra",
		desc: "Reduce en un nivel el Ataque y el Ataque Especial del objetivo. Si este movimiento tiene éxito, el usuario cambia incluso si está atrapado y es reemplazado inmediatamente por un miembro del equipo seleccionado. El usuario no cambia si los estadios de Ataque y Ataque Especial del objetivo permanecen sin cambios, o si no hay miembros en el equipo sin debilitar.",
		shortDesc: "Baja Atq. y Atq. Esp. 1 nivel al objetivo. Usuario cambia.",
		gen6: {
			desc: "Reduce en un nivel el Ataque y el Ataque Especial del objetivo. Si este movimiento tiene éxito, el usuario cambia incluso si está atrapado y es reemplazado inmediatamente por un miembro del equipo seleccionado. El usuario no cambia si no hay miembros en el equipo sin debilitar.",
		},
		heal: "#memento",
		switchOut: "#uturn",
	},
	payback: {
		name: "Vendetta",
		desc: "La potencia se duplica si el usuario se mueve tras el objetivo este turno, incluidas las acciones mediante Mandato o la habilidad Pareja de Baile. Cambiar no cuenta como acción.",
		shortDesc: "Potencia x2 si el usuario actúa tras el objetivo.",
		gen6: {
			desc: "La potencia se duplica si el usuario actúa tras el objetivo este turno. Cambiar no cuenta como acción.",
		},
		gen4: {
			desc: "La potencia se duplica si el usuario actúa tras el objetivo este turno. Cambiar sí cuenta como acción.",
		},
	},
	payday: {
		name: "Día de pago",
		desc: "Sin efecto adicional.",
		shortDesc: "Esparce monedas.",

		activate: "  ¡Las monedas se esparcieron por todas partes!",
	},
	peck: {
		name: "Picotazo",
		shortDesc: "Sin efecto adicional.",
	},
	perishsong: {
		name: "Canto mortal",
		desc: "Cada Pokémon activo recibe un contador de turnos restantes de 4 si aún no tiene uno. Al final de cada turno, incluido el usado, el contador de turnos restantes de todos los Pokémon activos disminuye en 1 y los Pokémon se debilitan cuando llega a 0. El contador de turnos restantes se elimina de los Pokémon que cambian de posición. Si un Pokémon usa Relevo mientras tiene un contador de turnos restantes, el reemplazo heredará el contador y continuará la cuenta regresiva.",
		shortDesc: "Todos los Pokémon activos caerán en 3 turnos.",

		start: "  ¡Todos los Pokémon que escucharon la canción caerán en tres turnos!",
		activate: "  El contador de turnos restantes de [POKEMON] bajó a [NUMBER].",
	},
	petalblizzard: {
		name: "Tormenta floral",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea a Pokémon adyacentes.",
	},
	petaldance: {
		name: "Danza pétalo",
		desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde inmediatamente después de usarlo en el último turno del efecto, si no lo está ya. Este movimiento apunta a un Pokémon oponente aleatorio en cada turno. Si el usuario está impedido de moverse, está dormido al comienzo de un turno, o el ataque no tiene éxito contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin causar confusión. Si este movimiento es invocado por Sonámbulo y el usuario está dormido, el movimiento se usa un turno y no confunde al usuario.",
		shortDesc: "Dura 2-3 turnos. Confunde al usuario después.",
		gen6: {
			desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde inmediatamente después de usarlo en el último turno del efecto, si no lo está ya. Este movimiento apunta a un Pokémon oponente adyacente al azar en cada turno. Si el usuario está impedido de moverse, está dormido al comienzo de un turno, o el ataque no tiene éxito contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin causar confusión. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen4: {
			desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde al final del último turno del efecto si no lo está ya. Este movimiento apunta a un Pokémon oponente aleatorio en cada turno. Si el usuario está impedido de moverse, está dormido al comienzo de un turno, o el ataque no tiene éxito contra el objetivo, el efecto termina sin causar confusión. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen3: {
			desc: "El usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde al final del último turno del efecto si no lo está ya. Este movimiento apunta a un Pokémon oponente aleatorio en cada turno. Si el usuario está impedido de moverse, cae dormido, se congela, o el ataque no tiene éxito contra el objetivo, el efecto termina sin causar confusión. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen2: {
			desc: "Sin importar si este movimiento tiene éxito o no, el usuario queda inmovilizado durante dos o tres turnos con este movimiento y se confunde inmediatamente después de usarlo en el último turno del efecto, incluso si ya está confundido. Si el usuario está impedido de moverse, el efecto termina sin causar confusión. Si este movimiento es invocado por Sonámbulo, el movimiento se usa un turno y no confunde al usuario.",
		},
		gen1: {
			desc: "Sin importar si este movimiento tiene éxito o no, el usuario queda inmovilizado durante tres o cuatro turnos con este movimiento y se confunde inmediatamente después de usarlo en el último turno del efecto, incluso si ya está confundido. Si el usuario está impedido de moverse, el efecto termina sin causar confusión. Durante el efecto, la precisión de este movimiento se recalcula cada turno con la precisión actual, incluyendo cambios de estadística, pero nunca menos de 1/256 ni más de 255/256.",
			shortDesc: "Dura 3-4 turnos. Confunde al usuario después.",
		},
	},
	phantomforce: {
		name: "Golpe fantasma",
		desc: "Si este movimiento tiene éxito, atraviesa el Búnker, Detección, Escudo real, Protección o Barrera espinosa del objetivo durante este turno, lo que permite que otros Pokémon puedan atacarlo normalmente. Si el lado del objetivo está protegido por Truco defensa, Escudo tatami, Anticipo o Vasta guardia, esa protección también se rompe durante este turno y otros Pokémon pueden atacar normalmente a ese lado. Este ataque se carga en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques. Si el usuario lleva equipada una Hierba única, el movimiento se completa en un turno.",
		shortDesc: "Desaparece t. 1. Golpea t. 2. Rompe prot.",
		gen6: {
			desc: "Si este movimiento tiene éxito, atraviesa Detección, Escudo real, Protección o Barrera espinosa del objetivo durante este turno, lo que permite que otros Pokémon puedan atacarlo normalmente. Si el lado del objetivo está protegido por Truco defensa, Escudo tatami, Anticipo o Vasta guardia, esa protección también se rompe durante este turno y otros Pokémon pueden atacar normalmente a ese lado. Este ataque se carga en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques. Si el usuario lleva equipada una Hierba única, el movimiento se completa en un turno. El daño se duplica y no se realiza comprobación de precisión si el objetivo ha usado Reducción mientras estaba activo.",
		},
		prepare: "#shadowforce",
		activate: "#shadowforce",
	},
	photongeyser: {
		name: "Géiser fotónico",
		desc: "Este movimiento es físico si el Atq. del usuario es mayor que su Atq. Esp., e ignora las habilidades de otros Pokémon.",
		shortDesc: "Físico si Atq. > Atq. Esp. Ignora habilidades.",
	},
	pikapapow: {
		name: "Pikatormenta",
		desc: "La potencia es igual al mayor valor entre (Amistad del usuario * 2/5), redondeado hacia abajo, o 1.",
		shortDesc: "Amistad máx.: 102 pot. No falla.",
	},
	pinmissile: {
		name: "Pin misil",
		desc: "Golpea de dos a cinco veces. Tiene un 35 % de probabilidad de golpear 2 o 3 veces y un 15 % de probabilidad de golpear 4 o 5 veces. Si uno de los impactos rompe el sustituto del objetivo, este recibirá daño por los impactos restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el usuario lleva Dado trucado, este movimiento golpeará 4-5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen8: {
			desc: "Golpea de dos a cinco veces. Tiene un 35 % de probabilidad de golpear 2 o 3 veces y un 15 % de probabilidad de golpear 4 o 5 veces. Si uno de los impactos rompe el sustituto del objetivo, este recibirá daño por los impactos restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces.",
		},
		gen4: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear 2 o 3 veces y 1/8 de probabilidad de golpear 4 o 5 veces. Si uno de los impactos rompe el sustituto del objetivo, este recibirá daño por los impactos restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpeará cinco veces. Si el objetivo tiene Banda aguante y tenía PS completos al comenzar el movimiento, no se debilitará sin importar el número de impactos.",
		},
		gen3: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear 2 o 3 veces y 1/8 de probabilidad de golpear 4 o 5 veces. Si uno de los impactos rompe el sustituto del objetivo, este recibirá daño por los impactos restantes.",
		},
		gen1: {
			desc: "Golpea de dos a cinco veces. Tiene 3/8 de probabilidad de golpear 2 o 3 veces y 1/8 de probabilidad de golpear 4 o 5 veces. El daño se calcula solo para el primer impacto y se emplea en todos los golpes. Si uno de los impactos rompe el sustituto del objetivo, el movimiento termina.",
		},
	},
	plasmafists: {
		name: "Puños plasma",
		desc: "Causa daño y hace que durante el resto del turno todos los movimientos de tipo Normal pasen a ser de tipo Eléctrico.",
		shortDesc: "Movimientos Normal pasan a Eléctrico este turno.",
	},
	playnice: {
		name: "Camaradería",
		desc: "Reduce en un nivel el Ataque del objetivo.",
		shortDesc: "Baja Atq. del objetivo 1 nivel.",
	},
	playrough: {
		name: "Carantoña",
		desc: "Tiene un 10% de probabilidad de bajar un nivel el Ataque del objetivo.",
		shortDesc: "10% de probabilidad de bajar un nivel el Ataque del objetivo.",
	},
	pluck: {
		name: "Picoteo",
		desc: "Si este movimiento tiene éxito y el usuario no se ha debilitado, hurta la baya que lleve el objetivo si tiene una y la come inmediatamente, ganando sus efectos incluso si se está ignorando el objeto del usuario. Los objetos perdidos por este movimiento no pueden recuperarse con Reciclaje ni con la habilidad Cosecha.",
		shortDesc: "El usuario hurta y consume la baya del objetivo.",
		gen4: {
			desc: "El usuario hurta la baya que lleve el objetivo si tiene una y la come inmediatamente, ganando sus efectos, a menos que se ignore el objeto del usuario. Los objetos perdidos por este movimiento pueden recuperarse con Reciclaje.",
		},
		removeItem: "#bugbite",
	},
	poisonfang: {
		name: "Colmillo veneno",
		desc: "Tiene un 50% de probabilidad de envenenar gravemente al objetivo.",
		shortDesc: "50% de probabilidad de envenenar gravemente al objetivo.",
		gen5: {
			desc: "Tiene un 30% de probabilidad de envenenar gravemente al objetivo.",
			shortDesc: "30% de probabilidad de envenenar gravemente al objetivo.",
		},
	},
	poisongas: {
		name: "Gas venenoso",
		desc: "Envenena al objetivo.",
		shortDesc: "Envenena a los rivales.",
		gen2: {
			shortDesc: "Envenena al objetivo.",
		},
	},
	poisonjab: {
		name: "Puya nociva",
		desc: "30% de prob. de envenenar al objetivo.",
		shortDesc: "30% de prob. de envenenar al objetivo.",
	},
	poisonpowder: {
		name: "Polvo veneno",
		desc: "Envenena al objetivo.",
		shortDesc: "Envenena al objetivo.",
	},
	poisonsting: {
		name: "Picotazo veneno",
		desc: "30% de prob. de envenenar al objetivo.",
		shortDesc: "30% de prob. de envenenar al objetivo.",
		gen1: {
			desc: "20% de prob. de envenenar al objetivo.",
			shortDesc: "20% de prob. de envenenar al objetivo.",
		},
	},
	poisontail: {
		name: "Cola veneno",
		desc: "Alto ratio crítico. 10% de prob. de envenenar al objetivo.",
		shortDesc: "Alto ratio crítico. 10% de prob. de envenenar al objetivo.",
	},
	pollenpuff: {
		name: "Bola de polen",
		desc: "Si el objetivo es un aliado, restaura 1/2 de sus PS máximos, redondeando hacia abajo.",
		shortDesc: "Si el objetivo es un aliado, cura 50% de sus PS máximos.",
	},
	poltergeist: {
		name: "Poltergeist",
		shortDesc: "Falla si el objetivo no lleva ningún objeto.",
		activate: "  ¡[POKEMON] está a punto de ser atacado por su [ITEM]!",
	},
	populationbomb: {
		name: "Proliferación",
		desc: "Golpea diez veces. Este movimiento comprueba precisión para cada golpe, y el ataque termina si el objetivo evita un golpe. Si uno de los golpes rompe el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpea diez veces. Si el usuario lleva Dado trucado, este movimiento golpea de cuatro a diez veces al azar sin comprobar precisión entre golpes.",
		shortDesc: "Golpea 10 veces. Cada golpe puede fallar.",
	},
	pounce: {
		name: "Brinco",
		desc: "Ataca abalanzándose sobre el objetivo y le reduce la Velocidad.",
		shortDesc: "Reduce la Velocidad del objetivo.",
	},
	pound: {
		name: "Destructor",
		shortDesc: "Sin efecto adicional.",
	},
	powder: {
		name: "Polvo explosivo",
		desc: "Si el objetivo usa un movimiento de tipo Fuego este turno, se impide su ejecución y pierde 1/4 de sus PS máximos, redondeados hacia arriba.",
		shortDesc: "Si usa mov. Fuego, pierde 1/4 PS máx.",
		gen6: {
			desc: "Si el objetivo usa un movimiento de tipo Fuego este turno, se impide su ejecución y pierde 1/4 de sus PS máximos, redondeados hacia arriba. Este efecto ocurre antes de que Mar del albor impida el movimiento de tipo Fuego.",
		},
		start: "  ¡[POKEMON] está cubierto de polvo!",
		activate: "  ¡Cuando la llama tocó el polvo de [POKEMON], explotó!",
	},
	powdersnow: {
		name: "Nieve polvo",
		desc: "Tiene un 10% de prob. de congelar al objetivo.",
		shortDesc: "10% de prob. de congelar a rivales.",
		gen2: {
			shortDesc: "10% de prob. de congelar al objetivo.",
		},
	},
	powergem: {
		name: "Joya de luz",
		shortDesc: "Sin efecto adicional.",
	},
	powersplit: {
		name: "Isofuerza",
		desc: "El usuario y el objetivo promedian sus PS de Ataque y Atq. Esp., redondeando hacia abajo e ignorando cambios de estadística.",
		shortDesc: "Promedia Atq. y Atq. Esp. con el objetivo.",
		activate: "  ¡[POKEMON] compartió su poder con el objetivo!",
	},
	powerswap: {
		name: "Cambiafuerza",
		desc: "El usuario intercambia sus variaciones de estadios de Ataque y Ataque Especial con las del objetivo.",
		shortDesc: "Intercambia estadios de Atq. y Atq. Esp. con el objetivo.",
	},
	powershift: {
		name: "Cambiapoder",
		desc: "El usuario intercambia sus estadísticas de Ataque y Defensa, y las variaciones de estadios permanecen en sus estadísticas originales. Este movimiento puede usarse de nuevo para volver a intercambiar las estadísticas. Si el usuario usa Relevo, el Pokémon que entre tendrá sus estadísticas de Ataque y Defensa intercambiadas si el efecto está activo. Si las estadísticas del usuario se recalculan al cambiar de forma mientras están intercambiadas, este efecto se ignora pero sigue activo para Relevo.",
		shortDesc: "Intercambia estadísticas de Atq. y Def. del usuario.",
		start: "  ¡[POKEMON] intercambió sus estadísticas ofensivas con las defensivas!",
		end: "#.start",
	},
	powertrick: {
		name: "Truco fuerza",
		desc: "El usuario intercambia sus estadísticas de Ataque y Defensa, y las variaciones de estadios permanecen en sus estadísticas originales. Este movimiento puede usarse de nuevo para volver a intercambiar las estadísticas. Si el usuario usa Relevo, el Pokémon que entre tendrá sus estadísticas de Ataque y Defensa intercambiadas si el efecto está activo. Si las estadísticas del usuario se recalculan al cambiar de forma mientras están intercambiadas, este efecto se ignora pero sigue activo para Relevo.",
		shortDesc: "Intercambia estadísticas de Atq. y Def. del usuario.",
		start: "  ¡[POKEMON] intercambió Ataque y Defensa!",
		end: "#.start",
	},
	powertrip: {
		name: "Chulería",
		desc: "La potencia es igual a 20+(X*20), donde X es la suma de los cambios de nivel de estadística positivos del usuario.",
		shortDesc: "+20 pot. por cada aumento de estadística del usuario.",
	},
	poweruppunch: {
		name: "Puño incremento",
		desc: "100% de prob. de aumentar el Atq. del usuario en 1 nivel.",
		shortDesc: "100% de prob. de aumentar el Atq. del usuario en 1 nivel.",
	},
	powerwhip: {
		name: "Latigazo",
		shortDesc: "Sin efecto adicional.",
	},
	precipiceblades: {
		name: "Filo del abismo",
		desc: "Sin efecto adicional.",
		shortDesc: "Sin efecto adicional. Golpea a rivales adyacentes.",
	},
	present: {
		name: "Presente",
		desc: "Si tiene éxito, inflige daño o restaura PS al objetivo. 40 % de probabilidad de 40 de potencia, 30 % de 80 de potencia, 10 % de 120 de potencia y 20 % de probabilidad de restaurar 1/4 de los PS máximos del objetivo, redondeado hacia abajo.",
		shortDesc: "40, 80, 120 de potencia o cura objetivo 1/4 PS máx.",
		gen2: {
			desc: "Si tiene éxito, inflige daño o restaura PS al objetivo. 102/256 de probabilidad de 40 de potencia, 76/256 de 80 de potencia, 26/256 de 120 de potencia o 52/256 de probabilidad de restaurar 1/4 de los PS máximos del objetivo, redondeado hacia abajo. Si inflige daño, usa una versión anómala de la fórmula de daño sustituyendo ciertos valores: la estadística de Ataque del usuario se reemplaza por 10 x la efectividad de este movimiento contra el objetivo, la estadística de Defensa del objetivo se reemplaza por el índice del tipo secundario del usuario y el nivel del usuario se reemplaza por el índice del tipo secundario del objetivo. Si un Pokémon no tiene tipo secundario, se usa su tipo primario. Los índices para cada tipo son Normal: 0, Lucha: 1, Volador: 2, Veneno: 3, Tierra: 4, Roca: 5, Bicho: 7, Fantasma: 8, Acero: 9, Fuego: 20, Agua: 21, Planta: 22, Eléctrico: 23, Psíquico: 24, Hielo: 25, Dragón: 26, Siniestro: 27. Si en algún punto la fórmula divide por 0, divide por 1 en su lugar.",
		},
	},
	prismaticlaser: {
		name: "Láser prisma",
		desc: "Si tiene éxito, el usuario debe descansar el siguiente turno y no puede seleccionar otro movimiento.",
		shortDesc: "Usuario no puede moverse el siguiente turno.",
	},
	protect: {
		name: "Protección",
		desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa último este turno.",
		shortDesc: "Impide que los movimientos afecten al usuario este turno.",
		gen8: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa último este turno.",
		},
		gen7: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa último este turno.",
		},
		gen6: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si falla, si el último movimiento usado por el usuario no es Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa último este turno.",
		},
		gen5: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se duplica cada vez que se usa con éxito. X se restablece a 1 si falla o si el último movimiento usado por el usuario no es Detección, Aguante, Protección, Anticipo o Vasta guardia. Falla si el usuario actúa último este turno.",
		},
		gen4: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de 1/X de tener éxito, donde X comienza en 1 y se duplica cada vez que se usa con éxito, hasta un máximo de 8. X se restablece a 1 si falla o si el último movimiento usado por el usuario no es Detección, Aguante o Protección. Falla si el usuario actúa último este turno.",
		},
		gen3: {
			desc: "El usuario está protegido de la mayoría de los ataques realizados por otros Pokémon durante este turno. Este movimiento tiene una probabilidad de X/65536 de tener éxito, donde X comienza en 65535 y se reduce a la mitad (redondeando hacia abajo) cada vez que se usa con éxito. Tras el cuarto uso consecutivo exitoso, X pasa a 118 y continúa con valores aparentemente aleatorios de 0-65535 en usos posteriores. X se restablece a 65535 si falla o si el último movimiento usado por el usuario no es Detección, Aguante o Protección. Falla si el usuario actúa último este turno.",
		},
		gen2: {
			desc: "El usuario está protegido de los ataques del oponente durante este turno. Este movimiento tiene una probabilidad de X/255 de tener éxito, donde X comienza en 255 y se reduce a la mitad (redondeando hacia abajo) cada vez que se usa con éxito. X se restablece a 255 si falla o si el último movimiento usado por el usuario no es Detección, Aguante o Protección. Falla si el usuario tiene un Sustituto o actúa último este turno.",
		},
		start: "  ¡[POKEMON] se protegió!",
		block: "  ¡[POKEMON] se protegió!",
	},
	psybeam: {
		name: "Psicorrayo",
		desc: "Tiene un 10% de probabilidad de confundir al objetivo.",
		shortDesc: "10% de prob. de confundir al objetivo.",
	},
	psyblade: {
		name: "Psicohojas",
		desc: "Durante Campo eléctrico: potencia x1,5.",
		shortDesc: "Durante Campo eléctrico: potencia x1,5.",
	},
	psychup: {
		name: "Autosugestión",
		desc: "El usuario copia todas las variaciones de estadios del objetivo.",
		shortDesc: "Copia los estadios del objetivo.",
		gen2: {
			desc: "El usuario copia todas las variaciones de estadios del objetivo. Falla si los estadios son 0.",
		},
	},
	psychic: {
		name: "Psíquico",
		desc: "Tiene un 10% de probabilidad de bajar un nivel la Defensa Especial del objetivo.",
		shortDesc: "10% de prob. de bajar 1 nivel la Def. Esp. del objetivo.",
		gen1: {
			desc: "Tiene un 33% de probabilidad de bajar un nivel la Especial del objetivo.",
			shortDesc: "33% de prob. de bajar 1 nivel la Especial del objetivo.",
		},
	},
	psychicfangs: {
		name: "Psicocolmillo",
		desc: "Si este ataque no falla, los efectos de Reflejo, Pantalla de luz y Velo aurora en el lado del campo del objetivo terminan antes de calcular el daño.",
		shortDesc: "Destruye pantallas, salvo inmunidad.",
	},
	psychicnoise: {
		name: "Psicorruido",
		desc: "Durante 2 turnos, el objetivo no puede restaurar PS mientras permanezca activo. Durante el efecto, los movimientos de curación y drenaje son inutilizables, y las habilidades y objetos que permitan curación no restaurarán PS al usuario. Si un Pokémon afectado usa Relevo, su sustituto seguirá sin poder restaurar PS. Divide dolor y la habilidad Regeneración no se ven afectados.",
		shortDesc: "Durante 2 turnos, el objetivo no puede curarse.",
	},
	psychicterrain: {
		name: "Campo psíquico",
		desc: "Durante 5 turnos, el terreno cambia a Campo psíquico. Durante el efecto, la potencia de los ataques de tipo Psíquico de los Pokémon en contacto con el suelo se multiplica por 1,3 y los Pokémon en contacto con el suelo no pueden ser alcanzados por movimientos con prioridad mayor que 0, a menos que el objetivo sea un aliado. Camuflaje transforma al usuario en tipo Psíquico, Adaptación pasa a ser Psíquico y Daño secreto tiene un 30 % de probabilidad de bajar un nivel la Velocidad del objetivo. Falla si el terreno actual es Campo psíquico.",
		shortDesc: "5 turnos. En suelo: x1,3 Psíquico, prioridad segura.",
		gen7: {
			desc: "Durante 5 turnos, el terreno cambia a Campo psíquico. Durante el efecto, la potencia de los ataques de tipo Psíquico de los Pokémon en contacto con el suelo se multiplica por 1,5 y los Pokémon en contacto con el suelo no pueden ser alcanzados por movimientos con prioridad mayor que 0, a menos que el objetivo sea un aliado. Camuflaje transforma al usuario en tipo Psíquico, Adaptación pasa a ser Psíquico y Daño secreto tiene un 30 % de probabilidad de bajar un nivel la Velocidad del objetivo. Falla si el terreno actual es Campo psíquico.",
		},
	},
	psychoboost: {
		name: "Psicoataque",
		desc: "Baja dos niveles el Ataque Especial del usuario.",
		shortDesc: "Baja el Atq. Esp. del usuario 2 niveles.",
	},
	psychocut: {
		name: "Psicocorte",
		desc: "Tiene una alta probabilidad de asestar un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	psychoshift: {
		name: "Psicocambio",
		desc: "Se transfiere la condición de estado no volátil del usuario al objetivo y luego el usuario queda curado. Falla si el usuario no tiene una condición de estado no volátil o si el objetivo ya tiene una.",
		shortDesc: "Transfiere la condición de estado del usuario al objetivo.",
	},
	psyshieldbash: {
		name: "Asalto barrera",
		desc: "Tiene un 100% de probabilidad de subir un nivel la Defensa del usuario.",
		shortDesc: "100% de probabilidad de subir un nivel la Defensa del usuario.",
	},
	psyshock: {
		name: "Psicocarga",
		desc: "Inflige daño al objetivo en función de su Defensa en lugar de su Defensa Especial.",
		shortDesc: "Inflige daño según Def., no Def. Esp.",
	},
	psystrike: {
		name: "Onda mental",
		desc: "Inflige daño al objetivo en función de su Defensa en lugar de su Defensa Especial.",
		shortDesc: "Inflige daño según Def., no Def. Esp.",
	},
	psywave: {
		name: "Psicoonda",
		desc: "Inflige daño al objetivo igual a (nivel del usuario) * (X + 50) / 100, donde X es un número aleatorio de 0 a 100, redondeado hacia abajo, pero no menos de 1 PS.",
		shortDesc: "Daño aleatorio igual a 0.5x-1.5x nivel del usuario.",
		gen4: {
			desc: "Inflige daño al objetivo igual a (nivel del usuario) * (X * 10 + 50) / 100, donde X es un número aleatorio de 0 a 10, redondeado hacia abajo, pero no menos de 1 PS.",
		},
		gen2: {
			desc: "Inflige daño al objetivo igual a un número aleatorio de 1 a (nivel del usuario * 1.5 - 1), redondeado hacia abajo, pero no menos de 1 PS.",
			shortDesc: "Daño aleatorio de 1 a (nivel del usuario*1.5 - 1).",
		},
	},
	pulverizingpancake: {
		name: "Arrojo intempestivo",
		shortDesc: "Sin efecto adicional.",
	},
	punishment: {
		name: "Castigo",
		desc: "La potencia es 60+(X*20), donde X es el total de estadios de mejora del objetivo mayores que 0; no supera los 200 de potencia.",
		shortDesc: "60 de potencia +20 por cada aumento de estadística del objetivo.",
	},
	purify: {
		name: "Purificación",
		desc: "Cura la condición de estado del objetivo. Si lo está, el usuario recupera la mitad de sus PS máximos, redondeado hacia abajo.",
		shortDesc: "Cura estado al objetivo; cura al usuario 1/2 PS máx.",
	},
	pursuit: {
		name: "Persecución",
		desc: "Si un Pokémon oponente cambia este turno, este movimiento lo golpea antes de que abandone el campo, incluso si no era el objetivo original. Si el usuario actúa tras un oponente que use Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio, pero no Relevo, golpeará a ese oponente antes de que salga. La potencia se duplica y no se comprueba precisión al golpear a un oponente que cambia, y el turno del usuario termina; si un oponente se debilita así, el reemplazo no entra hasta el final del turno.",
		shortDesc: "Si un oponente cambia, golpea al doble de potencia.",
		gen7: {
			desc: "Si un oponente adyacente cambia este turno, este movimiento lo golpea antes de que abandone el campo, incluso si no era el objetivo original. Si el usuario actúa tras un oponente que use Última palabra, Ida y vuelta o Voltiocambio, pero no Relevo, golpeará a ese oponente antes de que salga. La potencia se duplica y no se comprueba precisión al golpear a un oponente que cambia, y el turno del usuario termina; si un oponente se debilita así, el reemplazo no entra hasta el final del turno.",
		},
		gen5: {
			desc: "Si un oponente adyacente cambia este turno, este movimiento lo golpea antes de que abandone el campo, incluso si no era el objetivo original. Si el usuario actúa tras un oponente que use Ida y vuelta o Voltiocambio, pero no Relevo, golpeará a ese oponente antes de que salga. La potencia se duplica y no se comprueba precisión al golpear a un oponente que cambia, y el turno del usuario termina; si un oponente se debilita así, el reemplazo no entra hasta el final del turno.",
		},
		gen4: {
			desc: "Si un oponente cambia este turno, este movimiento lo golpea antes de que abandone el campo, incluso si no era el objetivo original. Si el usuario actúa tras un oponente que use Ida y vuelta, pero no Relevo, golpeará a ese oponente antes de que salga. La potencia se duplica y no se comprueba precisión al golpear a un oponente que cambia, y el turno del usuario termina; si un oponente se debilita así, el reemplazo entra inmediatamente.",
		},
		gen3: {
			desc: "Si el objetivo es un oponente y cambia este turno, este movimiento lo golpea antes de que salga del campo. La potencia se duplica y no se comprueba precisión al golpear a un oponente que cambia, y el turno del usuario termina; si un oponente se debilita así, el reemplazo entra inmediatamente.",
			shortDesc: "Potencia x2 si el objetivo cambia.",
		},
		gen2: {
			desc: "Si el objetivo cambia este turno, este movimiento lo golpea antes de que salga del campo con potencia duplicada y el turno del usuario termina.",
			shortDesc: "Potencia x2 si el objetivo cambia.",
		},
		activate: "  ([TARGET] está siendo retirado...)",
	},
	pyroball: {
		name: "Balón ígneo",
		desc: "Tiene un 10% de probabilidad de quemar al objetivo.",
		shortDesc: "10% de probabilidad de quemar al objetivo. Descongela al usuario.",
	},
	quash: {
		name: "Último lugar",
		desc: "Hace que el objetivo tome su turno después de todos los demás Pokémon este turno, sin importar la prioridad de su movimiento. Falla si el objetivo ya se movió este turno.",
		activate: "  ¡El movimiento de [TARGET] fue aplazado!",
	},
	quickattack: {
		name: "Ataque rápido",
		desc: "Sin efecto adicional.",
		shortDesc: "Suele ir primero.",
	},
	quickguard: {
		name: "Anticipo",
		desc: "El usuario y los miembros de su equipo están protegidos de ataques con prioridad original o modificada mayor que 0 realizados por otros Pokémon, incluidos aliados, durante este turno. Este movimiento modifica la misma probabilidad 1/X de éxito usada por otros movimientos de protección, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito, pero no se utiliza para comprobar fallos. X vuelve a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa el último este turno o si este movimiento ya está en efecto para el bando del usuario.",
		shortDesc: "Protege al equipo de ataques prioritarios este turno.",
		gen8: {
			desc: "El usuario y los miembros de su equipo están protegidos de ataques con prioridad original o modificada mayor que 0 realizados por otros Pokémon, incluidos aliados, durante este turno. Este movimiento modifica la misma probabilidad 1/X de éxito usada por otros movimientos de protección, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito, pero no se utiliza para comprobar fallos. X vuelve a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa el último este turno o si este movimiento ya está en efecto para el bando del usuario.",
		},
		gen7: {
			desc: "El usuario y los miembros de su equipo están protegidos de ataques con prioridad original o modificada mayor que 0 realizados por otros Pokémon, incluidos aliados, durante este turno. Este movimiento modifica la misma probabilidad 1/X de éxito usada por otros movimientos de protección, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito, pero no se utiliza para comprobar fallos. X vuelve a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa el último este turno o si este movimiento ya está en efecto para el bando del usuario.",
		},
		gen6: {
			desc: "El usuario y los miembros de su equipo están protegidos de ataques con prioridad original o modificada mayor que 0 realizados por otros Pokémon, incluidos aliados, durante este turno. Este movimiento modifica la misma probabilidad 1/X de éxito usada por otros movimientos de protección, donde X comienza en 1 y se triplica cada vez que este movimiento se usa con éxito, pero no se utiliza para comprobar fallos. X vuelve a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario fue rota. Falla si el usuario actúa el último este turno o si este movimiento ya está en efecto para el bando del usuario.",
		},
		gen5: {
			desc: "El usuario y los miembros de su equipo están protegidos de ataques con prioridad original mayor que 0 realizados por otros Pokémon, incluidos aliados, durante este turno. Este movimiento tiene una probabilidad 1/X de éxito, donde X comienza en 1 y se duplica cada vez que se usa con éxito. X vuelve a 1 si este movimiento falla o si el último movimiento usado por el usuario no es Detección, Aguante, Protección, Anticipo o Vasta guardia. Si X es 256 o más, la probabilidad de éxito es 1/(2^32). Falla si el usuario actúa el último este turno o si este movimiento ya está en efecto para el bando del usuario.",
		},
		start: "  ¡Anticipo protegió a [TEAM]!",
		block: "  ¡Anticipo protegió a [POKEMON]!",
	},
	quiverdance: {
		name: "Danza aleteo",
		desc: "Sube un nivel el Ataque Especial, la Defensa Especial y la Velocidad del usuario.",
		shortDesc: "Sube Atq. Esp., Def. Esp. y Vel. 1 nivel.",
	},
	rage: {
		name: "Furia",
		desc: "Una vez que este movimiento se usa con éxito, el Ataque del usuario sube 1 nivel cada vez que recibe un ataque de otro Pokémon mientras esté seleccionado este movimiento.",
		shortDesc: "Sube 1 nivel el Ataque si es golpeado durante su uso.",
		gen3: {
			desc: "Una vez usado este movimiento y a menos que el objetivo se proteja, el Ataque del usuario sube 1 nivel cada vez que recibe un ataque de otro Pokémon mientras esté seleccionado este movimiento.",
		},
		gen2: {
			desc: "Una vez que este movimiento se usa con éxito, X comienza en 1. El daño de este movimiento se multiplica por X, y cada vez que el usuario es golpeado por el oponente, X aumenta en 1, con un máximo de 255. X se restablece a 1 cuando el usuario deja de estar activo o no elige este movimiento.",
			shortDesc: "El daño de Furia aumenta si es golpeado durante el uso.",
		},
		gen1: {
			desc: "Una vez que este movimiento se usa con éxito, el usuario lo repite automáticamente cada turno y ya no puede cambiarse. Durante este efecto, el Ataque del usuario sube 1 nivel cada vez que recibe un ataque del oponente, y la exactitud de este movimiento se recalcula cada turno con los cambios de estadística, pero nunca menos de 1/256 ni más de 255/256.",
			shortDesc: "Dura indefinidamente. Sube Ataque 1 nivel al ser golpeado.",
		},
	},
	ragefist: {
		name: "Puño furia",
		desc: "La potencia es igual a 50 + (X * 50), donde X es el número total de veces que el usuario ha sido golpeado por un ataque dañino durante la batalla, incluso si no perdió PS. X no puede superar 6 y no se restablece al cambiarse o debilitarse. Cada golpe de un ataque múltiple cuenta, pero el daño por confusión no.",
		shortDesc: "Potencia +50 por cada golpe recibido. Máx. 6 golpes.",
	},
	ragepowder: {
		name: "Polvo ira",
		desc: "Durante el turno, todos los ataques dirigidos a un solo objetivo del lado rival se redirigen al usuario. Estos ataques se redirigen antes de que puedan ser reflejados por Capa mágica o por la habilidad Espejo mágico, o absorbidos por Pararrayos o Colector. Falla si no es un Combate doble o Battle Royale. Este efecto se ignora mientras el usuario esté bajo el efecto de Caída libre.",
		shortDesc: "Los movimientos rivales apuntan al usuario este turno.",
		gen6: {
			desc: "Durante el turno, todos los ataques dirigidos a un solo objetivo del lado rival se redirigen al usuario si están al alcance. Estos ataques se redirigen antes de que puedan ser reflejados por Capa mágica o por la habilidad Espejo mágico, o absorbidos por Pararrayos o Colector. Falla si no es un Combate doble o Combate triple. Este efecto se ignora mientras el usuario esté bajo el efecto de Caída libre.",
		},

		start: "#followme",
		startFromZEffect: "#followme",
	},
	ragingbull: {
		name: "Furia taurina",
		desc: "Si este ataque no falla, los efectos de Reflejo, Pantalla de luz y Velo aurora terminan para el lado objetivo antes de calcular el daño. Si la forma actual del usuario es Tauros de Paldea, el tipo de este movimiento cambia para coincidir: tipo Lucha para la variedad combatiente, tipo Fuego para la variedad ardiente y tipo Agua para la variedad acuática.",
		shortDesc: "Destruye pantallas. Tipo según la forma del usuario.",

		activate: "  ¡[POKEMON] destrozó las protecciones de [TEAM]!",
	},
	ragingfury: {
		name: "Erupción de ira",
		desc: "El usuario permanece dos o tres turnos encadenado a este movimiento y se confunde inmediatamente después de usarlo en el último turno del efecto si no lo estaba ya. Este movimiento apunta a un Pokémon oponente al azar en cada turno. Si el usuario está impedido de moverse, está dormido al comienzo de un turno, o el ataque no tiene éxito contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin provocar confusión. Si este movimiento se llama por Sonámbulo y el usuario está dormido, el movimiento se usa un turno y no confunde al usuario.",
		shortDesc: "Dura 2-3 turnos. Luego confunde al usuario.",
	},
	raindance: {
		name: "Danza lluvia",
		desc: "Durante 5 turnos, el clima cambia a lluvia intensa. La potencia de los movimientos de tipo Agua se multiplica por 1,5 y la de los de tipo Fuego por 0,5 durante el efecto. Dura 8 turnos si el usuario lleva equipada la Roca lluvia. Falla si el clima ya es lluvia intensa.",
		shortDesc: "5 turnos de lluvia intensa potencia movimientos Agua.",
		gen3: {
			desc: "Durante 5 turnos, el clima cambia a lluvia intensa. La potencia de los movimientos de tipo Agua se multiplica por 1,5 y la de los de tipo Fuego por 0,5 durante el efecto. Falla si el clima ya es lluvia intensa.",
		},
		gen2: {
			desc: "Durante 5 turnos, el clima cambia a lluvia intensa, incluso si ya lo era. La potencia de los movimientos de tipo Agua se multiplica por 1,5 y la de los de tipo Fuego por 0,5 durante el efecto.",
		},
	},
	rapidspin: {
		name: "Giro rápido",
		desc: "Si este movimiento tiene éxito y el usuario no se debilita, se terminan los efectos de Drenadoras y de movimientos que atrapan para el usuario, y se eliminan todos las trampas de campo de su lado. Tiene un 100 % de probabilidad de subir la Velocidad del usuario 1 nivel.",
		shortDesc: "Libera al usuario de trampas, ataduras y Drenadoras; +1 Vel.",
		gen7: {
			desc: "Si este movimiento tiene éxito y el usuario no se debilita, se terminan los efectos de Drenadoras y de movimientos que atrapan para el usuario, y se eliminan todos las trampas de campo de su lado.",
			shortDesc: "Libera al usuario de trampas, ataduras y Drenadoras.",
		},
		gen4: {
			desc: "Si este movimiento tiene éxito, se terminan los efectos de Drenadoras y de movimientos que atrapan contra el usuario, y se eliminan todos las trampas de campo de su lado.",
		},
		gen3: {
			desc: "Si este movimiento tiene éxito, se terminan los efectos de Drenadoras y de movimientos que atrapan para el usuario, y se eliminan las Púas de su lado.",
		},
	},
	razorleaf: {
		name: "Hoja afilada",
		desc: "Tiene una mayor probabilidad de golpe crítico.",
		shortDesc: "Alta probabilidad de crítico. Golpea a oponentes adyacentes.",
		gen2: {
			shortDesc: "Alta probabilidad de crítico.",
		},
	},
	razorshell: {
		name: "Concha filo",
		desc: "Tiene un 50% de probabilidad de reducir en 1 nivel la Defensa del objetivo.",
		shortDesc: "50% de prob. de reducir la Defensa en 1 nivel.",
	},
	razorwind: {
		name: "Viento cortante",
		desc: "Tiene una mayor probabilidad de golpe crítico. Este ataque se carga en el primer turno y golpea en el segundo. Si el usuario lleva una Hierba única, se completa en un turno.",
		shortDesc: "Carga, luego golpea en el turno 2. Alta prob. de crítico.",
		gen4: {
			desc: "Este ataque se carga en el primer turno y golpea en el segundo.",
		},
		gen3: {
			desc: "Este ataque se carga en el primer turno y golpea en el segundo.",
			shortDesc: "Carga, luego golpea en el turno 2.",
		},
		gen2: {
			desc: "Tiene una mayor probabilidad de golpe crítico. Este ataque se carga en el primer turno y golpea en el segundo.",
			shortDesc: "Carga, luego golpea en el turno 2. Alta prob. de crítico.",
		},
		gen1: {
			desc: "Este ataque se carga en el primer turno y golpea en el segundo.",
			shortDesc: "Carga en el turno 1. Golpea en el turno 2.",
		},

		prepare: "  ¡[POKEMON] formó un remolino!",
	},
	recover: {
		name: "Recuperación",
		desc: "El usuario restaura 1/2 de sus PS máximos, redondeado hacia arriba.",
		shortDesc: "Restaura al usuario 50% de sus PS máximos.",
		gen4: {
			desc: "El usuario restaura 1/2 de sus PS máximos, redondeado hacia abajo.",
		},
		gen1: {
			desc: "El usuario restaura 1/2 de sus PS máximos, redondeado hacia abajo. Falla si (PS máximos del usuario - PS actuales del usuario + 1) es divisible por 256.",
		},
	},
	recycle: {
		name: "Reciclaje",
		desc: "El usuario recupera el objeto que usó por última vez. Falla si ya porta un objeto, si nunca ha llevado uno, si era un globo helio desinflado, si fue recogido por un Pokémon con la habilidad Recogida, si fue perdido por Picadura, Gas corrosivo, Antojo, Calcinación, Desarme, Picoteo o Ladrón. Los objetos lanzados con Lanzamiento pueden recuperarse.",
		shortDesc: "Recupera el objeto usado por última vez.",
		gen7: {
			desc: "El usuario recupera el objeto que usó por última vez. Falla si ya porta un objeto, si nunca ha llevado uno, si era un globo helio desinflado, si fue recogido por un Pokémon con la habilidad Recogida, o si fue perdido por Picadura, Antojo, Calcinación, Desarme, Picoteo o Ladrón. Los objetos lanzados con Lanzamiento pueden recuperarse.",
		},
		gen4: {
			desc: "El usuario recupera el objeto usado por un Pokémon en su posición actual en el campo, incluso si no fue el usuario. Falla si ya porta un objeto, si no se ha usado ningún objeto en esa posición, o si fue perdido por Antojo, Desarme o Ladrón. Los objetos lanzados con Lanzamiento pueden recuperarse.",
		},

		addItem: "  [POKEMON] encontró un [ITEM]!",
	},
	reflect: {
		name: "Reflejo",
		desc: "Durante 5 turnos, el usuario y sus compañeros reciben 0,5x de daño de ataques físicos, o 0,66x si es Combate doble. Los golpes críticos ignoran este efecto. Se elimina si el usuario o un aliado es golpeado exitosamente por Demolición, Psicocolmillo o Despejar. Dura 8 turnos si el usuario lleva un Refleluz. Falla si el efecto ya está activo en el lado del usuario.",
		shortDesc: "Durante 5 turnos, daño físico a aliados a la mitad.",
		gen6: {
			desc: "Durante 5 turnos, el usuario y sus compañeros reciben 0,5x de daño de ataques físicos, o 0,66x si es Combate doble o Combate triple. Los golpes críticos ignoran este efecto. Se elimina si el usuario o un aliado es golpeado exitosamente por Demolición o Despejar. Dura 8 turnos si el usuario lleva un Refleluz. Falla si el efecto ya está activo en el lado del usuario.",
		},
		gen4: {
			desc: "Durante 5 turnos, el usuario y sus compañeros reciben 0,5x de daño de ataques físicos, o 0,66x si hay varios Pokémon activos en el lado del usuario. Los golpes críticos ignoran este efecto. Se elimina si el usuario o un aliado es golpeado exitosamente por Demolición o Despejar. Dura 8 turnos si el usuario lleva un Refleluz. Falla si el efecto ya está activo en el lado del usuario.",
		},
		gen3: {
			desc: "Durante 5 turnos, el usuario y sus compañeros reciben 0,5x de daño de ataques físicos, o 0,66x si hay varios Pokémon activos en el lado del usuario. Los golpes críticos ignoran este efecto. Se elimina si el usuario o un aliado es golpeado exitosamente por Demolición. Falla si el efecto ya está activo en el lado del usuario.",
		},
		gen2: {
			desc: "Durante 5 turnos, el usuario y sus compañeros tienen su Defensa duplicada. Los golpes críticos ignoran este efecto. Falla si el efecto ya está activo en el lado del usuario.",
			shortDesc: "Durante 5 turnos, Defensa del equipo duplicada.",
		},
		gen1: {
			desc: "Mientras el usuario esté activo, su Defensa se dobla al recibir daño. Los golpes críticos ignoran esta protección. Este efecto se puede eliminar con Niebla.",
			shortDesc: "Mientras esté activo, la Defensa del usuario se dobla.",
			start: "  ¡[POKEMON] ganó armadura!",
		},

		start: "  ¡Reflejo fortaleció a [TEAM] contra movimientos físicos!",
		end: "  ¡El Reflejo de [TEAM] desapareció!",
	},
	reflecttype: {
		name: "Clonatipo",
		desc: "Hace que los tipos del usuario coincidan con los tipos actuales del objetivo. Si los tipos actuales del objetivo incluyen Tipo (?) y un tipo no añadido, se ignora Tipo (?). Si los tipos actuales del objetivo incluyen Tipo (?) y un tipo añadido por Condena silvana o Halloween, Tipo (?) se copia como Tipo Normal en su lugar. Falla si el usuario es Arceus o Silvally, si el usuario está teracristalizado o si el tipo actual del objetivo es solo Tipo (?).",
		shortDesc: "El usuario cambia al tipo del objetivo.",
		gen8: {
			desc: "Hace que los tipos del usuario coincidan con los tipos actuales del objetivo. Si los tipos actuales del objetivo incluyen Tipo (?) y un tipo no añadido, se ignora Tipo (?). Si los tipos actuales del objetivo incluyen Tipo (?) y un tipo añadido por Condena silvana o Halloween, Tipo (?) se copia como Tipo Normal en su lugar. Falla si el usuario es Arceus o Silvally, o si el tipo actual del objetivo es solo Tipo (?).",
		},
		gen6: {
			desc: "Hace que los tipos del usuario coincidan con los tipos actuales del objetivo. Falla si el usuario es Arceus.",
		},

		typeChange: "  ¡El tipo de [POKEMON] se volvió igual al de [SOURCE]!",
	},
	refresh: {
		name: "Alivio",
		desc: "El usuario cura su quemadura, envenenamiento o parálisis. Falla si el usuario no está quemado, envenenado o paralizado.",
		shortDesc: "Cura quemadura, envenenamiento o parálisis.",
	},
	relicsong: {
		name: "Canto arcaico",
		desc: "Tiene un 10% de prob. de dormir al objetivo. Si este movimiento tiene éxito en al menos un objetivo y el usuario es Meloetta, cambia a forma danza si está en forma lírica, o a forma lírica si está en forma danza. Este cambio de forma no ocurre si Meloetta tiene la habilidad Potencia bruta. La forma danza vuelve a forma lírica cuando Meloetta no está activa.",
		shortDesc: "10% de prob. de dormir al objetivo. Meloetta cambia de forma.",
	},
	rest: {
		name: "Descanso",
		desc: "El usuario cae dormido durante los dos turnos siguientes y recupera todos sus PS, curando cualquier problema de estado no volátil en el proceso. Falla si el usuario tiene sus PS al máximo, ya está dormido o si otro efecto le impide dormir.",
		shortDesc: "Duerme 2 turnos y restaura PS y estado.",
		gen2: {
			desc: "El usuario cae dormido durante los dos turnos siguientes y recupera todos sus PS, curando cualquier problema de estado no volátil en el proceso, incluso si ya estaba dormido. Falla si el usuario tiene sus PS al máximo.",
		},
		gen1: {
			desc: "El usuario cae dormido durante los dos turnos siguientes y recupera todos sus PS, curando cualquier problema de estado no volátil en el proceso. Esto no elimina la penalización de estadísticas por quemadura o parálisis. Falla si el usuario tiene sus PS al máximo.",
		},
	},
	retaliate: {
		name: "Represalia",
		desc: "La potencia se duplica si un miembro del equipo del usuario se debilitó el turno anterior.",
		shortDesc: "Potencia x2 si un aliado se debilitó el turno anterior.",
	},
	return: {
		name: "Retribución",
		desc: "La potencia es igual al mayor de (amistad del usuario x 2/5), redondeado hacia abajo, o 1.",
		shortDesc: "Pot. máx. 102 con amistad máx.",
	},
	revelationdance: {
		name: "Danza despertar",
		desc: "El tipo de este movimiento depende del tipo principal del usuario. Si el tipo principal del usuario es sin tipo, el tipo de este movimiento será el tipo secundario del usuario si lo tiene; de lo contrario, será el tipo añadido por Condena silvana o Halloween. Este movimiento es sin tipo si el usuario es únicamente sin tipo.",
		shortDesc: "El tipo varía según el tipo principal del usuario.",
	},
	revenge: {
		name: "Desquite",
		desc: "La potencia se duplica si el usuario fue golpeado por el objetivo este turno.",
		shortDesc: "La potencia se duplica si el usuario es dañado por el objetivo.",
		gen4: {
			desc: "La potencia se duplica si el usuario fue golpeado por un Pokémon en la posición del objetivo este turno.",
		},
		gen3: {
			desc: "El daño se duplica si el usuario fue golpeado por un Pokémon en la posición del objetivo este turno y ese Pokémon fue el último en golpear al usuario.",
			shortDesc: "El daño se duplica si el usuario es golpeado por el objetivo.",
		},
	},
	reversal: {
		name: "Inversión",
		desc: "La potencia de este movimiento es 20 si X está entre 33 y 48, 40 si X está entre 17 y 32, 80 si X está entre 10 y 16, 100 si X está entre 5 y 9, 150 si X está entre 2 y 4 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 48 / PS máximos del usuario), redondeado hacia abajo.",
		shortDesc: "Más potencia cuanto menos PS le queden al usuario.",
		gen4: {
			desc: "La potencia de este movimiento es 20 si X está entre 43 y 48, 40 si X está entre 22 y 42, 80 si X está entre 13 y 21, 100 si X está entre 6 y 12, 150 si X está entre 2 y 5 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 64 / PS máximos del usuario), redondeado hacia abajo.",
		},
		gen3: {
			desc: "La potencia de este movimiento es 20 si X está entre 33 y 48, 40 si X está entre 17 y 32, 80 si X está entre 10 y 16, 100 si X está entre 5 y 9, 150 si X está entre 2 y 4 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 48 / PS máximos del usuario), redondeado hacia abajo.",
		},
		gen2: {
			desc: "La potencia de este movimiento es 20 si X está entre 33 y 48, 40 si X está entre 17 y 32, 80 si X está entre 10 y 16, 100 si X está entre 5 y 9, 150 si X está entre 2 y 4 y 200 si X es 0 o 1, donde X es igual a (PS actuales del usuario * 48 / PS máximos del usuario), redondeado hacia abajo. Este movimiento no aplica variación de daño y no puede hacer golpe crítico.",
		},
	},
	revivalblessing: {
		name: "Plegaria vital",
		desc: "Se selecciona a un miembro del equipo desmayado y se le revive con la mitad de sus PS máximos, redondeados hacia abajo. Falla si no hay miembros desmayados.",
		shortDesc: "Revive un Pokémon desmayado al 50 % de sus PS.",

		heal: "  ¡[POKEMON] fue revivido y está listo para volver a luchar!",
	},
	risingvoltage: {
		name: "Alto voltaje",
		desc: "Si el terreno es Campo eléctrico y el objetivo está en el suelo, la potencia de este movimiento se duplica.",
		shortDesc: "2x potencia si el objetivo está en el suelo en Campo eléctrico.",
	},
	roar: {
		name: "Rugido",
		desc: "El objetivo se ve obligado a cambiar y ser reemplazado por un aliado aleatorio que no esté desmayado. Falla si es el último Pokémon no desmayado de su equipo, si ha usado Arraigo antes o si tiene la habilidad Ventosas.",
		shortDesc: "Obliga al objetivo a cambiar por un aliado aleatorio.",
		gen4: {
			desc: "El objetivo se ve obligado a cambiar y ser reemplazado por un aliado aleatorio que no esté desmayado. Falla si es el último Pokémon no desmayado de su equipo, si ha usado Arraigo antes o si tiene la habilidad Ventosas, o si el nivel del usuario es inferior al del objetivo y X * (nivel del usuario + nivel del objetivo) / 256 + 1 es menor o igual a (nivel del objetivo / 4), redondeado hacia abajo, donde X es un número aleatorio de 0 a 255.",
		},
		gen2: {
			desc: "El objetivo se ve obligado a cambiar y ser reemplazado por un aliado aleatorio que no esté desmayado. Falla si es el último Pokémon no desmayado de su equipo o si el usuario actúa antes que el objetivo.",
		},
		gen1: {
			desc: "Sin uso competitivo.",
			shortDesc: "Sin uso competitivo.",
		},
	},
	roaroftime: {
		name: "Distorsión",
		desc: "Si este movimiento tiene éxito, el usuario debe descansar en el siguiente turno y no puede seleccionar ningún movimiento.",
		shortDesc: "El usuario no puede actuar el turno siguiente.",
	},
	rockblast: {
		name: "Pedrada",
		desc: "Golpea de 2 a 5 veces. Tiene un 35 % de prob. de golpear 2 o 3 veces y un 15 % de prob. de golpear 4 o 5 veces. Si uno de los golpes destruye el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento golpeará siempre 5 veces. Si el usuario lleva el Dado trucado, este movimiento golpeará de 4 a 5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen8: {
			desc: "Golpea de 2 a 5 veces. Tiene un 35 % de prob. de golpear 2 o 3 veces y un 15 % de prob. de golpear 4 o 5 veces. Si uno de los golpes destruye el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento golpeará siempre 5 veces.",
		},
		gen4: {
			desc: "Golpea de 2 a 5 veces. Tiene una prob. de 3/8 de golpear 2 o 3 veces, y de 1/8 de golpear 4 o 5 veces. Si uno de los golpes destruye el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento golpeará siempre 5 veces. Si el objetivo tiene la Banda focus y tenía sus PS máximos al inicio, no se debilitará sin importar el número de golpes.",
		},
		gen3: {
			desc: "Golpea de 2 a 5 veces. Tiene una prob. de 3/8 de golpear 2 o 3 veces, y de 1/8 de golpear 4 o 5 veces. Si uno de los golpes destruye el sustituto del objetivo, este recibirá daño por los golpes restantes.",
		},
	},
	rockclimb: {
		name: "Treparrocas",
		desc: "Tiene un 20 % de prob. de confundir al objetivo.",
		shortDesc: "20 % de prob. de confundir al objetivo.",
	},
	rockpolish: {
		name: "Pulimento",
		desc: "Sube dos niveles la Velocidad del usuario.",
		shortDesc: "Sube 2niv. Velocidad del usuario.",
	},
	rockslide: {
		name: "Avalancha",
		desc: "Tiene un 30% de probabilidad de amedrentar al objetivo.",
		shortDesc: "30% de prob. de amedrentar a oponentes adyacentes.",
		gen1: {
			desc: "Sin efecto adicional.",
			shortDesc: "Sin efecto adicional.",
		},
		gen2: {
			shortDesc: "30% de prob. de amedrentar al objetivo.",
		},
	},
	rocksmash: {
		name: "Golpe roca",
		desc: "Tiene un 50% de probabilidad de reducir en 1 nivel la Defensa del objetivo.",
		shortDesc: "50% de prob. de reducir la Defensa en 1 nivel.",
	},
	rockthrow: {
		name: "Lanzarrocas",
		shortDesc: "Sin efecto adicional.",
	},
	rocktomb: {
		name: "Tumba rocas",
		desc: "Tiene un 100 % de prob. de bajar la Velocidad del objetivo 1 nivel.",
		shortDesc: "100 % de prob. de bajar Vel. del objetivo 1 nivel.",
	},
	rockwrecker: {
		name: "Romperrocas",
		desc: "Si este movimiento tiene éxito, el usuario debe recargarse en el siguiente turno y no puede seleccionar ningún movimiento.",
		shortDesc: "El usuario no puede actuar el turno siguiente.",
	},
	roleplay: {
		name: "Imitación",
		desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del usuario es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo daruma, Cambio heroico, o ya coincide con la del objetivo, o si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Comandar, Disfraz, Evocarrecuerdos, Don floral, Predicción, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Títere tóxico, Agrupamiento, Reacción química, Paleosíntesis, Carga cuark, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Rastro, Superguarda o Modo daruma.",
		shortDesc: "El usuario copia la habilidad del objetivo.",
		gen8: {
			desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del usuario es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Modo daruma, o ya coincide con la del objetivo, o si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Tragamisil, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Agrupamiento, Reacción química, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Rastro, Superguarda o Modo daruma.",
		},
		gen7: {
			desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del usuario es Fuerte afecto, Letargo perenne, Disfraz, Multitipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico o Modo daruma, o ya coincide con la del objetivo, o si la habilidad del objetivo es Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Ilusión, Impostor, Multitipo, Agrupamiento, Reacción química, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Rastro, Superguarda o Modo daruma.",
		},
		gen6: {
			desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del usuario es Multitipo o Cambio táctico, o ya coincide con la del objetivo, o si la habilidad del objetivo es Don floral, Predicción, Ilusión, Impostor, Multitipo, Cambio táctico, Rastro, Superguarda o Modo daruma.",
		},
		gen5: {
			desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del usuario es Multitipo o ya coincide con la del objetivo, o si la habilidad del objetivo es Don floral, Predicción, Ilusión, Impostor, Multitipo, Rastro, Superguarda o Modo daruma.",
		},
		gen4: {
			desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del usuario es Multitipo o ya coincide con la del objetivo, si la habilidad del objetivo es Multitipo o Superguarda, o si el usuario lleva equipada la Griseosfera.",
		},
		gen3: {
			desc: "La habilidad del usuario cambia por la del objetivo. Falla si la habilidad del objetivo es Superguarda.",
		},

		changeAbility: "  [POKEMON] copió la habilidad [ABILITY] de [SOURCE]!",
	},
	rollingkick: {
		name: "Patada giro",
		desc: "Tiene un 30% de probabilidad de amedrentar al objetivo.",
		shortDesc: "30% de prob. de amedrentar al objetivo.",
	},
	rollout: {
		name: "Rodar",
		desc: "Si tiene éxito, el usuario queda fijado en este movimiento y no puede usar otro hasta que falle, hayan pasado 5 turnos o no pueda usarse. La potencia se duplica con cada acierto y se duplica nuevamente si el usuario usó Rizo defensa anteriormente. Si es invocado por Sonámbulo mientras duerme, se usa solo un turno.",
		shortDesc: "Potencia duplica con cada acierto. Repite 5 turnos.",
		gen7: {
			desc: "Si tiene éxito, el usuario queda fijado en este movimiento y no puede usar otro hasta que falle, hayan pasado 5 turnos o no pueda usarse. La potencia se duplica con cada acierto y se duplica nuevamente si el usuario usó Rizo defensa anteriormente. Si golpea un Disfraz activo, el multiplicador de potencia se pausa pero el contador de turnos continúa, permitiendo aplicar el multiplicador en el siguiente movimiento.",
		},
		gen6: {
			desc: "Si tiene éxito, el usuario queda fijado en este movimiento y no puede usar otro hasta que falle, hayan pasado 5 turnos o no pueda usarse. La potencia se duplica con cada acierto y se duplica nuevamente si el usuario usó Rizo defensa anteriormente. Si es invocado por Sonámbulo mientras duerme, se usa solo un turno.",
		},
	},
	roost: {
		name: "Respiro",
		desc: "El usuario restaura la mitad de sus PS máximos, redondeando al alza. Si no está teracristalizado, hasta el fin del turno los Pokémon de tipo Volador pierden su tipo Volador y los de solo tipo Volador pasan a ser tipo Normal. No hace nada si los PS del usuario están al máximo.",
		shortDesc: "Restaura 50% PS. Elimina tipo Volador hasta fin de turno.",
		gen8: {
			desc: "El usuario restaura la mitad de sus PS máximos, redondeando al alza. Hasta el fin del turno, los usuarios de tipo Volador pierden su tipo Volador y los de solo tipo Volador pasan a ser tipo Normal. No hace nada si los PS están al máximo.",
		},
		gen4: {
			desc: "El usuario restaura la mitad de sus PS máximos, redondeando a la baja. Hasta el fin del turno, los usuarios de tipo Volador pierden su tipo Volador y los de solo tipo Volador pasan a ser sin tipo. No hace nada si los PS están al máximo.",
		},
		start: "  ([POKEMON] pierde el tipo Volador este turno.)",
	},
	rototiller: {
		name: "Fertilizante",
		desc: "Sube un nivel el Ataque y el Ataque Especial de todos los Pokémon de tipo Planta en tierra.",
		shortDesc: "Sube 1niv. Atq./Atq. Esp. de Planta en tierra.",
	},
	round: {
		name: "Canon",
		desc: "Si hay otros Pokémon activos que eligieron este movimiento este turno, esos Pokémon actúan inmediatamente después del usuario, en orden de Velocidad, y la potencia de este movimiento es de 120 por cada otro Pokémon.",
		shortDesc: "La potencia se duplica si otros usan Canon este turno.",
	},
	ruination: {
		name: "Calamidad",
		desc: "Inflige al objetivo un daño igual a la mitad de sus PS actuales, redondeado hacia abajo, pero como mínimo 1 PS.",
		shortDesc: "Daño igual a 1/2 PS actuales del objetivo.",
	},
	sacredfire: {
		name: "Fuego sagrado",
		desc: "Tiene un 50% de probabilidad de quemar al objetivo. Descongela al usuario.",
		shortDesc: "50% de prob. de quemar al objetivo. Descongela al usuario.",
	},
	sacredsword: {
		name: "Espada santa",
		desc: "Ignora los cambios de nivel de estadísticas del objetivo, incluida la evasión.",
		shortDesc: "Ignora los cambios de nivel de estadísticas del objetivo.",
	},
	safeguard: {
		name: "Velo sagrado",
		desc: "Durante 5 turnos, el usuario y sus compañeros no pueden recibir alteraciones de estado no volátiles ni confusión por parte de otros Pokémon. Los Pokémon del lado del usuario no pueden verse afectados por Bostezo, pero pueden dormirse por su efecto. Se elimina si el usuario o un aliado es golpeado exitosamente por Despejar. Falla si el efecto ya está activo en el lado del usuario.",
		shortDesc: "Durante 5 turnos, protege al equipo del usuario de alteraciones de estado.",
		gen3: {
			desc: "Durante 5 turnos, el usuario y sus compañeros no pueden recibir alteraciones de estado no volátiles ni confusión por parte de otros Pokémon. Los Pokémon del lado del usuario no pueden verse afectados por Bostezo, pero pueden dormirse por su efecto. Falla si el efecto ya está activo en el lado del usuario.",
		},
		gen2: {
			desc: "Durante 5 turnos, el usuario y sus compañeros no pueden recibir alteraciones de estado no volátiles ni confusión por parte de otros Pokémon. Durante el efecto, Enfado, Furia y Danza Pétalo no confunden al usuario. Falla si el efecto ya está activo en el lado del usuario.",
		},
		start: "  ¡[TEAM] se cubrió con un velo místico!",
		end: "  [TEAM] ya no está protegido por Velo sagrado!",
		block: "  ¡[POKEMON] está protegido por Velo sagrado!",
	},
	saltcure: {
		name: "Salazón",
		desc: "Causa un daño al objetivo equivalente a 1/8 de sus PS máximos (1/4 si el objetivo es de tipo Acero o Agua), redondeado hacia abajo, al final de cada turno durante el efecto. Este efecto termina cuando el objetivo ya no está activo.",
		shortDesc: "Daña 1/8 PS máx. cada turno; 1/4 en Acero, Agua.",

		start: "  ¡[POKEMON] sufre Salazón!",
		damage: "  ¡[POKEMON] es dañado por Salazón!",
	},
	sandattack: {
		name: "Ataque arena",
		desc: "Baja la Precisión del objetivo en 1 nivel.",
		shortDesc: "Baja la Precisión del objetivo en 1.",
	},
	sandsearstorm: {
		name: "Simún de Arena",
		desc: "Tiene un 20% de probabilidad de quemar al objetivo. Si el tiempo es Mar del Albor o Danza lluvia, este movimiento no comprueba la Precisión. Si este movimiento se usa contra un Pokémon que lleva un Parasol multiuso, la Precisión de este movimiento se mantiene en 80%.",
		shortDesc: "20% de quemar al objetivo. No falla en lluvia.",
	},
	sandstorm: {
		name: "Tormenta de arena",
		desc: "Durante 5 turnos, el tiempo se convierte en Tormenta de arena. Al final de cada turno, excepto el último, todos los Pokémon activos pierden 1/16 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo Tierra, Roca o Acero, o tengan las habilidades Muro mágico, Funda, Poder arena, Ímpetu arena o Velo arena. Durante el efecto, la Defensa Especial de los Pokémon de tipo Roca se multiplica por 1.5 al recibir daño de un ataque especial. Dura 8 turnos si el usuario lleva Roca suave. Falla si el tiempo actual es Tormenta de arena.",
		shortDesc: "Durante 5 turnos, hay tormenta arena. Roca: 1.5x DefEsp.",
		gen4: {
			desc: "Durante 5 turnos, el tiempo se convierte en Tormenta de arena. Al final de cada turno, excepto el último, todos los Pokémon activos pierden 1/16 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo Tierra, Roca o Acero, o tengan las habilidades Muro mágico o Velo arena. Durante el efecto, la Defensa Especial de los Pokémon de tipo Roca se multiplica por 1.5 al recibir daño de un ataque especial. Dura 8 turnos si el usuario lleva Roca suave. Falla si el tiempo actual es Tormenta de arena.",
		},
		gen3: {
			desc: "Durante 5 turnos, el tiempo se convierte en Tormenta de arena. Al final de cada turno, excepto el último, todos los Pokémon activos pierden 1/16 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo Tierra, Roca o Acero, o tengan la habilidad Velo arena. Falla si el tiempo actual es Tormenta de arena.",
			shortDesc: "Durante 5 turnos, hay tormenta arena.",
		},
		gen2: {
			desc: "Durante 5 turnos, el tiempo se convierte en Tormenta de arena. Al final de cada turno, excepto el último, todos los Pokémon activos pierden 1/8 de sus PS máximos, redondeado hacia abajo, a menos que sean de tipo Tierra, Roca o Acero. Falla si el tiempo actual es Tormenta de arena.",
		},
	},
	sandtomb: {
		name: "Bucle arena",
		desc: "Evita que el objetivo cambie durante cuatro o cinco turnos (siete turnos si el usuario lleva Garra garfio). Causa un daño al objetivo equivalente a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandonan el campo, o si el objetivo usa Giro mortífero, Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia usando este u otro movimiento de atadura.",
		shortDesc: "Atrapa y daña al objetivo durante 4-5 turnos.",
		gen8: {
			desc: "Evita que el objetivo cambie durante cuatro o cinco turnos (siete turnos si el usuario lleva Garra garfio). Causa un daño al objetivo equivalente a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandonan el campo, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia usando este u otro movimiento de atadura.",
		},
		gen7: {
			desc: "Evita que el objetivo cambie durante cuatro o cinco turnos (siete turnos si el usuario lleva Garra garfio). Causa un daño al objetivo equivalente a 1/8 de sus PS máximos (1/6 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandonan el campo, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia usando este u otro movimiento de atadura.",
		},
		gen5: {
			desc: "Evita que el objetivo cambie durante cuatro o cinco turnos; siete turnos si el usuario lleva Garra garfio. Causa un daño al objetivo equivalente a 1/16 de sus PS máximos (1/8 si el usuario lleva Banda atadura), redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandonan el campo, o si el objetivo usa Giro rápido. Este efecto no es acumulable ni se reinicia usando este u otro movimiento de atadura parcial.",
		},
		gen4: {
			desc: "Evita que el objetivo cambie durante dos a cinco turnos (siempre cinco turnos si el usuario lleva Garra garfio). Causa un daño al objetivo equivalente a 1/16 de sus PS máximos, redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo o Ida y vuelta. El efecto termina si el usuario o el objetivo abandonan el campo, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia usando este u otro movimiento de atadura.",
			shortDesc: "Atrapa y daña al objetivo durante 2-5 turnos.",
		},
		gen3: {
			desc: "Evita que el objetivo cambie durante dos a cinco turnos. Causa un daño al objetivo equivalente a 1/16 de sus PS máximos, redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si usa Relevo. El efecto termina si el usuario o el objetivo abandonan el campo, o si el objetivo usa Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia usando este u otro movimiento de atadura.",
		},

		start: "  ¡[POKEMON] fue atrapado por las arenas movedizas!",
	},
	sappyseed: {
		name: "Leafitobombas",
		desc: "Este movimiento invoca Drenadoras en el enemigo.",
		shortDesc: "Invoca Drenadoras.",
	},
	savagespinout: {
		name: "Guadaña sedosa",
		shortDesc: "La potencia es igual al Poder Z del mov. base.",
	},
	scald: {
		name: "Escaldar",
		desc: "Tiene un 30% de probabilidad de quemar al objetivo. El objetivo se descongela si está congelado.",
		shortDesc: "30% prob. de quemar al objetivo. Descongela.",
		gen5: {
			desc: "Tiene un 30% de probabilidad de quemar al objetivo.",
			shortDesc: "30% prob. de quemar al objetivo.",
		},
	},
	scaleshot: {
		name: "Ráfaga escamas",
		desc: "Golpea de dos a cinco veces. Baja la Defensa del usuario en 1 nivel y sube su Velocidad en 1 nivel después del último golpe. Tiene un 35% de probabilidad de golpear dos o tres veces y un 15% de golpear cuatro o cinco veces. Si uno de los golpes rompe el Sustituto del objetivo, recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento golpeará siempre cinco veces. Si el usuario lleva Dado trucado, este movimiento golpeará de 4 a 5 veces.",
		shortDesc: "Golpea 2-5 veces. Usuario: -1 Def, +1 Vel tras último.",
	},
	scaryface: {
		name: "Cara susto",
		desc: "Baja la Velocidad del objetivo en 2 niveles.",
		shortDesc: "Baja la Velocidad del objetivo en 2.",
	},
	scorchingsands: {
		name: "Arenas ardientes",
		desc: "Tiene un 30% de probabilidad de quemar al objetivo. El objetivo se descongela si está congelado.",
		shortDesc: "30% prob. de quemar al objetivo. Descongela.",
	},
	scratch: {
		name: "Arañazo",
		shortDesc: "Sin efecto adicional.",
	},
	screech: {
		name: "Chirrido",
		desc: "Baja la Defensa del objetivo en 2 niveles.",
		shortDesc: "Baja la Defensa del objetivo en 2.",
	},
	searingshot: {
		name: "Bomba ígnea",
		desc: "Tiene un 30% de probabilidad de quemar al objetivo.",
		shortDesc: "30% prob. quemar Pokémon adyacentes.",
	},
	searingsunrazesmash: {
		name: "Embestida solar",
		desc: "Este movimiento y sus efectos ignoran las habilidades de otros Pokémon.",
		shortDesc: "Ignora las habilidades de otros Pokémon.",
	},
	secretpower: {
		name: "Daño secreto",
		desc: "Tiene un 30% de probabilidad de causar un efecto secundario en el objetivo basado en el terreno de combate. Causa parálisis en el terreno normal de Wi-Fi, causa parálisis durante Campo eléctrico, baja el Ataque Especial en 1 nivel durante Campo de niebla, causa sueño durante Campo de hierba y baja la Velocidad en 1 nivel durante Campo psíquico.",
		shortDesc: "Efecto varía con terreno. (30% prob. parálisis)",
		gen6: {
			desc: "Tiene un 30% de probabilidad de causar un efecto secundario en el objetivo basado en el terreno de combate. Causa parálisis en el terreno normal de Wi-Fi, causa parálisis durante Campo eléctrico, baja el Ataque Especial en 1 nivel durante Campo de niebla y causa sueño durante Campo de hierba.",
		},
		gen5: {
			desc: "Tiene un 30% de probabilidad de causar un efecto secundario en el objetivo basado en el terreno de combate. Baja la precisión en 1 nivel en el terreno normal de Wi-Fi. La probabilidad de efecto secundario no se ve afectada por la habilidad Dicha.",
			shortDesc: "Efecto varía con terreno. (30% prob. prec -1)",
		},
		gen4: {
			desc: "Tiene un 30% de probabilidad de causar un efecto secundario en el objetivo basado en el terreno de combate. Causa parálisis en el terreno normal de Wi-Fi.",
			shortDesc: "Efecto varía con terreno. (30% prob. parálisis)",
		},
	},
	secretsword: {
		name: "Sable místico",
		desc: "Inflige daño al objetivo basándose en su Defensa en lugar de su Defensa Especial.",
		shortDesc: "Daña según Defensa del objetivo, no Def. Esp.",
	},
	seedbomb: {
		name: "Bomba germen",
		shortDesc: "Sin efecto adicional.",
	},
	seedflare: {
		name: "Fulgor semilla",
		desc: "Tiene un 40% de probabilidad de bajar la Defensa Especial del objetivo en 2 niveles.",
		shortDesc: "40% prob. de bajar Def. Esp. del objetivo en 2.",
	},
	seismictoss: {
		name: "Movimiento sísmico",
		desc: "Inflige un daño al objetivo igual al nivel del usuario.",
		shortDesc: "Daño igual al nivel del usuario.",
		gen1: {
			desc: "Inflige un daño al objetivo igual al nivel del usuario. Este movimiento ignora la inmunidad de tipo.",
			shortDesc: "Daño = nivel usuario. Golpea tipo Fantasma.",
		},
	},
	selfdestruct: {
		name: "Autodestrucción",
		desc: "El usuario se debilita después de usar este movimiento, incluso si falla por no tener objetivo. Se evita que este movimiento se ejecute si algún Pokémon activo tiene la habilidad Humedad.",
		shortDesc: "Golpea Pokémon adyacentes. Usuario se debilita.",
		gen4: {
			desc: "El usuario se debilita después de usar este movimiento, a menos que no tenga objetivo. La Defensa del objetivo se divide a la mitad durante el cálculo de daño. Se evita que este movimiento se ejecute si algún Pokémon activo tiene la habilidad Humedad.",
			shortDesc: "Def. objetivo a la mitad. Usuario se debilita.",
		},
		gen3: {
			desc: "El usuario se debilita después de usar este movimiento. La Defensa del objetivo se divide a la mitad durante el cálculo de daño. Se evita que este movimiento se ejecute si algún Pokémon activo tiene la habilidad Humedad.",
		},
		gen2: {
			desc: "El usuario se debilita después de usar este movimiento. La Defensa del objetivo se divide a la mitad durante el cálculo de daño.",
		},
		gen1: {
			desc: "El usuario se debilita después de usar este movimiento, a menos que el Sustituto del objetivo se rompiera por el daño. La Defensa del objetivo se divide a la mitad durante el cálculo de daño.",
		},
	},
	shadowball: {
		name: "Bola sombra",
		desc: "Tiene un 20% de probabilidad de bajar la Defensa Especial del objetivo en 1 nivel.",
		shortDesc: "20% prob. de bajar Def. Esp. del objetivo en 1.",
	},
	shadowbone: {
		name: "Hueso sombrío",
		desc: "Tiene un 20% de probabilidad de bajar la Defensa del objetivo en 1 nivel.",
		shortDesc: "20% prob. de bajar Defensa del objetivo en 1.",
	},
	shadowclaw: {
		name: "Garra umbría",
		desc: "Tiene una alta probabilidad de asestar un golpe crítico.",
		shortDesc: "Alta prob. de golpe crít.",
	},
	shadowforce: {
		name: "Golpe umbrío",
		desc: "Si este movimiento tiene éxito, atraviesa el Búnker, Detección, Escudo real, Protección o Barrera espinosa del objetivo durante este turno, permitiendo que otros Pokémon ataquen al objetivo normalmente. Si el lado del objetivo está protegido por Truco defensa, Escudo tatami, Anticipo o Vasta guardia, esa protección también se rompe este turno y otros Pokémon pueden atacar al lado del objetivo normalmente. Este ataque se carga en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques. Si el usuario lleva una Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Desaparece t1. Golpea t2. Rompe protección.",
		gen6: {
			desc: "Si este movimiento tiene éxito, atraviesa el Búnker, Detección, Escudo real, Protección o Barrera espinosa del objetivo durante este turno, permitiendo que otros Pokémon ataquen al objetivo normalmente. Si el lado del objetivo está protegido por Truco defensa, Escudo tatami, Anticipo o Vasta guardia, esa protección también se rompe este turno y otros Pokémon pueden atacar al lado del objetivo normalmente. Este ataque se carga en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques. Si el usuario lleva una Hierba única, el movimiento se completa en un solo turno. El daño se duplica y no se realiza comprobación de precisión si el objetivo usó Reducción mientras estaba activo.",
		},
		gen5: {
			desc: "Si este movimiento tiene éxito, atraviesa la Detección o Protección del objetivo durante este turno, permitiendo que otros Pokémon ataquen al objetivo normalmente. Si el objetivo es un rival y su lado está protegido por Anticipo o Vasta guardia, esa protección también se rompe este turno y otros Pokémon pueden atacar al lado del rival normalmente. Este ataque se carga en el primer turno y se ejecuta en el segundo. En el primer turno, el usuario evita todos los ataques. Si el usuario lleva una Hierba única, el movimiento se completa en un solo turno.",
		},

		activate: "¡Rompió la protección de [TARGET]!",
		prepare: "¡[POKÉMON] desapareció al instante!",
	},
	shadowpunch: {
		name: "Puño sombra",
		shortDesc: "Este movimiento no comprueba precisión.",
	},
	shadowsneak: {
		name: "Sombra vil",
		desc: "Ningún efecto adicional.",
		shortDesc: "Suele ir primero.",
	},
	shadowstrike: {
		name: "Golpe sombrío",
		desc: "Tiene un 50 % de probabilidad de bajar la Defensa del objetivo en 1 nivel.",
		shortDesc: "50 % de probabilidad de bajar Defensa 1 nivel.",
	},
	sharpen: {
		name: "Afilar",
		desc: "Aumenta el Ataque del usuario en 1 nivel.",
		shortDesc: "Sube 1 nivel el Ataque del usuario.",
	},
	shatteredpsyche: {
		name: "Disruptor psíquico",
		shortDesc: "La potencia es igual a la Potencia Z del movimiento base.",
	},
	shedtail: {
		name: "Autotomía",
		desc: "El usuario pierde la mitad de sus PS máximos (redondeado hacia arriba) y crea un sustituto con una cuarta parte de sus PS máximos (redondeado hacia abajo). A continuación, el usuario es reemplazado por otro Pokémon de su equipo y éste recibe el sustituto. Falla si el usuario se debilita o si no hay ningún Pokémon del equipo que pueda recibirlo.",
		shortDesc: "Consume 1/2 de sus PS para crear un sustituto.",
		start: "  ¡[POKEMON] se despoja de su cola para crear un señuelo!",
		alreadyStarted: "#substitute",
		fail: "#substitute",
	},
	sheercold: {
		name: "Frío polar",
		desc: "Inflige daño al objetivo igual a sus PS máximos. Ignora modificadores de precisión y evasión. La precisión de este ataque es igual a (nivel del usuario - nivel del objetivo + X)%, donde X es 30 si el usuario es un Pokemon de tipo hielo y 20 en caso contrario, y falla si el objetivo tiene un nivel superior. Los Pokemon de tipo hielo y los Pokemon con la habilidad Robustez son inmunes.",
		shortDesc: "OHKO a objetivos no Hielo. Falla si el usuario es de nivel inferior.",
		gen6: {
			desc: "Inflige daño al objetivo igual a sus PS máximos. Ignora modificadores de precisión y evasión. La precisión de este ataque es igual a (nivel del usuario - nivel del objetivo + 30)%, y falla si el objetivo tiene un nivel superior. Los Pokemon con la habilidad Robustez son inmunes.",
			shortDesc: "OHKO al objetivo. Falla si el usuario es de nivel inferior.",
		},
	},
	shellsidearm: {
		name: "Moluscañón",
		desc: "Tiene un 20% de probabilidad de envenenar al objetivo. Este movimiento se convierte en un ataque físico con contacto si el valor de ((((2 * nivel del usuario / 5 + 2) * 90 * X) / Y) / 50), donde X es la estadística de Ataque del usuario e Y es la estadística de Defensa del objetivo, es mayor que el mismo valor calculado usando la estadística de Ataque especial del usuario y la estadística de Defensa especial del objetivo. No se consideran otros modificadores de estadística distintos de cambios de estadio para este propósito. Si ambos valores son iguales, este movimiento elige la categoría de daño al azar.",
		shortDesc: "20% psn. Físico+contacto si es más fuerte.",
	},
	shellsmash: {
		name: "Rompecoraza",
		desc: "Baja la Defensa y la Defensa especial del usuario en 1 nivel. Sube el Ataque, el Ataque especial y la Velocidad del usuario en 2 niveles.",
		shortDesc: "Baja Def, Def. Esp 1; sube Atq, Atq. Esp, Vel 2.",
	},
	shelltrap: {
		name: "Coraza trampa",
		desc: "Falla a menos que el usuario reciba un ataque físico de un oponente en este turno antes de que pueda ejecutar el movimiento. Si el usuario fue golpeado y no ha sido debilitado, ataca inmediatamente después de ser alcanzado y el efecto termina. Si el ataque físico del oponente tenía un efecto secundario eliminado por la habilidad Potencia bruta, este no cuenta para este efecto.",
		shortDesc: "Usuario debe recibir daño físico antes de moverse.",

		start: "  [POKEMON] preparó Coraza trampa!",
		prepare: "  [POKEMON] preparó Coraza trampa!",
		cant: "[POKEMON] no pudo activar Coraza trampa!",
	},
	shelter: {
		name: "Retracción",
		desc: "Aumenta la Defensa del usuario 2 niveles.",
		shortDesc: "Aumenta Def. usuario +2 niv.",
	},
	shiftgear: {
		name: "Cambio de marcha",
		desc: "Aumenta la Velocidad del usuario 2 niveles y su Ataque 1 nivel.",
		shortDesc: "Aumenta Vel. +2 y Atq. +1.",
	},
	shockwave: {
		name: "Onda voltio",
		shortDesc: "Este movimiento no comprueba precisión.",
	},
	shoreup: {
		name: "Recogearena",
		desc: "El usuario recupera la mitad de sus PS máximos, redondeado hacia abajo. Si hay tormenta de arena, recupera 2/3 de sus PS máximos.",
		shortDesc: "Recupera 1/2 PS; 2/3 en tormenta de arena.",
	},
	signalbeam: {
		name: "Rayo señal",
		desc: "Tiene un 10% de prob. de confundir al objetivo.",
		shortDesc: "10% de prob. de confundir al objetivo.",
	},
	silktrap: {
		name: "Telatrampa",
		desc: "El usuario está protegido de la mayoría de ataques realizados por otros Pokémon durante este turno, y los Pokémon que intenten hacer contacto con el usuario ven reducida su Velocidad en 1 nivel. Los movimientos no dañinos atraviesan esta protección. Este movimiento tiene una probabilidad de éxito de 1/X, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento del usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos y la protección se rompió. Falla si el usuario actúa el último este turno.",
		shortDesc: "Protege de ataques dañinos. Contacto: -1 Vel.",
	},
	silverwind: {
		name: "Viento plata",
		desc: "Tiene un 10 % de probabilidad de aumentar en 1 nivel el Ataque, la Defensa, el Ataque Especial, la Defensa Especial y la Velocidad del usuario.",
		shortDesc: "10 % de prob. de subir todas las estad. en 1 (no prec./evas.).",
	},
	simplebeam: {
		name: "Onda simple",
		desc: "Provoca que la habilidad del objetivo pase a ser Simple. Falla si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Mutatipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Simple, Cambio táctico, Teracambio, Pereza, Modo Daruma o Cambio heroico.",
		shortDesc: "La habilidad del objetivo pasa a ser Simple.",
		gen8: {
			desc: "Provoca que la habilidad del objetivo pase a ser Simple. Falla si la habilidad del objetivo es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Mutatipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Simple, Cambio táctico, Pereza o Modo Daruma.",
		},
		gen7: {
			desc: "Provoca que la habilidad del objetivo pase a ser Simple. Falla si la habilidad del objetivo es Fuerte afecto, Letargo perenne, Disfraz, Mutatipo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Simple, Cambio táctico, Pereza o Modo Daruma.",
		},
		gen6: {
			desc: "Provoca que la habilidad del objetivo pase a ser Simple. Falla si la habilidad del objetivo es Mutatipo, Simple, Cambio táctico o Pereza.",
		},
		gen5: {
			desc: "Provoca que la habilidad del objetivo pase a ser Simple. Falla si la habilidad del objetivo es Mutatipo, Simple o Pereza.",
		},
	},
	sing: {
		name: "Canto",
		shortDesc: "Hace que el objetivo caiga dormido.",
	},
	sinisterarrowraid: {
		name: "Aluvión de flechas sombrías",
		shortDesc: "Sin efecto adicional.",
	},
	sizzlyslide: {
		name: "Flarembestida",
		desc: "Tiene un 100% de probabilidad de quemar al objetivo.",
		shortDesc: "100% de probabilidad de quemar al objetivo.",
	},
	sketch: {
		name: "Esquema",
		desc: "Este movimiento se reemplaza permanentemente por el último movimiento usado por el objetivo. El movimiento copiado tiene el PP máximo para ese movimiento. Falla si el objetivo no ha usado ningún movimiento, si el usuario ha usado Transformación, o si el movimiento es Pirochoque, Pugnachoque, Brecha negra, Cerco dimensión, Feerichoque, Ponzochoque, Plegaria vital, Esquema, Forcejeo, Teraclúster, Ominochoque o cualquier movimiento que el usuario conozca.",
		shortDesc: "Copia permanentemente el último movimiento usado por el objetivo.",
		gen8: {
			desc: "Este movimiento se reemplaza permanentemente por el último movimiento usado por el objetivo. El movimiento copiado tiene el PP máximo para ese movimiento. Falla si el objetivo no ha usado ningún movimiento, si el usuario ha usado Transformación, o si el movimiento es Cháchara, Esquema, Forcejeo o cualquier movimiento que el usuario conozca.",
		},
		gen3: {
			desc: "Este movimiento se reemplaza permanentemente por el último movimiento usado por el objetivo. El movimiento copiado tiene el PP máximo para ese movimiento. Falla si el objetivo no ha usado ningún movimiento, si el usuario ha usado Transformación, o si el movimiento es Esquema, Forcejeo o cualquier movimiento que el usuario conozca.",
		},
		gen2: {
			desc: "Falla cuando se usa en combates enlazados.",
			shortDesc: "Falla en combates enlazados.",
		},

		activate: "  ¡[POKEMON] usó Esquema y copió [MOVE]!",
	},
	skillswap: {
		name: "Intercambio",
		desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Unidad ecuestre, Fuerte afecto, Letargo perenne, Comandar, Disfraz, Evocarrecuerdos, Mutapetito, Cara de hielo, Ilusión, Multitipo, Gas reactivo, Títere tóxico, Agrupamiento, Paleosíntesis, Carga cuark, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Cambio heroico, Teracambio, Teraformación 0 o Superguarda.",
		shortDesc: "El usuario y el objetivo intercambian habilidades.",
		gen8: {
			desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Mutapetito, Cara de hielo, Ilusión, Multitipo, Gas reactivo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Superguarda o Modo daruma.",
		},
		gen7: {
			desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Fuerte afecto, Letargo perenne, Disfraz, Modo daruma, Multitipo, Mutatipo, Cambio táctico o Superguarda.",
		},
		gen6: {
			desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Ilusión, Multitipo, Cambio táctico o Superguarda.",
		},
		gen5: {
			desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Ilusión, Mutatipo o Cambio táctico.",
		},
		gen4: {
			desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Multitipo o Superguarda, o si ambos ya comparten la misma habilidad, o si alguno lleva una Griseosfera.",
		},
		gen3: {
			desc: "El usuario intercambia su habilidad con la del objetivo. Falla si la habilidad de cualquiera de los dos es Superguarda.",
		},
		activate: "  [POKEMON] ¡intercambió habilidades con su objetivo!",
	},
	skittersmack: {
		name: "Golpe rastrero",
		desc: "Tiene un 100% de prob. de bajar el Ataque Especial del objetivo 1 nivel.",
		shortDesc: "100% prob. de bajar Atq. Esp. del objetivo 1 niv.",
	},
	skullbash: {
		name: "Cabezazo",
		desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. Aumenta la Defensa del usuario en 1 nivel en el primer turno. Si el usuario lleva una Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Aumenta Def. +1 t1. Golpea t2.",
		gen3: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. Aumenta la Defensa del usuario en 1 nivel en el primer turno.",
		},
		gen1: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo.",
			shortDesc: "Carga t1. Golpea t2.",
		},

		prepare: "¡[POKÉMON] metió la cabeza!",
	},
	skyattack: {
		name: "Ataque aéreo",
		desc: "Tiene un 30% de prob. de hacer retroceder al objetivo y una alta prob. de golpe crítico. Este ataque se carga en el primer turno y se ejecuta en el segundo. Si el usuario lleva una Hierba única, el movimiento se completa en un solo turno.",
		shortDesc: "Carga t1. Golpea t2. 30% retroceso. Alta prob. de golpe crít.",
		gen3: {
			desc: "Tiene un 30% de prob. de hacer retroceder al objetivo y una alta prob. de golpe crítico. Este ataque se carga en el primer turno y se ejecuta en el segundo.",
		},
		gen2: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo.",
			shortDesc: "Carga t1. Golpea t2.",
		},

		prepare: "¡[POKÉMON] se cubrió de luz intensa!",
	},
	skydrop: {
		name: "Caída libre",
		desc: "Eleva al objetivo con el usuario en el aire el primer turno y ataca el segundo. Los Pokémon que pesen ≥ 200 kg no pueden ser levantados. En el primer turno, usuario y objetivo evitan todos los ataques excepto Tornado, Vendaval, Gancho alto, Antiaéreo, Mil flechas, Trueno y Ciclón. Usuario y objetivo no pueden actuar entre turnos, pero el objetivo puede elegir movimiento. No daña a Pokémon de tipo Volador. Falla el primer turno si el objetivo es aliado, tiene un Sustituto o está usando Bote, Excavar, Buceo, Vuelo, Golpe fantasma, Golpe umbrío o Caída libre.",
		shortDesc: "Usuario y rival vuelan t1; daña t2.",

		gen5: {
			desc: "Eleva al objetivo con el usuario en el aire el primer turno y ataca el segundo. En el primer turno evitan todo menos Tornado, Vendaval, Gancho alto, Antiaéreo y Ciclón. No pueden actuar entre turnos, pero el objetivo puede elegir movimiento. No daña a Pokémon Volador. Falla si es aliado, tiene Sustituto o está usando Bote, Excavar, Buceo, Vuelo, Golpe umbrío o Caída libre. Si Gravedad termina este efecto antes del segundo turno, ambos vuelven al suelo, salvo que el usuario salga o ejecute el segundo turno con éxito.",
		},

		prepare: "  ¡[POKEMON] elevó a [TARGET] al cielo!",
		end: "  ¡[POKEMON] regresó tras Caída libre!",
		failSelect: "¡Caída libre no deja que [POKEMON] suelte al objetivo!",
		failTooHeavy: "  ¡[POKEMON] pesa demasiado para elevarlo!",
	},
	skyuppercut: {
		name: "Gancho alto",
		desc: "Este movimiento puede golpear a un objetivo usando Bote, Vuelo o Caída libre, o bajo el efecto de Caída libre.",
		shortDesc: "Golpea a Pokémon en Bote, Vuelo o Caída libre.",
		gen4: {
			desc: "Este movimiento puede golpear a un objetivo usando Bote o Vuelo.",
			shortDesc: "Golpea a Pokémon en Bote o Vuelo.",
		},
	},
	slackoff: {
		name: "Relajo",
		desc: "El usuario recupera la mitad de sus PS máximos, redondeando 0,5 hacia arriba.",
		shortDesc: "Cura 50% PS máximos (redondeo hacia arriba).",
		gen4: {
			desc: "El usuario recupera la mitad de sus PS máximos, redondeando 0,5 hacia abajo.",
		},
	},
	slam: {
		name: "Atizar",
		shortDesc: "Sin efecto adicional.",
	},
	slash: {
		name: "Cuchillada",
		desc: "Tiene más probabilidades de lograr un golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	sleeppowder: {
		name: "Somnífero",
		shortDesc: "Hace que el objetivo caiga dormido.",
	},
	sleeptalk: {
		name: "Sonámbulo",
		desc: "Se selecciona al azar uno de los movimientos conocidos por el usuario, excepto este. Falla si el usuario no está dormido. El movimiento seleccionado no consume PP y puede tener 0 PP. Este movimiento no puede seleccionar Ayuda, Pico cañón, Eructo, Venganza, Pirochoque, Celebración, Cháchara, Pugnachoque, Copión, Cañón Dinamax, Puño certero, Manos juntas, Yo primero, Feerichoque, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Coraza trampa, Esquema, Forcejeo, Alboroto, ni ningún movimiento de dos turnos.",
		shortDesc: "Debe estar dormido. Usa otro movimiento conocido.",
		gen8: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. El movimiento seleccionado no consume PP y puede tener 0 PP. No puede elegir Movimientos Z, Movimientos Máximo ni ninguno de: Ayuda, Pico cañón, Eructo, Venganza, Pirochoque, Celebración, Cháchara, Pugnachoque, Copión, Cañón Dinamax, Puño certero, Manos juntas, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Ponzochoque, Coraza trampa, Esquema, Forcejeo o Alboroto.",
		},
		gen7: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. El movimiento seleccionado no consume PP y puede tener 0 PP. No puede elegir Movimientos Z ni ninguno de: Ayuda, Pico cañón, Eructo, Venganza, Celebración, Cháchara, Copión, Puño certero, Manos juntas, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Forcejeo o Alboroto.",
		},
		gen6: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. El movimiento seleccionado no consume PP y puede tener 0 PP. No puede elegir ninguno de: Ayuda, Eructo, Venganza, Celebración, Cháchara, Copión, Puño certero, Manos juntas, Yo primero, Metrónomo, Mimético, Espejo, Adaptación, Forcejeo o Alboroto.",
		},
		gen5: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. El movimiento seleccionado no consume PP y puede tener 0 PP. No puede elegir ninguno de: Ayuda, Venganza, Cháchara, Copión, Puño certero, Yo primero, Metrónomo, Mimético, Esquema, Forcejeo o Alboroto.",
		},
		gen4: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. El movimiento seleccionado no consume PP y puede tener 0 PP. No puede elegir ninguno de: Ayuda, Venganza, Cháchara, Copión, Puño certero, Yo primero, Metrónomo, Mimético, Esquema o Alboroto.",
		},
		gen3: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. Si el movimiento tiene 0 PP, falla al usarse. No puede elegir ninguno de: Ayuda, Venganza, Puño certero, Metrónomo, Espejo, Esquema o Alboroto.",
		},
		gen2: {
			desc: "Se selecciona al azar uno de los movimientos conocidos, excepto este. Falla si el usuario no está dormido. No puede elegir: Venganza, Sonámbulo o movimientos de dos turnos.",
		},
	},
	sludge: {
		name: "Residuos",
		desc: "Tiene un 30% de prob. de envenenar al objetivo.",
		shortDesc: "30% prob. de envenenar al objetivo.",
		gen1: {
			desc: "Tiene un 40% de prob. de envenenar al objetivo.",
			shortDesc: "40% prob. de envenenar al objetivo.",
		},
	},
	sludgebomb: {
		name: "Bomba lodo",
		desc: "Tiene un 30% de prob. de envenenar al objetivo.",
		shortDesc: "30% prob. de envenenar al objetivo.",
	},
	sludgewave: {
		name: "Onda tóxica",
		desc: "Tiene un 10% de prob. de envenenar al objetivo.",
		shortDesc: "10% prob. de envenenar a Pokémon adyacentes.",
	},
	smackdown: {
		name: "Antiaéreo",
		desc: "Este movimiento puede golpear a un objetivo que esté usando Bote, Vuelo o Caída libre, o que esté bajo el efecto de Caída libre. Si este movimiento golpea a un objetivo bajo el efecto de Bote, Vuelo, Levitón o Telequinesis, el efecto termina. Si el objetivo es de tipo Volador que no haya usado Respiro este turno o un Pokémon con la habilidad Levitación, pierde su inmunidad a los ataques de tipo Tierra y la habilidad Trampa arena mientras siga activo. Durante el efecto, Levitón falla para el objetivo y Telequinesis falla contra el objetivo.",
		shortDesc: "Elimina inmunidad a Tierra del objetivo.",
		start: "  ¡[POKEMON] cayó en picado!",
	},
	smartstrike: {
		name: "Cuerno certero",
		shortDesc: "No falla nunca.",
	},
	smellingsalts: {
		name: "Estímulo",
		desc: "La potencia se duplica si el objetivo está paralizado. Si el usuario no ha sido debilitado, cura la parálisis del objetivo.",
		shortDesc: "Pot. doble si paralizado; lo cura.",
		gen4: {
			desc: "La potencia se duplica si el objetivo está paralizado. Si este movimiento tiene éxito, cura la parálisis del objetivo.",
		},
		gen3: {
			desc: "El daño se duplica si el objetivo está paralizado. Si este movimiento tiene éxito, cura la parálisis del objetivo.",
			shortDesc: "Doble daño si paralizado; lo cura.",
		},
	},
	smog: {
		name: "Polución",
		desc: "Tiene un 30% de prob. de envenenar al objetivo.",
		shortDesc: "30% prob. de envenenar al objetivo.",
		gen1: {
			desc: "Tiene un 40% de prob. de envenenar al objetivo.",
			shortDesc: "40% prob. de envenenar al objetivo.",
		},
	},
	smokescreen: {
		name: "Pantalla de humo",
		desc: "Reduce en 1 nivel la precisión del objetivo.",
		shortDesc: "Reduce prec. objetivo 1 niv.",
	},
	snaptrap: {
		name: "Cepo",
		desc: "Impide que el objetivo cambie de posición durante 4 o 5 turnos (7 si el usuario lleva equipada Garra garfio). Causa al objetivo daño igual a 1/8 de sus PS máximos (1/6 si el usuario lleva equipada Banda atadura), redondeado hacia abajo, al final de cada turno durante el efecto. El objetivo aún puede cambiar si lleva equipada Muda concha o usa Relevo, Viraje, Última palabra, Autotomía, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del campo, o si el objetivo usa Giro mortífero, Giro rápido o Sustituto con éxito. Este efecto no es acumulable ni se reinicia al usar este u otro movimiento de aprisionamiento.",
		shortDesc: "Atrapa y daña al objetivo durante 4-5 turnos.",
		gen8: {
			desc: "Impide que el objetivo cambie de posición durante 4 o 5 turnos (7 si el usuario lleva equipada Garra garfio). Causa al objetivo daño igual a 1/8 de sus PS máximos (1/6 si lleva Banda atadura), redondeado hacia abajo, al final de cada turno. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del campo, o si el objetivo usa Giro rápido o Sustituto con éxito. No es acumulable ni se reinicia al usar este u otro movimiento de aprisionamiento.",
		},

		start: "  ¡[POKEMON] fue atrapado por Cepo!",
	},
	snarl: {
		name: "Gruñido",
		desc: "Tiene un 100 % de probabilidad de bajar el Ataque especial del objetivo en 1 nivel.",
		shortDesc: "100 % de probabilidad de bajar Atq. Esp. en 1 nivel.",
	},
	snatch: {
		name: "Robo",
		desc: "Si otro Pokémon usa ciertos movimientos de apoyo este turno, el usuario lo roba para usarlo. Si varios Pokémon usan uno de esos movimientos, los roba el primero en el orden de turno que haya usado Robo. Este efecto se ignora si el usuario está bajo el efecto de Caída libre.",
		shortDesc: "Roba ciertos movimientos de apoyo para usarlos él mismo.",
		gen4: {
			desc: "Si otro Pokémon usa ciertos movimientos de apoyo este turno, el usuario lo roba para usarlo. Si varios usan Robo, cada uno roba en orden de turno y solo el último obtiene el efecto.",
		},

		start: "  ¡[POKEMON] espera a que un objetivo haga un movimiento!",
		activate: "  ¡[POKEMON] robó el movimiento de [TARGET]!",
	},
	snipeshot: {
		name: "Disparo certero",
		desc: "Tiene una alta probabilidad de asestar un golpe crítico. Este movimiento no puede redirigirse a otro objetivo por ningún efecto.",
		shortDesc: "Alta prob. crit. No redirigible.",
	},
	snore: {
		name: "Ronquido",
		desc: "Tiene un 30% de prob. de hacer retroceder al objetivo. Falla si el usuario no está dormido.",
		shortDesc: "Usuario debe estar dormido. 30% prob. de retroceso.",
	},
	snowscape: {
		name: "Paisaje nevado",
		desc: "Durante 5 turnos, nieva. Durante el efecto, la Defensa de los Pokémon de tipo Hielo se multiplica por 1,5 al recibir daño de un movimiento físico. Dura 8 turnos si el usuario lleva una Roca helada. Falla si ya está nevando.",
		shortDesc: "Nieva 5 turnos. Hielo: Def. x1,5.",
	},
	soak: {
		name: "Empapar",
		desc: "Hace que el objetivo se convierta en tipo Agua. Falla si el objetivo es Arceus o Silvally, si el objetivo ya es únicamente tipo Agua, o si está teracristalizado.",
		shortDesc: "Cambia el tipo del objetivo a Agua.",
		gen8: {
			desc: "Hace que el objetivo se convierta en tipo Agua. Falla si el objetivo es Arceus o Silvally, o si el objetivo ya es únicamente tipo Agua.",
		},
		gen6: {
			desc: "Hace que el objetivo se convierta en tipo Agua. Falla si el objetivo es Arceus o si el objetivo ya es únicamente tipo Agua.",
		},
		gen5: {
			desc: "Hace que el objetivo se convierta en tipo Agua. Falla si el objetivo es Arceus.",
		},
	},
	softboiled: {
		name: "Ovocuración",
		desc: "El usuario restaura la mitad de sus PS máximos, redondeando 0,5 hacia arriba.",
		shortDesc: "Cura al usuario 50 % de sus PS máximos.",
		gen4: {
			desc: "El usuario restaura la mitad de sus PS máximos, redondeando 0,5 hacia abajo.",
		},
		gen1: {
			desc: "El usuario restaura la mitad de sus PS máximos, redondeando 0,5 hacia abajo. Falla si (PS máx. del usuario - PS actuales + 1) es divisible por 256.",
		},
	},
	solarbeam: {
		name: "Rayo solar",
		desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Mar del albor, Danza lluvia, Tormenta de arena o Nieve y el usuario no lleva Parasol multiuso. Si lleva Hierba única o el clima es Tierra del ocaso o Día soleado, se completa en un solo turno. Si lleva Parasol multiuso y el clima es Tierra del ocaso o Día soleado, sigue requiriendo un turno de carga.",
		shortDesc: "Carga T1. Impacta T2. Sin carga con sol.",
		gen8: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena y el usuario no lleva Parasol multiuso. Si lleva Hierba única o el clima es Tierra del ocaso o Día soleado, se completa en un solo turno. Si lleva Parasol multiuso y el clima es Tierra del ocaso o Día soleado, sigue requiriendo un turno de carga.",
		},
		gen7: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena. Si lleva Hierba única o el clima es Tierra del ocaso o Día soleado, se completa en un solo turno.",
		},
		gen5: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Granizo, Danza lluvia o Tormenta de arena. Si lleva Hierba única o el clima es Día soleado, se completa en un solo turno.",
		},
		gen4: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. El daño se reduce a la mitad si el clima es Granizo, Danza lluvia o Tormenta de arena. Si lleva Hierba única o el clima es Día soleado, se completa en un solo turno.",
		},
		gen3: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. El daño se reduce a la mitad si el clima es Granizo, Danza lluvia o Tormenta de arena. Si el clima es Día soleado, se completa en un solo turno.",
		},
		gen2: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. El daño se reduce a la mitad si el clima es Danza lluvia. Si el clima es Día soleado, se completa en un solo turno.",
		},
		gen1: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo.",
			shortDesc: "Carga T1. Impacta T2.",
		},
		prepare: "  ¡[POKEMON] absorbió luz!",
	},
	solarblade: {
		name: "Cuchilla solar",
		desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena y el usuario no lleva Parasol multiuso. Si lleva Hierba única o el clima es Tierra del ocaso o Día soleado, se completa en un solo turno. Si lleva Parasol multiuso y el clima es Tierra del ocaso o Día soleado, sigue requiriendo un turno de carga.",
		shortDesc: "Carga T1. Impacta T2. Sin carga con sol.",
		gen8: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Mar del albor, Danza lluvia, Tormenta de arena o Nieve y el usuario no lleva Parasol multiuso. Si lleva Hierba única o el clima es Tierra del ocaso o Día soleado, se completa en un solo turno. Si lleva Parasol multiuso y el clima es Tierra del ocaso o Día soleado, sigue requiriendo un turno de carga.",
		},
		gen7: {
			desc: "Este ataque se carga en el primer turno y se ejecuta en el segundo. La potencia se reduce a la mitad si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena. Si lleva Hierba única o el clima es Tierra del ocaso o Día soleado, se completa en un solo turno.",
		},
		prepare: "#solarbeam",
	},
	sonicboom: {
		name: "Bomba sónica",
		desc: "Inflige 20 PS de daño al objetivo.",
		shortDesc: "Siempre inflige 20 PS de daño.",
		gen1: {
			desc: "Inflige 20 PS de daño al objetivo. Este movimiento ignora inmunidad de tipo.",
		},
	},
	soulstealing7starstrike: {
		name: "Constelación robaalmas",
		shortDesc: "Sin efecto adicional.",
	},
	spacialrend: {
		name: "Corte vacío",
		desc: "Tiene una alta prob. de asestar un golpe crítico.",
		shortDesc: "Alta prob. de golpe crít.",
	},
	spark: {
		name: "Chispa",
		desc: "Tiene un 30% de prob. de paralizar al objetivo.",
		shortDesc: "30% prob. de paralizar al objetivo.",
	},
	sparklingaria: {
		name: "Aria burbuja",
		desc: "Si el usuario no ha sido debilitado, cura la quemadura del objetivo.",
		shortDesc: "Cura la quemadura del objetivo.",
	},
	sparklyswirl: {
		name: "Sylveotornado",
		desc: "Cura al equipo del usuario de alteraciones de estado.",
		shortDesc: "Cura al equipo del usuario de alteraciones de estado.",
	},
	spectralthief: {
		name: "Robasombra",
		desc: "Roba los aumentos de estadísticas del objetivo antes de causar daño.",
		shortDesc: "Roba aumentos antes de dañar.",
		clearBoost: "  ¡[SOURCE] robó los aumentos del objetivo!",
	},
	speedswap: {
		name: "Cambiavelocidad",
		desc: "El usuario intercambia su estadística de Velocidad con la del objetivo. Los cambios de niveles estadísticos no se ven afectados.",
		shortDesc: "Intercambia la estadística de Velocidad con el objetivo.",
		activate: "  ¡[POKEMON] intercambió su Velocidad con la del objetivo!",
	},
	spicyextract: {
		name: "Extracto picante",
		desc: "Aumenta en 2 niveles el Ataque del objetivo y reduce en 2 niveles su Defensa.",
		shortDesc: "Sube 2 niveles Atq. y baja 2 niveles Def. al objetivo.",
	},
	spiderweb: {
		name: "Telaraña",
		desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del campo.",
		shortDesc: "Impide que el objetivo cambie de posición.",
		gen7: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si el objetivo sale del campo usando Relevo, el reemplazo permanecerá atrapado. El efecto termina si el usuario sale del campo.",
		},
		gen5: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo, Ida y vuelta o Voltiocambio. Si el objetivo sale del campo usando Relevo, el reemplazo permanecerá atrapado. El efecto termina si el usuario sale del campo.",
		},
		gen4: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva Muda concha o usa Relevo o Ida y vuelta. Si el objetivo sale del campo usando Relevo, el reemplazo permanecerá atrapado. El efecto termina si el usuario sale del campo, a menos que use Relevo, en cuyo caso el objetivo permanecerá atrapado.",
		},
		gen3: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si usa Relevo. Si el objetivo sale del campo usando Relevo, el reemplazo permanecerá atrapado. El efecto termina si el usuario sale del campo, a menos que use Relevo, en cuyo caso el objetivo permanecerá atrapado.",
		},
	},
	spikecannon: {
		name: "Clavo cañón",
		desc: "Golpea de 2 a 5 veces. 35 % de prob. de golpear 2-3 veces y 15 % de golpear 4-5 veces. Si uno rompe un sustituto, los impactos restantes dañan al objetivo. Si el usuario tiene la habilidad Encadenado, siempre golpea 5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen4: {
			desc: "Golpea de 2 a 5 veces. 3/8 de prob. de 2-3 golpes y 1/8 de 4-5 golpes. Si uno rompe un sustituto, los restantes dañan al objetivo. Si el usuario tiene la habilidad Encadenado, siempre golpea 5 veces. Si el objetivo lleva una Banda aguante y tenía PS completos al iniciar, no lo debilitará.",
		},
		gen3: {
			desc: "Golpea de 2 a 5 veces. 3/8 de prob. de 2-3 golpes y 1/8 de 4-5 golpes. Si uno rompe un sustituto, los restantes dañan al objetivo.",
		},
		gen1: {
			desc: "Golpea de 2 a 5 veces. 3/8 de prob. de 2-3 golpes y 1/8 de 4-5 golpes. Daño calculado solo para el primer golpe y aplicado a todos. Si rompe un sustituto, termina.",
		},
	},
	spikes: {
		name: "Púas",
		desc: "Coloca una trampa en el lado contrario; daña al entrar en combate a cada Pokémon oponente a menos que sea de tipo Volador o tenga la habilidad Levitación. Puede usarse hasta 3 veces antes de fallar. Con 1 capa: -1/8 PS; 2 capas: -1/6 PS; 3 capas: -1/4 PS (todo redondeado hacia abajo). Se pueden eliminar con Limpieza general, Giro mortífero, Giro rápido o Despejar.",
		shortDesc: "Daña a los oponentes al entrar. Máx. 3 capas.",
		gen8: {
			desc: "Coloca una trampa en el lado contrario; daña al entrar en combate a cada Pokémon oponente a menos que sea de tipo Volador o tenga la habilidad Levitación. Puede usarse hasta 3 veces antes de fallar. Con 1 capa: -1/8 PS; 2 capas: -1/6 PS; 3 capas: -1/4 PS. Se elimina con Giro rápido o Despejar.",
		},
		gen5: {
			desc: "Coloca una trampa en el lado contrario; daña al entrar en combate a cada Pokémon oponente a menos que sea de tipo Volador o tenga la habilidad Levitación. Puede usarse hasta 3 veces antes de fallar. Con 1 capa: -1/8 PS; 2 capas: -1/6 PS; 3 capas: -1/4 PS. Se elimina con Giro rápido.",
		},
		gen3: {
			desc: "Coloca una trampa en el lado contrario; daña al entrar en combate a cada Pokémon oponente a menos que sea de tipo Volador o tenga la habilidad Levitación. Puede usarse hasta 3 veces antes de fallar. Con 1 capa: -1/8 PS; 2 capas: -1/6 PS; 3 capas: -1/4 PS. Se elimina con Giro rápido.",
		},
		gen2: {
			desc: "Coloca una trampa en el lado contrario; al entrar en combate, cada Pokémon oponente pierde 1/8 PS (redondeado hacia abajo), a menos que sea de tipo Volador. Falla si ya hay una capa. Se elimina con Giro rápido.",
			shortDesc: "Daña a los oponentes al entrar. Máx. 1 capa.",
		},
		start: "  ¡Púas cubrieron el suelo alrededor de [TEAM]!",
		end: "  ¡Las púas desaparecieron del suelo alrededor de [TEAM]!",
		damage: "  ¡[POKEMON] recibió daño por las púas!",
	},
	spikyshield: {
		name: "Barrera espinosa",
		desc: "El usuario está protegido de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que hagan contacto con el usuario pierden 1/8 de sus PS máximos, redondeado hacia abajo. Este movimiento tiene una probabilidad de éxito de 1/X, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último en este turno.",
		shortDesc: "Protege; contacto: -⅛ PS.",
		gen8: {
			desc: "El usuario está protegido de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que hagan contacto con el usuario pierden 1/8 de sus PS máximos, redondeado hacia abajo. Este movimiento tiene una probabilidad de éxito de 1/X, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Llama protectora, Detección, Aguante, Escudo real, Maxibarrera, Obstrucción, Protección, Anticipo, Telatrampa, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último en este turno.",
		},
		gen7: {
			desc: "El usuario está protegido de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que hagan contacto con el usuario pierden 1/8 de sus PS máximos, redondeado hacia abajo. Este movimiento tiene una probabilidad de éxito de 1/X, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Búnker, Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último en este turno.",
		},
		gen6: {
			desc: "El usuario está protegido de la mayoría de los ataques de otros Pokémon durante este turno, y los Pokémon que hagan contacto con el usuario pierden 1/8 de sus PS máximos, redondeado hacia abajo. Este movimiento tiene una probabilidad de éxito de 1/X, donde X comienza en 1 y se triplica cada vez que se usa con éxito. X se restablece a 1 si este movimiento falla, si el último movimiento usado por el usuario no es Detección, Aguante, Escudo real, Protección, Anticipo, Barrera espinosa o Vasta guardia, o si fue uno de esos movimientos y la protección del usuario se rompió. Falla si el usuario actúa el último en este turno.",
		},

		damage: "#roughskin",
	},
	spinout: {
		name: "Quemarrueda",
		desc: "Quemarrueda causa daño y reduce en dos niveles la Velocidad del usuario.",
		shortDesc: "Reduce Vel. usuario 2 niv.",
	},
	spiritbreak: {
		name: "Choque anímico",
		desc: "Choque anímico causa daño y siempre reduce en un nivel el Ataque Especial del objetivo.",
		shortDesc: "100% prob. de bajar Atq. Esp. 1 niv.",
	},
	spiritshackle: {
		name: "Puntada sombría",
		desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva equipada Muda concha o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo sale del campo.",
		shortDesc: "Impide que el objetivo cambie de posición.",
		gen7: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva equipada Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si el objetivo sale del campo usando Relevo, el reemplazo permanecerá atrapado. El efecto termina si el usuario sale del campo.",
		},
	},
	spitup: {
		name: "Escupir",
		desc: "Su potencia es igual a 100 veces el contador de Reserva del usuario. Falla si el contador de Reserva es 0. Tanto si tiene éxito como si no, la Defensa y la Defensa especial del usuario disminuyen tantos niveles como los que aumentó Reserva, y su contador de Reserva se restablece a 0.",
		shortDesc: "Más potencia cuanto más use Reserva.",
		gen4: {
			desc: "Su potencia es igual a 100 veces el contador de Reserva del usuario. Este movimiento no aplica variación de daño. Falla si el contador de Reserva es 0. Salvo que no haya objetivo, tanto si tiene éxito como si no, la Defensa y la Defensa especial del usuario disminuyen tantos niveles como los que aumentó Reserva, y su contador de Reserva se restablece a 0.",
		},
		gen3: {
			desc: "El daño se multiplica por el contador de Reserva del usuario. Este movimiento no aplica variación de daño y no puede ser crítico. Falla si el contador de Reserva es 0. Salvo que el movimiento falle, el contador de Reserva del usuario se restablece a 0.",
		},
	},
	spite: {
		name: "Rencor",
		desc: "Hace que el último movimiento usado por el objetivo pierda 4 PP. Falla si el objetivo no ha usado un movimiento, si el movimiento tiene 0 PP o si ya no lo conoce.",
		shortDesc: "Baja 4 PP del último movimiento del objetivo.",
		gen3: {
			desc: "Hace que el último movimiento usado por el objetivo pierda de 2 a 5 PP, al azar. Falla si el objetivo no ha usado un movimiento, si el movimiento tiene 0 o 1 PP o si ya no lo conoce.",
			shortDesc: "Baja 2-5 PP del último movimiento del objetivo.",
		},
		gen2: {
			desc: "Hace que el último movimiento usado por el objetivo pierda de 2 a 5 PP, al azar. Falla si el objetivo no ha usado un movimiento o si el movimiento tiene 0 PP.",
		},
		activate: "  ¡Se redujeron [NUMBER] PP del movimiento [MOVE] de [TARGET]!",
	},
	splash: {
		name: "Salpicadura",
		shortDesc: "Sin uso competitivo.",
		activate: "  ¡Pero no pasó nada!",
	},
	splinteredstormshards: {
		name: "Tempestad rocosa",
		desc: "Anula los efectos de Campo eléctrico, Campo de hierba, Campo de niebla y Campo psíquico.",
		shortDesc: "Anula los efectos de los terrenos.",
	},
	splishysplash: {
		name: "Salpikasurf",
		desc: "Tiene un 30 % de probabilidad de paralizar al objetivo.",
		shortDesc: "30 % de prob. de paralizar.",
	},
	spore: {
		name: "Espora",
		shortDesc: "Hace que el objetivo caiga dormido.",
	},
	spotlight: {
		name: "Foco",
		desc: "Hasta el final del turno, todos los ataques dirigidos al objetivo por parte de sus oponentes se redirigen a él antes de poder ser reflejados por Capa mágica o la habilidad Espejo mágico, o atraídos por Pararrayos o Colector. Falla si no es Combate doble o Batalla Royal.",
		shortDesc: "Ataques de oponentes redirigidos a él este turno.",
		start: "#followme",
		startFromZEffect: "#followme",
	},
	springtidestorm: {
		name: "Ciclón primavera",
		desc: "Tiene un 30% de prob. de bajar el Ataque del rival 1 nivel.",
		shortDesc: "30% prob. de bajar Atq. del rival 1 niv.",
	},
	stealthrock: {
		name: "Trampa rocas",
		desc: "Coloca un obstáculo en el campo contrario que daña a cada Pokémon rival que entra al combate. Falla si ya está activo. Los rivales pierden 1/32, 1/16, 1/8, 1/4 o 1/2 de sus PS máximos, redondeado hacia abajo según su debilidad al tipo Roca; x0,25, x0,5, neutral, x2 o x4, respectivamente. Puede retirarse si algún Pokémon usa Limpieza general, o si cualquier Pokémon rival usa Giro mortífero, Giro rápido o Despejar con éxito, o es alcanzado por Despejar.",
		shortDesc: "Daña al entrar. Debilidad a Roca.",
		gen8: {
			desc: "Coloca un obstáculo en el campo contrario que daña a cada Pokémon rival que entra al combate. Falla si ya está activo. Los rivales pierden 1/32, 1/16, 1/8, 1/4 o 1/2 de sus PS máximos, redondeado hacia abajo según su debilidad al tipo Roca; x0,25, x0,5, neutral, x2 o x4, respectivamente. Puede retirarse si cualquier Pokémon rival usa Giro rápido o Despejar con éxito, o es alcanzado por Despejar.",
		},
		gen5: {
			desc: "Coloca un obstáculo en el campo contrario que daña a cada Pokémon rival que entra al combate. Falla si ya está activo. Los rivales pierden 1/32, 1/16, 1/8, 1/4 o 1/2 de sus PS máximos, redondeado hacia abajo según su debilidad al tipo Roca; x0,25, x0,5, neutral, x2 o x4, respectivamente. Puede retirarse si cualquier Pokémon rival usa Giro rápido con éxito, o es alcanzado por Despejar.",
		},

		start: "  ¡Piedras punzantes flotan en el aire alrededor de [TEAM]!",
		end: "  ¡Las piedras punzantes desaparecieron de alrededor de [TEAM]!",
		damage: "  ¡Las piedras punzantes taladraron a [POKEMON]!",
	},
	steameruption: {
		name: "Chorro de vapor",
		desc: "Tiene un 30% de prob. de quemar al objetivo. Descongela al objetivo.",
		shortDesc: "30% prob. de quemar al objetivo. Descongela al objetivo.",
	},
	steamroller: {
		name: "Rodillo de púas",
		desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. El daño se duplica y no se realiza comprobación de precisión si el objetivo ha usado Reducción.",
		shortDesc: "30 % de prob. de amedrentar.",
		gen5: {
			desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. El daño se duplica si el objetivo ha usado Reducción.",
		},
	},
	steelbeam: {
		name: "Metaláser",
		desc: "No importa si este movimiento tiene éxito o incluso si provoca debilitamiento: el usuario pierde la mitad de sus PS máximos, redondeado hacia arriba, a menos que tenga la habilidad Muro mágico.",
		shortDesc: "Usuario pierde 50 % PS máximos.",
		damage: "#mindblown",
	},
	steelroller: {
		name: "Allanador férreo",
		desc: "Falla si no hay un terreno activo. Anula los efectos de Campo eléctrico, Campo de hierba, Campo de niebla y Campo psíquico.",
		shortDesc: "Falla sin terreno. Anula los terrenos.",
	},
	steelwing: {
		name: "Ala de acero",
		desc: "Tiene un 10 % de probabilidad de aumentar la Defensa del usuario en 1 nivel.",
		shortDesc: "10 % de prob. de subir Defensa 1 nivel.",
	},
	stickyweb: {
		name: "Red viscosa",
		desc: "Coloca un obstáculo en el lado opuesto del campo, reduciendo la Velocidad en 1 nivel de cada Pokémon rival que entre, a menos que sea un Pokémon de tipo volador o tenga la habilidad Levitación. Falla si el efecto ya está activo en el lado opuesto. Puede retirarse del lado opuesto si cualquier Pokémon usa Limpieza general, o si cualquier rival usa Giro mortífero, Giro rápido o Despejar con éxito, o si recibe Despejar.",
		shortDesc: "Reduce Velocidad de rivales al entrar.",

		gen8: {
			desc: "Coloca un obstáculo en el lado opuesto del campo, reduciendo la Velocidad en 1 nivel de cada Pokémon rival que entre, a menos que sea un Pokémon de tipo volador o tenga la habilidad Levitación. Falla si el efecto ya está activo. Se puede retirar si cualquier rival usa Giro rápido o Despejar con éxito, o si recibe Despejar.",
		},

		start: "  ¡Se ha tendido Red viscosa alrededor de [TEAM]!",
		end: "  ¡La Red viscosa alrededor de [TEAM] ha desaparecido!",
		activate: "  ¡[POKEMON] quedó atrapado en Red viscosa!",
	},
	stockpile: {
		name: "Reserva",
		desc: "Aumenta en 1 nivel la Defensa y la Defensa especial del usuario. El contador de Reserva del usuario aumenta en 1. Falla si el contador de Reserva es 3. El contador de Reserva se reinicia a 0 al dejar de estar activo.",
		shortDesc: "Sube Def, Def. Esp 1; máx. 3 usos.",
		gen3: {
			desc: "El contador de Reserva del usuario aumenta en 1. Falla si es 3. El contador de Reserva se reinicia a 0 al dejar de estar activo.",
			shortDesc: "Aumenta contador de Reserva en 1; máx. 3 usos.",
		},

		start: "  ¡[POKEMON] acumuló Reserva [NUMBER]!",
		end: "  ¡El efecto de Reserva de [POKEMON] terminó!",
	},
	stokedsparksurfer: {
		name: "Surfeo galvánico",
		desc: "Tiene un 100% de probabilidad de paralizar al objetivo.",
		shortDesc: "100% de probabilidad de paralizar al objetivo.",
	},
	stomp: {
		name: "Pisotón",
		desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. El daño se duplica y no hay comprobación de precisión si el objetivo ha usado Reducción.",
		shortDesc: "30 % de prob. de amedrentar.",
		gen5: {
			desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. El daño se duplica si el objetivo ha usado Reducción.",
		},
		gen4: {
			desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. La potencia se duplica si el objetivo ha usado Reducción.",
		},
		gen3: {
			desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. El daño se duplica si el objetivo ha usado Reducción.",
		},
		gen2: {
			desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo. La potencia se duplica si el objetivo está bajo el efecto de Reducción.",
		},
		gen1: {
			desc: "Tiene un 30 % de probabilidad de amedrentar al objetivo.",
		},
	},
	stompingtantrum: {
		name: "Pataleta",
		desc: "La potencia se duplica si el último movimiento del usuario en el turno anterior, incluidas las acciones invocadas por otros movimientos o los usados mediante Mandato, Capa mágica, Robo o las habilidades Pareja de baile o Espejo mágico, no realizó ninguno de sus efectos normales; no incluye el daño de un Patada salto alta, Patada salto o Cabeza sorpresa fallidos; o si el usuario estuvo impedido de actuar por algún efecto distinto a recarga o Caída libre. Un movimiento bloqueado por Búnker, Detección, Escudo real, Protección, Barrera espinosa, Truco defensa, Escudo tatami, Anticipo o Vasta guardia no duplicará la potencia, ni lo harán Bote o Vuelo cancelado por Gravedad, Antiaéreo o Mil flechas.",
		shortDesc: "La potencia se duplica si su último movimiento falló.",
	},
	stoneaxe: {
		name: "Hachazo pétreo",
		desc: "Si tiene éxito, coloca Roca afilada en el campo rival. Los oponentes pierden 1/32, 1/16, 1/8, 1/4 o 1/2 de sus PS según su debilidad al tipo Roca. Se puede eliminar con Limpieza general, Giro mortífero, Giro rápido o Despejar.",
		shortDesc: "Coloca Roca afilada en el lado rival.",
	},
	stoneedge: {
		name: "Roca afilada",
		desc: "Tiene más probabilidad de golpe crítico.",
		shortDesc: "Alta probabilidad de golpe crítico.",
	},
	storedpower: {
		name: "Poder reserva",
		desc: "La potencia es 20 + 20 x X, donde X es la suma de los aumentos de estadística del usuario.",
		shortDesc: "+20 de potencia por aumento de estadística.",
	},
	stormthrow: {
		name: "Llave corsé",
		desc: "Este movimiento siempre resulta en un golpe crítico, salvo si el objetivo está bajo el efecto de Conjuro, o tiene la habilidad Armadura batalla o Caparazón.",
		shortDesc: "Siempre resulta en golpe crítico.",
	},
	strangesteam: {
		name: "Cautivapor",
		desc: "Tiene un 20 % de probabilidad de confundir al objetivo.",
		shortDesc: "20 % de probabilidad de confundir al objetivo.",
	},
	strength: {
		name: "Fuerza",
		shortDesc: "Sin efecto adicional.",
	},
	strengthsap: {
		name: "Absorbefuerza",
		desc: "Baja el Ataque del objetivo en 1 nivel. El usuario recupera PS igual al Ataque del objetivo calculado con su nivel estadístico antes de usar este movimiento. Si el usuario lleva equipada Raíz grande, la recuperación es 1,3x la normal, redondeando 0,5 hacia abajo. Falla si el nivel estadístico de Ataque del objetivo es -6.",
		shortDesc: "Cura PS = Atq. del objetivo. Baja Atq. en 1.",
	},
	stringshot: {
		name: "Disparo demora",
		desc: "Baja la Velocidad del objetivo en 2 niveles.",
		shortDesc: "Baja Vel. del objetivo en 2 niveles.",
		gen5: {
			desc: "Baja la Velocidad del objetivo en 1 nivel.",
			shortDesc: "Baja Vel. del objetivo en 1 nivel.",
		},
		gen2: {
			shortDesc: "Baja Vel. del objetivo en 1 nivel.",
		},
	},
	struggle: {
		name: "Forcejeo",
		desc: "Inflige daño sin tipo a un Pokémon rival seleccionado al azar. Si este movimiento tiene éxito, el usuario pierde 1/4 de sus PS máximos, redondeado medio hacia arriba, y la habilidad Cabeza roca no lo impide. Este movimiento se usa automáticamente si ninguno de los movimientos conocidos del usuario puede seleccionarse.",
		shortDesc: "Usuario pierde 1/4 de sus PS máximos.",
		gen6: {
			desc: "Inflige daño sin tipo a un Pokémon rival adyacente aleatorio. Si este movimiento tiene éxito, el usuario pierde 1/4 de sus PS máximos, redondeado medio hacia arriba, y la habilidad Cabeza roca no lo impide. Este movimiento se usa automáticamente si ninguno de los movimientos conocidos del usuario puede seleccionarse.",
		},
		gen4: {
			desc: "Inflige daño sin tipo a un Pokémon rival seleccionado al azar. Si este movimiento tiene éxito, el usuario pierde 1/4 de sus PS máximos, redondeado hacia abajo, y la habilidad Cabeza roca no lo impide. Este movimiento se usa automáticamente si ninguno de los movimientos conocidos del usuario puede seleccionarse.",
		},
		gen3: {
			desc: "Inflige daño sin tipo a un Pokémon rival seleccionado al azar. Si este movimiento tiene éxito, el usuario recibe un daño equivalente a 1/4 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS, y la habilidad Cabeza roca no lo impide. Este movimiento se usa automáticamente si ninguno de los movimientos conocidos del usuario puede seleccionarse.",
			shortDesc: "Usuario pierde 1/4 de los PS perdidos por el objetivo.",
		},
		gen2: {
			desc: "Inflige daño sin tipo. Si este movimiento tiene éxito, el usuario recibe un daño equivalente a 1/4 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS. Este movimiento se usa automáticamente si ninguno de los movimientos conocidos del usuario puede seleccionarse.",
		},
		gen1: {
			desc: "Inflige daño de tipo Normal. Si este movimiento tiene éxito, el usuario recibe un daño equivalente a 1/2 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS. Este movimiento se usa automáticamente si ninguno de los movimientos conocidos del usuario puede seleccionarse.",
			shortDesc: "Usuario pierde 1/2 de los PS perdidos por el objetivo.",
		},
	},
	strugglebug: {
		name: "Estoicismo",
		desc: "Tiene un 100% de prob. de bajar el Ataque Especial del objetivo 1 nivel.",
		shortDesc: "100% prob. de bajar Atq. Esp. del rival 1 niv.",
	},
	stuffcheeks: {
		name: "Atiborramiento",
		desc: "Este movimiento no puede seleccionarse a menos que el usuario esté sosteniendo una baya. El usuario consume su baya y aumenta su Defensa en 2 niveles. Este efecto no se ve impedido por las habilidades Zoquete o Nerviosismo, ni por los efectos de Embargo o Zona mágica. Falla si el usuario no está sosteniendo una baya.",
		shortDesc: "Debe llevar baya para usar. Consume baya, Def. +2.",
	},
	stunspore: {
		name: "Paralizador",
		desc: "Paraliza al objetivo.",
		shortDesc: "Paraliza al objetivo.",
		gen3: {
			desc: "Paraliza al objetivo. Este movimiento no ignora la inmunidad de tipo.",
		},
		gen1: {
			desc: "Paraliza al objetivo.",
		},
	},
	submission: {
		name: "Sumisión",
		desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeados hacia arriba a la mitad, pero no menos de 1 PS.",
		shortDesc: "Retroceso de 1/4.",
		gen4: {
			desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS.",
		},
		gen2: {
			desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeados hacia arriba a la mitad, pero no menos de 1 PS. Si este movimiento golpea a un sustituto, el daño de retroceso siempre es de 1 PS.",
		},
		gen1: {
			desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS. Si este movimiento rompe el sustituto del objetivo, el usuario no recibe daño de retroceso.",
		},
	},
	substitute: {
		name: "Sustituto",
		desc: "El usuario cede 1/4 de sus PS máximos, redondeados hacia abajo, y los usa para crear un sustituto que lo reemplaza en combate. El sustituto se elimina cuando recibe suficiente daño, si el usuario cambia de Pokémon o se debilita, o si algún Pokémon usa Limpieza general. Relevo puede transferir el sustituto a un aliado, y este conserva sus PS restantes. Mientras el sustituto no se rompa, recibe el daño de todos los ataques de otros Pokémon y protege al usuario de los efectos de estado y de los cambios de estadística causados por otros Pokémon. Los movimientos de sonido y los Pokémon con la habilidad Allanamiento ignoran los sustitutos. El usuario sigue recibiendo daño normal por clima y efectos de estado mientras está protegido por su sustituto. Si el sustituto se rompe durante un ataque múltiple, el usuario recibe daño por los impactos restantes. Si se crea un sustituto mientras el usuario está atrapado por un movimiento de agarre, el efecto de agarre termina inmediatamente. Falla si al usuario no le queda suficiente PS para crear un sustituto sin debilitarse, o si ya tiene un sustituto.",
		shortDesc: "Cede 1/4 de sus PS para crear un sustituto.",
		gen8: {
			desc: "El usuario cede 1/4 de sus PS máximos, redondeados hacia abajo, y los usa para crear un sustituto que lo reemplaza en combate. El sustituto se elimina cuando recibe suficiente daño, o si el usuario cambia de Pokémon o se debilita. Relevo puede transferir el sustituto a un aliado, y este conserva sus PS restantes. Mientras el sustituto no se rompa, recibe el daño de todos los ataques de otros Pokémon y protege al usuario de los efectos de estado y de los cambios de estadística causados por otros Pokémon. Los movimientos de sonido y los Pokémon con la habilidad Allanamiento ignoran los sustitutos. El usuario sigue recibiendo daño normal por clima y efectos de estado mientras está protegido por su sustituto. Si el sustituto se rompe durante un ataque múltiple, el usuario recibe daño por los impactos restantes. Si se crea un sustituto mientras el usuario está atrapado por un movimiento de agarre, el efecto de agarre termina inmediatamente. Falla si al usuario no le queda suficiente PS para crear un sustituto sin debilitarse, o si ya tiene un sustituto.",
		},
		gen5: {
			desc: "El usuario cede 1/4 de sus PS máximos, redondeados hacia abajo, y los usa para crear un sustituto que lo reemplaza en combate. El sustituto se elimina cuando recibe suficiente daño, o si el usuario cambia de Pokémon o se debilita. Relevo puede transferir el sustituto a un aliado, y este conserva sus PS restantes. Mientras el sustituto no se rompa, recibe el daño de todos los ataques de otros Pokémon y protege al usuario de los efectos de estado y de los cambios de estadística causados por otros Pokémon. El usuario sigue recibiendo daño normal por clima y efectos de estado mientras está protegido por su sustituto. Si el sustituto se rompe durante un ataque múltiple, el usuario recibe daño por los impactos restantes. Si se crea un sustituto mientras el usuario está atrapado por un movimiento de agarre, el efecto de agarre termina inmediatamente. Falla si al usuario no le queda suficiente PS para crear un sustituto sin debilitarse, o si ya tiene un sustituto.",
		},
		gen1: {
			desc: "El usuario cede 1/4 de sus PS máximos, redondeados hacia abajo, y los usa para crear un sustituto que lo reemplaza en combate. El sustituto tiene 1 PS adicional además de los PS cedidos, y se elimina cuando recibe suficiente daño o 255 PS de un solo golpe, o si el usuario cambia de Pokémon o se debilita. Mientras el sustituto no se rompa, recibe el daño de todos los ataques del oponente y protege al usuario de efectos de estado y de cambios de estadística causados por el oponente, salvo Disable, Latigazo Aéreo, sueño, parálisis primaria o confusión secundaria si el sustituto no se rompe. El usuario sigue recibiendo daño normal por efectos de estado mientras esté protegido, salvo confusión, cuyo daño se aplica al sustituto en lugar de al oponente. Si el sustituto se rompe durante un ataque múltiple, el ataque termina. Falla si al usuario no le queda suficiente PS para crear un sustituto, o si ya tiene un sustituto. El usuario creará el sustituto y luego se debilitará si su PS actual es exactamente 1/4 de sus PS máximos.",
			shortDesc: "Cede 1/4 de sus PS para crear un sustituto.",
		},

		start: "  ¡[POKÉMON] creó un sustituto!",
		alreadyStarted: "  ¡[POKÉMON] ya tiene un sustituto!",
		end: "  ¡El sustituto de [POKÉMON] desapareció!",
		fail: "  ¡Pero no tiene suficiente PS para crear un sustituto!",
		activate: "  ¡El sustituto recibió daño por [POKÉMON]!",
	},
	subzeroslammer: {
		name: "Crioaliento despiadado",
		shortDesc: "La potencia es igual al poder Z del movimiento base.",
	},
	suckerpunch: {
		name: "Golpe bajo",
		desc: "Falla si el objetivo no seleccionó un ataque físico, especial o Yo primero este turno, o si el objetivo se mueve antes que el usuario.",
		shortDesc: "Suele ir primero. Falla si el rival no ataca.",
		gen4: {
			desc: "Falla si el objetivo no seleccionó un ataque físico o especial este turno, o si el objetivo se mueve antes que el usuario.",
		},
	},
	sunnyday: {
		name: "Día soleado",
		desc: "Durante 5 turnos, el clima pasa a ser Día soleado. El daño de los movimientos de tipo Fuego se multiplica por 1,5 y el de tipo Agua por 0,5. Dura 8 turnos si el usuario sostiene una Roca calor. Falla si el clima actual ya es Día soleado.",
		shortDesc: "5 turnos de sol intenso potencia movs. de Fuego.",
		gen3: {
			desc: "Durante 5 turnos, el clima pasa a ser Día soleado. El daño de los movimientos de tipo Fuego se multiplica por 1,5 y el de tipo Agua por 0,5. Falla si el clima actual ya es Día soleado.",
		},
		gen2: {
			desc: "Durante 5 turnos, el clima pasa a ser Día soleado aunque ya lo sea. El daño de los movimientos de tipo Fuego se multiplica por 1,5 y el de tipo Agua por 0,5.",
		},
	},
	sunsteelstrike: {
		name: "Meteoimpacto",
		desc: "Este movimiento y sus efectos ignoran las habilidades de otros Pokémon.",
		shortDesc: "Ignora las habilidades de otros Pokémon.",
	},
	supercellslam: {
		name: "Plancha voltaica",
		desc: "Si este ataque no tiene éxito, el usuario pierde la mitad de sus PS máximos, redondeado hacia abajo, como daño de colisión. Los Pokémon con la habilidad Muro mágico no se ven afectados por el daño de colisión. El daño se duplica y no se realiza comprobación de precisión si el objetivo ha usado Reducción mientras estaba activo.",
		shortDesc: "Si falla, recibe daño igual al 50 % de sus PS máximos.",
		damage: "#crash",
	},
	superfang: {
		name: "Superdiente",
		desc: "Inflige daño al objetivo igual a la mitad de sus PS actuales, redondeado hacia abajo, pero no menos de 1 PS.",
		shortDesc: "Daño igual a 1/2 de los PS actuales del objetivo.",
		gen1: {
			desc: "Inflige daño al objetivo igual a la mitad de sus PS actuales, redondeado hacia abajo, pero no menos de 1 PS. Este movimiento ignora inmunidad de tipo.",
			shortDesc: "Daño = 1/2 de los PS actuales del objetivo. Golpea fantasmas.",
		},
	},
	superpower: {
		name: "Fuerza bruta",
		desc: "Baja 1 nivel el Ataque y la Defensa del usuario.",
		shortDesc: "Baja 1 nivel el Ataque y la Defensa del usuario.",
	},
	upersonic: {
		name: "Supersónico",
		shortDesc: "Provoca confusión en el objetivo.",
	},
	supersonicskystrike: {
		name: "Picado supersónico",
		shortDesc: "Potencia igual a la potencia Z del movimiento base.",
	},
	surf: {
		name: "Surf",
		desc: "El daño se duplica si el objetivo está usando Buceo.",
		shortDesc: "Golpea Pokémon adyacentes. Daño x2 con Buceo.",
		gen4: {
			desc: "La potencia se duplica si el objetivo está usando Buceo.",
			shortDesc: "Golpea Pokémon adyacentes. Potencia x2 con Buceo.",
		},
		gen2: {
			desc: "Sin efecto adicional.",
			shortDesc: "Sin efecto adicional.",
		},
		gen3: {
			shortDesc: "Golpea rivales. Potencia x2 contra Buceo.",
		},
	},
	surgingstrikes: {
		name: "Azote torrencial",
		desc: "Golpea tres veces. Este movimiento siempre asesta crítico a menos que el objetivo esté bajo el efecto de Conjuro o tenga las habilidades Armadura batalla o Caparazón.",
		shortDesc: "Siempre asesta crítico. Golpea 3 veces.",
	},
	swagger: {
		name: "Contoneo",
		desc: "Aumenta el Ataque del objetivo 2 niveles y lo confunde.",
		shortDesc: "Aumenta el Ataque del objetivo 2 niveles y lo confunde.",
		gen2: {
			desc: "Aumenta el Ataque del objetivo 2 niveles y lo confunde. Falla si no se puede aumentar el Ataque del objetivo.",
		},
	},
	swallow: {
		name: "Tragar",
		desc: "El usuario recupera PS según su contador de Reserva. Recupera 1/4 de sus PS máximos si es 1 y 1/2 si es 2 (ambos redondeados hacia abajo), y todos sus PS si es 3. Falla si su contador de Reserva es 0. La Defensa y la Defensa Especial del usuario bajan tantos niveles como los que aumentó Reserva, y su contador de Reserva se reinicia a 0.",
		shortDesc: "Recupera PS según usos de Reserva.",
		gen4: {
			desc: "El usuario recupera PS según su contador de Reserva. Recupera 1/4 de sus PS máximos si es 1 y 1/2 si es 2 (ambos redondeados hacia abajo), y todos sus PS si es 3. Falla si su contador de Reserva es 0. La Defensa y la Defensa Especial del usuario bajan tantos niveles como los que aumentó Reserva, y su contador de Reserva se reinicia a 0.",
		},
		gen3: {
			desc: "El usuario recupera PS según su contador de Reserva. Recupera 1/4 de sus PS máximos si es 1 y 1/2 si es 2 (ambos redondeados hacia abajo), y todos sus PS si es 3. Falla si su contador de Reserva es 0. El contador de Reserva del usuario se reinicia a 0.",
		},
	},
	sweetkiss: {
		name: "Beso dulce",
		shortDesc: "Provoca confusión en el objetivo.",
	},
	sweetscent: {
		name: "Dulce aroma",
		desc: "Reduce la evasión del objetivo 2 niveles.",
		shortDesc: "Reduce 2 niveles la evasión del rival.",
		gen5: {
			desc: "Reduce la evasión del objetivo 1 nivel.",
			shortDesc: "Reduce 1 nivel la evasión del rival.",
		},
		gen2: {
			shortDesc: "Reduce 1 nivel la evasión del objetivo.",
		},
	},
	swift: {
		name: "Meteoros",
		desc: "Este movimiento no comprueba la precisión.",
		shortDesc: "Nunca falla. Acierta a los rivales.",
		gen1: {
			desc: "Este movimiento no comprueba la precisión y golpea incluso si el objetivo está usando Excavar o Vuelo.",
			shortDesc: "Nunca falla, incluso contra Excavar y Vuelo.",
		},
		gen2: {
			shortDesc: "Este movimiento no comprueba la precisión.",
		},
	},
	switcheroo: {
		name: "Trapicheo",
		desc: "El usuario intercambia el objeto que sostiene con el del objetivo. Falla si el usuario o el objetivo sostiene una Carta o un cristal Z, si ninguno sostiene un objeto, si el usuario intenta dar o tomar una megapiedra de o hacia la especie que puede megaevolucionar con ella, o si intenta dar o tomar un Prisma azul, un Prisma rojo, una Griseosfera, una Tabla, un cartucho, un disco o una memoria de o hacia un Kyogre, un Groudon, una Giratina, un Arceus, un Genesect o un Silvally, respectivamente. El objetivo es inmune a este movimiento si tiene la habilidad Viscosidad.",
		shortDesc: "Intercambia el objeto del usuario con el del objetivo.",
		gen6: {
			desc: "El usuario intercambia el objeto que sostiene con el del objetivo. Falla si el usuario o el objetivo sostiene una Carta, si ninguno sostiene un objeto, si el usuario intenta dar o tomar una megapiedra de o hacia la especie que puede megaevolucionar con ella, o si intenta dar o tomar un Prisma azul, un Prisma rojo, una Griseosfera, una Tabla o un cartucho de o hacia un Kyogre, un Groudon, una Giratina, un Arceus o un Genesect, respectivamente. El objetivo es inmune a este movimiento si tiene la habilidad Viscosidad.",
		},
		gen5: {
			desc: "El usuario intercambia el objeto que sostiene con el del objetivo. Falla si el usuario o el objetivo sostiene una Carta, si ninguno sostiene un objeto, o si el usuario intenta dar o tomar una Griseosfera, una Tabla o un cartucho de o hacia una Giratina, un Arceus o un Genesect, respectivamente. El objetivo es inmune a este movimiento si tiene la habilidad Viscosidad.",
		},
		gen4: {
			desc: "El usuario intercambia el objeto que sostiene con el del objetivo. Falla si el usuario o el objetivo sostiene una Carta o una Griseosfera, si ninguno sostiene un objeto, si cualquiera tiene la habilidad Multitipo, si cualquiera está bajo el efecto de Desarme, o si el objetivo tiene la habilidad Viscosidad.",
		},
		activate: "#trick",
	},
	swordsdance: {
		name: "Danza espada",
		desc: "Aumenta el Ataque del usuario en 2 niveles.",
		shortDesc: "Aumenta Atq. del usuario 2 niv.",
	},
	synchronoise: {
		name: "Sincrorruido",
		desc: "El objetivo es inmune si no comparte tipo con el usuario.",
		shortDesc: "Golpea a los Pokémon adyacentes que comparten tipo con el usuario.",
	},
	synthesis: {
		name: "Síntesis",
		desc: "El usuario recupera 1/2 de sus PS máximos si está en Ráfaga delta o sin condiciones meteorológicas o si lleva Parasol multiuso, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Mar del albor, Danza lluvia, Tormenta de arena o Granizo; todo redondeado hacia abajo.",
		shortDesc: "Recupera PS según el clima.",
		gen8: {
			desc: "El usuario recupera 1/2 de sus PS máximos si está en Ráfaga delta o sin condiciones meteorológicas o si lleva Parasol multiuso, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena; todo redondeado hacia abajo.",
		},
		gen7: {
			desc: "El usuario recupera 1/2 de sus PS máximos si está en Ráfaga delta o sin condiciones meteorológicas, 2/3 de sus PS máximos si el clima es Tierra del ocaso o Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Mar del albor, Danza lluvia o Tormenta de arena; todo redondeado hacia abajo.",
		},
		gen5: {
			desc: "El usuario recupera 1/2 de sus PS máximos si no hay condiciones meteorológicas, 2/3 de sus PS máximos si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Danza lluvia o Tormenta de arena; todo redondeado hacia abajo.",
		},
		gen4: {
			desc: "El usuario recupera 1/2 de sus PS máximos si no hay condiciones meteorológicas, 2/3 de sus PS máximos si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Granizo, Danza lluvia o Tormenta de arena; todo redondeado hacia abajo.",
		},
		gen2: {
			desc: "El usuario recupera 1/2 de sus PS máximos si no hay condiciones meteorológicas, todos sus PS si el clima es Día soleado, y 1/4 de sus PS máximos si el clima es Danza lluvia o Tormenta de arena; todo redondeado hacia abajo.",
		},
	},
	syrupbomb: {
		name: "Bomba caramelo",
		desc: "Si este movimiento tiene éxito, hace que la Velocidad del objetivo baje 1 nivel al final de cada turno durante 3 turnos.",
		shortDesc: "La Velocidad del objetivo baja 1 nivel durante 3 turnos.",
		start: "  ¡[POKÉMON] quedó cubierto de jarabe de caramelo pegajoso!",
	},
	tackle: {
		name: "Placaje",
		shortDesc: "Sin efecto adicional.",
	},
	tachyoncutter: {
		name: "Tajo taquión",
		desc: "Golpea dos veces. Si el primer golpe quiebra el sustituto del objetivo, este recibirá daño por el segundo golpe. Este movimiento no comprueba la precisión.",
		shortDesc: "Golpea dos veces. No comprueba precisión.",
	},
	tailglow: {
		name: "Luminicola",
		desc: "Aumenta el Ataque Especial del usuario 3 niveles.",
		shortDesc: "Aum. Atq. Esp. del usuario 3 niv.",
		gen4: {
			desc: "Aumenta el Ataque Especial del usuario 2 niveles.",
			shortDesc: "Aum. Atq. Esp. del usuario 2 niv.",
		},
	},
	tailslap: {
		name: "Plumerazo",
		desc: "Golpea de dos a cinco veces. Tiene un 35% de prob. de golpear dos o tres veces y un 15% de prob. de golpear cuatro o cinco veces. Si uno de los golpes quiebra el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpea cinco veces. Si el usuario sostiene un Dado trucado, este movimiento golpeará de 4 a 5 veces.",
		shortDesc: "Golpea 2-5 veces en un turno.",
		gen8: {
			desc: "Golpea de dos a cinco veces. Tiene un 35% de prob. de golpear dos o tres veces y un 15% de prob. de golpear cuatro o cinco veces. Si uno de los golpes quiebra el sustituto del objetivo, este recibirá daño por los golpes restantes. Si el usuario tiene la habilidad Encadenado, este movimiento siempre golpea cinco veces.",
		},
	},
	tailwhip: {
		name: "Látigo",
		desc: "Baja 1 nivel la Defensa del objetivo.",
		shortDesc: "Baja 1 nivel la Defensa del rival.",
		gen2: {
			shortDesc: "Baja 1 nivel la Defensa del objetivo.",
		},
	},
	tailwind: {
		name: "Viento afín",
		desc: "Durante 4 turnos, el usuario y los miembros de su equipo duplican su Velocidad. Falla si este movimiento ya está en efecto en el bando del usuario.",
		shortDesc: "Durante 4 turnos, la Velocidad de los aliados se duplica.",
		gen4: {
			desc: "Durante 3 turnos, el usuario y los miembros de su equipo duplican su Velocidad. Falla si este movimiento ya está en efecto en el bando del usuario.",
			shortDesc: "Durante 3 turnos, la Velocidad de los aliados se duplica.",
		},
		start: "  ¡El viento afín sopló por detrás de [TEAM]!",
		end: "  ¡El viento afín de [TEAM] se disipó!",
	},
	takedown: {
		name: "Derribo",
		desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeados hacia arriba a la mitad, pero no menos de 1 PS.",
		shortDesc: "Retroceso de 1/4.",
		gen4: {
			desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS.",
		},
		gen2: {
			desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeados hacia arriba a la mitad, pero no menos de 1 PS. Si este movimiento golpea a un sustituto, el daño de retroceso siempre es de 1 PS.",
		},
		gen1: {
			desc: "Si el objetivo pierde PS, el usuario recibe daño de retroceso igual a 1/4 de los PS perdidos por el objetivo, redondeado hacia abajo, pero no menos de 1 PS. Si este movimiento rompe el sustituto del objetivo, el usuario no recibe daño de retroceso.",
		},
	},
	takeheart: {
		name: "Bálsamo osado",
		desc: "El usuario cura su condición de estado no volátil. Aumenta el Ataque Especial y la Defensa Especial del usuario 1 nivel.",
		shortDesc: "Cura estado del usuario, +1 Atq. Esp. y Def. Esp.",
	},
	tarshot: {
		name: "Alquitranazo",
		desc: "Baja la Velocidad del objetivo 1 nivel. Hasta que el objetivo cambie, la efectividad de los movimientos de tipo Fuego contra él se duplica.",
		shortDesc: "Objetivo -1 Vel. y más débil a Fuego.",
		start: "  ¡[POKEMON] se volvió más débil al fuego!",
	},
	taunt: {
		name: "Mofa",
		desc: "Impide que el objetivo use movimientos de estado durante sus próximos 3 turnos. Pokémon con la habilidad Despiste o protegidos por la habilidad Velo aroma son inmunes.",
		shortDesc: "Objetivo no puede usar movimientos de estado 3 turnos.",
		gen7: {
			desc: "Impide que el objetivo use movimientos de estado durante sus próximos 3 turnos. Pokémon con la habilidad Despiste o protegidos por la habilidad Velo aroma son inmunes. Los movimientos Z aún pueden seleccionarse y ejecutarse durante este efecto.",
		},
		gen6: {
			desc: "Impide que el objetivo use movimientos de estado durante sus próximos 3 turnos. Pokémon con la habilidad Despiste o protegidos por la habilidad Velo aroma son inmunes.",
		},
		gen5: {
			desc: "Impide que el objetivo use movimientos de estado durante sus próximos 3 turnos.",
		},
		gen4: {
			desc: "Durante 3 a 5 turnos, impide que el objetivo use movimientos de estado.",
			shortDesc: "3-5 turnos: objetivo no puede usar movimientos de estado.",
		},
		gen3: {
			desc: "Durante 2 turnos, impide que el objetivo use movimientos de estado.",
			shortDesc: "2 turnos: objetivo no usa movimientos de estado.",
		},
		start: "  ¡[POKEMON] cayó en Mofa!",
		end: "  ¡[POKEMON] se libró de Mofa!",
		cant: "¡[POKEMON] no puede usar [MOVE] después de Mofa!",
	},
	tearfullook: {
		name: "Ojos llorosos",
		desc: "Baja 1 nivel el Ataque y el Ataque Especial del objetivo.",
		shortDesc: "Baja 1 nivel el Ataque y el At. Esp. del objetivo.",
	},
	teatime: {
		name: "Hora del té",
		desc: "Todos los Pokémon activos consumen las bayas que lleven equipadas. Este efecto no se ve impedido por los sustitutos, la habilidad Zoquete, la habilidad Nerviosismo o los efectos de Embargo o Zona mágica. Falla si ningún Pokémon activo lleva bayas equipadas.",
		shortDesc: "Todos los Pokémon activos consumen sus bayas.",
		activate: "  ¡Hora del té! ¡Todos comieron sus bayas!",
		fail: "  ¡Pero no pasó nada!",
	},
	technoblast: {
		name: "Tecno shock",
		desc: "El tipo de este movimiento varía según el cartucho que lleve equipado el usuario.",
		shortDesc: "Tipo varía según el cartucho equipado.",
	},
	tectonicrage: {
		name: "Barrena telúrica",
		shortDesc: "Potencia igual a la potencia Z del movimiento base.",
	},
	teeterdance: {
		name: "Danza caos",
		desc: "Provoca confusión en los Pokémon adyacentes.",
		shortDesc: "Confunde a los Pokémon adyacentes.",
	},
	telekinesis: {
		name: "Telequinesis",
		desc: "Telequinesis hace levitar al objetivo durante 3 turnos. Durante ese tiempo, el objetivo será inmune a los ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas, Red viscosa y a la habilidad Trampa arena, y los movimientos no podrán fallar contra él, salvo los movimientos OHKO. Si el objetivo usa Relevo, el reemplazo mantendrá el efecto. Arraigo, Antiaéreo, Mil flechas y Bola férrea anulan este movimiento si el objetivo está bajo sus efectos. Falla si el objetivo ya está bajo este efecto o bajo los efectos de Arraigo, Antiaéreo o Mil flechas. El objetivo es inmune a este movimiento si es Diglett, Dugtrio, Diglett de Alola, Dugtrio de Alola, Sandygast, Palossand o Mega-Gengar.",
		shortDesc: "3 turnos: flota, movimientos no fallan.",
		gen6: {
			desc: "Telequinesis hace levitar al objetivo durante 3 turnos. Durante ese tiempo, el objetivo será inmune a los ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas, Red viscosa y a la habilidad Trampa arena, y los movimientos no podrán fallar contra él, salvo los movimientos OHKO. Si el objetivo usa Relevo, el reemplazo mantendrá el efecto. Arraigo, Antiaéreo, Mil flechas y Bola férrea anulan este movimiento si el objetivo está bajo sus efectos. Falla si el objetivo ya está bajo este efecto o bajo los efectos de Arraigo, Antiaéreo o Mil flechas. El objetivo es inmune a este movimiento si es Diglett, Dugtrio o Mega-Gengar.",
		},
		gen5: {
			desc: "Telequinesis hace levitar al objetivo durante 3 turnos. Durante ese tiempo, el objetivo será inmune a los ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas y a la habilidad Trampa arena, y los movimientos no podrán fallar contra él, salvo los movimientos OHKO. Si el objetivo usa Relevo, el reemplazo mantendrá el efecto. Arraigo, Antiaéreo y Bola férrea anulan este movimiento si el objetivo está bajo sus efectos. Falla si el objetivo ya está bajo este efecto o bajo los efectos de Arraigo o Antiaéreo. El objetivo es inmune a este movimiento si es Diglett o Dugtrio.",
		},

		start: "  ¡[POKEMON] fue lanzado al aire!",
		end: "  ¡[POKEMON] fue liberado de Telequinesis!",
	},
	teleport: {
		name: "Teletransporte",
		desc: "Si este movimiento tiene éxito y el usuario no se debilita, cambia aunque esté atrapado, siendo reemplazado inmediatamente por un miembro del equipo seleccionado. No cambia si no hay miembros sin debilitar.",
		shortDesc: "Usuario cambia.",
		gen7: {
			desc: "Falla al usarse.",
			shortDesc: "Falla al usarse.",
		},
	},
	temperflare: {
		name: "Cólera ardiente",
		desc: "La potencia se duplica si el movimiento del usuario en el turno anterior, ya sea un movimiento invocado por otro movimiento o usado mediante Mandato, Capa mágica, Robo o las habilidades Pareja de baile o Espejo mágico, no ejecutó ninguno de sus efectos normales, exceptuando el daño por un fallo de Patada salto alta, Patada salto o Cabeza sorpresa, o si el usuario quedó impedido de moverse por cualquier efecto distinto a la recarga o Caída libre. Un movimiento bloqueado por Búnker, Detección, Escudo real, Protección, Barrera espinosa, Truco defensa, Escudo tatami, Anticipo o Vasta guardia no duplicará la potencia de este movimiento, ni tampoco si Bote o Vuelo terminan antes de tiempo debido al efecto de la Gravedad, Antiaéreo o Mil flechas.",
		shortDesc: "Pot. se duplica si mov. anterior falla.",
	},
	terablast: {
		name: "Teraexplosión",
		desc: "Si el usuario está teracristalizado, este movimiento pasa a ser físico si su Ataque es mayor que su Ataque Especial (incluidos los cambios de estadística), y su tipo cambia al teratipo del usuario. Además, si su teratipo es astral, este movimiento tiene 100 de potencia, es supereficaz contra objetivos teracristalizados y neutro contra los demás, y baja un nivel el Ataque y el Ataque Especial del usuario.",
		shortDesc: "Si teracristalizado: físico si Atq > At. Esp., tipo = teratipo.",
	},
	terastarstorm: {
		name: "Teraclúster",
		desc: "Si el usuario es un Terapagos en forma astral, este movimiento cambia a tipo astral, golpea a ambos oponentes en combate doble y se convierte en físico si su Ataque es mayor que su Ataque Especial (incluidos los cambios de estadística).",
		shortDesc: "Terapagos-astral: tipo astral, golpea a ambos rivales.",
	},
	terrainpulse: {
		name: "Pulso de campo",
		desc: "La potencia se duplica si el usuario está en tierra y hay un terreno activo, y el tipo de este movimiento cambia para coincidir. Tipo Eléctrico durante Campo eléctrico, tipo Planta durante Campo de hierba, tipo Hada durante Campo de niebla y tipo Psíquico durante Campo psíquico.",
		shortDesc: "Usuario en terreno: potencia x2, tipo varía.",
	},
	thief: {
		name: "Ladrón",
		desc: "Si este ataque tiene éxito y el usuario no se debilita, roba el objeto que lleva el objetivo si el usuario no porta ninguno. El objeto no se roba si es una Carta o un Cristal Z, o si el objetivo es un Kyogre con un Prisma azul, un Groudon con un Prisma rojo, una Giratina con una Griseosfera, un Arceus con una Tabla, un Genesect con un cartucho, un Silvally con un disco, o un Pokémon que pueda megaevolucionar que lleve la megapiedra correspondiente. Los objetos perdidos no se pueden recuperar con Reciclaje ni con la habilidad Cosecha.",
		shortDesc: "Si el usuario no lleva objeto, lo roba al objetivo.",
		gen6: {
			desc: "Si este ataque tiene éxito y el usuario no se debilita, roba el objeto que lleva el objetivo si el usuario no porta ninguno. El objeto no se roba si es una Carta, o si el objetivo es un Kyogre con un Prisma azul, un Groudon con un Prisma rojo, una Giratina con una Griseosfera, un Arceus con una Tabla, un Genesect con un cartucho o un Pokémon que pueda megaevolucionar que lleve la megapiedra correspondiente. Los objetos perdidos no se pueden recuperar con Reciclaje ni con la habilidad Cosecha.",
		},
		gen5: {
			desc: "Si este ataque tiene éxito y el usuario no se debilita, roba el objeto que lleva el objetivo si el usuario no porta ninguno. El objeto no se roba si es una Carta, o si el objetivo es una Giratina con una Griseosfera, un Arceus con una Tabla o un Genesect con un cartucho. Los objetos perdidos no se pueden recuperar con Reciclaje ni con la habilidad Cosecha.",
		},
		gen4: {
			desc: "Si este ataque tiene éxito y el usuario no se debilita, roba el objeto que lleva el objetivo si el usuario no porta ninguno. El objeto no se roba si es una Carta o una Griseosfera, o si el objetivo tiene la habilidad Multitipo. Los objetos perdidos no se pueden recuperar con Reciclaje.",
		},
		gen3: {
			desc: "Si este ataque tiene éxito y el usuario no se debilita, roba el objeto que lleva el objetivo si el usuario no porta ninguno. El objeto no se roba si es una Carta o una Baya Enigma. Los objetos perdidos no se pueden recuperar con Reciclaje.",
		},
		gen2: {
			desc: "Tiene un 100% de prob. de robar el objeto que lleva el objetivo si el usuario no porta ninguno. El objeto no se roba si es una Carta.",
		},
	},
	thousandarrows: {
		name: "Mil flechas",
		desc: "Este movimiento puede golpear a Pokémon en el aire, incluidos los de tipo Volador, con la habilidad Levitación, con Globo Helio, o bajo el efecto de Levitón o Telequinesis. Si el objetivo es de tipo Volador y no está en tierra, el daño es neutral en lugar de superefectivo. Puede impactar a un objetivo usando Bote, Vuelo o Caída libre; estos efectos terminan si es golpeado por Mil flechas. Si el objetivo es un Volador que no ha usado Respiro este turno o tiene Levitación, pierde la inmunidad a movimientos de tipo Tierra y a la habilidad Trampa arena mientras dure el efecto. Durante el efecto, Levitón y Telequinesis fallan contra el objetivo.",
		shortDesc: "Enraíza rivales adyacentes. Primer golpe neutro en Volador.",
	},
	thousandwaves: {
		name: "Mil temblores",
		desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva una Muda concha, o usa Relevo, Viraje, Última palabra, Teletransporte, Ida y vuelta o Voltiocambio. El efecto termina si el usuario o el objetivo abandona el campo.",
		shortDesc: "Golpea rivales adyacentes. Impide su cambio.",
		gen7: {
			desc: "Impide que el objetivo cambie de posición. El objetivo aún puede cambiar si lleva una Muda concha o usa Relevo, Última palabra, Ida y vuelta o Voltiocambio. Si el objetivo abandona el campo con Relevo, el reemplazo queda atrapado. El efecto termina si el usuario abandona el campo.",
		},
	},
	thrash: {
		name: "Saña",
		desc: "El usuario queda forzado a usar este movimiento durante dos o tres turnos y se confunde inmediatamente después de su uso en el último turno del efecto, si no estaba confundido ya. Este movimiento tiene como objetivo a un Pokémon rival al azar en cada turno. Si el usuario queda impedido para moverse, está dormido al comienzo de un turno o el ataque no acierta contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin causar confusión. Si este movimiento es llamado por Sonámbulo y el usuario está dormido, el movimiento se usa durante un turno y no confunde al usuario.",
		shortDesc: "Dura 2-3 turnos. Confunde al usuario al final.",
		gen6: {
			desc: "El usuario queda forzado a usar este movimiento durante dos o tres turnos y se confunde inmediatamente después de su uso en el último turno del efecto si no estaba confundido ya. Este movimiento tiene como objetivo a un Pokémon rival adyacente al azar en cada turno. Si el usuario queda impedido para moverse, está dormido al comienzo de un turno o el ataque no acierta contra el objetivo en el primer turno del efecto o en el segundo turno de un efecto de tres turnos, el efecto termina sin causar confusión. Si este movimiento es llamado por Sonámbulo, el movimiento se usa durante un turno y no confunde al usuario.",
		},
		gen4: {
			desc: "El usuario queda forzado a usar este movimiento durante dos o tres turnos y se confunde al final del último turno del efecto si no estaba confundido ya. Este movimiento tiene como objetivo a un Pokémon rival al azar en cada turno. Si el usuario queda impedido para moverse, está dormido al comienzo de un turno o el ataque no acierta contra el objetivo, el efecto termina sin causar confusión. Si este movimiento es llamado por Sonámbulo, el movimiento se usa durante un turno y no confunde al usuario.",
		},
		gen3: {
			desc: "El usuario queda forzado a usar este movimiento durante dos o tres turnos y se confunde al final del último turno del efecto si no estaba confundido ya. Este movimiento tiene como objetivo a un Pokémon rival al azar en cada turno. Si el usuario queda impedido para moverse, se queda dormido, se congela o el ataque no acierta contra el objetivo, el efecto termina sin causar confusión. Si este movimiento es llamado por Sonámbulo, el movimiento se usa durante un turno y no confunde al usuario.",
		},
		gen2: {
			desc: "Con éxito o no, el usuario queda forzado a usar este movimiento durante dos o tres turnos y se confunde inmediatamente después de su uso en el último turno del efecto, incluso si ya está confundido. Si el usuario queda impedido para moverse, el efecto termina sin causar confusión. Si este movimiento es llamado por Sonámbulo, el movimiento se usa durante un turno y no confunde al usuario.",
		},
		gen1: {
			desc: "Con éxito o no, el usuario queda forzado a usar este movimiento durante tres o cuatro turnos y se confunde inmediatamente después de su uso en el último turno del efecto, incluso si ya está confundido. Si el usuario queda impedido para moverse, el efecto termina sin causar confusión. Durante el efecto, la precisión de este movimiento se recalcula cada turno con los cambios de estadística, pero sin bajar de 1/256 ni subir de 255/256.",
			shortDesc: "Dura 3-4 turnos. Confunde al usuario al final.",
		},
	},
	throatchop: {
		name: "Golpe mordaza",
		desc: "El usuario ataca la garganta del objetivo, infligiendo daño y evitando que use movimientos basados en sonido durante 2 turnos.",
		shortDesc: "Durante 2 turnos, el objetivo no puede usar movimientos de sonido.",
		gen7: {
			desc: "El usuario ataca la garganta del objetivo, infligiendo daño y evitando que use movimientos basados en sonido durante 2 turnos. Los movimientos de sonido potenciados por Z aún pueden seleccionarse y ejecutarse.",
		},
		cant: "¡Los efectos de Golpe mordaza impiden a [POKEMON] usar ciertos movimientos!",
	},
	thunder: {
		name: "Thunder",
		desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
		shortDesc: "30% chance to paralyze. Can't miss in rain.",
		gen7: {
			desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%.",
		},
		gen5: {
			desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Rain Dance, this move does not check accuracy. If the weather is Sunny Day, this move's accuracy is 50%.",
		},
		gen4: {
			desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce or Fly. If the weather is Rain Dance, this move does not check accuracy. If the weather is Sunny Day, this move's accuracy is 50%.",
		},
		gen2: {
			desc: "Has a 30% chance to paralyze the target. This move can hit a target using Fly. If the weather is Rain Dance, this move does not check accuracy. If the weather is Sunny Day, this move's accuracy is 50%.",
		},
		gen1: {
			desc: "Has a 10% chance to paralyze the target.",
			shortDesc: "10% chance to paralyze the target.",
		},
	},
	thunderbolt: {
		name: "Thunderbolt",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target.",
	},
	thundercage: {
		name: "Thunder Cage",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},

		start: "  [SOURCE] trapped [POKEMON]!",
	},
	thunderclap: {
		name: "Thunderclap",
		desc: "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
		shortDesc: "Usually goes first. Fails if target is not attacking.",
	},
	thunderfang: {
		name: "Thunder Fang",
		desc: "Has a 10% chance to paralyze the target and a 10% chance to make it flinch.",
		shortDesc: "10% chance to paralyze. 10% chance to flinch.",
	},
	thunderouskick: {
		name: "Thunderous Kick",
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Defense by 1.",
	},
	thunderpunch: {
		name: "Thunder Punch",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target.",
	},
	thundershock: {
		name: "Thunder Shock",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target.",
	},
	thunderwave: {
		name: "Thunder Wave",
		desc: "Paralyzes the target. This move does not ignore type immunity.",
		shortDesc: "Paralyzes the target.",
	},
	tickle: {
		name: "Tickle",
		desc: "Lowers the target's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the target's Attack and Defense by 1.",
	},
	tidyup: {
		name: "Tidy Up",
		desc: "Raises the user's Attack and Speed by 1 stage. Removes substitutes from all active Pokemon and ends the effects of Spikes, Stealth Rock, Sticky Web, and Toxic Spikes for both sides.",
		shortDesc: "User +1 Atk, Spe. Clears all substitutes/hazards.",

		activate: "  Tidying up complete!",
	},
	topsyturvy: {
		name: "Topsy-Turvy",
		desc: "The target's positive stat stages become negative and vice versa. Fails if all of the target's stat stages are 0.",
		shortDesc: "Inverts the target's stat stages.",
	},
	torchsong: {
		name: "Torch Song",
		desc: "Has a 100% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Sp. Atk by 1.",
	},
	torment: {
		name: "Torment",
		desc: "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
		shortDesc: "Target can't select the same move twice in a row.",

		start: "  [POKEMON] was subjected to torment!",
		end: "  [POKEMON] is no longer tormented!",
	},
	toxic: {
		name: "Toxic",
		desc: "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move.",
		shortDesc: "Badly poisons the target. Poison types can't miss.",
		gen5: {
			desc: "Badly poisons the target.",
			shortDesc: "Badly poisons the target.",
		},
	},
	toxicspikes: {
		name: "Toxic Spikes",
		desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any Pokemon uses Tidy Up, or if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
		shortDesc: "Poisons grounded foes on switch-in. Max 2 layers.",
		gen8: {
			desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
		},
		gen5: {
			desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
		},
		gen4: {
			desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, as well as switching in with a substitute.",
		},

		start: "  Poison spikes were scattered on the ground all around [TEAM]!",
		end: "  The poison spikes disappeared from the ground around [TEAM]!",
	},
	toxicthread: {
		name: "Toxic Thread",
		desc: "Lowers the target's Speed by 1 stage and poisons it.",
		shortDesc: "Lowers the target's Speed by 1 and poisons it.",
	},
	trailblaze: {
		name: "Trailblaze",
		desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "100% chance to raise the user's Speed by 1.",
	},
	transform: {
		name: "Transform",
		desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion.",
		shortDesc: "Copies target's stats, moves, types, and Ability.",
		gen4: {
			desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, IVs, species, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP. This move fails if the target has transformed.",
		},
		gen2: {
			desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, DVs, species, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP. This move fails if the target has transformed.",
			shortDesc: "Copies target's stats, moves, types, and species.",
		},
		gen1: {
			desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, DVs, species, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP. This move can hit a target using Dig or Fly.",
		},

		transform: "[POKEMON] transformed into [SPECIES]!",
	},
	triattack: {
		name: "Tri Attack",
		desc: "Has a 20% chance to either burn, freeze, or paralyze the target.",
		shortDesc: "20% chance to paralyze or burn or freeze target.",
		gen2: {
			desc: "This move selects burn, freeze, or paralysis at random, and has a 20% chance to inflict the target with that status. If the target is frozen and burn was selected, it thaws out.",
		},
		gen1: {
			desc: "No additional effect.",
			shortDesc: "No additional effect.",
		},
	},
	trick: {
		name: "Trick",
		desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		shortDesc: "User switches its held item with the target's.",
		gen6: {
			desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, or a Drive to or from a Kyogre, a Groudon, a Giratina, an Arceus, or a Genesect, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		},
		gen5: {
			desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail, if neither is holding an item, or if the user is trying to give or take a Griseous Orb, a Plate, or a Drive to or from a Giratina, an Arceus, or a Genesect, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		},
		gen4: {
			desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Griseous Orb, if neither is holding an item, if either has the Multitype Ability, if either is under the effect of Knock Off, or if the target has the Sticky Hold Ability.",
		},
		gen3: {
			desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail, if neither is holding an item, if either is under the effect of Knock Off, or if the target has the Sticky Hold Ability.",
		},

		activate: "  [POKEMON] switched items with its target!",
	},
	trickortreat: {
		name: "Trick-or-Treat",
		desc: "Causes the Ghost type to be added to the target, effectively making it have two or three types. Fails if the target is already a Ghost type. If Forest's Curse adds a type to the target, it replaces the type added by this move and vice versa.",
		shortDesc: "Adds Ghost to the target's type(s).",
	},
	trickroom: {
		name: "Trick Room",
		desc: "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
		shortDesc: "Goes last. For 5 turns, turn order is reversed.",
		gen4: {
			desc: "For 5 turns, all active Pokemon with lower Speed will move before those with higher Speed, within their priority brackets. If this move is used during the effect, the effect ends.",
		},
	},
	triplearrows: {
		name: "Triple Arrows",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage, a 30% chance to make it flinch, and a higher chance for a critical hit.",
		shortDesc: "High crit. Target: 50% -1 Defense, 30% flinch.",
	},
	tripleaxel: {
		name: "Triple Axel",
		desc: "Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
	},
	tripledive: {
		name: "Triple Dive",
		desc: "Hits three times.",
		shortDesc: "Hits 3 times.",
	},
	triplekick: {
		name: "Triple Kick",
		desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
		gen4: {
			desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
		},
		gen3: {
			desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits.",
		},
		gen2: {
			desc: "Hits one to three times, at random. Power increases to 20 for the second hit and 30 for the third.",
			shortDesc: "Hits 1-3 times. Power rises with each hit.",
		},
	},
	tropkick: {
		name: "Trop Kick",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Attack by 1.",
	},
	trumpcard: {
		name: "Trump Card",
		desc: "The power of this move is based on the amount of PP remaining after normal PP reduction and the Pressure Ability resolve. 200 power for 0 PP, 80 power for 1 PP, 60 power for 2 PP, 50 power for 3 PP, and 40 power for 4 or more PP.",
		shortDesc: "More power the fewer PP this move has left.",
	},
	twinbeam: {
		name: "Twin Beam",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
	},
	twineedle: {
		name: "Twineedle",
		desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
		gen4: {
			desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit. If the target has a Focus Sash and had full HP when this move started, it will not be knocked out regardless of the number of hits.",
		},
		gen3: {
			desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		},
		gen2: {
			desc: "Hits twice, with the second hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit but the target cannot be poisoned by it.",
			shortDesc: "Hits 2 times. Last hit has 20% chance to poison.",
		},
		gen1: {
			desc: "Hits twice, with the second hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, the move ends.",
		},
	},
	twinkletackle: {
		name: "Twinkle Tackle",
		shortDesc: "Power is equal to the base move's Z-Power.",
	},
	twister: {
		name: "Twister",
		desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "20% chance to make the foe(s) flinch.",
		gen4: {
			desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce or Fly.",
		},
		gen2: {
			desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Fly.",
			shortDesc: "20% chance to make the target flinch.",
		},
	},
	uturn: {
		name: "U-turn",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target.",
		gen6: {
			desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
		},
		gen4: {
			desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		},

		switchOut: "[POKEMON] went back to [TRAINER]!",
	},
	upperhand: {
		name: "Upper Hand",
		desc: "Has a 100% chance to make the target flinch. Fails if the target did not select a priority move for use this turn, or if the target moves before the user.",
		shortDesc: "100% flinch. Fails unless target using priority.",
	},
	uproar: {
		name: "Uproar",
		desc: "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
		shortDesc: "Lasts 3 turns. Active Pokemon cannot fall asleep.",
		gen6: {
			desc: "The user spends three turns locked into this move. This move targets an adjacent opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
		},
		gen4: {
			desc: "The user spends three to six turns locked into this move. This move targets an opponent at random on each turn. During effect, no active Pokemon can fall asleep by any means, and Pokemon that are already asleep wake up as their turn starts or at the end of each turn, including the last one. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
			shortDesc: "Lasts 3-6 turns. Active Pokemon cannot sleep.",
		},
		gen3: {
			desc: "The user spends two to five turns locked into this move. This move targets an opposing Pokemon at random on each turn. During effect, no active Pokemon can fall asleep by any means, and Pokemon that are already asleep wake up as their turn starts or at the end of each turn, including the last one. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
			shortDesc: "Lasts 2-5 turns. Active Pokemon cannot sleep.",
		},

		start: "  [POKEMON] caused an uproar!",
		end: "  [POKEMON] calmed down.",
		upkeep: "  [POKEMON] is making an uproar!",
		block: "  But the uproar kept [POKEMON] awake!",
		blockSelf: "  [POKEMON] can't sleep in an uproar!",
	},
	vacuumwave: {
		name: "Vacuum Wave",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
	},
	vcreate: {
		name: "V-create",
		desc: "Lowers the user's Speed, Defense, and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense, Sp. Def, Speed by 1.",
	},
	veeveevolley: {
		name: "Veevee Volley",
		desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
		shortDesc: "Max happiness: 102 power. Can't miss.",
	},
	venomdrench: {
		name: "Venom Drench",
		desc: "Lowers the target's Attack, Special Attack, and Speed by 1 stage if the target is poisoned. Fails if the target is not poisoned.",
		shortDesc: "Lowers Atk/Sp. Atk/Speed of poisoned foes by 1.",
	},
	venoshock: {
		name: "Venoshock",
		desc: "Power doubles if the target is poisoned.",
		shortDesc: "Power doubles if the target is poisoned.",
	},
	victorydance: {
		name: "Victory Dance",
		desc: "Raises the user's Attack, Defense, and Speed by 1 stage.",
		shortDesc: "Raises the user's Attack, Defense, Speed by 1.",
	},
	vinewhip: {
		name: "Vine Whip",
		shortDesc: "No additional effect.",
	},
	visegrip: {
		name: "Vise Grip",
		shortDesc: "No additional effect.",
	},
	vitalthrow: {
		name: "Vital Throw",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Goes last.",
	},
	voltswitch: {
		name: "Volt Switch",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target.",
		gen6: {
			desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button.",
		},

		switchOut: "#uturn",
	},
	volttackle: {
		name: "Volt Tackle",
		desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to paralyze target.",
		gen4: {
			desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.",
			shortDesc: "Has 1/3 recoil. 10% chance to paralyze target.",
		},
		gen3: {
			desc: "If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.",
			shortDesc: "Has 1/3 recoil.",
		},
	},
	wakeupslap: {
		name: "Wake-Up Slap",
		desc: "Power doubles if the target is asleep. If the user has not fainted, the target wakes up.",
		shortDesc: "Power doubles if target is asleep, and wakes it.",
		gen4: {
			desc: "Power doubles if the target is asleep. If this move is successful, the target wakes up.",
		},
	},
	waterfall: {
		name: "Waterfall",
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		gen3: {
			desc: "No additional effect.",
			shortDesc: "No additional effect.",
		},
	},
	watergun: {
		name: "Water Gun",
		shortDesc: "No additional effect.",
	},
	waterpledge: {
		name: "Water Pledge",
		desc: "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
		shortDesc: "Use with Grass or Fire Pledge for added effect.",

		activate: "  [POKEMON] is waiting for [TARGET]'s move...",
		start: "  A rainbow appeared in the sky on [TEAM]'s side!",
		end: "  The rainbow on [TEAM]'s side disappeared!",
	},
	waterpulse: {
		name: "Water Pulse",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
	},
	watershuriken: {
		name: "Water Shuriken",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times. If the user is holding Loaded Dice, this move will hit 4-5 times.",
		shortDesc: "Usually goes first. Hits 2-5 times in one turn.",
		gen8: {
			desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		},
		gen6: {
			desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		},
	},
	watersport: {
		name: "Water Sport",
		desc: "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Fire-type attacks have 1/3 power.",
		gen5: {
			desc: "While the user is active, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active for any Pokemon.",
			shortDesc: "Weakens Fire-type attacks to 1/3 their power.",
		},
		gen4: {
			desc: "While the user is active, all Fire-type attacks used by any active Pokemon have their power halved. Fails if this effect is already active for the user. Baton Pass can be used to transfer this effect to an ally.",
			shortDesc: "Weakens Fire-type attacks to 1/2 their power.",
		},
	},
	waterspout: {
		name: "Water Spout",
		desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s).",
	},
	wavecrash: {
		name: "Wave Crash",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
	},
	weatherball: {
		name: "Weather Ball",
		desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Snow, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, this move remains Normal type and does not double in power.",
		shortDesc: "Power doubles and type varies in each weather.",
		gen8: {
			desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, this move remains Normal type and does not double in power.",
		},
		gen5: {
			desc: "Power doubles if a weather condition is active, and this move's type changes to match. Ice type during Hail, Water type during Rain Dance, Rock type during Sandstorm, and Fire type during Sunny Day.",
		},
		gen3: {
			desc: "Damage doubles if a weather condition is active, and this move's type changes to match. Ice type during Hail, Water type during Rain Dance, Rock type during Sandstorm, and Fire type during Sunny Day.",
			shortDesc: "Damage doubles and type varies during weather.",
		},

		move: "Breakneck Blitz turned into [MOVE] due to the weather!",
	},
	whirlpool: {
		name: "Whirlpool",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen7: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen5: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen4: {
			desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
			shortDesc: "Traps and damages the target for 2-5 turns.",
		},
		gen3: {
			desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},

		start: "  [POKEMON] became trapped in the vortex!",
	},
	whirlwind: {
		name: "Whirlwind",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally.",
		gen4: {
			desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, if the target used Ingrain previously or has the Suction Cups Ability, or if the user's level is lower than the target's and X * (user's level + target's level) / 256 + 1 is less than or equal to (target's level / 4), rounded down, where X is a random number from 0 to 255.",
		},
		gen2: {
			desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the user moves before the target.",
		},
		gen1: {
			desc: "No competitive use.",
			shortDesc: "No competitive use.",
		},
	},
	wickedblow: {
		name: "Wicked Blow",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit.",
	},
	wickedtorque: {
		name: "Wicked Torque",
		desc: "Has a 10% chance to cause the target to fall asleep.",
		shortDesc: "10% chance to cause the target to fall asleep.",
	},
	wideguard: {
		name: "Wide Guard",
		desc: "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from multi-target moves this turn.",
		gen8: {
			desc: "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		},
		gen7: {
			desc: "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		},
		gen6: {
			desc: "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
			shortDesc: "Protects allies from multi-target damage this turn.",
		},
		gen5: {
			desc: "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This attack has a 1/X chance of being successful, where X starts at 1 and doubles each time this move is successfully used. X resets to 1 if this attack fails or if the user's last used move is not Detect, Endure, Protect, Quick Guard, or Wide Guard. If X is 256 or more, this move has a 1/(2^32) chance of being successful. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		},

		start: "  Wide Guard protected [TEAM]!",
		block: "  Wide Guard protected [POKEMON]!",
	},
	wildboltstorm: {
		name: "Wildbolt Storm",
		desc: "Has a 20% chance to paralyze the target. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 80%.",
		shortDesc: "20% chance to paralyze foe(s). Rain: can't miss.",
	},
	wildcharge: {
		name: "Wild Charge",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
	},
	willowisp: {
		name: "Will-O-Wisp",
		desc: "Burns the target.",
		shortDesc: "Burns the target.",
	},
	wingattack: {
		name: "Wing Attack",
		shortDesc: "No additional effect.",
	},
	wish: {
		name: "Wish",
		desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
		shortDesc: "Next turn, 50% of the user's max HP is restored.",
		gen4: {
			desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of its maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
			shortDesc: "Next turn, heals 50% of the recipient's max HP.",
		},

		heal: "  [NICKNAME]'s wish came true!",
	},
	withdraw: {
		name: "Withdraw",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1.",
	},
	wonderroom: {
		name: "Wonder Room",
		desc: "For 5 turns, all active Pokemon have their Defense and Special Defense stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends.",
		shortDesc: "For 5 turns, all Defense and Sp. Def stats switch.",
	},
	woodhammer: {
		name: "Wood Hammer",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
		gen4: {
			desc: "If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.",
			shortDesc: "Has 1/3 recoil.",
		},
	},
	workup: {
		name: "Work Up",
		desc: "Raises the user's Attack and Special Attack by 1 stage.",
		shortDesc: "Raises the user's Attack and Sp. Atk by 1.",
	},
	worryseed: {
		name: "Worry Seed",
		desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Truant, Zen Mode, or Zero to Hero.",
		shortDesc: "The target's Ability becomes Insomnia.",
		gen8: {
			desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
		},
		gen7: {
			desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
		},
		gen6: {
			desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Insomnia, Multitype, Stance Change, or Truant.",
		},
		gen5: {
			desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Insomnia, Multitype, or Truant.",
		},
		gen4: {
			desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Multitype or Truant, or if the target is holding a Griseous Orb.",
		},
	},
	wrap: {
		name: "Wrap",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		gen8: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen7: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen5: {
			desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen4: {
			desc: "Prevents the target from switching for two to five turns (always five turns if the user is holding Grip Claw). Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass or U-turn. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
			shortDesc: "Traps and damages the target for 2-5 turns.",
		},
		gen3: {
			desc: "Prevents the target from switching for two to five turns. Causes damage to the target equal to 1/16 of its maximum HP, rounded down, at the end of each turn during effect. The target can still switch out if it uses Baton Pass. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		},
		gen1: {
			desc: "The user spends two to five turns using this move. Has a 3/8 chance to last two or three turns, and a 1/8 chance to last four or five turns. The damage calculated for the first turn is used for every other turn. The user cannot select a move and the target cannot execute a move during the effect, but both may switch out. If the user switches out, the target remains unable to execute a move during that turn. If the target switches out, the user uses this move again automatically, and if it had 0 PP at the time, it becomes 63. If the user or the target switch out, or the user is prevented from moving, the effect ends. This move can prevent the target from moving even if it has type immunity, but will not deal damage.",
			shortDesc: "Prevents the target from moving for 2-5 turns.",
		},

		start: "  [POKEMON] was wrapped by [SOURCE]!",
		move: "[POKEMON]'s attack continues!", // gen 1 only
	},
	wringout: {
		name: "Wring Out",
		desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
		shortDesc: "More power the more HP the target has left.",
		gen4: {
			desc: "Power is equal to 120 * (target's current HP / target's maximum HP) + 1, rounded down.",
		},
	},
	xscissor: {
		name: "X-Scissor",
		shortDesc: "No additional effect.",
	},
	yawn: {
		name: "Yawn",
		desc: "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.",
		shortDesc: "Puts the target to sleep after 1 turn.",

		start: "  [POKEMON] grew drowsy!",
	},
	zapcannon: {
		name: "Zap Cannon",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target.",
	},
	zenheadbutt: {
		name: "Zen Headbutt",
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
	},
	zingzap: {
		name: "Zing Zap",
		desc: "Has a 30% chance to make the target flinch.",
		shortDesc: "30% chance to make the target flinch.",
	},
	zippyzap: {
		name: "Zippy Zap",
		desc: "Has a 100% chance to raise the user's evasion by 1 stage.",
		shortDesc: "Goes first. Raises user's evasion by 1.",
		gen7: {
			desc: "Will always result in a critical hit.",
			shortDesc: "Nearly always goes first. Always crits.",
		},
	},
};
