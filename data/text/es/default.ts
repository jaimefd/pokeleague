export const DefaultText: { [id: IDEntry]: DefaultText } = {
	default: {
		startBattle: "¡La batalla ha comenzado entre [TRAINER] y [TRAINER]!",
		winBattle: "¡**[TRAINER]** ganó la batalla!",
		tieBattle: "¡Empate entre [TRAINER] y [TRAINER]!",

		pokemon: "[NICKNAME]",
		opposingPokemon: "el [NICKNAME] enemigo",
		team: "tu equipo",
		opposingTeam: "el equipo rival",
		party: "tus Pokémon aliados",
		opposingParty: "los Pokémon rivales",

		turn: "== Turno [NUMBER] ==",
		switchIn: "¡[TRAINER] envió a [FULLNAME]!",
		switchInOwn: "¡Adelante, [FULLNAME]!",
		switchOut: "¡[TRAINER] retiró a [NICKNAME]!",
		switchOutOwn: "¡[NICKNAME], vuelve!",
		drag: "¡[FULLNAME] fue arrastrado!",
		faint: "¡[POKEMON] se debilitó!",
		swap: "¡[POKEMON] y [TARGET] intercambiaron posiciones!",
		swapCenter: "¡[POKEMON] se movió al centro!",

		// Multi Battles only
		canDynamax: "  ¡[TRAINER] puede dinamaxizar ahora!",
		canDynamaxOwn: "  ¡Energía dinamax se acumuló alrededor de [TRAINER]!",

		zEffect: "  ¡[POKEMON] desata su Movimiento Z con toda su fuerza!",
		move: "[POKEMON] usó **[MOVE]**!",
		abilityActivation: "[La habilidad [ABILITY] de [POKEMON]]",

		mega: "  ¡El [ITEM] de [POKEMON] reacciona a la piedra activadora!",
		megaNoItem: "  ¡[POKEMON] reacciona a la piedra activadora de [TRAINER]!",
		megaGen6: "  ¡El [ITEM] de [POKEMON] reacciona a la megapulsera de [TRAINER]!",
		transformMega: "¡[POKEMON] ha megaevolucionado a Mega [SPECIES]!",
		primal: "¡[POKEMON] sufre regresión primigenia! ¡Se ha revertido a su forma primigenia!",
		zPower: "  ¡[POKEMON] se rodeó de su poder Z!",
		zBroken: "  ¡[POKEMON] no pudo protegerse completamente y resultó herido!",
		terastallize: "  ¡[POKEMON] se ha terastalizado al tipo [TYPE]!",

		// in case the different default messages didn't make it obvious, the difference
		// is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
		// message happens AFTER "Pokemon used Move!"
		cant: "¡[POKEMON] no puede usar [MOVE]!",
		cantNoMove: "¡[POKEMON] no puede moverse!",
		fail: "¡Pero falló!",

		// n.b. this is the default message for in-battle forme changes
		// for the move Transform and ability Imposter, see the entry for the move Transform
		transform: "¡[POKEMON] se transformó!",
		typeChange: "  ¡El tipo de [POKEMON] cambió a [TYPE]!",
		typeChangeFromEffect: "  ¡[EFFECT] hizo que [POKEMON] fuera de tipo [TYPE]!",
		typeAdd: "  ¡Se añadió el tipo [TYPE] a [POKEMON]!",

		start: "  ([EFFECT] comenzó en [POKEMON])",
		end: "  ¡[POKEMON] se liberó de [EFFECT]!",
		activate: "  (¡[EFFECT] se activó!)",
		startTeamEffect: "  (¡[EFFECT] comenzó en [TEAM]!)",
		endTeamEffect: "  (¡[EFFECT] terminó en [TEAM]!)",
		startFieldEffect: "  (¡[EFFECT] comenzó!)",
		endFieldEffect: "  (¡[EFFECT] terminó!)",

		changeAbility: "  ¡[POKEMON] adquirió [ABILITY]!",
		addItem: "  [POKEMON] obtuvo un(a) [ITEM].",
		takeItem: "  ¡[POKEMON] robó el [ITEM] de [SOURCE]!",
		eatItem: "  (¡[POKEMON] se comió su [ITEM]!)",
		useGem: "  ¡[ITEM] potenció el poder de [POKEMON]!",
		eatItemWeaken: "  ¡[ITEM] redujo el daño recibido por [POKEMON]!",
		removeItem: "  ¡[POKEMON] perdió su [ITEM]!",
		activateItem: "  (¡[POKEMON] usó su [ITEM]!)",
		activateWeaken: "  ¡[ITEM] redujo el daño recibido por [POKEMON]!",

		damage: "  (¡[POKEMON] recibió daño!)",
		damagePercentage: "  (¡[POKEMON] perdió el [PERCENTAGE] de su salud!)",
		damageFromPokemon: "  ¡[POKEMON] recibió daño por el [ITEM] de [SOURCE]!",
		damageFromItem: "  ¡[POKEMON] recibió daño por su [ITEM]!",
		damageFromPartialTrapping: "  ¡[POKEMON] recibió daño por [MOVE]!",
		heal: "  [POKEMON] recuperó PS.",
		healFromZEffect: "  ¡[POKEMON] recuperó PS usando su Poder Z!",
		healFromEffect: "  [POKEMON] recuperó PS gracias a [EFFECT]",

		boost: "  ¡[POKEMON] aumentó su [STAT]!",
		boost2: "  ¡[POKEMON] aumentó mucho su [STAT]!",
		boost3: "  ¡[POKEMON] aumentó drásticamente su [STAT]!",
		boost0: "  ¡[POKEMON] no puede aumentar más su [STAT]!",
		boostFromItem: "  ¡[ITEM] aumentó la estadística de [STAT] de [POKEMON]!",
		boost2FromItem: "  ¡[ITEM] aumentó mucho la estadística de [STAT] de [POKEMON]!",
		boost3FromItem: "  ¡[ITEM] aumentó drásticamente la estadística de [STAT] de [POKEMON]!",
		boostFromZEffect: "  ¡[POKEMON] aumentó su [STAT] usando su Poder Z!",
		boost2FromZEffect: "  ¡[POKEMON] aumentó mucho su [STAT] usando su Poder Z!",
		boost3FromZEffect: "  ¡[POKEMON] aumentó drásticamente su [STAT] usando su Poder Z!",
		boostMultipleFromZEffect: "  ¡[POKEMON] aumentó sus estadísticas usando su Poder Z!",

		unboost: "  ¡[POKEMON] redujo su [STAT]!",
		unboost2: "  ¡[POKEMON] redujo mucho su [STAT]!",
		unboost3: "  ¡[POKEMON] redujo drásticamente su [STAT]!",
		unboost0: "  ¡[POKEMON] no puede reducir más su [STAT]!",
		unboostFromItem: "  ¡[ITEM] redujo la estadística de [STAT] de [POKEMON]!",
		unboost2FromItem: "  ¡[ITEM] redujo mucho la estadística de [STAT] de [POKEMON]!",
		unboost3FromItem: "  ¡[ITEM] redujo drásticamente la estadística de [STAT] de [POKEMON]!",

		swapBoost: "  ¡[POKEMON] intercambió los cambios de estadísticas con su objetivo!",
		swapOffensiveBoost: "  ¡[POKEMON] intercambió todos los cambios en Ataque y At. Esp. con su objetivo!",
		swapDefensiveBoost: "  ¡[POKEMON] intercambió todos los cambios en Defensa y Def. Esp. con su objetivo!",
		copyBoost: "  ¡[POKEMON] copió los cambios de estadísticas de [TARGET]!",
		clearBoost: "  ¡Se eliminaron los cambios de estadísticas de [POKEMON]!",
		clearBoostFromZEffect: "  ¡[POKEMON] restauró sus estadísticas reducidas a la normalidad usando su Poder Z!",
		invertBoost: "  ¡Se invirtieron los cambios de estadísticas de [POKEMON]!",
		clearAllBoost: "  ¡Se eliminaron todos los cambios de estadísticas!",

		superEffective: "¡Es supereficaz!",
		superEffectiveSpread: "  ¡Es supereficaz contra [POKEMON]!",
		resisted: "No es muy eficaz...",
		resistedSpread: "  No es muy eficaz contra [POKEMON].",
		crit: "  ¡Un golpe crítico!",
		critSpread: "  ¡[POKEMON] ha recibido un golpe crítico!",
		immune: "  No afecta a [POKEMON]...",
		immuneNoPokemon: "  ¡No tuvo efecto!",
		immuneOHKO: "  ¡[POKEMON] no se ve afectado!",
		miss: "  ¡[POKEMON] evitó el ataque!",
		missNoPokemon: "  ¡El ataque de [SOURCE] falló!",

		center: "  ¡Centro automático!",
		noTarget: "  Pero no había objetivo...",
		ohko: "  ¡Es un KO de un solo golpe!",
		combine: "  ¡Los dos movimientos se han unido! ¡Es un movimiento combinado!",
		hitCount: "  ¡El Pokémon fue golpeado [NUMBER] veces!",
		hitCountSingular: "  ¡El Pokémon fue golpeado 1 vez!",

		// Battle tooltip UI strings
		tooltipHP: "PS:",
		tooltipItem: "Objeto:",
		tooltipAbility: "Habilidad:",
		tooltipFainted: "(debilitado)",
		tooltipBasePower: "Potencia base: [POWER]",
		tooltipBasePowerVs: "Potencia base contra [POKEMON]: [POWER]",
		tooltipCantMiss: "no puede fallar",
		tooltipSuppressedByMagicRoom: " ([ITEM] suprimido por Zona Mágica)",
		tooltipSuppressedByEmbargo: " ([ITEM] suprimido por Embargo)",
		tooltipSuppressedByKlutz: " ([ITEM] suprimido por Zoquete)",
		tooltipSuppressedByGastroAcid: " ([ABILITY] suprimida por Bilis)",
		tooltipSuppressedByWeatherAbility: " ([WEATHER] suprimido por [ABILITY])",
		tooltipModifierFrom: " ([FACTOR]&times; de [SOURCE])",
		tooltipWouldTakeIfAbilityRemoved: "Recibiría si se quita la habilidad: [DAMAGE]%",
		tooltipNextDamage: "Próximo daño: [DAMAGE]%",
		tooltipTurnsAsleep: "Turnos dormido: [TURNS]",
		tooltipPixelsHP: "([HP]/[MAXHP] píxeles)",
		tooltipPossibleIllusion: "Posible Ilusión #[INDEX]",
		tooltipItemWas: "[ITEM] fue [EFFECT]",
		tooltipWas: "fue [ITEM]",
		tooltipNone: "Ninguno",
		tooltipAccuracy: "Precisión: [ACCURACY]",
		tooltipTransformedInto: "(Transformado en [FORME])",
		tooltipIndistinguishablePokemon: "(Tu oponente tiene dos Pokémon indistinguibles, por lo que es imposible saber cuál tiene qué movimientos/habilidad/objeto.) ",
		tooltipSpeRange: "<p><small>Vel</small> [MIN] a [MAX] <small>(antes de objetos/habilidades/modificadores)</small></p>",
		tooltipTo: " a ",
		tooltipBase: "base:",
		tooltipTeraType: "Tipo Tera:",
		tooltipTerastallized: "Terastalizó",
		tooltipTypeChanged: "Tipo cambiado",
		tooltipMoreThanFourMoves: "(Más de 4 movimientos suele ser señal de Zoroark/Zorua con Ilusión.) ",
		tooltipZEffect: "Efecto Z: [EFFECT]",
		tooltipCalls: "Llama",
		tooltipRevealed: "(revelado)",
		tooltipPressureGen3: "(Presión no es visible en la Generación 3, así que en ciertas situaciones, puede haberse perdido más PP del mostrado aquí.) ",
		tooltipChangedForme: "(Forma cambiada: [FORME])",
	},

	// stats
	hp: {
		statName: "PS",
		statShortName: "PS",
	},
	atk: {
		statName: "Ataque",
		statShortName: "Atq",
	},
	def: {
		statName: "Defensa",
		statShortName: "Def",
	},
	spa: {
		statName: "Ataque especial",
		statShortName: "AEs",
	},
	spd: {
		statName: "Defensa especial",
		statShortName: "DEs",
	},
	spe: {
		statName: "Velocidad",
		statShortName: "Vel",
	},
	accuracy: {
		statName: "precisión",
	},
	evasion: {
		statName: "evasión",
	},
	spc: {
		statName: "Especial",
		statShortName: "Esp",
	},
	stats: {
		statName: "estadísticas",
	},

	// statuses
	brn: {
		start: "  ¡[POKEMON] se ha quemado!",
		startFromItem: "  ¡[POKEMON] se ha quemado con [ITEM]!",
		alreadyStarted: "  ¡[POKEMON] ya está quemado!",
		end: "  ¡[POKEMON] ya no tiene quemaduras!",
		endFromItem: "  ¡[ITEM] de [POKEMON] curó su quemadura!",
		damage: "  ¡[POKEMON] se resiente de las quemaduras!",
	},
	frz: {
		start: "  ¡[POKEMON] ha sido congelado!",
		alreadyStarted: "  ¡[POKEMON] ya está congelado!",
		end: "  ¡[POKEMON] ya no está congelado!",
		endFromItem: "  ¡[ITEM] de [POKEMON] lo descongeló!",
		endFromMove: "  ¡[POKEMON] ha derretido el hielo con [MOVE]!",
		cant: "¡[POKEMON] está congelado!",
	},
	par: {
		start: "  ¡[POKEMON] sufre parálisis! Quizá no se pueda mover.",
		alreadyStarted: "  ¡[POKEMON] ya está paralizado!",
		end: "  ¡[POKEMON] fue curado de la parálisis!",
		endFromItem: "  ¡[ITEM] de [POKEMON] curó su parálisis!",
		cant: "¡[POKEMON] está paralizado! No se puede mover",
	},
	psn: {
		start: "  ¡[POKEMON] ha sido envenenado!",
		alreadyStarted: "  ¡[POKEMON] ya está envenenado!",
		end: "  ¡[POKEMON] se curó del veneno!",
		endFromItem: "  ¡[ITEM] de [POKEMON] curó su veneno!",
		damage: "  ¡El veneno resta PS a [POKEMON]!",
	},
	tox: {
		start: "  ¡[POKEMON] ha sido gravemente envenenado!",
		startFromItem: "  ¡[POKEMON] ha sido gravemente envenenado por [ITEM]!",
		end: "  ¡[POKEMON] se curó del veneno!",
		endFromItem: "  ¡[ITEM] de [POKEMON] curó su veneno!",
		alreadyStarted: "  ¡[POKEMON] ya está envenenado!",
		damage: "  ¡El veneno resta PS a [POKEMON]!",
	},
	slp: {
		start: "¡[POKEMON] se ha dormido!",
		startFromRest: "¡[POKEMON] durmió y recuperó todos sus PS!",
		alreadyStarted: "¡[POKEMON] ya está dormido!",
		end: "¡[POKEMON] se despertó!",
		endFromItem: "¡[ITEM] de [POKEMON] lo despertó!",
		cant: "¡[POKEMON] está dormido como un tronco!",
	},

	// misc effects
	confusion: {
		start: "¡[POKEMON] se ha quedado confuso!",
		startFromFatigue: "¡El cansancio ha terminado confundiendo a [POKEMON]!",
		end: "¡[POKEMON] ya no está confuso!",
		endFromItem: "¡[ITEM] de [POKEMON] lo sacó de su confusión!",
		alreadyStarted: "¡[POKEMON] ya está confuso!",
		activate: "¡[POKEMON] está confuso!",
		damage: "¡Está tan confuso que se ha herido a sí mismo!",
	},
	drain: {
		heal: "  ¡La energía de [SOURCE] ha sido absorbida!",
	},
	flinch: {
		cant: "¡[POKEMON] se ha amedrentado y no puede lanzar ningún ataque!",
	},
	heal: {
		fail: " ¡[POKEMON] tiene los PS al máximo!",
	},
	healreplacement: {
		activate: " ¡[POKEMON] restaurará los PS de su reemplazo usando su Poder Z!",
	},
	nopp: {
		cant: "[POKEMON] usó [MOVE].\n ¡Pero no le quedan más PP para ejecutar ese movimiento!",
	},
	recharge: {
		cant: "¡[POKEMON] necesita recuperarse de su ataque!",
	},
	recoil: {
		damage: " ¡[POKEMON] también se ha hecho daño!",
	},
	unboost: {
		fail: "  Las estadísticas de [POKEMON] no bajaron.",
		failSingular: "  La estadística de [STAT] de [POKEMON] no bajó.",
	},
	struggle: {
		activate: " ¡[POKEMON] no tiene movimientos restantes!",
	},
	trapped: {
		start: " ¡[POKEMON] ya no puede escapar!",
	},
	dynamax: {
		start: "  (Dinamax de [POKEMON]!)",
		end: "  ([POKEMON] volvió a la normalidad!)",
		block: "  ¡El movimiento fue bloqueado por el poder de Dinamax!",
		fail: "  [POKEMON] negó con la cabeza. Parece que no puede usar este movimiento...",
	},

	// weather
	sandstorm: {
		weatherName: "Tormenta de arena",
		start: "¡Se ha desatado una tormenta de arena!",
		end: "¡La tormenta de arena ha amainado!",
		upkeep: "  (La tormenta de arena arrecia...)",
		damage: "¡La tormenta de arena zarandea a [POKEMON]!",
	},
	sunnyday: {
		weatherName: "Sol",
		start: "¡El sol pega fuerte!",
		end: "¡El sol vuelve a brillar como siempre!",
		upkeep: "  (Hace mucho sol...)",
	},
	raindance: {
		weatherName: "Lluvia",
		start: "¡Ha empezado a llover!",
		end: "¡Ha dejado de llover!",
		upkeep: "  (Está lloviendo...)",
	},
	hail: {
		weatherName: "Granizo",
		start: "¡Ha empezado a granizar!",
		end: "¡Ha dejado de granizar!",
		upkeep: "  (Está granizando...)",
		damage: "¡El granizo golpea a [POKEMON]!",
	},
	snowscape: {
		weatherName: "Nieve",
		start: "¡Ha empezado a nevar!",
		end: " ¡Ha dejado de nevar!",
		upkeep: "  (Está nevando...)",
	},
	desolateland: {
		weatherName: "Sol abrasador",
		start: "¡El sol que hace ahora es realmente abrasador!",
		end: "¡El sol vuelve a brillar como siempre!",
		block: "¡El calor abrasador se mantiene sin perder un ápice de intensidad!",
		blockMove: "¡El sol brilla con tanta intensidad que evapora los ataques de tipo Agua!",
	},
	primordialsea: {
		weatherName: "Diluvio",
		start: "¡Ha empezado a diluviar!",
		end: "Ha dejado de diluviar.",
		block: "¡No parece que vaya a dejar de diluviar!",
		blockMove: "¡El diluvio impide todos los ataques de tipo Fuego!",
	},
	deltastream: {
		weatherName: "Turbulencias",
		start: "¡Las misteriosas turbulencias protegen a los Pokémon de tipo Volador!",
		end: "Las misteriosas turbulencias han amainado.",
		activate: "¡Las misteriosas turbulencias atenúan el ataque!",
		block: "¡Las misteriosas turbulencias continúan sin cesar!",
	},

	// terrain
	electricterrain: {
		start: "¡Se ha formado un campo de corriente eléctrica en el terreno de combate!",
		end: "El campo de corriente eléctrica ha desaparecido.",
		block: "¡El campo eléctrico ha protegido a [POKEMON]!",
	},
	grassyterrain: {
		start: "¡El terreno de combate se ha cubierto de hierba!",
		end: "La hierba ha desaparecido.",
		heal: "¡[POKEMON] ha recuperado PS!",
	},
	mistyterrain: {
		start: "¡La niebla ha envuelto el terreno de combate!",
		end: "La niebla se ha disipado.",
		block: "¡El campo de niebla ha protegido a [POKEMON]!",
	},
	psychicterrain: {
		start: "¡El terreno de combate se ha vuelto muy extraño!",
		end: "Ha desaparecido la extraña sensación que se percibía en el terreno\nde combate.",
		block: "¡El campo psíquico ha protegido a [POKEMON]!",
	},

	// field effects
	gravity: {
		start: "¡La gravedad se ha incrementado!",
		end: "La gravedad ha vuelto a su estado normal.",
		cant: "¡[POKEMON] no puede usar [MOVE] debido a la fuerza de la gravedad!",
		activate: "¡[POKEMON] no ha podido mantenerse en el aire debido al efecto de la gravedad!",
	},
	magicroom: {
		start: "¡Se ha creado un espacio en el que todos los objetos de los Pokémon quedan inutilizados!",
		end: "Los efectos de Zona Mágica sobre los objetos de los Pokémon han desaparecido.",
	},
	mudsport: {
		start: "¡La potencia de los movimientos de tipo Eléctrico ha disminuido!",
		end: "Chapoteo Lodo ha dejado de surtir efecto.",
	},
	trickroom: {
		start: "¡[POKEMON] ha alterado las dimensiones!",
		end: "Se han restaurado las dimensiones alteradas.",
	},
	watersport: {
		start: "¡La potencia de los movimientos de tipo Fuego ha disminuido!",
		end: "Hidrochorro ha dejado de surtir efecto.",
	},
	wonderroom: {
		start: "¡Se ha creado un espacio en el que la Defensa y la Defensa Especial se invierten!",
		end: "Los efectos de Zona Extraña sobre la Defensa y la Defensa Especial han desaparecido.",
	},

	// misc
	crash: {
		damage: "¡[POKEMON] ha fallado y se ha caído al suelo!",
	},
};
