export const AbilitiesText: { [id: IDEntry]: AbilityText } = {
	noability: {
		name: "Sin habilidad",
		shortDesc: "No hace nada.",
	},
	adaptability: {
		name: "Adaptable",
		desc: "Los movimientos de este Pokémon que coinciden con uno de sus tipos reciben una bonificación por ataque del mismo tipo (STAB) de 2 en lugar de 1,5.",
		shortDesc: "Bono Atq. mismo tipo (STAB) x2 vs x1,5.",
	},
	aerilate: {
		name: "Piel celeste",
		desc: "Piel celeste convierte los movimientos de tipo Normal de este Pokémon en movimientos de tipo Volador y multiplica su potencia por 1,2. Este efecto se aplica después de otros cambios de tipo, pero antes de los efectos de Cortina plasma y Electrificación.",
		shortDesc: "Mov. Norm. → Volador x1,2.",
		gen6: {
			desc: "Piel celeste convierte los movimientos de tipo Normal de este Pokémon en movimientos de tipo Volador y multiplica su potencia por 1,3. Este efecto se aplica después de otros cambios de tipo, pero antes de los efectos de Cortina plasma y Electrificación.",
			shortDesc: "Mov. Norm. → Volador x1,3.",
		},
	},
	aftermath: {
		name: "Detonación",
		desc: "Si este Pokémon es debilitado por un movimiento de contacto, el usuario de dicho movimiento pierde un 25% de sus PS máximos, redondeado hacia abajo. Esta habilidad no surtirá efecto si hay un Pokémon activo con la habilidad Humedad.",
		shortDesc: "Al KO por contacto el usuario pierde 1/4 de sus PS.",
		damage: "  ¡[POKEMON] resultó herido!",
	},
	airlock: {
		name: "Esclusa de aire",
		shortDesc: "Anula los efectos del clima mientras esté activo.",

		start: " Los efectos del clima desaparecieron.",
	},
	analytic: {
		name: "Cálculo final",
		desc: "Cálculo final multiplica por 1,3 la potencia de los movimientos de este Pokémon si es el último en atacar en el turno. No afecta a Deseo oculto ni a Premonición.",
		shortDesc: "Pot. mov. x1,3 si es último en atacar.",
	},
	angerpoint: {
		name: "Irascible",
		desc: "Si este Pokémon (no su sustituto) recibe un golpe crítico, su Ataque se incrementa en 12 niveles.",
		shortDesc: "Golpe crítico (no sustituto): Ataque +12 niv.",
		gen4: {
			desc: "Si este Pokémon o su sustituto recibe un golpe crítico, su Ataque se incrementa en 12 niveles.",
			shortDesc: "Golpe crítico (incl. sustituto): Ataque +12 niv.",
		},

		boost: "  ¡[POKEMON] elevó su Ataque al máximo!",
	},
	angershell: {
		name: "Coraza ira",
		desc: "Cuando este Pokémon tiene más de la mitad de sus PS máximos y recibe daño de un ataque que lo deja en la mitad o menos de sus PS máximos, su Ataque, Ataque Especial y Velocidad suben 1 nivel, y su Defensa y Defensa Especial bajan 1 nivel. Este efecto se aplica después de todos los golpes de un movimiento múltiple. Este efecto se anula si el movimiento tenía un efecto secundario anulado por la habilidad Potencia bruta.",
		shortDesc: "A ≤ 50% PS: +1 Atq./Atq. Esp./Vel.; -1 Def./Def. Esp.",
	},
	anticipation: {
		name: "Anticipación",
		desc: "Al entrar en combate, este Pokémon detecta si algún rival tiene un ataque supereficaz contra él o un movimiento OHKO. Este efecto considera cualquier movimiento que inflija daño directo como un movimiento de su tipo respectivo; Poder oculto cuenta como su tipo determinado; y Sentencia, Multiataque, Don natural, Danza Revelación, Tecno shock y Meteorobola se consideran movimientos de tipo Normal.",
		shortDesc: "Al entrar en combate, este Pokémon tiembla si algún rival tiene un movimiento supereficaz o OHKO.",
		gen6: {
			desc: "Al entrar en combate, este Pokémon detecta si algún rival tiene un ataque supereficaz contra él o un movimiento OHKO. Este efecto considera cualquier movimiento que inflija daño directo como un movimiento de su tipo respectivo; Poder oculto cuenta como su tipo determinado; y Sentencia, Don natural, Tecno shock y Meteorobola se consideran movimientos de tipo Normal.",
		},
		gen5: {
			desc: "Al entrar en combate, este Pokémon detecta si algún rival tiene un ataque supereficaz contra él o un movimiento OHKO. Este efecto considera cualquier movimiento que inflija daño directo como un movimiento de su tipo respectivo, y Poder oculto, Sentencia, Don natural, Tecno shock y Meteorobola se consideran movimientos de tipo Normal.",
		},
		gen4: {
			desc: "Al entrar en combate, este Pokémon detecta si algún rival tiene un ataque supereficaz contra él o un movimiento OHKO al que no sea inmune y si su nivel es menor o igual que el del rival. Este efecto no considera Contraataque, Furia dragón, Represión metal, Manto espejo, Tinieblas, Psicoonda ni Lanzarrocas como movimientos de ataque, y Poder oculto, Sentencia, Don natural y Meteorobola se consideran movimientos de tipo Normal. Este efecto tiene en cuenta cualquier cambio en la efectividad de los ataques contra este Pokémon debido a los efectos de Gravedad o a las habilidades Normalidad o Intrépido.",
		},

		activate: "¡[POKEMON] tembló!",
	},
	arenatrap: {
		name: "Trampa arena",
		desc: "Evita que los Pokémon oponentes puedan cambiar de posición, a menos que estén en el aire, lleven una Muda concha o sean de tipo fantasma.",
		shortDesc: "Evita que Pokémon rivales cambien salvo si vuelan.",
		gen6: {
			desc: "Evita que Pokémon oponentes adyacentes cambien de posición, salvo si vuelan, llevan una Muda concha o son de tipo fantasma.",
		},
		gen5: {
			desc: "Evita que Pokémon oponentes adyacentes cambien de posición, salvo si vuelan o llevan una Muda concha.",
		},
		gen4: {
			desc: "Evita que los Pokémon oponentes puedan cambiar de posición, salvo si están en el aire o llevan una Muda concha.",
		},
		gen3: {
			desc: "Evita que los Pokémon oponentes puedan cambiar de posición, salvo si están en el aire.",
		},
	},
	armortail: {
		name: "Cola armadura",
		desc: "Evita que los movimientos con prioridad usados por Pokémon oponentes contra este Pokémon o sus aliados tengan efecto.",
		shortDesc: "Protege al equipo de mov. con prioridad.",
		block: "#damp",
	},
	aromaveil: {
		name: "Velo aroma",
		desc: "Este Pokémon y sus aliados no pueden verse afectados por Atracción, Anulación, Otra vez, Anticura, Mofa o Tormento.",
		shortDesc: "Protege al equipo de alt. de estado.",
		block: "  [POKEMON] está protegido por un velo aromático!",
	},
	asone: {
		name: "Unidad ecuestre",
		shortDesc: "Ver 'Unidad ecuestre' (Glastrier y Spectrier).",
		start: "  ¡[POKEMON] tiene dos habilidades!",
	},
	asoneglastrier: {
		name: "Unidad ecuestre (Glastrier)",
		shortDesc: "Combinación de Nerviosismo y Relincho blanco.",
	},
	asonespectrier: {
		name: "Unidad ecuestre (Spectrier)",
		shortDesc: "Combinación de Nerviosismo y Relincho negro.",
	},
	aurabreak: {
		name: "Rompeaura",
		desc: "Mientras este Pokémon esté activo, los efectos de las habilidades Aura Oscura y Aura Feérica se invierten, multiplicando la potencia de los movimientos de tipo Siniestro y Hada, respectivamente, por 3/4 en lugar de 1,33.",
		shortDesc: "Aura Oscura y Feérica x0,75 si está activo.",
		start: "  ¡[POKEMON] invirtió las auras de los demás Pokémon!",
	},
	baddreams: {
		name: "Mal sueño",
		desc: "Hace que los Pokémon oponentes pierdan 1/8 de su PS máximo al final de cada turno si están dormidos.",
		shortDesc: "Drena 1/8 PS a dormidos al fin de cada turno.",
		gen6: {
			desc: "Hace que los Pokémon oponentes adyacentes pierdan 1/8 de su PS máximo al final de cada turno si están dormidos.",
			shortDesc: "Drena 1/8 PS a dormidos adyacentes al fin de turno.",
		},
		gen4: {
			desc: "Hace que los Pokémon oponentes pierdan 1/8 de su PS máximo al final de cada turno si están dormidos.",
			shortDesc: "Drena 1/8 PS a dormidos al fin de cada turno.",
		},

		damage: "  [POKEMON] está atormentado!",
	},
	ballfetch: {
		name: "Recogebolas",
		shortDesc: "Sin uso competitivo.",
	},
	battery: {
		name: "Batería",
		shortDesc: "Multiplica por 1,3 la pot. de Atq. Esp. aliados.",
	},
	battlearmor: {
		name: "Armadura batalla",
		shortDesc: "Inmune a golpes críticos.",
	},
	battlebond: {
		name: "Fuerte afecto",
		desc: "Si este Pokémon es un Greninja, su Ataque, Ataque Especial y Velocidad se aumentan un nivel si ataca y debilita a otro Pokémon. Este efecto solo puede ocurrir una vez por combate.",
		shortDesc: "Al KOear: sube Atq., Atq. Esp. y Vel. 1 niv. 1 vez",
		gen8: {
			desc: "Si este Pokémon es un Greninja, se transforma en Greninja Ash si ataca y debilita a otro Pokémon. Si es un Greninja Ash, su Shuriken de agua tiene 20 de potencia y siempre golpea tres veces.",
			shortDesc: "Al KOear: Greninja Ash; Shuriken de agua: 20 p. x3",
		},
		activate: "  ¡[POKEMON] se cargó por completo gracias a su vínculo con su Entrenador!",
		transform: "¡[POKEMON] se transformó en Greninja Ash!",
	},
	beadsofruin: {
		name: "Abalorio debacle",
		shortDesc: "Pokémon activos sin esta habilidad: Def. Esp. x0,75",
		start: "  ¡[POKEMON] debilitó la Def. Esp. de todos los Pokémon a su alrededor con su Abalorio debacle!",
	},
	beastboost: {
		name: "Ultraimpulso",
		desc: "La estadística más alta de este Pokémon se eleva un nivel si ataca y debilita a otro Pokémon. No se tienen en cuenta los cambios de nivel de estadística. En caso de empate, se priorizan las estadísticas en este orden: Ataque, Defensa, Ataque Especial, Defensa Especial y Velocidad.",
		shortDesc: "La est. más alta sube 1 niv. al KOear un Pokémon.",
	},
	berserk: {
		name: "Cólera",
		desc: "Cuando este Pokémon tiene más de la mitad de sus PS máximos y recibe daño de un ataque que lo deja en la mitad o menos de sus PS máximos, su Ataque Especial sube un nivel. Este efecto se aplica después de todos los golpes de un movimiento de varios impactos. Este efecto no ocurre si el movimiento perdió su efecto secundario por Potencia bruta.",
		shortDesc: "Su Atq. Esp. sube 1 niv. al llegar a ≤ 1/2 PS.",
	},
	bigpecks: {
		name: "Sacapecho",
		shortDesc: "Impide que bajen el niv. de Def. de este Pokémon.",
	},
	blaze: {
		name: "Mar llamas",
		desc: "Cuando este Pokémon tiene un tercio o menos de sus PS máximos, redondeado hacia abajo, su estadística ofensiva se multiplica por 1,5 al usar un movimiento de tipo Fuego.",
		shortDesc: "A ≤ 1/3 PS, est. ofensiva x 1,5 con Fuego.",
		gen4: {
			desc: "Cuando este Pokémon tiene un tercio o menos de sus PS máximos, redondeado hacia abajo, sus ataques de tipo Fuego tienen su potencia multiplicada por 1,5.",
			shortDesc: "A ≤ 1/3 PS, ataques Fuego potencia x 1,5.",
		},
	},
	bulletproof: {
		name: "Antibalas",
		shortDesc: "Este Pokémon es inmune a los ataques basados en balas y bombas.",
	},
	cheekpouch: {
		name: "Carrillo",
		desc: "Si este Pokémon come una Baya, recupera 1/3 de sus PS máximos, redondeado hacia abajo, además del efecto de la Baya. Este efecto también puede activarse tras los efectos de Picadura, Lanzamiento, Picoteo, Atiborramiento y Hora del té si la Baya ingerida tenía un efecto sobre este Pokémon.",
		shortDesc: "Si este Pokémon come una Baya, recupera 1/3 de sus PS tras el efecto de la Baya.",
		gen7: {
			desc: "Si este Pokémon come una Baya, recupera 1/3 de sus PS máximos, redondeado hacia abajo, además del efecto de la Baya. Este efecto también puede activarse tras los efectos de Picadura, Lanzamiento y Picoteo si la Baya ingerida tenía un efecto sobre este Pokémon.",
		},
	},
	chillingneigh: {
		name: "Relincho blanco",
		desc: "El Ataque de este Pokémon aumenta 1 nivel si ataca y debilita a un rival.",
		shortDesc: "Sube 1 nivel de Atq. si debilita a un rival.",
	},
	chlorophyll: {
		name: "Clorofila",
		desc: "Si está activo Día Soleado, la Vel. de este Pokémon se duplica. Este efecto se anula si lleva un parasol multiuso.",
		shortDesc: "Duplica la Vel. con Día Soleado.",
		gen7: {
			desc: "Si está activo Día Soleado, la Vel. de este Pokémon se duplica.",
		},
	},
	clearbody: {
		name: "Cuerpo puro",
		shortDesc: "Evita que otros Pokémon reduzcan sus niveles de estadísticas.",
	},
	cloudnine: {
		name: "Aclimatación",
		shortDesc: "Anula los efectos del clima mientras este Pokémon esté activo.",
		start: "#airlock",
	},
	colorchange: {
		name: "Cambio color",
		desc: "El tipo de este Pokémon cambia al del último movimiento que lo golpee, a menos que ya posea ese tipo. Este efecto se aplica tras todos los golpes de un movimiento de múltiples impactos. Este efecto no ocurre si el movimiento perdió su efecto secundario por Potencia bruta.",
		shortDesc: "Cambia tipo al del último mov., si no lo tiene.",
		gen4: {
			desc: "El tipo de este Pokémon cambia al del último movimiento que lo golpee, a menos que ya posea ese tipo. Este efecto se aplica tras cada golpe de un movimiento de múltiples impactos. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
		},
	},
	comatose: {
		name: "Letargo perenne",
		desc: "Este Pokémon actúa como dormido y no puede ser afectado por estados no volátiles ni por Bostezo.",
		shortDesc: "Inmune a estados y actúa dormido.",
		start: "  ¡[POKEMON] está somnoliento!",
	},
	commander: {
		name: "Comandar",
		desc: "Si este Pokémon es un Tatsugiri y un Dondozo es un aliado activo, este Pokémon se mete en la boca de Dondozo. Dondozo ve su Ataque, Defensa, Ataque Especial, Defensa Especial y Velocidad elevados 2 niveles. Durante el efecto, Dondozo no puede cambiarse, este Pokémon no puede seleccionar acción y los ataques dirigidos a este Pokémon serán evitados aunque seguirá recibiendo daño indirecto. Si este Pokémon se debilita, puede entrar un sustituto pero Dondozo sigue sin poder cambiarse. Si Dondozo se debilita, este Pokémon recupera la capacidad de actuar.",
		shortDesc: "Con Dondozo: sin acción ni golpes, +2 stats a Dondozo",
		activate: "  ¡[POKEMON] fue tragado por [TARGET] y se convirtió en su comandante!",
	},
	competitive: {
		name: "Competitivo",
		desc: "El Ataque Especial de este Pokémon sube 2 niveles por cada estadística que un oponente le baje.",
		shortDesc: "Atq. Esp. +2 niv. por estadística que baje el rival.",
	},
	compoundeyes: {
		name: "Ojo compuesto",
		shortDesc: "Prec. mov. x1,3.",
	},
	contrary: {
		name: "Respondón",
		shortDesc: "Si una estadística sube, baja en su lugar, y viceversa.",
		gen7: {
			desc: "Si una estadística sube, baja en su lugar, y viceversa. Esta habilidad no afecta los cambios recibidos por efectos de Movimiento Z antes de usar un Movimiento Z.",
		},
		gen6: {
			desc: "Si una estadística sube, baja en su lugar, y viceversa.",
		},
	},
	corrosion: {
		name: "Corrosión",
		shortDesc: "Envenena a cualquier Pokémon sin importar su tipo.",
		desc: "Corrosión permite envenenar incluso a Pokémon de tipo Acero o Veneno.",
	},
	costar: {
		name: "Unísono",
		shortDesc: "Al entrar, copia cambios de estadísticas de su aliado.",
	},
	cottondown: {
		name: "Pelusa",
		desc: "Cuando este Pokémon recibe un ataque, la Velocidad de todos los demás Pokémon en el campo baja 1 nivel.",
		shortDesc: "Si recibe ataque, baja 1 niv. de Vel. de los demás.",
	},
	cudchew: {
		name: "Rumia",
		shortDesc: "Si come baya, vuelve a comerla al siguiente turno.",
	},
	curiousmedicine: {
		name: "Medicina extraña",
		shortDesc: "Al entrar, elimina cambios de estadísticas de aliados.",
	},
	cursedbody: {
		name: "Cuerpo maldito",
		desc: "Si este Pokémon recibe un ataque, hay un 30 % de probabilidad de que ese movimiento se deshabilite, a menos que algún movimiento del atacante ya esté deshabilitado.",
		shortDesc: "Si recibe un ataque, 30 % prob. deshabilita mov.",
	},
	cutecharm: {
		name: "Gran encanto",
		desc: "Hay un 30 % de probabilidad de que un Pokémon que haga contacto con este Pokémon se enamore si es de género opuesto.",
		shortDesc: "30 % de prob. de enamorar al oponente de género opuesto con contacto.",
		gen4: {
			desc: "Hay un 30 % de probabilidad de que un Pokémon que haga contacto con este Pokémon se enamore si es de género opuesto. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
		},
		gen3: {
			desc: "Hay 1/3 de probabilidad de que un Pokémon que haga contacto con este Pokémon se enamore si es de género opuesto. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
			shortDesc: "1/3 de prob. de enamorar al oponente de género opuesto con contacto.",
		},
	},
	damp: {
		name: "Humedad",
		desc: "Mientras este Pokémon está activo, no pueden efectuarse los movimientos Explosión, Cabeza sorpresa, Bruma explosiva o Autodestrucción, ni activarse la habilidad Resquicio.",
		shortDesc: "Evita Explosión/Cabeza sorpresa/Bruma explosiva/Autodestrucción/Resquicio mientras está activo.",
		gen7: {
			desc: "Mientras este Pokémon está activo, no pueden efectuarse los movimientos Explosión, Cabeza sorpresa y Autodestrucción, ni activarse la habilidad Resquicio.",
			shortDesc: "Evita Explosión/Cabeza sorpresa/Autodestrucción/Resquicio mientras está activo.",
		},
		gen6: {
			desc: "Mientras este Pokémon está activo, no pueden efectuarse los movimientos Explosión y Autodestrucción, ni activarse la habilidad Resquicio.",
			shortDesc: "Evita Explosión/Autodestrucción/Resquicio mientras está activo.",
		},
		gen3: {
			desc: "Mientras este Pokémon está activo, no pueden efectuarse los movimientos Explosión ni Autodestrucción.",
			shortDesc: "Evita Explosión y Autodestrucción mientras está activo.",
		},

		block: "  ¡[SOURCE] no puede usar [MOVE]!",
	},
	dancer: {
		name: "Pareja de baile",
		desc: "Después de que otro Pokémon use un movimiento de baile, este Pokémon usa el mismo movimiento. El movimiento copiado está sujeto a todos los efectos que puedan impedir su ejecución. Un movimiento usado mediante esta habilidad no puede ser copiado de nuevo por otros Pokémon con esta habilidad.",
		shortDesc: "Tras mov. de baile rival, usa el mismo.",
	},
	darkaura: {
		name: "Aura oscura",
		desc: "Mientras este Pokémon esté activo, la potencia de los movimientos de tipo Siniestro usados por Pokémon activos se multiplica por 1,33.",
		shortDesc: "Mov. Siniestro x1,33 si este Pokémon está activo.",
		start: "  ¡[POKEMON] irradia un aura oscura!",
	},
	dauntlessshield: {
		name: "Escudo recio",
		shortDesc: "Al entrar al combate, Defensa +1 nivel. Una vez por batalla.",
		gen8: {
			shortDesc: "Al entrar al combate, Defensa +1 nivel.",
		},
	},
	dazzling: {
		name: "Cuerpo vívido",
		desc: "Los movimientos de prioridad de los oponentes dirigidos a este Pokémon o sus aliados se anulan.",
		shortDesc: "Mov. de prioridad rivales anulados.",
		block: "#damp",
	},
	defeatist: {
		name: "Flaqueza",
		desc: "Hace que si los PS restantes de este Pokémon son ≤50 % de sus PS máximos, su Ataque y su Ataque especial se reducen a la mitad.",
		shortDesc: "Con ≤½ PS, Atq. y Atq. Esp. a la mitad.",
	},
	defiant: {
		name: "Competitivo",
		desc: "El Ataque de este Pokémon aumenta 2 niveles por cada nivel de estadística que un rival le reduce.",
		shortDesc: "Sube 2 niv. de Atq. por cada niv. rebajado por rival.",
	},
	deltastream: {
		name: "Ráfaga delta",
		desc: "Al entrar, el clima cambia a turbulencias, que elimina las debilidades del tipo Volador de los Pokémon de tipo Volador. Este clima permanece en efecto hasta que esta habilidad deje de estar activa en cualquier Pokémon o hasta que sea reemplazado por las habilidades Tierra del ocaso o Mar del albor.",
		shortDesc: "Al entrar, viento fuerte hasta que habilidad termine",
	},
	desolateland: {
		name: "Tierra del ocaso",
		desc: "Al entrar al combate, el clima cambia a Tierra del ocaso, que incluye todos los efectos de Día soleado e impide la ejecución de los movimientos de tipo Agua que causan daño. Este clima se mantiene mientras esta habilidad esté activa en algún Pokémon, o hasta que el clima cambie por las habilidades Ráfaga delta o Mar del albor.",
		shortDesc: "Al entrar, sol intenso hasta que no esté activo.",
	},
	disguise: {
		name: "Disfraz",
		desc: "Si este Pokémon es un Mimikyu, el primer golpe que recibe en combate no causa daño, tras lo cual su disfraz se rompe y cambia de aspecto, y pierde 1/8 de sus PS máximos. El daño por confusión también rompe el disfraz.",
		shortDesc: "(Solo Mimikyu) Primer golpe bloqueado, pierde 1/8 PS.",
		gen7: {
			desc: "Si este Pokémon es un Mimikyu, el primer golpe que recibe en combate no causa daño, tras lo cual su disfraz se rompe y cambia de aspecto. El daño por confusión también rompe el disfraz.",
			shortDesc: "(Solo Mimikyu) Primer golpe bloqueado; rompe disfraz",
		},
		block: "  ¡Su disfraz le sirvió de señuelo!",
		transform: "¡El disfraz de [POKEMON] quedó destrozado!",
	},
	download: {
		name: "Descarga",
		desc: "Al entrar, el Ataque o el Ataque Especial de este Pokémon sube 1 nivel según la estadística defensiva combinada más baja de los oponentes. El Ataque sube si su Defensa es inferior, y el Ataque Especial si su Defensa Especial es igual o inferior.",
		shortDesc: "Al entrar sube 1 niv. Atq./Esp. según Def. más baja",
	},
	dragonsmaw: {
		name: "Mandíbula dragón",
		desc: "La estadística ofensiva de este Pokémon se multiplica por 1,5 al usar un ataque de tipo Dragón.",
		shortDesc: "Multiplica x1,5 Atq. ofensivo con ataque tipo Dragón",
	},
	drizzle: {
		name: "Llovizna",
		shortDesc: "Duplica Vel. con Llovizna",
	},
	drought: {
		name: "Sequía",
		shortDesc: "Invoca Día soleado al entrar",
	},
	dryskin: {
		name: "Piel seca",
		desc: "Este Pokémon es inmune a los movimientos de tipo Agua y recupera 1/4 de sus PS máximos (redondeado hacia abajo) al ser golpeado por uno de ellos. El poder de los movimientos de tipo Fuego se multiplica por 1,25 al usarlos contra este Pokémon. Al final de cada turno, recupera 1/8 de sus PS máximos (redondeado hacia abajo) si el clima es Danza lluvia y pierde 1/8 si es Día soleado. Estos efectos no se aplican si este Pokémon lleva un Parasol multiuso.",
		shortDesc: "Inmune Agua; +1/4 PS; +1/8 PS lluvia/-1/8 PS sol; x1,25 Fuego",
		gen7: {
			desc: "Este Pokémon es inmune a los movimientos de tipo Agua y recupera 1/4 de sus PS máximos (redondeado hacia abajo) al ser golpeado por uno de ellos. El poder de los movimientos de tipo Fuego se multiplica por 1,25 al usarlos contra este Pokémon. Al final de cada turno, recupera 1/8 de sus PS máximos (redondeado hacia abajo) si el clima es Danza lluvia y pierde 1/8 si es Día soleado.",
		},
		damage: "  ([POKEMON] fue dañado por su Piel seca.)",
	},
	earlybird: {
		name: "Madrugar",
		shortDesc: "Contador de sueño baja en 2 en vez de 1",
	},
	eartheater: {
		name: "Geofagia",
		desc: "Este Pokémon es inmune a los movimientos de tipo Tierra y recupera 1/4 de sus PS máximos, redondeado hacia abajo, cuando lo alcanza un movimiento de tipo Tierra.",
		shortDesc: "Inmune a Tierra; restaura 1/4 PS al recibir mov.",
	},
	effectspore: {
		name: "Efecto espora",
		desc: "Hay 30 % de prob. de que un Pokémon que haga contacto con este sea envenenado, paralizado o quede dormido.",
		shortDesc: "30 % prob. enven./paral./sueño al contacto",
		gen4: {
			desc: "Hay 30 % de prob. de que un Pokémon que haga contacto con este sea envenenado, paralizado o quede dormido. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
		},
		gen3: {
			desc: "Hay 10 % de prob. de que un Pokémon que haga contacto con este sea envenenado, paralizado o quede dormido. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
			shortDesc: "10 % prob. enven./paral./sueño al contacto",
		},
	},
	electricsurge: {
		name: "Electrogénesis",
		shortDesc: "Al entrar al combate, crea Campo eléctrico.",
	},
	electromorphosis: {
		name: "Dinamo",
		shortDesc: "Al recibir un golpe, adquiere el efecto Carga.",
		start: "  ¡[MOVE] cargó con poder a [POKEMON]!",
	},
	embodyaspectcornerstone: {
		name: "Evocarrecuerdos (máscara cimiento)",
		shortDesc: "Al entrar al combate, Defensa +1 nivel.",
		boost: "  ¡La máscara cimiento de [POKEMON] brilló intensamente y su Defensa subió!",
	},
	embodyaspecthearthflame: {
		name: "Evocarrecuerdos (máscara horno)",
		shortDesc: "Al entrar al combate, Ataque +1 nivel.",
		boost: "  ¡La máscara horno de [POKEMON] brilló intensamente y su Ataque subió!",
	},
	embodyaspectteal: {
		name: "Evocarrecuerdos (máscara turquesa)",
		shortDesc: "Al entrar al combate, Velocidad +1 nivel.",
		boost: "  ¡La máscara turquesa de [POKEMON] brilló intensamente y su Velocidad subió!",
	},
	embodyaspectwellspring: {
		name: "Evocarrecuerdos (máscara fuente)",
		shortDesc: "Al entrar al combate, Def. Esp. +1 nivel.",
		boost: "  ¡La máscara fuente de [POKEMON] brilló intensamente y su Def. Esp. subió!",
	},
	emergencyexit: {
		name: "Retirada",
		desc: "Si este Pokémon con más de 50% PS recibe daño que lo deja en menos de 50% PS, se cambia inmediatamente por un aliado elegido. Este efecto se aplica después de todos los golpes de un movimiento que daña varias veces en un mismo turno. Se impide si el movimiento perdió su efecto secundario por Potencia bruta. Aplica tanto a daño directo e indirecto, excepto Maldición, Sustituto al usarse, Tambor, Divide dolor y daño por confusión.",
		shortDesc: "Se cambia a un aliado al llegar a ≤ 50% PS.",
	},
	fairyaura: {
		name: "Aura feérica",
		desc: "Mientras este Pokémon esté activo, el poder de los movimientos de tipo Hada usados por Pokémon activos se multiplica por 1,33.",
		shortDesc: "Mov. tipo Hada x1,33 de potencia al estar activo.",
		start: "  [POKEMON] irradia una aura feérica!",
	},
	filter: {
		name: "Filtro",
		shortDesc: "Recibe 3/4 de daño de ataques superefectivos.",
	},
	flamebody: {
		name: "Cuerpo llama",
		shortDesc: "30 % prob. de quemar al atacante con contacto.",
		gen4: {
			desc: "30 % prob. de quemar al atacante con contacto. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
		},
		gen3: {
			desc: "1/3 prob. de quemar al atacante con contacto. Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
			shortDesc: "1/3 prob. de quemar al atacante con contacto.",
		},
	},
	flareboost: {
		name: "Ímpetu ardiente",
		desc: "Mientras este Pokémon está quemado, el poder de sus ataques especiales se multiplica por 1,5.",
		shortDesc: "Atq. esp. x1,5 cuando esté quemado.",
	},
	flashfire: {
		name: "Absorbe fuego",
		desc: "Este Pokémon es inmune a los movimientos de tipo Fuego. La primera vez que es golpeado por uno, el poder de sus movimientos de tipo Fuego se multiplica por 1,5 mientras permanezca en combate y conserve esta habilidad. Si está congelado, no puede descongelarse con ataques de tipo Fuego.",
		shortDesc: "Inmune a Fuego; mov. Fuego x1,5 al ser golpeado.",
		gen4: {
			desc: "Este Pokémon es inmune a movimientos de tipo Fuego mientras no esté congelado. La primera vez que es golpeado por uno, el daño de sus movimientos de tipo Fuego se multiplica por 1,5 mientras conserve esta habilidad.",
		},
		gen3: {
			desc: "Este Pokémon es inmune a movimientos de tipo Fuego mientras no esté congelado. La primera vez que es golpeado por uno, el daño de sus movimientos de tipo Fuego se multiplica por 1,5 mientras conserve esta habilidad. Si tiene un estado no volátil, es de tipo Fuego o tiene sustituto, Fuego fatuo no activará esta habilidad.",
		},
		start: "  ¡El poder de los movimientos de tipo Fuego de [POKEMON] aumentó!",
	},
	flowergift: {
		name: "Don floral",
		desc: "Si este Pokémon es un Cherrim y Día soleado está activo, cambia a Forma soleada y multiplica por 1,5 el Ataque y la Defensa Especial de él y de sus aliados. Estos efectos se previenen si lleva un Parasol multiuso.",
		shortDesc: "Cherrim/aliados Día soleado: Atq. y Def. Esp. x1,5.",
		gen7: {
			desc: "Si este Pokémon es un Cherrim y Día soleado está activo, cambia a Forma soleada y multiplica por 1,5 el Ataque y la Defensa Especial de él y de sus aliados.",
		},
		gen4: {
			desc: "Si Día soleado está activo, multiplica por 1,5 el Ataque y la Defensa Especial de este Pokémon y sus aliados.",
			shortDesc: "Día soleado: Atq. y Def. Esp. x1,5.",
		},
	},
	flowerveil: {
		name: "Velo flor",
		desc: "Los Pokémon de tipo Planta en el equipo de este Pokémon no pueden tener reducidos sus niveles de estadística ni sufrir un problema de estado no volátil por otros Pokémon.",
		shortDesc: "Aliados tipo Planta inmunes a reducciones, estados.",
		block: "  ¡[POKEMON] se cubrió con un velo de pétalos!",
	},
	fluffy: {
		name: "Peluche",
		desc: "Este Pokémon recibe la mitad del daño de movimientos de contacto, pero el doble de los de tipo Fuego.",
		shortDesc: "Recibe 1/2 daño de contacto y x2 de Fuego.",
	},
	forecast: {
		name: "Predicción",
		desc: "Si este Pokémon es un Castform, su tipo cambia al tipo del clima actual, excepto Tormenta de arena. Este efecto se anula si lleva un parasol multiuso y el clima es Danza lluvia o Día soleado.",
		shortDesc: "Castform cambia a tipo clima excepto Tormenta de arena.",
		gen7: {
			desc: "Si este Pokémon es un Castform, su tipo cambia al tipo del clima actual, excepto Tormenta de arena.",
		},
	},
	forewarn: {
		name: "Alerta",
		desc: "Al entrar en combate, revela uno de los movimientos del rival con mayor potencia, elegido al azar. Este efecto considera Golpes fulminantes con potencia 150, Contraataque, Manto espejo y Represión metal con potencia 120, otros movimientos ofensivos sin potencia especificada con 80 y movimientos sin daño con potencia 1.",
		shortDesc: "Al entrar, revela mov. rival de mayor potencia.",
		gen4: {
			desc: "Al entrar en combate, revela uno de los movimientos con mayor potencia conocido por un oponente, elegido al azar. Este efecto considera Golpes fulminantes con 150 de potencia, Contraataque, Manto espejo y Represión metal con 120, y otros movimientos ofensivos sin potencia especificada con 80.",
		},
		activate: "  ¡[TARGET] reveló [MOVE]!",
		activateNoTarget: "  ¡Alerta de [POKEMON] le avisó de [MOVE]!",
	},
	friendguard: {
		name: "Compiescolta",
		shortDesc: "Aliados reciben 75 % del daño de ataques ajenos.",
	},
	frisk: {
		name: "Cacheo",
		shortDesc: "Al entrar al combate, identifica objetos equip. de todos los oponentes.",
		gen5: {
			shortDesc: "Al entrar, revela objeto equip. de un oponente al azar.",
		},
		activate: "  ¡[POKEMON] cacheó a [TARGET] y encontró su [ITEM]!",
		activateNoTarget: "  ¡[POKEMON] cacheó a su objetivo y encontró un [ITEM]!",
	},
	fullmetalbody: {
		name: "Guardia metálica",
		shortDesc: "Impide que otros Pokémon bajen los niveles de estadística de este Pokémon.",
	},
	furcoat: {
		name: "Pelaje recio",
		shortDesc: "Defensa de este Pokémon x2.",
	},
	galewings: {
		name: "Alas vendaval",
		shortDesc: "PS máximos: mov. Volador +1 prioridad.",
		gen6: {
			shortDesc: "Mov. Volador +1 prioridad.",
		},
	},
	galvanize: {
		name: "Piel eléctrica",
		desc: "Piel eléctrica convierte los movimientos de tipo Normal de este Pokémon en movimientos de tipo Eléctrico y multiplica su potencia por 1,2. Este efecto se aplica después de otros cambios de tipo, pero antes de los efectos de Cortina plasma y Electrificación.",
		shortDesc: "Mov. Norm. → Eléctrico x1,2.",
	},
	gluttony: {
		name: "Gula",
		desc: "Cuando este Pokémon lleva una baya que normalmente se activa con menos de 1/4 de sus PS máximos, en su lugar se consume con menos de 1/2 de sus PS máximos.",
		shortDesc: "Come bayas con ≤ 1/2 PS en lugar de ≤ 1/4 PS.",
	},
	goodasgold: {
		name: "Cuerpo áureo",
		shortDesc: "Inmune a movimientos de estado.",
	},
	gooey: {
		name: "Baba",
		shortDesc: "Al contacto, baja 1 niv. de Vel. del atacante.",
	},
	gorillatactics: {
		name: "Monotema",
		desc: "El Ataque de este Pokémon se multiplica por 1,5, pero solo puede seleccionar el primer movimiento que ejecute. Estos efectos no se aplican mientras este Pokémon esté dinamaxizado.",
		shortDesc: "Atq. x1,5, pero solo puede usar el primer mov.",
	},
	grasspelt: {
		name: "Manto frondoso",
		shortDesc: "Si Campo de hierba está activo, la Defensa de este Pokémon se multiplica por 1,5.",
	},
	grassysurge: {
		name: "Herbogénesis",
		shortDesc: "Al entrar al combate, este Pokémon invoca Campo de hierba.",
	},
	grimneigh: {
		name: "Relincho negro",
		desc: "Si este Pokémon ataca y debilita a otro Pokémon, su Ataque Especial sube un nivel.",
		shortDesc: "Su Atq. Esp. sube 1 niv. al KOear un Pokémon.",
	},
	guarddog: {
		name: "Perro guardián",
		desc: "Este Pokémon es inmune a los efectos de Intimidación y su Ataque sube un nivel en lugar de bajar. Además, no puede ser forzado a cambiarse por el ataque o el objeto de otro Pokémon.",
		shortDesc: "Inmune a Intimidación. Intimidado: +1 Atq. No puede ser forzado a cambiarse.",
	},
	gulpmissile: {
		name: "Tragamisil",
		desc: "Si este Pokémon es un Cramorant, cambia de forma tras usar Surf o Buceo. Pasa a forma tragatodo con un Arrokuda en la boca si tiene más de la mitad de sus PS máximos, o a forma engulletodo con un Pikachu en la boca si tiene la mitad o menos de sus PS. Si recibe daño en esas formas, escupe a Arrokuda o Pikachu al atacante, incluso sin PS; el proyectil inflige 25 % de los PS máximos del objetivo, bloqueado por Muro mágico, pero no por un Sustituto. Arrokuda además baja un nivel la Defensa del objetivo, y Pikachu lo paraliza. Cramorant vuelve a su forma normal si escupe el proyectil, cambia de Pokémon o usa Dinamax.",
		shortDesc: "Tras Surf/Buceo, atacante -1/4 PS y -1 Def o paraliza.",
	},
	guts: {
		name: "Agallas",
		desc: "Si este Pokémon tiene una condición de estado no volátil, su Ataque se multiplica por 1,5. Los ataques físicos de este Pokémon ignoran la reducción de daño por quemadura.",
		shortDesc: "Condición de estado: Atq. x1,5; ignora reducción quemadura.",
	},
	hadronengine: {
		name: "Motor hadrónico",
		shortDesc: "Al entrar, invoca Campo eléctrico; +33% Atq. Esp. en él",
		start: " ¡[POKEMON] creó un Campo eléctrico, energizando su motor futurista!",
		activate: " ¡[POKEMON] usó el Campo eléctrico para energizar su motor futurista!",
	},
	harvest: {
		name: "Cosecha",
		desc: "Si la última Baya usada lo es, 50% de prob. de restaurarla al final de cada turno; 100% en Día soleado.",
		shortDesc: "Si fue una Baya, 50% de restaurarla; 100% en Día soleado.",
		addItem: "  [POKEMON] cosechó una [ITEM]!",
	},
	healer: {
		name: "Alma cura",
		desc: "30% de probabilidad de curar la condición de estado de un aliado al final de cada turno.",
		shortDesc: "30% prob. de curar estado de aliado al fin de turno",
		gen6: {
			desc: "30% de probabilidad de curar la condición de estado de cada aliado adyacente al final de cada turno.",
			shortDesc: "30% prob. de curar estado a aliados adyacentes al fin de turno",
		},
	},
	heatproof: {
		name: "Ignífugo",
		desc: "Si un Pokémon usa un movimiento de tipo Fuego contra este Pokémon, su estadística ofensiva se reduce a la mitad al calcular el daño. Este Pokémon recibe la mitad del daño por quemaduras habitual, redondeado hacia abajo.",
		shortDesc: "Daño Fuego con estadística ofensiva x0,5; quemaduras x0,5.",
		gen8: {
			desc: "El poder de los movimientos de tipo Fuego contra este Pokémon se reduce a la mitad. Este Pokémon recibe la mitad del daño por quemaduras habitual, redondeado hacia abajo.",
			shortDesc: "Potencia Fuego x0,5; daño quemaduras x0,5.",
		},
	},
	heavymetal: {
		name: "Metal pesado",
		desc: "El peso de este Pokémon se duplica. Este efecto se calcula después del de Aligerar y antes del de Piedra pómez.",
		shortDesc: "El peso de este Pokémon se duplica.",
	},
	honeygather: {
		name: "Recogemiel",
		shortDesc: "Sin uso competitivo.",
	},
	hospitality: {
		name: "Hospitalidad",
		shortDesc: "Al entrar, restaura 1/4 PS de un aliado.",
		heal: "  ¡[POKEMON] se tomó todo el matcha que preparó [SOURCE]!",
	},
	hugepower: {
		name: "Potencia bruta",
		shortDesc: "El Ataque de este Pokémon se duplica.",
	},
	hungerswitch: {
		name: "Mutapetito",
		desc: "Si este Pokémon es un Morpeko, alterna al final de cada turno entre su Forma Saciada y su Forma Voraz.",
		shortDesc: "Morpeko alterna Saciada/Voraz al fin de turno.",
	},
	hustle: {
		name: "Entusiasmo",
		desc: "El Ataque de este Pokémon se multiplica por 1,5 y la precisión de sus ataques físicos por 0,8.",
		shortDesc: "Atq. x1,5; Prec. mov. físicos x0,8.",
	},
	hydration: {
		name: "Hidratación",
		desc: "Hidratación cura los problemas de estado del poseedor al final de cada turno si hay clima lluvioso. Este efecto se anula si lleva un Parasol multiuso.",
		shortDesc: "Cura estado al fin de turno si hay lluvia.",
		gen7: {
			desc: "Hidratación cura los problemas de estado del poseedor al final de cada turno si hay clima lluvioso.",
		},
	},
	hypercutter: {
		name: "Corte fuerte",
		shortDesc: "Evita que otros bajen niv. de Atq.",
	},
	icebody: {
		name: "Gélido",
		desc: "Si está activa la Nieve, este Pokémon recupera 1/16 de sus PS máximos (redondeado hacia abajo) al final de cada turno.",
		shortDesc: "Si está activa Nieve, recupera 1/16 PS cada turno.",
		gen8: {
			desc: "Si está activo Granizo, este Pokémon recupera 1/16 de sus PS máximos (redondeado hacia abajo) al final de cada turno. No recibe daño por Granizo.",
			shortDesc: "Recupera 1/16 PS c/Granizo; inmune a Granizo.",
		},
	},
	iceface: {
		name: "Cara de hielo",
		desc: "Si este Pokémon es un Eiscue, el primer golpe físico que recibe en batalla no causa daño. Su cara de hielo se rompe y cambia a forma Cara deshielo. Eiscue recupera su forma Cara de hielo cuando comienza Nieve o al entrar si está nevando. El daño por confusión también rompe la cara de hielo.",
		shortDesc: "Si es Eiscue, primer golpe físico no hiere; restaura con Nieve.",
		gen8: {
			desc: "Si este Pokémon es un Eiscue, el primer golpe físico que recibe en batalla no causa daño. Su cara de hielo se rompe y cambia a forma Cara deshielo. Eiscue recupera su forma Cara de hielo cuando comienza Granizo o al entrar si está granizando. El daño por confusión también rompe la cara de hielo.",
			shortDesc: "Si es Eiscue, primer golpe físico no hiere; restaura con Granizo.",
		},
	},
	icescales: {
		name: "Escama de hielo",
		shortDesc: "Este Pokémon recibe la mitad del daño de ataques especiales.",
	},
	illuminate: {
		name: "Iluminación",
		desc: "Impide que otros Pokémon bajen el nivel de Precisión de este Pokémon. Este Pokémon ignora el nivel de Evasión del objetivo.",
		shortDesc: "La Precisión de este Pokémon no puede bajarse y ignora la Evasión.",
		gen8: {
			desc: "Sin uso competitivo.",
			shortDesc: "Sin uso competitivo.",
		},
	},
	illusion: {
		name: "Ilusión",
		desc: "Cuando este Pokémon entra en combate, aparece como el último Pokémon no debilitado de su equipo hasta que recibe daño directo de un ataque de otro Pokémon. Se muestran su nivel y sus PS reales en lugar de los del Pokémon imitado.",
		shortDesc: "Aparece como último Pokémon hasta recibir daño.",
		end: "  ¡La ilusión de [POKEMON] terminó!",
	},
	immunity: {
		name: "Inmunidad",
		shortDesc: "Inmune al veneno; adquiriéndola cura el veneno.",
	},
	imposter: {
		name: "Impostor",
		desc: "Al entrar al combate, este Pokémon se transforma en el Pokémon rival que tiene enfrente. Si no hay ningún Pokémon en esa posición, no se transforma.",
		shortDesc: "Al entrar, se transforma en el rival que tiene enfrente.",
	},
	infiltrator: {
		name: "Allanamiento",
		desc: "Los movimientos de este Pokémon ignoran Sustitutos y los efectos de Reflejo, Pantalla luz, Velo sagrado, Niebla y Velo aurora del equipo rival.",
		shortDesc: "Ignora Sustitutos/Reflejo/Pantalla luz/Velo Sagrado/Niebla/Velo aurora.",
		gen6: {
			desc: "Los movimientos de este Pokémon ignoran Sustitutos y los efectos de Reflejo, Pantalla luz, Velo sagrado y Niebla del rival.",
			shortDesc: "Ignora Sustitutos y Reflejo/Pantalla luz/Velo Sagrado/Niebla del rival.",
		},
		gen5: {
			desc: "Los movimientos de este Pokémon ignoran los efectos de Reflejo, Pantalla luz, Velo sagrado y Niebla del equipo rival.",
			shortDesc: "Ignora Reflejo/Pantalla luz/Velo Sagrado/Niebla del rival.",
		},
	},
	innardsout: {
		name: "Revés",
		desc: "Si este Pokémon es debilitado por un movimiento, el usuario de ese movimiento pierde PS igual al daño infligido a este Pokémon.",
		shortDesc: "Si es debilitado por un movimiento, el usuario pierde PS igual al daño causado.",
		damage: "#aftermath",
	},
	innerfocus: {
		name: "Foco interno",
		desc: "Este Pokémon no puede retroceder. Este Pokémon es inmune al efecto de Intimidación.",
		shortDesc: "No retrocede; inmune a Intimidación.",
		gen7: {
			desc: "Este Pokémon no puede retroceder.",
			shortDesc: "No retrocede.",
		},
	},
	insomnia: {
		name: "Insomnio",
		shortDesc: "No puede dormir; al obtenerla dormido, se cura.",
	},
	intimidate: {
		name: "Intimidación",
		desc: "Al entrar en combate, este Pokémon reduce en 1 nivel el Ataque de los Pokémon rivales. Los Pokémon con las habilidades Foco interno, Ingenuo, Ritmo propio o Intrépido, así como los Pokémon tras un Sustituto, son inmunes.",
		shortDesc: "Al entrar, baja 1 niv. de Atq. a rivales.",
		gen7: {
			desc: "Al entrar en combate, este Pokémon reduce en 1 nivel el Ataque de los Pokémon rivales. Los Pokémon tras un Sustituto son inmunes.",
		},
		gen6: {
			desc: "Al entrar en combate, este Pokémon reduce en 1 nivel el Ataque de los Pokémon rivales adyacentes. Los Pokémon tras un Sustituto son inmunes.",
			shortDesc: "Al entrar, baja 1 niv. de Atq. a rivales adyacentes.",
		},
		gen4: {
			desc: "Al entrar en combate, este Pokémon reduce en 1 nivel el Ataque de los Pokémon rivales. Los Pokémon tras un Sustituto son inmunes. Si Ida y vuelta rompe un Sustituto rival y este Pokémon entra como sustituto, el Pokémon que tenía el Sustituto sigue siendo inmune.",
			shortDesc: "Al entrar, baja 1 niv. de Atq. a rivales.",
		},
		gen3: {
			desc: "Al entrar en combate, este Pokémon reduce en 1 nivel el Ataque de los Pokémon rivales. Los Pokémon tras un Sustituto son inmunes.",
		},
	},
	intrepidsword: {
		name: "Espada indómita",
		shortDesc: "Al entrar, sube 1 niv. de Atq. (una vez por combate)",
		gen8: {
			shortDesc: "Al entrar, sube 1 niv. de Atq.",
		},
	},
	ironbarbs: {
		name: "Punta acero",
		desc: "Los Pokémon que hagan contacto con este Pokémon pierden 1/8 de sus PS máximos, redondeado hacia abajo.",
		shortDesc: "El Pokémon que haga contacto pierde 1/8 de PS máx.",
		damage: "#roughskin",
	},
	ironfist: {
		name: "Puño férreo",
		desc: "Los movimientos basados en puños de este Pokémon tienen su potencia multiplicada por 1,2.",
		shortDesc: "Mov. de puño 1,2x pot. Golpe bajo no se potencia.",
	},
	justified: {
		name: "Justiciero",
		shortDesc: "El Atq. sube 1 niv. tras recibir mov. tipo Siniestro",
	},
	keeneye: {
		name: "Vista lince",
		desc: "Evita que otros Pokémon bajen su estadística de Precisión. Este Pokémon ignora la estadística de Evasión del objetivo.",
		shortDesc: "No baja su Precisión; ignora la evasión.",
		gen5: {
			desc: "Evita que otros Pokémon bajen su estadística de Precisión.",
			shortDesc: "No baja su estadística de Precisión.",
		},
	},
	klutz: {
		name: "Zoquete",
		desc: "El objeto que lleve este Pokémon no surte efecto. Este Pokémon no puede usar Lanzamiento con éxito. Brazal firme, Franja recia, Banda recia, Cinto recio, Brazal recio, Lente recia y Pesa recia siguen teniendo efecto.",
		shortDesc: "Objeto inefectivo; no usa Lanzamiento.",
	},
	leafguard: {
		name: "Defensa hoja",
		desc: "Si Día soleado está activo, este Pokémon no puede quedar afectado por un cambio de estado no volátil ni por Bostezo, y Descanso fallará. Este efecto se anula si el Pokémon lleva equipado un Parasol multiuso.",
		shortDesc: "Día soleado, no sufre estados y Descanso falla.",
		gen7: {
			desc: "Si Día soleado está activo, este Pokémon no puede quedar afectado por un cambio de estado no volátil ni por Bostezo, y Descanso fallará.",
		},
		gen4: {
			desc: "Si Día soleado está activo, este Pokémon no puede quedar afectado por un cambio de estado no volátil ni por Bostezo, pero puede usar Descanso con normalidad.",
			shortDesc: "Día soleado: no sufre estados; Descanso funciona.",
		},
	},
	levitate: {
		name: "Levitación",
		desc: "Este Pokémon es inmune a los ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas, Red viscosa y a la habilidad Trampa arena. Los efectos de Gravedad, Arraigo, Antiaéreo, Mil flechas y Bola férrea anulan la inmunidad. Mil flechas puede golpear a este Pokémon como si no tuviera esta habilidad.",
		shortDesc: "Inmune a Tierra; Gravedad/Arraigo/Antiaéreo anulan",
		gen5: {
			desc: "Este Pokémon es inmune a los ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas y a la habilidad Trampa arena. Los efectos de Gravedad, Arraigo, Antiaéreo y Bola férrea anulan la inmunidad.",
		},
		gen4: {
			desc: "Este Pokémon es inmune a los ataques de tipo Tierra y a los efectos de Púas, Púas tóxicas y a la habilidad Trampa arena. Los efectos de Gravedad, Arraigo y Bola férrea anulan la inmunidad.",
			shortDesc: "Inmune a Tierra; Gravedad/Arraigo/Bola férrea anulan",
		},
		gen3: {
			desc: "Este Pokémon es inmune a los ataques de tipo Tierra y a los efectos de púas y a la habilidad Trampa arena.",
			shortDesc: "Este Pokémon es inmune a Tierra.",
		},
	},
	libero: {
		name: "Líbero",
		desc: "El tipo de este Pokémon cambia para coincidir con el tipo del movimiento que va a usar. Este efecto ocurre después de todos los efectos que cambian el tipo de un movimiento. Este efecto solo puede suceder una vez por salida al combate y solo si este Pokémon no está teracristalizado.",
		shortDesc: "El tipo de este Pokémon cambia al del movimiento. Una vez por entrada.",
		gen8: {
			desc: "El tipo de este Pokémon cambia para coincidir con el tipo del movimiento que va a usar. Este efecto ocurre después de todos los efectos que cambian el tipo de un movimiento.",
			shortDesc: "Tipo cambia al del movimiento. Una vez por entrada.",
		},
	},
	lightmetal: {
		name: "Metal liviano",
		desc: "El peso de este Pokémon se reduce a la mitad, redondeado hacia abajo a una décima de kilogramo. Este efecto se aplica después de Aligerar y antes de Piedra pómez. El peso de un Pokémon no puede bajar de 0,1 kg.",
		shortDesc: "Pesa la mitad.",
	},
	lightningrod: {
		name: "Pararrayos",
		desc: "Este Pokémon es inmune a mov. tipo Eléctrico y aumenta su Atq. Esp. en 1 niv. al ser alcanzado por él. Si no es objetivo de un mov. tipo Eléctrico de objetivo único usado por otro Pokémon, redirige ese mov. hacia sí mismo.",
		shortDesc: "Atrae mov. Eléctricos; +1 niv. Atq. Esp.; inmunidad",
		gen4: {
			desc: "Si este Pokémon no es objetivo de un mov. tipo Eléctrico de objetivo único usado por otro Pokémon, redirige ese mov. hacia sí mismo.",
			shortDesc: "Atrae mov. tipo Eléctrico de objetivo único.",
		},
		gen3: {
			desc: "Si este Pokémon no es objetivo de un mov. tipo Eléctrico de objetivo único usado por un Pokémon rival, redirige ese mov. hacia sí mismo. Este efecto considera Poder oculto mov. tipo Normal.",
			shortDesc: "Atrae mov. tipo Eléctrico de objetivo único.",
		},
		activate: "  ¡[POKEMON] recibió el ataque!",
	},
	limber: {
		name: "Flexibilidad",
		shortDesc: "Evita la parálisis; si entra paralizado la cura.",
	},
	lingeringaroma: {
		name: "Olor persistente",
		desc: "Los Pokémon que entren en contacto con este Pokémon tienen su Habilidad cambiada a Olor persistente. No afecta a los Pokémon con las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Olor persistente, Multitipo, Agrupamiento, Sistema Alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo daruma o Cambio heroico.",
		shortDesc: "El contacto cambia la Habilidad a Olor persistente.",
		gen8: {
			desc: "Los Pokémon que entren en contacto con este Pokémon tienen su Habilidad cambiada a Olor persistente. No afecta a los Pokémon con las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Olor persistente, Multitipo, Agrupamiento, Sistema Alfa, Banco, Escudo limitado, Cambio táctico o Modo daruma.",
		},
		changeAbility: "  ¡Un olor persistente se aferra a [TARGET]!",
	},
	liquidooze: {
		name: "Viscosecreción",
		shortDesc: "Este Pokémon daña a quien absorba PS como sanaría.",
		gen4: {
			desc: "Este Pokémon daña a quien absorba PS como sanaría. Este efecto no considera Comesueños.",
		},
		damage: "  [POKEMON] absorbió la Viscosecreción!",
	},
	liquidvoice: {
		name: "Voz fluida",
		desc: "Los movimientos de sonido de este Pokémon pasan a ser tipo Agua. Este efecto sucede tras otros que cambian el tipo, pero antes de Cortina plasma y Electrificación.",
		shortDesc: "Los movimientos de sonido de este Pokémon pasan a Agua.",
		gen8: {
			desc: "Los movimientos de sonido de este Pokémon pasan a ser tipo Agua. Este efecto sucede tras otros que cambian el tipo.",
			shortDesc: "Movimientos de sonido pasan a tipo Agua.",
		},
	},
	longreach: {
		name: "Remoto",
		shortDesc: "Los ataques de este Pokémon no hacen contacto.",
	},
	magicbounce: {
		name: "Espejo mágico",
		desc: "Este Pokémon es inmune a ciertos movimientos de estado dirigidos a él y los refleja al usuario original. Estos movimientos no pueden volver a reflejarse por esta habilidad ni por Capa mágica. Sólo se pueden reflejar Púas, Trampa rocas, Red viscosa y Púas tóxicas una vez por lado, por el Pokémon más a la izquierda bajo el efecto de esta habilidad o Capa mágica. Pararrayos y Colector redirigen sus respectivos movimientos antes de que surta efecto esta habilidad.",
		shortDesc: "Bloquea ciertos mov. de estado y los devuelve al usuario.",
		gen5: {
			desc: "Este Pokémon es inmune a ciertos movimientos de estado dirigidos a él y los refleja al usuario original. Estos movimientos no pueden volver a reflejarse por esta habilidad ni por Capa mágica. Sólo se pueden reflejar Púas, Trampa rocas, Red viscosa y Púas tóxicas una vez por lado, por el Pokémon más a la izquierda bajo el efecto de esta habilidad o Capa mágica. Pararrayos y Colector redirigen sus respectivos movimientos antes de que surta efecto esta habilidad.",
		},
		move: "#magiccoat",
	},
	magicguard: {
		name: "Muro mágico",
		desc: "Este Pokémon sólo puede recibir daño de ataques directos. Maldición y Sustituto al usarse, Tambor, Divide dolor, retroceso por Forcejeo y daño por confusión se consideran daño directo.",
		shortDesc: "Sólo recibe daño de ataques directos.",
		gen4: {
			desc: "Este Pokémon sólo puede recibir daño de ataques directos. Maldición y Sustituto al usarse, Tambor, Divide dolor, retroceso por Forcejeo y daño por confusión se consideran daño directo. No puede verse impedido de moverse por parálisis y no se ve afectado por Púas tóxicas al entrar en combate.",
			shortDesc: "Sólo recibe daño de ataques directos; inmune a parálisis y Púas tóxicas.",
		},
	},
	magician: {
		name: "Prestidigitador",
		desc: "Si este Pokémon no tiene objeto, le roba el objeto al Pokémon al que golpee con un ataque. No afecta a Deseo oculto ni a Premonición.",
		shortDesc: "Si no tiene objeto, roba el del objetivo.",
	},
	magmaarmor: {
		name: "Escudo magma",
		shortDesc: "No puede congelarse; aprenderla lo cura.",
	},
	magnetpull: {
		name: "Imán",
		desc: "Impide que los Pokémon de tipo Acero contrarios puedan cambiar, a menos que lleven equipada una Muda concha o sean de tipo Fantasma.",
		shortDesc: "Impide que Pokémon Acero contrarios cambien.",
		gen6: {
			desc: "Impide que los Pokémon de tipo Acero adyacentes contrarios puedan cambiar, a menos que lleven equipada una Muda concha o sean de tipo Fantasma.",
			shortDesc: "Impide que Pokémon Acero adyacentes cambien.",
		},
		gen5: {
			desc: "Impide que los Pokémon de tipo Acero adyacentes contrarios puedan cambiar, a menos que lleven equipada una Muda concha.",
			shortDesc: "Impide que Pokémon Acero adyacentes cambien.",
		},
		gen4: {
			desc: "Impide que los Pokémon de tipo Acero contrarios puedan cambiar, a menos que lleven equipada una Muda concha.",
			shortDesc: "Impide que Pokémon Acero contrarios cambien.",
		},
		gen3: {
			desc: "Impide que los Pokémon de tipo Acero, excepto este, puedan cambiar.",
			shortDesc: "Impide que Pokémon Acero, excepto este, cambien.",
		},
	},
	marvelscale: {
		name: "Escama especial",
		shortDesc: "Si sufre un problema de estado, Def. x1,5.",
	},
	megalauncher: {
		name: "Megadisparador",
		desc: "Los movimientos de pulsos de este Pokémon tienen su potencia multiplicada por 1,5. Pulso cura restaura 3/4 de los PS máximos del objetivo, redondeado hacia abajo.",
		shortDesc: "Movs. de pulsos x1,5 pot.; Pulso cura restaura 3/4 PS.",
	},
	merciless: {
		name: "Ensañamiento",
		shortDesc: "Los ataques de este Pokémon son críticos si el objetivo está envenenado.",
	},
	mimicry: {
		name: "Mimetismo",
		desc: "Los tipos de este Pokémon cambian según el Campo activo al adquirir la habilidad o al inicio de uno nuevo: Eléctrico → Eléctrico, Hierba → Planta, Niebla → Hada, Psíquico → Psíquico. Si no hay Terreno o termina, recupera los tipos originales de su especie.",
		shortDesc: "Cambia tipo según Campo; revierte cuando termina.",
		activate: "  ¡[POKEMON] regresó a su tipo original!",
	},
	mindseye: {
		name: "Ojo mental",
		desc: "Este Pokémon puede golpear a los Pokémon de tipo fantasma con movimientos de tipo normal o de tipo lucha. Impide que otros Pokémon reduzcan la precisión de este Pokémon. Ignora los cambios de evasión del objetivo.",
		shortDesc: "Mov lucha/normal fantasma; Prec. fija, ignora evas.",
	},
	minus: {
		name: "Menos",
		desc: "Si un aliado activo tiene esta habilidad o la habilidad Más, el Ataque Especial de este Pokémon se multiplica por 1,5.",
		shortDesc: "Aliado activo con Menos o Más: Atq. Esp. x1,5.",
		gen4: {
			desc: "Si un aliado activo tiene la habilidad Más, el Ataque Especial de este Pokémon se multiplica por 1,5.",
			shortDesc: "Aliado con Más: Atq. Esp. x1,5.",
		},
		gen3: {
			desc: "Si un Pokémon activo tiene la habilidad Más, el Ataque Especial de este Pokémon se multiplica por 1,5.",
			shortDesc: "Pokémon activo con Más: Atq. Esp. x1,5.",
		},
	},
	mirrorarmor: {
		name: "Coraza reflejo",
		desc: "Cuando un rival iba a reducir una estadística de este Pokémon, se reduce la suya en su lugar. Este efecto no sucede si la estadística de este Pokémon ya está en -6. Si el otro Pokémon tiene un sustituto, ninguno de los dos ve reducido sus estadísticas.",
		shortDesc: "Si se reducirían estadísticas, se bajan los del rival.",
	},
	mistysurge: {
		name: "Nebulogénesis",
		shortDesc: "Al entrar, crea Campo de niebla.",
	},
	moldbreaker: {
		name: "Rompemoldes",
		desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Absorbe agua, Absorbe electricidad, Absorbe fuego, Antibalas, Armadura batalla, Caparazón, Colector, Compensación, Compiescolta, Corte fuerte, Cuerpo puro, Cuerpo vívido, Defensa hoja, Despiste, Disfraz, Don floral, Electromotor, Escama especial, Escudo magma, Espejo mágico, Espíritu vital, Filtro, Flexibilidad, Fuerza mental, Herbívoro, Humedad, Humo blanco, Ignífugo, Ignorante, Inmunidad, Insomnio, Insonorizar, Levitación, Manto níveo, Metal liviano, Metal pesado, Pararrayos, Pelaje recio, Piel milagro, Piel seca, Pies rápidos, Polvo escudo, Regia presencia, Respondón, Ritmo propio, Robustez, Roca sólida, Sacapecho, Sebo, Simple, Superguarda, Telepatía, Tumbos, Velo agua, Velo arena, Velo aroma, Velo dulce, Velo flor, Ventosas, Viscosidad, Vista lince. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su Habilidad sea beneficiosa para este Pokémon o no.",
		shortDesc: "Movs. y efectos ignoran Habilidades ajenas.",
	},
	moody: {
		name: "Veleta",
		desc: "Al final de cada turno, este Pokémon sube 2 niveles en una estadística al azar (excepto Precisión y Evasión) y baja 1 nivel en otra estadística.",
		shortDesc: "Sube +2 niv (exc Prec/Eva) y baja -1 cada turno.",
		gen7: {
			desc: "Este Pokémon sube 2 niveles en una estadística al azar y baja 1 nivel en otra al final de cada turno.",
			shortDesc: "Sube +2 niv y baja -1 cada turno.",
		},
	},
	motordrive: {
		name: "Electromotor",
		desc: "Este Pokémon es inmune a los movimientos de tipo Eléctrico y sube 1 nivel en Velocidad cuando es golpeado por uno.",
		shortDesc: "Vel. +1 niv si recibe mov Eléc.; inmunidad Eléc.",
	},
	moxie: {
		name: "Autoestima",
		desc: "El Ataque de este Pokémon sube 1 nivel al debilitar a otro Pokémon con un ataque.",
		shortDesc: "Ataque +1 niv al KOear a otro Pokémon.",
	},
	multiscale: {
		name: "Multiescamas",
		desc: "Si este Pokémon tiene los PS al máximo, el daño de ataques se reduce a la mitad.",
		shortDesc: "Daño de ataques a la mitad con PS al máximo.",
	},
	multitype: {
		name: "Multitipo",
		shortDesc: "Si es Arceus, su tipo coincide con la tabla que lleve equipada.",
		gen7: {
			shortDesc: "Si es Arceus, su tipo coincide con la tabla o cristal Z que lleve equipado.",
		},
		gen6: {
			shortDesc: "Si es Arceus, su tipo coincide con la tabla que lleve equipada.",
		},
		gen4: {
			shortDesc: "Si es Arceus, su tipo coincide con la tabla que lleve equipada; no puede perderla por ataque.",
		},
	},
	mummy: {
		name: "Momia",
		desc: "Los Pokémon que hagan contacto con este Pokémon cambian su habilidad a Momia. No afecta a Pokémon con las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Momia, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo Daruma o Cambio heroico.",
		shortDesc: "Quien haga contacto cambia su habilidad a Momia.",
		gen8: {
			desc: "Los Pokémon que hagan contacto con este Pokémon cambian su habilidad a Momia. No afecta a Pokémon con las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Momia, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico o Modo Daruma.",
		},
		gen7: {
			desc: "Los Pokémon que hagan contacto con este Pokémon cambian su habilidad a Momia. No afecta a Pokémon con las habilidades Fuerte afecto, Letargo perenne, Disfraz, Multitipo, Momia, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico o Modo Daruma.",
		},
		gen6: {
			desc: "Los Pokémon que hagan contacto con este Pokémon cambian su habilidad a Momia. No afecta a Pokémon con las habilidades Multitipo, Momia o Cambio táctico.",
		},
		gen5: {
			desc: "Los Pokémon que hagan contacto con este Pokémon cambian su habilidad a Momia. No afecta a Pokémon con las habilidades Multitipo o Momia.",
		},

		changeAbility: "¡[TARGET] ahora tiene la habilidad Momia!",
	},
	myceliummight: {
		name: "Poder fúngico",
		desc: "Los movimientos de estado de este Pokémon ignoran ciertas habilidades de otros Pokémon y actúan al final de su nivel de prioridad.",
		shortDesc: "Movs. estado van últimos; ignoran Hab.",
	},
	naturalcure: {
		name: "Cura natural",
		shortDesc: "Cura su condición de estado no volátil al cambiar.",
		activate: "  ([POKEMON] se cura con Cura natural!)",
	},
	neuroforce: {
		name: "Fuerza cerebral",
		desc: "Los ataques superefectivos de este Pokémon hacen 1,25x de daño.",
		shortDesc: "Ataques superefectivos hacen 1,25x daño.",
	},
	neutralizinggas: {
		name: "Gas reactivo",
		desc: "Cuando este Pokémon está en combate, las habilidades no tienen efecto. Esta habilidad se activa antes de los peligros de campo y de otras habilidades. No afecta a las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Gas reactivo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracambio, Modo daruma ni Cambio heroico.",
		shortDesc: "Anula habilidades en combate.",
		gen8: {
			desc: "Cuando este Pokémon está en combate, las habilidades no tienen efecto. Esta habilidad se activa antes de los peligros de campo y de otras habilidades. No afecta a las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Cara de hielo, Multitipo, Gas reactivo, Agrupamiento, Sistema alfa, Banco, Escudo limitado ni Modo daruma.",
		},
		start: "  ¡Gas reactivo llenó el campo!",
		end: "  ¡Los efectos de Gas reactivo se disiparon!",
	},
	noguard: {
		name: "Indefenso",
		shortDesc: "Todos los movimientos usados por o contra este Pokémon siempre aciertan.",
	},
	normalize: {
		name: "Normalidad",
		desc: "Los movimientos de este Pokémon pasan a ser de tipo Normal y aumentan ligeramente su potencia. Este efecto ocurre antes que otros cambios de tipo.",
		shortDesc: "Mov pasan a tipo Normal; potencia x1,2.",
		gen6: {
			desc: "Los movimientos de este Pokémon pasan a ser de tipo Normal. Este efecto ocurre antes que otros cambios de tipo.",
			shortDesc: "Mov pasan a tipo Normal.",
		},
		gen4: {
			desc: "Los movimientos de este Pokémon pasan a ser de tipo Normal. Este efecto ocurre después de otros cambios de tipo, excepto Forcejeo.",
		},
	},
	oblivious: {
		name: "Despiste",
		desc: "Este Pokémon no puede enamorarse ni ser provocado. Al adquirir esta habilidad estando enamorado o provocado, se cura. Es inmune al efecto de la habilidad Intimidación.",
		shortDesc: "No enamorado/provocado; inmune a Intimidación.",
		gen7: {
			desc: "Este Pokémon no puede enamorarse ni ser provocado. Al adquirir esta habilidad estando enamorado o provocado, se cura.",
			shortDesc: "No puede enamorarse ni ser provocado.",
		},
		gen5: {
			desc: "Este Pokémon no puede enamorarse. Al adquirir esta habilidad estando enamorado, se cura.",
			shortDesc: "No puede enamorarse; al adquirirla estando enamorado, se cura.",
		},
	},
	opportunist: {
		name: "Oportunista",
		shortDesc: "Copia subidas de estadística de oponentes.",
	},
	orichalcumpulse: {
		name: "Latido oricalco",
		shortDesc: "Al entrar, invoca Día Soleado; Atq. x1,333 en sol.",
		start: "  ¡[POKEMON] desató un sol abrasador, enviando su pulso oricalco a un frenesí!",
		activate: "  ¡[POKEMON] se bañó en la luz del sol, enviando su pulso oricalco a un frenesí!",
	},
	overcoat: {
		name: "Funda",
		desc: "Este Pokémon es inmune a movimientos de polvo, al daño de Tormenta arena o Granizo, y a los efectos de Polvo ira y de Efecto espora.",
		shortDesc: "Inmune a polvos, arenas, Polvo ira, efec. espora.",
		gen8: {
			desc: "Este Pokémon es inmune a movimientos de polvo, al daño de Tormenta arena o Granizo, y a los efectos de Polvo ira y de Efecto espora.",
			shortDesc: "Inmune a polvos, arenas, Polvo ira, efec. espora.",
		},
		gen5: {
			desc: "Este Pokémon es inmune al daño de Tormenta arena o Granizo.",
			shortDesc: "Inmune a daño de Tormenta arena o Granizo.",
		},
	},
	overgrow: {
		name: "Espesura",
		desc: "Cuando esté a 1/3 o menos de sus PS, sus ataques Planta hacen x1,5.",
		shortDesc: "A ≤ 1/3 PS, ataques Planta x1,5.",
		gen4: {
			desc: "Cuando esté a 1/3 o menos de sus PS, sus ataques Planta hacen x1,5.",
			shortDesc: "A ≤ 1/3 PS, ataques Planta x1,5.",
		},
	},
	owntempo: {
		name: "Ritmo propio",
		desc: "Este Pokémon no puede confundirse. Adquirir esta habilidad estando confuso lo cura. Este Pokémon es inmune al efecto de la habilidad Intimidación.",
		shortDesc: "No puede confundirse; inmune a Intimidación.",
		gen7: {
			desc: "Este Pokémon no puede confundirse. Al adquirirla estando confuso, se cura.",
			shortDesc: "No puede confundirse.",
		},
	},
	parentalbond: {
		name: "Amor filial",
		desc: "Los movimientos de daño de este Pokémon se convierten en movimientos multigolpe que impactan dos veces. El segundo golpe tiene la potencia reducida a la cuarta parte. No afecta a Deseo oculto, Dracoflechas, Cañón Dinamax, Esfuerzo, Explosión, Sacrificio, Lanzamiento, Premonición, Bola hielo, Rodar, Autodestrucción, ningún movimiento multigolpe, ningún movimiento con múltiples objetivos, ningún movimiento de dos turnos ni ningún movimiento Dinamax.",
		shortDesc: "Golpe doble; segundo golpe 1/4 de potencia.",
		gen8: {
			desc: "Los movimientos de daño de este Pokémon se convierten en movimientos multigolpe que impactan dos veces. El segundo golpe tiene la potencia reducida a la cuarta parte. No afecta a Deseo oculto, Dracoflechas, Cañón Dinamax, Esfuerzo, Explosión, Sacrificio, Lanzamiento, Premonición, Bola hielo, Rodar, Autodestrucción, ningún movimiento multigolpe, ningún movimiento con múltiples objetivos, ningún movimiento de dos turnos ni ningún movimiento Dinamax.",
		},
		gen7: {
			desc: "Los movimientos de daño de este Pokémon se convierten en movimientos multigolpe que impactan dos veces. El segundo golpe tiene la potencia reducida a la cuarta parte. No afecta a Deseo oculto, Dracoflechas, Cañón Dinamax, Esfuerzo, Explosión, Sacrificio, Lanzamiento, Premonición, Bola hielo, Rodar, Autodestrucción, ningún movimiento multigolpe, ningún movimiento con múltiples objetivos ni ningún movimiento de dos turnos.",
		},
		gen6: {
			desc: "Los movimientos de daño de este Pokémon se convierten en movimientos multigolpe que impactan dos veces. El segundo golpe tiene la potencia reducida a la mitad. No afecta a Deseo oculto, Dracoflechas, Cañón Dinamax, Esfuerzo, Explosión, Sacrificio, Lanzamiento, Premonición, Bola hielo, Rodar, Autodestrucción, ningún movimiento multigolpe, ningún movimiento con múltiples objetivos ni ningún movimiento de dos turnos.",
			shortDesc: "Golpe doble; segundo golpe 1/2 de potencia.",
		},
	},
	pastelveil: {
		name: "Velo pastel",
		desc: "Este Pokémon y sus aliados no pueden envenenarse. Al adquirir esta habilidad estando este Pokémon o un aliado envenenado, los cura. Si la habilidad se ignora ante un efecto de veneno, este Pokémon se cura al instante, pero su aliado no.",
		shortDesc: "Impide envenenamiento; al entrar cura aliados.",
	},
	perishbody: {
		name: "Cuerpo mortal",
		desc: "El contacto con este Pokémon inicia el efecto de Canto mortal tanto en él como en el atacante. Este efecto no ocurre si el agresor ya tiene un contador de perecer.",
		shortDesc: "El contacto inicia Canto mortal en ambos.",
		start: "  ¡Ambos Pokémon caerán en tres turnos!",
	},
	pickpocket: {
		name: "Hurto",
		desc: "Si este Pokémon no tiene objeto y es golpeado por un movimiento de contacto, roba el objeto del atacante. Este efecto sucede tras todos los impactos de un movimiento de múltiples golpes. Se impide si la habilidad Fuerza Bruta eliminó un efecto secundario del movimiento.",
		shortDesc: "Sin objeto, al recibir contacto roba del atacante.",
	},
	pickup: {
		name: "Recogida",
		desc: "Al final de cada turno, si este Pokémon no lleva objeto y al menos un Pokémon adyacente usó uno, Recogida le permite obtener al azar el último objeto usado por uno de ellos. No se considera usado un objeto si era un Globo helio reventado, si fue recogido por otro Pokémon con esta habilidad o si se perdió por Picotazo, Gas corrosivo, Codicia, Incinerar, Desarme, Picoteo o Ladrón. Los objetos lanzados con Lanzamiento pueden recogerse.",
		shortDesc: "Si no lleva objeto, obtiene uno usado por un adyacente este turno.",
		gen7: {
			desc: "Al final de cada turno, si este Pokémon no lleva objeto y un adyacente usó uno, obtiene al azar su último objeto. Excepciones: Globo helio, Picotazo, Gas corrosivo, Codicia, Incinerar, Desarme, Picoteo o Ladrón. Los objetos lanzados con Lanzamiento pueden recogerse.",
		},
		gen4: {
			desc: "Sin uso competitivo.",
			shortDesc: "Sin uso competitivo.",
		},
		addItem: "#recycle",
	},
	pixilate: {
		name: "Piel feérica",
		desc: "Los movimientos de tipo Normal de este Pokémon pasan a ser de tipo Hada y su potencia se multiplica por 1,2. Este efecto se aplica después de otros cambios de tipo pero antes de los efectos de Cortina plasma y Electrificación.",
		shortDesc: "Convierte mov. Normal en tipo Hada; potencia x1,2.",
		gen6: {
			desc: "Los movimientos de tipo Normal de este Pokémon pasan a ser de tipo Hada y su potencia se multiplica por 1,3. Este efecto se aplica después de otros cambios de tipo pero antes de los efectos de Cortina plasma y Electrificación.",
			shortDesc: "Convierte mov. Normal en tipo Hada; potencia x1,3.",
		},
	},
	plus: {
		name: "Más",
		desc: "Si un aliado activo tiene esta habilidad o la habilidad Menos, el Ataque Especial de este Pokémon se multiplica por 1,5.",
		shortDesc: "Aliado activo con Más o Menos: Atq. Esp. x1,5.",
		gen4: {
			desc: "Si un aliado activo tiene la habilidad Menos, el Ataque Especial de este Pokémon se multiplica por 1,5.",
			shortDesc: "Aliado con Menos: Atq. Esp. x1,5.",
		},
		gen3: {
			desc: "Si un Pokémon activo tiene la habilidad Menos, el Ataque Especial de este Pokémon se multiplica por 1,5.",
			shortDesc: "Aliado con Menos: Atq. Esp. x1,5.",
		},
	},
	poisonheal: {
		name: "Antídoto",
		desc: "Si este Pokémon está envenenado, recupera 1/8 de sus PS máximos, redondeado hacia abajo, al final de cada turno, en vez de perder PS.",
		shortDesc: "Recupera 1/8 PS si está envenenado; no pierde PS.",
	},
	poisonpoint: {
		name: "Punto tóxico",
		shortDesc: "30 % de prob. de envenenar a quien haga contacto.",
		gen4: {
			desc: "30 % de prob. de envenenar a quien haga contacto con este Pokémon. Este efecto no ocurre si no perdió PS por el ataque.",
		},
		gen3: {
			desc: "1/3 de prob. de envenenar a quien haga contacto con este Pokémon. Este efecto no ocurre si no perdió PS por el ataque.",
			shortDesc: "1/3 de prob. de envenenar a quien lo contacte.",
		},
	},
	poisonpuppeteer: {
		name: "Títere tóxico",
		desc: "Los rivales que Pecharunt envenene con sus movimientos también sufrirán confusión.",
		shortDesc: "Pecharunt: si envenena a un objetivo, este también queda confuso.",
	},
	poisontouch: {
		name: "Toque tóxico",
		desc: "Los movimientos de contacto de este Pokémon tienen un 30 % de probabilidad de envenenar al objetivo. Este efecto ocurre tras la probabilidad de efecto secundario inherente del movimiento.",
		shortDesc: "Mov. contacto: 30 % prob. de envenenar.",
	},
	powerconstruct: {
		name: "Agrupamiento",
		desc: "Cuando sus PS se ven reducidos a la mitad, las células se reagrupan y adopta su forma completa.",
		shortDesc: "Zygarde 10 %/50 %: si ≤ 1/2 PS, cambia a forma completa.",
		activate: "  ¡Percibes la presencia de muchas células!",
		transform: "¡[POKEMON] se transformó en su forma completa!",
	},
	powerofalchemy: {
		name: "Reacción química",
		desc: "Este Pokémon copia la habilidad de un aliado que cae en combate. Las habilidades que no se pueden copiar son Unidad ecuestre, Fuerte afecto, Letargo perenne, Comandar, Disfraz, Evocarrecuerdos, Don floral, Predicción, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Títere tóxico, Agrupamiento, Reacción química, Paleosíntesis, Carga cuark, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Teracambio, Teraformación 0, Rastreo, Superguarda, Modo daruma y Cambio heroico.",
		shortDesc: "Copia la habilidad de un aliado que cae en combate.",
		gen8: {
			desc: "Este Pokémon copia la habilidad de un aliado que cae en combate. Las habilidades que no se pueden copiar son Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Misil gulp, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Agrupamiento, Reacción química, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Rastreo, Superguarda y Modo daruma.",
		},
		gen7: {
			desc: "Este Pokémon copia la habilidad de un aliado que cae en combate. Las habilidades que no se pueden copiar son Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Ilusión, Impostor, Multitipo, Agrupamiento, Reacción química, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Rastreo, Superguarda y Modo daruma.",
		},

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Fuente energía",
		desc: "Los aliados de este Pokémon tienen la potencia de sus movimientos multiplicada por 1,3. Esto afecta a Deseo oculto y Premonición, incluso si el usuario no está en el campo.",
		shortDesc: "Aliados tienen potencia de movimientos x1,3.",
	},
	prankster: {
		name: "Bromista",
		desc: "Los movimientos de estado de este Pokémon tienen prioridad +1. Los Pokémon tipo Siniestro oponentes son inmunes a estos movimientos y a cualquier movimiento producido por ellos.",
		shortDesc: "Movs. Estado +1 p.; Siniestro inmune.",
		gen6: {
			desc: "Los movimientos de estado de este Pokémon tienen prioridad +1.",
			shortDesc: "Movs. Estado +1 p.",
		},
	},
	pressure: {
		name: "Presión",
		desc: "Si este Pokémon es objetivo de un movimiento rival, ese movimiento pierde un PP adicional. Sellar, Robo y Teraexplosión también pierden un PP extra cuando los usa un rival, pero Red viscosa no.",
		shortDesc: "Objetivo rival: movimiento pierde un PP extra.",
		gen8: {
			desc: "Si este Pokémon es objetivo de un movimiento rival, ese movimiento pierde un PP adicional. Sellar y Robo también pierden un PP extra usados por un rival, pero Red viscosa no.",
		},
		gen5: {
			desc: "Si este Pokémon es objetivo de un movimiento rival, ese movimiento pierde un PP adicional. Sellar y Robo también pierden un PP extra usados por un rival.",
		},
		gen4: {
			desc: "Si este Pokémon es objetivo de un movimiento rival, ese movimiento pierde un PP adicional.",
			shortDesc: "Objetivo de un movimiento: pierde un PP extra.",
		},
		start: "  ¡[POKEMON] ejerce su Presión!",
	},
	primordialsea: {
		name: "Mar del albor",
		desc: "Cuando entra en batalla, el clima pasa a Mar del albor, que incluye los efectos de Lluvia y evita ejecutar movimientos de tipo fuego que causan daño. Este clima dura hasta que esta habilidad deja de estar activa en cualquier Pokémon, o hasta que el clima cambia por las habilidades Ráfaga delta o Tierra del ocaso.",
		shortDesc: "Al entrar, diluvio intenso; dura hasta que la habilidad deje de estar activa.",
	},
	prismarmor: {
		name: "Armadura prisma",
		shortDesc: "Recibe ¾ de daño de ataques supereficaces.",
	},
	propellertail: {
		name: "Hélice caudal",
		shortDesc: "Los mov. de este Pokémon no pueden redirigirse a otro objetivo.",
	},
	protean: {
		name: "Mutatipo",
		desc: "Los movimientos de este Pokémon cambian su tipo al del movimiento que va a usar. Este efecto ocurre después de otros cambios de tipo, solo una vez por entrada y si no está Terastalizado.",
		shortDesc: "Cambia de tipo al del mov.; una vez por entrada.",
		gen8: {
			desc: "El tipo de este Pokémon cambia al del mov. que va a usar; ocurre tras otros cambios de tipo.",
			shortDesc: "Cambia de tipo al del mov. usado.",
		},
	},
	protosynthesis: {
		name: "Paleosíntesis",
		desc: "Si está activo Día soleado o este Pokémon tiene una Energía potenciadora, la estadística más alta de este Pokémon se multiplica por 1,3, o por 1,5 si es Velocidad. Los cambios en las estadísticas se aplican en el momento en que esta habilidad se activa. Si varias estadísticas están empatadas, se priorizan Ataque, Defensa, Ataque Especial, Defensa Especial y Velocidad, en ese orden. Si este efecto se inició por Día soleado, no se activará una Energía potenciadora y el efecto termina cuando Día soleado deja de estar activo. Si este efecto se inició por una Energía potenciadora, termina cuando este Pokémon deja de estar activo.",
		shortDesc: "Sol/Energía potenciadora: est. más alta 1,3x; 1,5x Vel.",

		activate: "  ¡La intensa luz solar activó la Paleosíntesis de [POKEMON]!",
		activateFromItem: "  ¡[POKEMON] usó su Energía potenciadora para activar la Paleosíntesis!",
		start: "  ¡El [STAT] de [POKEMON] aumentó!",
		end: "  ¡Los efectos de la Paleosíntesis de [POKEMON] desaparecieron!",
	},
	psychicsurge: {
		name: "Psicogénesis",
		shortDesc: "Al entrar, este Pokémon invoca Campo psíquico.",
	},
	punkrock: {
		name: "Punk rock",
		desc: "Los movimientos basados en sonido de este Pokémon tienen su potencia multiplicada por 1,3 y recibe la mitad del daño de dichos movimientos.",
		shortDesc: "Recibe 50% del daño de mov. sonoros; los suyos hacen 1,3x.",
	},
	purepower: {
		name: "Energía pura",
		shortDesc: "El Ataque de este Pokémon se duplica.",
	},
	purifyingsalt: {
		name: "Sal purificadora",
		desc: "Este Pokémon no puede verse afectado por condiciones de estado no volátiles ni por Bostezo. Si un Pokémon usa un ataque de tipo Fantasma contra este Pokémon, el estadístico ofensivo de ese Pokémon se reduce a la mitad al calcular el daño a este Pokémon.",
		shortDesc: "Inmune a estados; recibe la mitad de daño Fantasma.",
	},
	quarkdrive: {
		name: "Carga cuark",
		desc: "Si está activo Campo eléctrico o este Pokémon tiene una Energía potenciadora, la estadística más alta de este Pokémon se multiplica por 1,3, o por 1,5 si es Velocidad. Los cambios en las estadísticas se aplican en el momento en que esta habilidad se activa. Si varias estadísticas están empatadas, se priorizan Ataque, Defensa, Ataque Especial, Defensa Especial y Velocidad, en ese orden. Si este efecto se inició por Campo eléctrico, no se activará una Energía potenciadora y el efecto termina cuando Campo eléctrico deja de estar activo. Si este efecto se inició por una Energía potenciadora, termina cuando este Pokémon deja de estar activo.",
		shortDesc: "Campo elec./Energía potenciadora: est. más alta 1,3x; 1,5x Vel.",
		activate: "  ¡Campo eléctrico activó la Carga Cuark de [POKEMON]!",
		activateFromItem: "  ¡[POKEMON] usó su Energía potenciadora para activar su Carga cuark!",
		start: "  ¡[POKEMON] aumentó su [STAT]!",
		end: "  ¡Los efectos de la Carga cuark de [POKEMON] cesaron!",
	},
	queenlymajesty: {
		name: "Regia presencia",
		desc: "Se impide el efecto de movimientos con prioridad usados por Pokémon rivales que apunten a este Pokémon o a sus aliados.",
		shortDesc: "Este Pokémon y aliados son inmunes a movimientos de prioridad",
		block: "#damp",
	},
	quickdraw: {
		name: "Mano rápida",
		shortDesc: "30% prob. de moverse primero al atacar.",

		activate: "  ¡Mano rápida hizo que [POKEMON] se moviera más rápido!",
	},
	quickfeet: {
		name: "Pies rápidos",
		desc: "Si este Pokémon tiene un problema de estado no volátil, su Velocidad se multiplica por 1,5. Este Pokémon ignora el efecto de la parálisis que reduce a la mitad la Velocidad.",
		shortDesc: "Velocidad x1,5 con estado; no reduce Velocidad por parálisis.",
		gen6: {
			desc: "Si este Pokémon tiene un problema de estado no volátil, su Velocidad se multiplica por 1,5. Este Pokémon ignora el efecto de la parálisis que reduce la Velocidad a la cuarta parte.",
		},
	},
	raindish: {
		name: "Cura lluvia",
		desc: "Si Danza lluvia está activa, este Pokémon restaura 1/16 de sus PS máximos (redondeado hacia abajo) al final de cada turno. Este efecto se anula si lleva un Parasol multiuso.",
		shortDesc: "Con Danza lluvia activa, cura 1/16 PS/turno.",
		gen7: {
			desc: "Si Danza lluvia está activa, este Pokémon restaura 1/16 de sus PS máximos (redondeado hacia abajo) al final de cada turno.",
		},
	},
	rattled: {
		name: "Cobardía",
		desc: "La Velocidad de este Pokémon aumenta un nivel si es golpeado por un ataque de tipo Bicho, Siniestro o Fantasma, o si un Pokémon oponente lo intimida con la habilidad Intimidación.",
		shortDesc: "Vel.↑1 con Bicho/Siniestro/Fantasma o intimidación.",
		gen7: {
			desc: "La Velocidad de este Pokémon aumenta un nivel si es golpeado por un ataque de tipo Bicho, Siniestro o Fantasma.",
			shortDesc: "Vel.↑1 con Bicho/Siniestro/Fantasma.",
		},
	},
	receiver: {
		name: "Receptor",
		desc: "Este Pokémon copia la habilidad de un aliado que cae debilitado. Las habilidades que no pueden copiarse son Unidad ecuestre, Fuerte afecto, Letargo perenne, Comandar, Disfraz, Evocarrecuerdos, Don floral, Predicción, Tragamisil, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Títere tóxico, Agrupamiento, Reacción química, Paleosíntesis, Carga cuark, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Teracambio, Teraformación 0, Calco, Superguarda, Modo daruma y Cambio heroico.",
		shortDesc: "Copia la habilidad de un aliado debilitado.",
		gen8: {
			desc: "Este Pokémon copia la habilidad de un aliado que cae debilitado. Las habilidades que no pueden copiarse son Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Tragamisil, Mutapetito, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Agrupamiento, Reacción química, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Teracambio, Teraformación 0, Calco, Superguarda y Modo daruma.",
		},
		gen7: {
			desc: "Este Pokémon copia la habilidad de un aliado que cae debilitado. Las habilidades que no pueden copiarse son Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Ilusión, Impostor, Multitipo, Agrupamiento, Reacción química, Receptor, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Teracambio, Teraformación 0, Calco, Superguarda y Modo daruma.",
		},
		changeAbility: "  ¡La habilidad de [SOURCE] pasó a ser [ABILITY]!",
	},
	reckless: {
		name: "Audaz",
		desc: "Los ataques de este Pokémon que causan daño de retroceso o choque tienen su potencia multiplicada por 1,2. No afecta a Forcejeo.",
		shortDesc: "Mov. con retroceso/choque 1,2x; excepto Forcejeo.",
	},
	refrigerate: {
		name: "Piel helada",
		desc: "Los movimientos de tipo Normal de este Pokémon se convierten en tipo Hielo y su potencia se multiplica por 1,2. Este efecto se aplica después de otros que cambian el tipo de un movimiento, pero antes de los de Cortina plasma y Electrificación.",
		shortDesc: "Movs. Normal → Hielo 1,2x.",
		gen6: {
			desc: "Los movimientos de tipo Normal de este Pokémon se convierten en tipo Hielo y su potencia se multiplica por 1,3. Este efecto se aplica después de otros que cambian el tipo de un movimiento, pero antes de los de Cortina plasma y Electrificación.",
			shortDesc: "Movs. Normal → Hielo 1,3x.",
		},
	},
	regenerator: {
		name: "Regeneración",
		shortDesc: "Restaura 1/3 de sus PS máximos al retirarse.",
	},
	ripen: {
		name: "Maduración",
		desc: "Cuando este Pokémon consume ciertas bayas, sus efectos se duplican. Las bayas que restauran PS o PP duplican la cantidad, las bayas que aumentan niveles de estadística duplican el incremento, las bayas que reducen a la mitad el daño recibido en su lugar lo reducen a la cuarta parte, y una Baya Jaboca o una Baya Magua hace que el atacante pierda 1/4 de sus PS máximos, redondeado hacia abajo.",
		shortDesc: "Duplica los efectos al comer ciertas bayas.",
	},
	rivalry: {
		name: "Rivalidad",
		desc: "Los ataques de este Pokémon tienen su potencia multiplicada por 1,25 contra objetivos del mismo género o por 0,75 contra objetivos de género opuesto. No hay modificador si este Pokémon o el objetivo carece de género.",
		shortDesc: "Ataques x1,25 a mismo género; x0,75 género opuesto.",
	},
	rkssystem: {
		name: "Sistema alfa",
		shortDesc: "Si es Silvally cambia su tipo según disco.",
	},
	rockhead: {
		name: "Cabeza roca",
		desc: "Este Pokémon no recibe daño de retroceso, excepto el de Forcejeo. No afecta al daño de Vidasfera ni al daño por choque.",
		shortDesc: "Sin retroceso salvo Forcejeo, Vidasfera y choque.",
		gen3: {
			desc: "Este Pokémon no recibe daño de retroceso, excepto el de Forcejeo. No afecta al daño por choque.",
			shortDesc: "Sin retroceso salvo Forcejeo y choque.",
		},
	},
	rockypayload: {
		name: "Transportarrocas",
		shortDesc: "Estadística ofensiva x1,5 con movimiento tipo roca.",
	},
	roughskin: {
		name: "Piel tosca",
		desc: "Los Pokémon que hagan contacto con este Pokémon pierden 1/8 de sus PS máximos (redondeado hacia abajo).",
		shortDesc: "Con contacto, pierden 1/8 PS máx.",
		gen4: {
			desc: "Los Pokémon que hagan contacto con este Pokémon pierden 1/8 de sus PS máximos (redondeado hacia abajo). Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
		},
		gen3: {
			desc: "Los Pokémon que hagan contacto con este Pokémon pierden 1/16 de sus PS máximos (redondeado hacia abajo). Este efecto no ocurre si este Pokémon no perdió PS por el ataque.",
			shortDesc: "Con contacto, pierden 1/16 PS máx.",
		},
		damage: "  ¡[POKEMON] resultó herido!",
	},
	runaway: {
		name: "Fuga",
		shortDesc: "Sin uso competitivo.",
	},
	sandforce: {
		name: "Poder arena",
		desc: "Si hay tormenta de arena activa, los ataques de tipo tierra, tipo roca y tipo acero de este Pokémon tienen su potencia multiplicada por 1,3. Este Pokémon es inmune al daño de la tormenta de arena.",
		shortDesc: "Atq. Tierra/Roca/Acero 1,3x; inmunidad a tormenta.",
	},
	sandrush: {
		name: "Ímpetu arena",
		desc: "Si hay tormenta de arena activa, la Velocidad de este Pokémon se duplica. Este Pokémon es inmune al daño de la tormenta de arena.",
		shortDesc: "Velocidad x2 en tormenta; inmunidad a tormenta.",
	},
	sandspit: {
		name: "Expulsarena",
		shortDesc: "Al recibir un ataque, comienza tormenta de arena.",
		gen8: {
			desc: "Cuando este Pokémon recibe un ataque, comienza la tormenta de arena. Este efecto ocurre después de los efectos de los Movimientos Máx. y G-Máx.",
		},
	},
	sandstream: {
		name: "Chorro arena",
		shortDesc: "Al entrar, este Pokémon invoca tormenta de arena.",
	},
	sandveil: {
		name: "Velo arena",
		desc: "Si Tormenta de arena está activo, la precisión de los movimientos usados contra este Pokémon se multiplica por 0,8. Este Pokémon no recibe daño de Tormenta de arena.",
		shortDesc: "Con Tormenta de arena activa, evasión x1,25; inmunidad a Tormenta de arena.",
	},
	sapsipper: {
		name: "Herbívoro",
		desc: "Este Pokémon es inmune a los movimientos de tipo Planta y aumenta su Ataque un nivel al recibir un movimiento de tipo Planta.",
		shortDesc: "Ataque +1 con mov. tipo Planta; inmune a Planta.",
	},
	schooling: {
		name: "Banco",
		desc: "Al entrar, si este Pokémon es un Wishiwashi de nivel 20 o superior y tiene más de 1/4 de sus PS máximos, cambia a Forma Banco. Si está en Forma Banco y sus PS bajan a 1/4 o menos de sus PS máximos, cambia a Forma individual al final del turno. Si está en Forma individual y sus PS superan 1/4 de sus PS máximos al final del turno, cambia a Forma Banco.",
		shortDesc: "Si es Wishiwashi, entra en Forma Banco (> 1/4 PS); si no, en Forma individual.",
		transform: "¡[POKEMON] formó un banco!",
		transformEnd: "¡[POKEMON] volvió a su forma individual!",
	},
	scrappy: {
		name: "Intrépido",
		desc: "Los movimientos de tipo Normal o Lucha de este Pokémon pueden golpear al tipo Fantasma. Este Pokémon es inmune al efecto de la habilidad Intimidación.",
		shortDesc: "Mov Normal/Lucha golpean a Fantasma; inmune a Intimidación.",
		gen7: {
			desc: "Los movimientos de tipo Normal o Lucha de este Pokémon pueden golpear al tipo Fantasma.",
			shortDesc: "Mov Normal/Lucha golpean a Fantasma.",
		},
	},
	screencleaner: {
		name: "Antibarrera",
		desc: "Al entrar en combate, este Pokémon anula los efectos de Velo aurora, Pantalla luz y Reflejo en ambos bandos.",
		shortDesc: "Al entrar, anula Pantalla luz, Reflejo y Velo aurora.",
	},
	seedsower: {
		name: "Disemillar",
		desc: "Cuando este Pokémon recibe un ataque, comienza el Campo de hierba.",
		shortDesc: "Al recibir un ataque, comienza Campo de hierba.",
	},
	serenegrace: {
		name: "Dicha",
		desc: "Dicha duplica la probabilidad de que se den efectos secundarios al utilizar movimientos. Este efecto se acumula con el efecto Arcoíris, excepto para efectos secundarios que causen amedrentamiento al objetivo.",
		shortDesc: "Duplica la probabilidad de efectos secundarios.",
		gen4: {
			desc: "Dicha duplica la probabilidad de efectos secundarios al usar movimientos.",
		},
	},
	shadowshield: {
		name: "Guardia espectro",
		shortDesc: "Con PS completos, daño recibido x0,5.",
	},
	shadowtag: {
		name: "Sombra trampa",
		desc: "Impide que los Pokémon oponentes huyan o se cambien, salvo si llevan Muda concha, son de tipo fantasma o también tienen esta habilidad.",
		shortDesc: "Impide huir o cambiar de Pokémon.",
		gen6: {
			desc: "Impide que los Pokémon oponentes adyacentes huyan o se cambien, salvo si llevan Muda concha, son de tipo fantasma o también tienen esta habilidad.",
			shortDesc: "Impide huir o cambiar de Pokémon.",
		},
		gen5: {
			desc: "Impide que los Pokémon oponentes adyacentes huyan o se cambien, salvo si llevan Muda concha o también tienen esta habilidad.",
		},
		gen4: {
			desc: "Impide que los Pokémon oponentes huyan o se cambien, salvo si llevan Muda concha o también tienen esta habilidad.",
			shortDesc: "Impide huir o cambiar de Pokémon.",
		},
		gen3: {
			desc: "Impide que los Pokémon oponentes huyan o se cambien.",
			shortDesc: "Impide huir o cambiar de Pokémon.",
		},
	},
	sharpness: {
		name: "Cortante",
		shortDesc: "Movimientos de corte, potencia 1,5x.",
	},
	shedskin: {
		name: "Mudar",
		desc: "Este Pokémon tiene un 33% de probabilidad de curarse de sus problemas de estado no volátiles al final de cada turno.",
		shortDesc: "33% probab. de curarse al fin de cada turno.",
	},
	sheerforce: {
		name: "Potencia bruta",
		desc: "Los ataques con efectos secundarios de este Pokémon tienen su potencia multiplicada por 1,3, pero dichos efectos se eliminan. Si se elimina un efecto secundario, también elimina el retroceso de la Vidasfera y la recuperación del Cascabel concha, y evita que se activen la habilidad Coraza ira, Cólera, Cambio color, Retirada, Hurto, Huida, Tarjeta roja, Botón escape, Baya Biglia y Baya Maranga.",
		shortDesc: "Ataque con efecto secundario: potencia x1,3; anula efectos.",
		gen8: {
			desc: "Los ataques con efectos secundarios de este Pokémon tienen su potencia multiplicada por 1,3, pero dichos efectos se eliminan. Si se elimina un efecto secundario, también elimina el retroceso de la Vidasfera y la recuperación del Cascabel concha, y evita que se activen Cólera, Cambio color, Retirada, Hurto, Huida, Tarjeta roja, Botón escape, Baya Biglia y Baya Maranga.",
		},
		gen6: {
			desc: "Los ataques con efectos secundarios de este Pokémon tienen su potencia multiplicada por 1,3, pero dichos efectos se eliminan. Si se elimina un efecto secundario, también elimina el retroceso de la Vidasfera y la recuperación del Cascabel concha, y evita que se activen Cambio color, Hurto, Tarjeta roja, Botón escape, Baya Biglia y Baya Maranga.",
		},
		gen5: {
			desc: "Los ataques con efectos secundarios de este Pokémon tienen su potencia multiplicada por 1,3, pero dichos efectos se eliminan. Si se elimina un efecto secundario, también elimina el retroceso de la Vidasfera y la recuperación del Cascabel concha, y evita que se activen Cambio color, Hurto, Tarjeta roja y Botón escape.",
		},
	},
	shellarmor: {
		name: "Caparazón",
		shortDesc: "No recibe golpes críticos.",
	},
	shielddust: {
		name: "Polvo escudo",
		desc: "Este Pokémon no es afectado por el efecto secundario de otro ataque Pokémon. Se previenen los efectos secundarios de ataques con probabilidad (incluso del 100%) de paralizar, dormir, congelar, quemar, envenenar, confundir, causar amedrentamiento o bajar niveles de estadística, así como de Anclaje, Conjuro funesto, Lanzamiento, Psicorruido, Salazón, Puntada sombría, Bomba caramelo y Golpe mordaza. Se previene el efecto de Aria burbuja si este Pokémon es el único objetivo. También se previenen los efectos secundarios añadidos por la Roca del rey, el Colmillo agudo y las habilidades Toque tóxico, Hedor y Cadena tóxica.",
		shortDesc: "No recibe efectos secundarios de ataques ajenos.",
		gen8: {
			desc: "Este Pokémon no es afectado por el efecto secundario de otro ataque Pokémon. Se previenen los efectos secundarios de ataques con probabilidad (incluso del 100%) de paralizar, dormir, congelar, quemar, envenenar, confundir, causar amedrentamiento o bajar niveles de estadística, así como de Anclaje, Conjuro funesto, Lanzamiento, Puntada sombría y Golpe mordaza. Se previene el efecto de Aria burbuja si este Pokémon es el único objetivo. También se previenen los efectos secundarios añadidos por la Roca del rey, el Colmillo agudo y las habilidades Toque tóxico y Hedor.",
		},
		gen7: {
			desc: "Este Pokémon no se ve afectado por el efecto secundario de un ataque de otro Pokémon. Se previenen los efectos secundarios de ataques con probabilidad (incluso del 100%) de paralizar, dormir, congelar, quemar, envenenar, confundir o causar amedrentamiento, así como de Anclaje, Lanzamiento, Puntada sombría y Golpe mordaza. Se previene el efecto de Aria burbuja si este Pokémon es el único objetivo. También se previenen los efectos secundarios añadidos por la Roca del rey, el Colmillo agudo y las habilidades Toque tóxico y Hedor.",
		},
		gen6: {
			desc: "Este Pokémon no se ve afectado por el efecto secundario de un ataque de otro Pokémon. Se previenen los efectos secundarios de ataques con probabilidad (incluso del 100%) de paralizar, dormir, congelar, quemar, envenenar, confundir, causar amedrentamiento y de Lanzamiento. También se previenen los efectos secundarios añadidos por la Roca del rey, el Colmillo agudo y las habilidades Toque tóxico y Hedor.",
		},
		gen4: {
			desc: "Este Pokémon no se ve afectado por el efecto secundario de otro ataque de Pokémon. Se previenen los efectos secundarios de ataques con probabilidad (incluso del 100%) de paralizar, dormir, congelar, quemar, envenenar, confundir o causar amedrentamiento, así como de Lanzamiento. También se previenen los efectos secundarios añadidos por la Roca del rey y el Colmillo agudo.",
		},
		gen3: {
			desc: "Este Pokémon no se ve afectado por el efecto secundario de otro ataque de Pokémon. Se previenen los efectos secundarios de ataques con probabilidad (incluso del 100%) de paralizar, dormir, congelar, quemar, envenenar, confundir, causar amedrentamiento o bajar niveles de estadística. También se previene el efecto secundario añadido por la Roca del rey.",
		},
	},
	shieldsdown: {
		name: "Escudo limitado",
		desc: "Si este Pokémon es un Minior, cambia a su forma núcleo si tiene la mitad o menos de sus PS máximos, y cambia a su forma meteorito si tiene más de la mitad de sus PS máximos. Esta comprobación se realiza al entrar en combate y al final de cada turno. Mientras está en forma meteorito, no puede verse afectado por un problema de estado no volátil ni por Bostezo.",
		shortDesc: "Minior: Forma núcleo si menos de 50% PS, si no forma meteorito.",
		transform: "¡Escudo limitado desactivado!\n([POKEMON] se protegió.)",
		transformEnd: "¡Escudo limitado activado!\n([POKEMON] dejó de protegerse.)",
	},
	simple: {
		name: "Simple",
		shortDesc: "Duplica las subidas o bajadas de estadísticas.",
		gen7: {
			desc: "Cuando una de las estadísticas de este Pokémon sube o baja, la cantidad se duplica. Esta habilidad no afecta a los aumentos de estadísticas recibidos por efectos de Poder Z que ocurren antes de usar un Movimiento Z de Estado.",
		},
		gen6: {
			desc: "Cuando una de las estadísticas de este Pokémon sube o baja, la cantidad se duplica.",
		},
		gen4: {
			desc: "Durante los cálculos de estadísticas, las etapas de este Pokémon se consideran duplicadas. Ninguna etapa puede considerarse mayor de 6 ni menor de -6.",
			shortDesc: "Etapas de estadística consideradas duplicadas en cálculos.",
		},
	},
	skilllink: {
		name: "Encadenado",
		desc: "Los ataques multigolpe de este Pokémon siempre golpean el número máximo de veces. Triple patada y Triple axel no comprueban la precisión en el segundo y tercer golpe.",
		shortDesc: "Los atques multigolpe siempre golpean el máximo veces.",
		gen7: {
			desc: "Los ataques multigolpe de este Pokémon siempre golpean el número máximo de veces. Triple patada no comprueba la precisión en el segundo y tercer golpe.",
		},
		gen4: {
			desc: "Los ataques multigolpe de este Pokémon siempre golpean el número máximo de veces. No afecta a Triple patada.",
		},
	},
	slowstart: {
		name: "Inicio lento",
		shortDesc: "Al entrar, el Ataque y la Velocidad se reducen a la mitad durante 5 turnos.",
		gen7: {
			desc: "Al entrar, el Ataque y la Velocidad se reducen a la mitad durante 5 turnos. Durante el efecto, si este Pokémon usa un movimiento Z genérico basado en un movimiento especial, su Ataque Especial se reduce a la mitad al calcular el daño.",
		},
		gen6: {
			desc: "Al entrar, el Ataque y la Velocidad se reducen a la mitad durante 5 turnos.",
		},
		start: "  ¡[POKEMON] no puede ponerse en marcha!",
		end: "  ¡[POKEMON] por fin se puso en marcha!",
	},
	slushrush: {
		name: "Quitanieves",
		shortDesc: "Duplica la Velocidad si hay Nieve.",
		gen8: {
			shortDesc: "Duplica la Velocidad si hay Granizo",
		},
	},
	sniper: {
		name: "Francotirador",
		shortDesc: "Multiplica el daño de los golpes críticos por 1,5",
	},
	snowcloak: {
		name: "Manto níveo",
		desc: "Si hay nieve, la precisión de los movimientos usados contra este Pokémon se multiplica por 0,8.",
		shortDesc: "Si hay nieve, multiplica la evasión por 1,25.",
		gen8: {
			desc: "Si hay granizo, la precisión de los movimientos usados contra este Pokémon se multiplica por 0,8. Este Pokémon no recibe daño de granizo.",
			shortDesc: "Si hay granizo, multiplica la evasión por 1,25.",
		},
	},
	snowwarning: {
		name: "Nevada",
		shortDesc: "Al entrar en combate, crea Nieve.",
		gen8: {
			shortDesc: "Al entrar en combate, crea Granizo.",
		},
	},
	solarpower: {
		name: "Poder solar",
		desc: "Si Día soleado está activo, el Ataque Especial de este Pokémon se multiplica por 1,5 y pierde 1/8 de sus PS máximos al final de cada turno; estos efectos se previenen si el Pokémon lleva equipado un Parasol multiuso.",
		shortDesc: "Si Día soleado está activo, el Ataque Especial de este Pokémon es 1,5x; pierde 1/8 de sus PS máximos cada turno.",
		gen7: {
			desc: "Si Día soleado está activo, el Ataque Especial de este Pokémon se multiplica por 1,5 y pierde 1/8 de sus PS máximos, redondeado hacia abajo, al final de cada turno.",
		},
	},
	solidrock: {
		name: "Roca sólida",
		shortDesc: "Este Pokémon recibe 3/4 del daño de movimientos supereficaces.",
	},
	soulheart: {
		name: "Coránima",
		shortDesc: "El Ataque Especial de este Pokémon aumenta un nivel cuando otro Pokémon se debilita.",
	},
	soundproof: {
		name: "Insonorizar",
		shortDesc: "Este Pokémon es inmune a los movimientos que basan su efecto en el sonido, a menos que los haya usado.",
		gen7: {
			shortDesc: "Este Pokémon es inmune a los movimientos que basan su efecto en el sonido, incluyendo Cascabel cura.",
		},
		gen5: {
			shortDesc: "Este Pokémon es inmune a los movimientos que basan su efecto en el sonido, excepto Cascabel cura.",
		},
		gen4: {
			shortDesc: "Este Pokémon es inmune a los movimientos que basan su efecto en el sonido, incluyendo Cascabel cura.",
		},
	},
	speedboost: {
		name: "Impulso",
		desc: "La velocidad de este Pokémon sube un nivel al final de cada turno completo en el que haya estado en el campo.",
		shortDesc: "La velocidad de este Pokémon sube un nivel al final de cada turno en el campo.",
	},
	stakeout: {
		name: "Vigilante",
		shortDesc: "La estadística ofensiva de este Pokémon se duplica contra un objetivo que haya entrado en combate este turno.",
	},
	stall: {
		name: "Rezagado",
		shortDesc: "Este Pokémon se mueve el último entre los Pokémon que usan movimientos de igual o mayor prioridad.",
	},
	stalwart: {
		name: "Acérrimo",
		shortDesc: "Los movimientos de este Pokémon no pueden ser redirigidos a otro objetivo por ningún efecto.",
	},
	stamina: {
		name: "Firmeza",
		shortDesc: "La defensa de este Pokémon sube un nivel tras ser dañado por un movimiento.",
	},
	stancechange: {
		name: "Cambio táctico",
		desc: "Si este Pokémon es un Aegislash, cambia a Forma Filo antes de usar un movimiento de ataque y a Forma Escudo antes de usar Escudo real.",
		shortDesc: "Si es Aegislash, cambia a Forma Filo antes de ataques y a Forma Escudo antes de Escudo real.",
		gen6: {
			desc: "Si este Pokémon es un Aegislash, cambia a Forma Filo antes de intentar usar un movimiento de ataque y a Forma Escudo antes de intentar usar Escudo real.",
		},

		transform: "¡Cambió a Forma Filo!",
		transformEnd: "¡Cambió a Forma Escudo!",
	},
	static: {
		name: "Electricidad estática",
		shortDesc: "30% de probabilidad de paralizar al Pokémon que haga contacto con este Pokémon.",
		gen4: {
			desc: "30% de probabilidad de paralizar al Pokémon que haga contacto con este Pokémon. Este efecto no ocurre si este Pokémon no pierde PS por el ataque.",
		},
		gen3: {
			desc: "1/3 de probabilidad de paralizar al Pokémon que haga contacto con este Pokémon. Este efecto no ocurre si este Pokémon no pierde PS por el ataque.",
			shortDesc: "1/3 de probabilidad de paralizar al Pokémon que haga contacto con este Pokémon.",
		},
	},
	steadfast: {
		name: "Impasible",
		shortDesc: "Si este Pokémon es amedrentado, su Velocidad aumenta 1 nivel.",
	},
	steamengine: {
		name: "Combustible",
		desc: "Esta habilidad aumenta 6 niveles la Velocidad de este Pokémon cuando es golpeado por un movimiento de tipo Fuego o Agua.",
		shortDesc: "La Velocidad de este Pokémon aumenta 6 niveles al recibir un movimiento de tipo Fuego o Agua.",
	},
	steelworker: {
		name: "Acero templado",
		shortDesc: "La estadística ofensiva de este Pokémon se multiplica 1,5x al usar un movimiento de tipo Acero.",
	},
	steelyspirit: {
		name: "Alma acerada",
		desc: "Los movimientos de tipo Acero de este Pokémon y de sus aliados tienen su potencia multiplicada por 1,5. Esto afecta a Deseo oculto incluso si el usuario no está en combate.",
		shortDesc: "Los movimientos de tipo Acero de este Pokémon y de sus aliados se potencian 1,5x.",
	},
	stench: {
		name: "Hedor",
		desc: "Los ataques de este Pokémon que no tienen probabilidad de hacer retroceder al objetivo adquieren un 10% de probabilidad de hacerlo.",
		shortDesc: "Los ataques de este Pokémon sin probabilidad de hacer retroceder al objetivo ganan un 10% de probabilidad de hacerlo.",
		gen4: {
			desc: "Sin uso competitivo.",
			shortDesc: "Sin uso competitivo.",
		},
	},
	stickyhold: {
		name: "Viscosidad",
		desc: "Este Pokémon no puede perder su objeto por efecto de la habilidad o ataque de otro Pokémon, a menos que el ataque lo deje K.O. Una Toxiestrella se transferirá a otro Pokémon sin importar esta habilidad.",
		shortDesc: "Este Pokémon no puede perder su objeto por efecto de la habilidad o ataque de otro Pokémon.",
		gen4: {
			desc: "Este Pokémon no puede perder su objeto por efecto de un ataque de otro Pokémon, incluso si lo deja K.O. Una Toxiestrella se transferirá a otro Pokémon sin importar esta habilidad.",
		},
		block: "  ¡El objeto de [POKEMON] no puede ser removido!",
	},
	stormdrain: {
		name: "Colector",
		desc: "Este Pokémon es inmune a los movimientos de tipo Agua y aumenta su Ataque Especial un nivel al recibir un movimiento de tipo Agua. Si no es el objetivo de un movimiento de tipo Agua de objetivo único usado por otro Pokémon, redirige ese movimiento hacia sí mismo si está dentro de su alcance. Si varios Pokémon pudieran redirigir con esta habilidad, lo hace el de mayor Velocidad o, en caso de empate, el que la lleve activa más tiempo.",
		shortDesc: "Este Pokémon atrae movimientos de tipo Agua y sube 1 nivel su At. Esp.; inmunidad a los de tipo Agua.",
		gen4: {
			desc: "Si no es el objetivo de un movimiento de tipo Agua de objetivo único usado por otro Pokémon, redirige ese movimiento hacia sí mismo.",
			shortDesc: "Atrae movimientos de tipo Agua de objetivo único.",
		},
		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Mandíbula fuerte",
		desc: "Los ataques basados en mordiscos de este Pokémon tienen su potencia multiplicada por 1,5.",
		shortDesc: "Los ataques de mordisco de este Pokémon tienen potencia 1,5x. Picadura no se potencia.",
	},
	sturdy: {
		name: "Robustez",
		desc: "Si este Pokémon tiene los PS completos, sobrevive a un golpe con al menos 1 PS. Los movimientos OHKO fallan cuando se usan contra este Pokémon.",
		shortDesc: "Si está a máximo de PS, sobrevive a un golpe con 1 PS y es inmune a OHKO.",
		gen4: {
			desc: "Los movimientos OHKO fallan cuando se usan contra este Pokémon.",
			shortDesc: "Los movimientos OHKO fallan contra este Pokémon.",
		},

		activate: "  ¡[POKÉMON] resistió el golpe!",
	},
	suctioncups: {
		name: "Ventosas",
		shortDesc: "Este Pokémon no puede ser forzado a cambiarse por un ataque o por un objeto de otro Pokémon.",

		block: "  ¡[POKÉMON] queda anclado con sus ventosas!",
	},
	superluck: {
		name: "Afortunado",
		shortDesc: "El ratio de golpes críticos de este Pokémon aumenta 1 nivel.",
	},
	supersweetsyrup: {
		name: "Néctar dulce",
		shortDesc: "Al entrar en combate, reduce 1 nivel la evasión de los oponentes. Una vez por combate.",

		start: "  ¡Un aroma dulzón a néctar emana del jarabe que cubre a [POKÉMON]!",
	},
	supremeoverlord: {
		name: "General supremo",
		desc: "Los movimientos de este Pokémon tienen su potencia multiplicada por 1 + (X*0,1), donde X es el número total de veces que cualquier Pokémon se haya debilitado en el equipo del usuario cuando esta habilidad se activó, y X no puede ser mayor que 5.",
		shortDesc: "Los movimientos de este Pokémon tienen 1,1x potencia por cada aliado debilitado (hasta 5).",
		activate: "  [POKEMON] ¡Se fortaleció con los caídos!",
	},
	surgesurfer: {
		name: "Cola surf",
		shortDesc: "Si Campo eléctrico está activo, la Velocidad de este Pokémon se duplica.",
	},
	swarm: {
		name: "Enjambre",
		desc: "Cuando este Pokémon tiene 1/3 o menos de sus PS máximos, redondeado hacia abajo, su estadística ofensiva se multiplica por 1,5 al usar un movimiento de tipo Bicho.",
		shortDesc: "Al tener 1/3 o menos de sus PS máximos, la estadística ofensiva de este Pokémon es 1,5x con movimientos de tipo Bicho.",
		gen4: {
			desc: "Cuando este Pokémon tiene 1/3 o menos de sus PS máximos, redondeado hacia abajo, la potencia de sus movimientos de tipo Bicho se multiplica por 1,5.",
			shortDesc: "Al tener 1/3 o menos de sus PS máximos, los movimientos de tipo Bicho de este Pokémon tienen 1,5x de potencia.",
		},
	},
	sweetveil: {
		name: "Velo dulce",
		desc: "Este Pokémon y sus aliados no pueden quedarse dormidos, pero los que ya estaban dormidos no despiertan de inmediato. Este Pokémon y sus aliados no pueden usar Descanso con éxito ni verse afectados por Bostezo, y los afectados previamente no se dormirán.",
		shortDesc: "Este Pokémon y sus aliados no pueden quedarse dormidos; los ya dormidos no despiertan.",
		block: "  ¡[POKEMON] no puede quedarse dormido debido a un velo dulce!",
	},
	swiftswim: {
		name: "Nado rápido",
		desc: "Si Danza lluvia está activa, la Velocidad de este Pokémon se duplica. Este efecto se previene si lleva un Parasol multiuso.",
		shortDesc: "Si Danza lluvia está activa, la Velocidad de este Pokémon se duplica.",
		gen7: {
			desc: "Si Danza lluvia está activa, la Velocidad de este Pokémon se duplica.",
		},
	},
	swordofruin: {
		name: "Espada debacle",
		shortDesc: "Los Pokémon activos sin esta habilidad tienen la Defensa multiplicada por 0,75.",
		start: "  ¡La Espada debacle de [POKEMON] debilitó la Defensa de todos los Pokémon cercanos!",
	},
	symbiosis: {
		name: "Simbiosis",
		desc: "Si un aliado usa su objeto, este Pokémon le transfiere su objeto inmediatamente. No se activa si el objeto del aliado fue robado o si el aliado usó Desarme, Botón escape o Mochila escape.",
		shortDesc: "Si un aliado usa su objeto, este Pokémon se lo transfiere inmediatamente.",
		gen7: {
			desc: "Si un aliado usa su objeto, este Pokémon le transfiere su objeto inmediatamente. No se activa si el aliado usó Botón escape.",
		},
		gen6: {
			desc: "Si un aliado usa su objeto, este Pokémon le transfiere su objeto inmediatamente. No se activa si el objeto del aliado fue robado o si el aliado usó Desarme.",
		},

		activate: "  ¡[POKEMON] compartió su [ITEM] con [TARGET]!",
	},
	synchronize: {
		name: "Sincronía",
		desc: "Si otro Pokémon quema, paraliza, envenena o envenena gravemente a este Pokémon, ese Pokémon recibe la misma condición de estado no volátil.",
		shortDesc: "Si otro Pokémon quema, envenena o paraliza a este Pokémon, también recibe ese estado.",
		gen4: {
			desc: "Si otro Pokémon quema, paraliza o envenena a este Pokémon, ese Pokémon recibe la misma condición de estado no volátil. Si lo envenena gravemente, ese Pokémon queda envenenado.",
		},
	},
	tabletsofruin: {
		name: "Tablilla debacle",
		shortDesc: "Los Pokémon activos sin esta habilidad tienen su Ataque multiplicado por 0,75.",

		start: "  ¡La Tablilla debacle de [POKEMON] debilitó el Ataque de todos los Pokémon cercanos!",
	},
	tangledfeet: {
		name: "Tumbos",
		shortDesc: "La evasión de este Pokémon se duplica mientras está confundido.",
	},
	tanglinghair: {
		name: "Rizos rebeldes",
		shortDesc: "Los Pokémon que hagan contacto con este Pokémon ven reducida su Velocidad en 1 nivel.",
	},
	technician: {
		name: "Experto",
		desc: "Los movimientos de este Pokémon con 60 de potencia o menos tienen su potencia multiplicada por 1,5, incluido Forcejeo. Este efecto se aplica tras las modificaciones de potencia del movimiento.",
		shortDesc: "Los movimientos de 60 de potencia o menos de este Pokémon tienen 1,5x de potencia, incluido Forcejeo.",
		gen4: {
			desc: "Los movimientos de este Pokémon con 60 de potencia o menos tienen su potencia multiplicada por 1,5, excepto Forcejeo. Este efecto se aplica tras las modificaciones de potencia del movimiento, así como los efectos de Carga y Refuerzo.",
			shortDesc: "Los movimientos de 60 de potencia o menos de este Pokémon tienen 1,5x de potencia, excepto Forcejeo.",
		},
	},
	telepathy: {
		name: "Telepatía",
		shortDesc: "Este Pokémon no recibe daño de los ataques de sus Pokémon aliados.",

		block: "  ¡[POKEMON] no puede recibir daño de los ataques de sus Pokémon aliados!",
	},
	teraformzero: {
		name: "Teraformación 0",
		shortDesc: "Terapagos: la teracristalización elimina efectos de clima y terreno. Una vez por combate.",
	},
	terashell: {
		name: "Teracaparazón",
		desc: "Si este Pokémon es un Terapagos con PS completos, la efectividad de los ataques contra él cambia a 0,5x, a menos que sea inmune al movimiento. Los movimientos de varios golpes mantienen la misma efectividad durante todo el ataque.",
		shortDesc: "Terapagos: con PS completos, los ataques tienen efectividad 0,5x a menos que sea inmune.",

		activate: "  ¡[POKEMON] hizo brillar su caparazón! ¡Está distorsionando los enfrentamientos de tipo!",
	},
	terashift: {
		name: "Teracambio",
		shortDesc: "Si este Pokémon es un Terapagos, se transforma en su Forma Teracristal al entrar.",

		transform: "¡[POKEMON] se transformó!",
	},
	teravolt: {
		name: "Terravoltaje",
		desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Cola armadura, Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Deslumbrar, Disfraz, Piel seca, Geofagia, Filtro, Absorbe fuego, Don floral, Velo flor, Peluche, Compiescolta, Pelaje recio, Cuerpo áureo, Defensa hoja, Perro guardián, Ignífugo, Metal pesado, Corte fuerte, Cara hielo, Escama hielo, Iluminación, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Ojo mental, Espejo mágico, Electromotor, Multiescamas, Despiste, Sacapecho, Ritmo propio, Velo pastel, Punk rock, Sal purificadora, Regia presencia, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Teracaparazón, Termoconversión, Sebo, Ignorante, Espíritu vital, Absorbe electricidad, Absorbe agua, Pompa, Velo agua, Cuerpo horneado, Humo blanco, Surcavientos, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		shortDesc: "Los movimientos de este Pokémon y sus efectos ignoran las habilidades de otros Pokémon.",
		gen8: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Deslumbrar, Disfraz, Piel seca, Filtro, Absorbe fuego, Don floral, Velo flor, Peluche, Compiescolta, Pelaje recio, Defensa hoja, Ignífugo, Metal pesado, Corte fuerte, Cara hielo, Escama hielo, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Espejo mágico, Electromotor, Multiescamas, Despiste, Sacapecho, Ritmo propio, Velo pastel, Punk rock, Regia presencia, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Sebo, Ignorante, Espíritu vital, Absorbe electricidad, Absorbe agua, Pompa, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen7: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Aura oscura, Deslumbrar, Disfraz, Piel seca, Aura feérica, Filtro, Absorbe fuego, Don floral, Velo flor, Peluche, Compiescolta, Pelaje recio, Defensa hoja, Ignífugo, Metal pesado, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Electromotor, Multiescamas, Despiste, Ritmo propio, Regia presencia, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Sebo, Espíritu vital, Absorbe electricidad, Absorbe agua, Pompa, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen6: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Aura oscura, Piel seca, Aura feérica, Filtro, Absorbe fuego, Don floral, Velo flor, Compiescolta, Pelaje recio, Defensa hoja, Ignífugo, Metal pesado, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Electromotor, Multiescamas, Despiste, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Sebo, Espíritu vital, Absorbe electricidad, Absorbe agua, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen5: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Armadura batalla, Sacapecho, Cuerpo puro, Respondón, Humedad, Piel seca, Filtro, Absorbe fuego, Don floral, Compiescolta, Ignífugo, Metal pesado, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Electromotor, Multiescamas, Ignorante, Ritmo propio, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Tumbos, Telepatía, Sebo, Espíritu vital, Absorbe electricidad, Absorbe agua, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen4: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Armadura batalla, Cuerpo puro, Humedad, Piel seca, Filtro, Absorbe fuego, Don floral, Ignífugo, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Pararrayos, Flexibilidad, Escudo magma, Escama especial, Electromotor, Despiste, Ritmo propio, Velo arena, Herbívoro, Coraza reflejo, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Tumbos, Sebo, Ignorante, Espíritu vital, Absorbe electricidad, Absorbe agua, Velo agua, Humo blanco y Superguarda. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no. El modificador de Ataque de la habilidad Don floral de un aliado no se ve anulado.",
		},
		start: "  ¡[POKEMON] está irradiando un aura explosiva!",
	},
	thermalexchange: {
		name: "Termoconversión",
		desc: "El Ataque de este Pokémon sube 1 nivel cuando recibe daño de un movimiento de tipo Fuego. Este Pokémon no puede ser quemado. Obtener esta habilidad mientras está quemado lo cura.",
		shortDesc: "Al recibir daño de un movimiento de tipo Fuego, sube su Ataque 1 nivel; no puede ser quemado.",
	},
	thickfat: {
		name: "Sebo",
		desc: "Si un Pokémon usa un movimiento de tipo Fuego o Hielo contra este Pokémon, la estadística ofensiva de ese Pokémon se reduce a la mitad al calcular el daño.",
		shortDesc: "Los movimientos de tipo Fuego o Hielo contra este Pokémon se calculan con la estadística ofensiva a la mitad.",
		gen4: {
			desc: "La potencia de los ataques de tipo Fuego y Hielo contra este Pokémon se reduce a la mitad.",
			shortDesc: "La potencia de los ataques de tipo Fuego y Hielo contra este Pokémon se reduce a la mitad.",
		},
		gen3: {
			desc: "Si un Pokémon usa un movimiento de tipo Fuego o Hielo contra este Pokémon, su Ataque Especial se reduce a la mitad al calcular el daño.",
			shortDesc: "Los movimientos de tipo Fuego o Hielo contra este Pokémon se calculan con el Ataque Especial a la mitad.",
		},
	},
	tintedlens: {
		name: "Cromolente",
		shortDesc: "Los ataques de este Pokémon que son poco efectivos contra un objetivo infligen el doble de daño.",
	},
	torrent: {
		name: "Torrente",
		desc: "Cuando a este Pokémon le queda un tercio o menos de sus PS máximos (redondeado hacia abajo), sus movimientos de tipo Agua tienen 1,5x de potencia.",
		shortDesc: "A 1/3 o menos de sus PS máximos, sus movimientos de tipo Agua tienen 1,5x de potencia.",
		gen4: {
			desc: "Cuando a este Pokémon le queda un tercio o menos de sus PS máximos (redondeado hacia abajo), sus ataques de tipo Agua tienen su potencia multiplicada por 1,5.",
			shortDesc: "A 1/3 o menos de sus PS máximos, sus ataques de tipo Agua tienen 1,5x de potencia.",
		},
	},
	toughclaws: {
		name: "Garra dura",
		shortDesc: "Los movimientos de contacto de este Pokémon tienen potencia x1,3.",
	},
	toxicboost: {
		name: "Ímpetu tóxico",
		desc: "Mientras este Pokémon esté envenenado, el poder de sus ataques físicos se multiplica por 1,5x.",
		shortDesc: "Mientras este Pokémon esté envenenado, sus ataques físicos tienen potencia 1,5x.",
	},
	toxicchain: {
		name: "Cadena tóxica",
		desc: "Los ataques de este Pokémon tienen un 30% de probabilidad de envenenar gravemente al objetivo. Este efecto ocurre antes de la probabilidad de efecto secundario inherente al movimiento.",
		shortDesc: "Los ataques de este Pokémon tienen un 30% de probabilidad de envenenar gravemente.",
	},
	toxicdebris: {
		name: "Capa tóxica",
		shortDesc: "Si este Pokémon recibe un ataque físico, se colocan Púas tóxicas en el lado rival.",
	},
	trace: {
		name: "Calco",
		desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival al azar. Las habilidades que no pueden copiarse son Unidad ecuestre, Fuerte afecto, Letargo perenne, Comandar, Disfraz, Evocarrecuerdos, Don floral, Predicción, Cambio voraz, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Títere tóxico, Agrupamiento, Reacción química, Protoestasis, Carga cuark, Receptor, Sistema RKS, Banco, Escudo frágil, Cambio táctico, Teraformación 0, Teracaparazón, Teracambio, Calco, Modo daruma y Cambio heroico. Si ningún Pokémon rival tiene una habilidad que pueda copiarse, esta habilidad se activará tan pronto como uno la tenga.",
		shortDesc: "Al entrar o cuando puede, copia la habilidad de un rival adyacente al azar.",
		gen8: {
			desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival al azar. Las habilidades que no pueden copiarse son Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Tragamisil, Cambio voraz, Cara de hielo, Ilusión, Impostor, Multitipo, Gas reactivo, Agrupamiento, Reacción química, Receptor, Sistema RKS, Banco, Escudo frágil, Cambio táctico, Calco y Modo daruma. Si ningún Pokémon rival tiene una habilidad que pueda copiarse, esta habilidad se activará tan pronto como uno la tenga.",
		},
		gen7: {
			desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival al azar. Las habilidades que no pueden copiarse son Fuerte afecto, Letargo perenne, Disfraz, Don floral, Predicción, Ilusión, Impostor, Multitipo, Agrupamiento, Reacción química, Receptor, Sistema RKS, Banco, Escudo frágil, Cambio táctico, Calco y Modo daruma. Si ningún Pokémon rival tiene una habilidad que pueda copiarse, esta habilidad se activará tan pronto como uno la tenga.",
		},
		gen6: {
			desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival adyacente al azar. Las habilidades que no pueden copiarse son Don floral, Predicción, Ilusión, Impostor, Multitipo, Cambio táctico, Calco y Modo daruma. Si ningún Pokémon rival tiene una habilidad que pueda copiarse, esta habilidad se activará tan pronto como uno la tenga.",
		},
		gen5: {
			desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival adyacente al azar. Las habilidades que no pueden copiarse son Don floral, Predicción, Ilusión, Impostor, Multitipo, Calco y Modo daruma. Si ningún Pokémon rival tiene una habilidad que pueda copiarse, esta habilidad se activará tan pronto como uno la tenga.",
		},
		gen4: {
			desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival al azar. Las habilidades que no pueden copiarse son Predicción, Multitipo y Calco. Si ningún Pokémon rival tiene una habilidad que pueda copiarse, esta habilidad se activará tan pronto como uno la tenga.",
		},
		gen3: {
			desc: "Al entrar en combate, este Pokémon copia la habilidad de un Pokémon rival al azar.",
		},

		changeAbility: "  [POKEMON] rastreó la habilidad [ABILITY] de [SOURCE]!",
	},
	transistor: {
		name: "Transistor",
		shortDesc: "La estadística ofensiva de este Pokémon se multiplica por 1,3 al usar un movimiento de tipo Eléctrico.",
		gen8: {
			shortDesc: "La estadística ofensiva de este Pokémon se multiplica por 1,5 al usar un movimiento de tipo Eléctrico.",
		},
	},
	triage: {
		name: "Primer auxilio",
		shortDesc: "Los movimientos de curación de este Pokémon tienen prioridad +3.",
	},
	truant: {
		name: "Pereza",
		shortDesc: "Este Pokémon se salta turnos alternos en lugar de usar un movimiento.",
		gen3: {
			desc: "Este Pokémon se salta turnos alternos en lugar de usar un movimiento. Si este Pokémon reemplaza a otro que se debilitó durante efectos al final de turno, se saltará su primer turno.",
		},
		cant: "¡[POKEMON] está holgazaneando!",
	},
	turboblaze: {
		name: "Turbollama",
		desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Cola armadura, Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Deslumbrar, Disfraz, Piel seca, Geofagia, Filtro, Absorbe fuego, Don floral, Velo flor, Peluche, Compiescolta, Pelaje recio, Cuerpo áureo, Defensa hoja, Perro guardián, Ignífugo, Metal pesado, Corte fuerte, Cara hielo, Escama hielo, Iluminación, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Ojo mental, Espejo mágico, Electromotor, Multiescamas, Despiste, Sacapecho, Ritmo propio, Velo pastel, Punk rock, Sal purificadora, Regia presencia, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Teracaparazón, Termoconversión, Sebo, Ignorante, Espíritu vital, Absorbe electricidad, Absorbe agua, Pompa, Velo agua, Cuerpo horneado, Humo blanco, Surcavientos, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		shortDesc: "Los movimientos de este Pokémon y sus efectos ignoran las habilidades de otros Pokémon.",
		gen8: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Deslumbrar, Disfraz, Piel seca, Filtro, Absorbe fuego, Don floral, Velo flor, Peluche, Compiescolta, Pelaje recio, Defensa hoja, Ignífugo, Metal pesado, Corte fuerte, Cara hielo, Escama hielo, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Espejo mágico, Electromotor, Multiescamas, Despiste, Sacapecho, Ritmo propio, Velo pastel, Punk rock, Regia presencia, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Sebo, Ignorante, Espíritu vital, Absorbe electricidad, Absorbe agua, Pompa, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen7: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Aura oscura, Deslumbrar, Disfraz, Piel seca, Aura feérica, Filtro, Absorbe fuego, Don floral, Velo flor, Peluche, Compiescolta, Pelaje recio, Defensa hoja, Ignífugo, Metal pesado, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Electromotor, Multiescamas, Despiste, Ritmo propio, Regia presencia, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Sebo, Espíritu vital, Absorbe electricidad, Absorbe agua, Pompa, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen6: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Velo aroma, Rompeaura, Armadura batalla, Sacapecho, Antibalas, Cuerpo puro, Respondón, Humedad, Aura oscura, Piel seca, Aura feérica, Filtro, Absorbe fuego, Don floral, Velo flor, Compiescolta, Pelaje recio, Defensa hoja, Ignífugo, Metal pesado, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Electromotor, Multiescamas, Despiste, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Velo dulce, Tumbos, Telepatía, Sebo, Espíritu vital, Absorbe electricidad, Absorbe agua, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen5: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Armadura batalla, Sacapecho, Cuerpo puro, Respondón, Humedad, Piel seca, Filtro, Absorbe fuego, Don floral, Compiescolta, Ignífugo, Metal pesado, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Metal liviano, Pararrayos, Flexibilidad, Espejo mágico, Escudo magma, Escama especial, Electromotor, Multiescamas, Ignorante, Ritmo propio, Velo arena, Herbívoro, Caparazón, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Tumbos, Telepatía, Sebo, Espíritu vital, Absorbe electricidad, Absorbe agua, Velo agua, Humo blanco, Superguarda y Piel milagro. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no.",
		},
		gen4: {
			desc: "Los movimientos de este Pokémon y sus efectos ignoran ciertas habilidades de otros Pokémon. Las habilidades que pueden ser anuladas son: Armadura batalla, Cuerpo puro, Humedad, Piel seca, Filtro, Absorbe fuego, Don floral, Ignífugo, Corte fuerte, Inmunidad, Fuerza mental, Insomnio, Vista lince, Defensa hoja, Levitación, Pararrayos, Flexibilidad, Escudo magma, Escama especial, Electromotor, Despiste, Ritmo propio, Velo arena, Herbívoro, Coraza reflejo, Polvo escudo, Simple, Manto níveo, Roca sólida, Insonorizar, Viscosidad, Colector, Robustez, Ventosas, Tumbos, Sebo, Ignorante, Espíritu vital, Absorbe electricidad, Absorbe agua, Velo agua, Humo blanco y Superguarda. Esto afecta a todos los demás Pokémon en el campo, ya sea que sean objetivo de un movimiento de este Pokémon o no, y ya sea que su habilidad les resulte beneficiosa o no. El modificador de Ataque de la habilidad Don floral de un aliado no se ve anulado.",
		},
		start: " ¡[POKEMON] está irradiando un aura llameante!",
	},
	unaware: {
		name: "Ignorante",
		desc: "Este Pokémon ignora los cambios de estadísticas de Ataque, Ataque Especial y Precisión de otros Pokémon al recibir daño, y las de Defensa, Defensa Especial y Evasión de otros Pokémon al infligir daño.",
		shortDesc: "Este Pokémon ignora los cambios de estadísticas de otros Pokémon al recibir o infligir daño.",
	},
	unburden: {
		name: "Liviano",
		desc: "Si este Pokémon pierde su objeto equipado por cualquier motivo, su Velocidad se duplica mientras permanezca activo, tenga esta habilidad y no esté sosteniendo ningún objeto.",
		shortDesc: "La Velocidad se duplica al perder el objeto; el aumento se pierde si cambia, recibe un nuevo objeto o habilidad.",
	},
	unnerve: {
		name: "Nerviosismo",
		desc: "Mientras este Pokémon está activo, impide que los Pokémon rivales usen sus Bayas. Esta Habilidad se activa antes que las trampas de entrada y otras Habilidades tomen efecto.",
		shortDesc: "Mientras este Pokémon está activo, impide que los Pokémon rivales usen sus Bayas.",
		start: "  ¡[TEAM] está demasiado nervioso para comer Bayas!",
	},
	unseenfist: {
		name: "Puño invisible",
		shortDesc: "Los movimientos de contacto de este Pokémon ignoran la protección del objetivo, excepto Maxibarrera.",
	},
	vesselofruin: {
		name: "Caldero debacle",
		shortDesc: "Los Pokémon activos sin esta habilidad tienen su Ataque Especial multiplicado por 0,75.",

		start: "  ¡El Caldero debacle de [POKEMON] debilitó el Ataque Especial de todos los Pokémon adyacentes!",
	},
	victorystar: {
		name: "Tinovictoria",
		shortDesc: "Multiplica por 1,1 la precisión de este Pokémon y de sus aliados.",
	},
	vitalspirit: {
		name: "Espíritu vital",
		shortDesc: "Este Pokémon no puede dormirse; al adquirirla despierta si estaba dormido.",
	},
	voltabsorb: {
		name: "Absorbe electricidad",
		desc: "Este Pokémon es inmune a los movimientos de tipo Eléctrico y restaura 1/4 de sus PS máximos, redondeado hacia abajo, al recibir un movimiento de tipo Eléctrico.",
		shortDesc: "Este Pokémon cura 1/4 de sus PS al recibir movimientos de tipo Eléctrico; inmunidad.",
		gen3: {
			desc: "Este Pokémon es inmune a movimientos de tipo Eléctrico que causan daño y restaura 1/4 de sus PS máximos, redondeado hacia abajo, al recibir uno.",
			shortDesc: "Este Pokémon cura 1/4 de sus PS al recibir un movimiento de tipo Eléctrico dañino; inmunidad.",
		},
	},
	wanderingspirit: {
		name: "Alma errante",
		desc: "Los Pokémon que hagan contacto con este Pokémon intercambian su habilidad con este. No afecta a los Pokémon con las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Comandar, Disfraz, Evocarrecuerdos, Mutapetito, Cara de hielo, Ilusión, Mutatipo, Gas reactivo, Títere tóxico, Agrupamiento, Paleosíntesis, Carga cuark, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Teracaparazón, Teracambio, Teraformación 0, Superguarda, Modo Zen o Cambio heroico.",
		shortDesc: "Pokémon que hagan contacto con este Pokémon intercambian su habilidad con este.",
		gen8: {
			desc: "Los Pokémon que hagan contacto con este Pokémon intercambian su habilidad con este. No afecta a los Pokémon con las habilidades Unidad ecuestre, Fuerte afecto, Letargo perenne, Disfraz, Tragamisil, Mutapetito, Cara de hielo, Ilusión, Mutatipo, Gas reactivo, Agrupamiento, Sistema alfa, Banco, Escudo limitado, Cambio táctico, Superguarda o Modo Zen.",
		},

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Absorbe agua",
		desc: "Este Pokémon es inmune a los movimientos de tipo Agua y recupera 1/4 de sus PS máximos, redondeado hacia abajo, cuando recibe un movimiento de tipo Agua.",
		shortDesc: "Este Pokémon recupera 1/4 de sus PS máximos al recibir movimientos de tipo Agua; inmune a ellos.",
	},
	waterbubble: {
		name: "Pompa",
		desc: "El stat ofensivo de este Pokémon se duplica al usar un movimiento de tipo Agua. Si un Pokémon utiliza un movimiento de tipo Fuego contra este Pokémon, su stat ofensivo se reduce a la mitad al calcular el daño. Este Pokémon no puede ser quemado. Obtener esta habilidad mientras está quemado lo cura.",
		shortDesc: "Duplica el poder de los movimientos de tipo Agua; reduce a la mitad el daño de los de tipo Fuego; evita quemaduras.",
	},
	watercompaction: {
		name: "Hidrorrefuerzo",
		desc: "La Defensa de este Pokémon sube 2 niveles cuando recibe un movimiento de tipo Agua.",
		shortDesc: "Sube 2 niveles de Defensa al recibir un movimiento de tipo Agua.",
	},
	waterveil: {
		name: "Velo agua",
		desc: "Este Pokémon no puede ser quemado. Obtener esta habilidad mientras está quemado lo cura.",
		shortDesc: "Evita quemaduras; cura quemaduras si se adquiere quemado.",
	},
	weakarmor: {
		name: "Armadura frágil",
		desc: "Si un ataque físico golpea a este Pokémon, su Defensa baja 1 nivel y su Velocidad sube 2 niveles.",
		shortDesc: "Si un ataque físico golpea a este Pokémon, Defensa baja 1, Velocidad sube 2.",
		gen6: {
			desc: "Si un ataque físico golpea a este Pokémon, su Defensa baja 1 nivel y su Velocidad sube 1 nivel.",
			shortDesc: "Si un ataque físico golpea a este Pokémon, Defensa baja 1, Velocidad sube 1.",
		},
	},
	wellbakedbody: {
		name: "Cuerpo horneado",
		desc: "Este Pokémon es inmune a los movimientos de tipo Fuego y aumenta su Defensa en dos niveles cuando es alcanzado por un movimiento de tipo Fuego.",
		shortDesc: "La Defensa sube dos niveles si recibe un movimiento de tipo Fuego; inmunidad a Fuego.",
	},
	whitesmoke: {
		name: "Humo blanco",
		shortDesc: "Impide que otros Pokémon reduzcan sus etapas de estadísticas.",
	},
	wimpout: {
		name: "Huida",
		desc: "Cuando este Pokémon tiene más de la mitad de sus PS máximos y recibe un daño que lo deja en la mitad o menos de sus PS máximos, cambia inmediatamente a un aliado elegido. Este efecto se aplica después de todos los impactos de un movimiento de varios golpes. Se evita si el movimiento tenía un efecto secundario anulado por la Habilidad Potencia bruta. Se aplica tanto al daño directo como al indirecto, excepto Maldición y Sustituto al usarse, Tambor, Divide dolor y daño por confusión.",
		shortDesc: "Cambia de Pokémon al llegar a la mitad o menos de sus PS máximos.",
	},
	windpower: {
		name: "Energía eólica",
		desc: "Este Pokémon gana el efecto Carga cuando recibe un golpe de un movimiento que usa viento o cuando comienza Viento afín en el campo de este Pokémon.",
		shortDesc: "Gana el efecto Carga al recibir un golpe de un movimiento que usa viento o al comenzar Viento afín.",

		start: "#dinamo",
	},
	windrider: {
		name: "Surcavientos",
		desc: "Este Pokémon es inmune a los movimientos que usan viento y sube su Ataque un nivel al recibir un golpe de un movimiento que usa viento o al comenzar Viento afín en su lado.",
		shortDesc: "Aumenta 1 nivel el Ataque si recibe un golpe de un movimiento que usa viento o al comenzar Viento afín. Inmunidad a movimientos que usan viento.",
	},
	wonderguard: {
		name: "Superguarda",
		shortDesc: "Este Pokémon solo sufre daño de movimientos supereficaces y de daño indirecto.",
		gen4: {
			shortDesc: "Este Pokémon solo sufre daño de Colmillo ígneo, movimientos supereficaces y daño indirecto.",
		},
		gen3: {
			shortDesc: "Este Pokémon solo sufre daño de movimientos supereficaces y daño indirecto.",
		},
	},
	wonderskin: {
		name: "Piel milagro",
		desc: "Los movimientos de estado que comprueben precisión ven su precisión cambiada a 50 % cuando se usan contra este Pokémon. Este efecto se aplica antes que otros que modifiquen la precisión.",
		shortDesc: "Movimientos de estado con chequeo de precisión tienen 50 % de precisión al usarlos contra este Pokémon.",
	},
	zenmode: {
		name: "Modo daruma",
		desc: "Si este Pokémon es un Darmanitan o un Darmanitan de Galar, cambia a Modo daruma si tiene la mitad o menos de sus PS máximos al final de un turno. Si los PS de Darmanitan están por encima de la mitad de sus PS máximos al final de un turno, vuelve a Modo normal.",
		shortDesc: "Si es Darmanitan, al final del turno cambia a Modo normal si > mitad de PS, si no, a Modo daruma.",
		gen7: {
			desc: "Si este Pokémon es un Darmanitan, cambia a Modo daruma si tiene la mitad o menos de sus PS máximos al final de un turno. Si los PS de Darmanitan están por encima de la mitad de sus PS máximos al final de un turno, vuelve a Modo normal.",
		},
		gen6: {
			desc: "Si este Pokémon es un Darmanitan, cambia a Modo daruma si tiene la mitad o menos de sus PS máximos al final de un turno. Si los PS de Darmanitan están por encima de la mitad de sus PS máximos al final de un turno, vuelve a Modo normal. Si Darmanitan pierde esta Habilidad mientras está en Modo daruma, se revierte a Modo normal inmediatamente.",
		},
		transform: "¡Modo daruma activado!",
		transformEnd: "¡Modo daruma terminado!",
	},
	zerotohero: {
		name: "Cambio heroico",
		shortDesc: "Si este Pokémon es un Palafin en Forma ingenua, al retirarse cambia a Forma heroica.",

		activate: "  ¡[POKEMON] sufrió una transformación heroica!",
	},

	// CAP
	mountaineer: {
		name: "Montañero",
		shortDesc: "Al entrar en combate, este Pokémon evita todos los ataques de tipo Roca y los efectos de Trampa rocas.",
	},
	rebound: {
		name: "Rebote",
		desc: "Al entrar en combate, este Pokémon bloquea ciertos movimientos de estado y en su lugar los devuelve al usuario original.",
		shortDesc: "Al entrar en combate, bloquea ciertos movimientos de estado y los devuelve al usuario.",
		move: "#magiccoat",
	},
	persistent: {
		name: "Persistencia",
		desc: "La duración de Gravedad, Anticura, Zona mágica, Velo sagrado, Viento afín, Espacio raro y Zona extraña aumenta en 2 turnos si lo inicia este Pokémon.",
		shortDesc: "Aumenta 2 turnos la duración de Gravedad/Anticura/Velo sagrado/Viento afín/Zona mágica/Espacio raro/Zona extraña.",
		activate: "  ¡[POKEMON] extiende [MOVE] 2 turnos más!",
	},
};
