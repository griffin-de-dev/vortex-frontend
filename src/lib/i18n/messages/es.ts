// Spanish (es) message catalog.
// Keys must stay in sync with en.ts — the test suite enforces this.
export const es = {
  "nav.branding": "Vortex",
  "nav.explore": "Explorar",
  "nav.becomeSolver": "Conviértete en Solver",
  "nav.docs": "Documentación",
  "nav.myIntents": "Mis Intenciones",
  "nav.openMenu": "Abrir menú",
  "nav.closeMenu": "Cerrar menú",

  "wallet.connect.cta": "Conectar Freighter",
  "wallet.connect.connecting": "Conectando...",
  "wallet.connect.retry": "Reintentar conexión",
  "wallet.disconnect.cta": "Desconectar",
  "wallet.disconnect.aria": "Desconectar billetera {address}",
  "wallet.error.freighterUnavailable":
    "La extensión Freighter no está instalada o habilitada.",
  "wallet.error.connectFailed": "No se pudo conectar la billetera.",

  "swap.chainPicker.title": "Seleccionar cadena origen",
  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección Stellar válida (comienza con G).",

  "activityFeed.status.live": "En vivo",
  "activityFeed.status.polling": "Actualizando",
  "activityFeed.error.unavailable": "El feed en vivo no está disponible ahora.",
  "activityFeed.empty": "Aún no hay llenados.",
  "activityFeed.item.route": "{chain} · vía {solver}",

  "swap.from.label": "De",
  "swap.from.amountLabel": "Cantidad a intercambiar",
  "swap.from.amountPlaceholder": "0",
  "swap.from.selectChain": "Cadena origen, actualmente {name}",
  "swap.from.selectToken": "Seleccionar token origen, actualmente {symbol}",
  "swap.from.approxValue": "≈ ${value}",

  "swap.prices.estimated": "est.",
  "swap.prices.asOf": "Precio estimado al {date}. La cotización en vivo actualizará esto cuando esté disponible.",

  "swap.to.label": "A",
  "swap.to.tokenGroup": "Token de destino",
  "swap.to.quoteLoading": "Cargando cotización…",

  "swap.slippage.label": "Tolerancia de deslizamiento",
  "swap.slippage.inputLabel": "Porcentaje de tolerancia de deslizamiento",
  "swap.slippage.minOut": "Mínimo recibido: {amount} {token}",
  "swap.slippage.zeroWarning": "Un deslizamiento del 0% puede hacer que tu swap falle ante cualquier movimiento de precio.",

  "swap.quote.solver": "Mejor solver",
  "swap.quote.fillTime": "Tiempo estimado",
  "swap.quote.fillTimeValue": "~{seconds}s",
  "swap.quote.priceImpact": "Impacto de precio",
  "swap.quote.priceImpactValue": "{percent}%",
  "swap.quote.priceImpactBelowMin": "<0.01",
  "swap.quote.protocolFee": "Comisión de protocolo",
  "swap.quote.protocolFeeValue": "{percent}%",
  "swap.quote.rate": "Tasa",

  "swap.quote.fillTime.tooltip": "Tiempo estimado para que un solver complete tu swap después de enviarlo. El tiempo real puede variar.",
  "swap.quote.priceImpact.tooltip": "Cuánto mueve tu operación el precio efectivo respecto al precio de mercado. Un impacto alto significa que recibirás menos que la tasa de mercado.",
  "swap.quote.protocolFee.tooltip": "Pequeño porcentaje de comisión que cobra el protocolo Vortex en cada swap liquidado. Se deduce del monto de destino.",
  "swap.quote.unavailable": "Cotización en tiempo real no disponible — mostrando tasa estimada.",
  "swap.quote.noSolver": "No hay solvers disponibles para esta ruta en este momento.",
  "swap.quote.highPriceImpactWarning": "Impacto de precio alto por encima de {threshold}% — revisa antes de intercambiar.",
  "swap.quote.staleWarning": "La cotización está desactualizada. Espera a que se recargue antes de enviar.",

  "swap.submit.connecting": "Conectando billetera…",
  "swap.submit.building": "Preparando swap…",
  "swap.submit.awaitingSignature": "Confirmar en Freighter…",
  "swap.submit.submitting": "Enviando…",
  "swap.submit.findingRoute": "Buscando mejor ruta…",
  "swap.submit.success": "Swap enviado ✓ — iniciar un nuevo swap",
  "swap.submit.enterAmount": "Ingresa un monto",
  "swap.submit.cta": "Intercambiar {amount} {srcToken} → {dstToken}",
  "swap.submit.retryCta":
    "Reintentar: Intercambiar {amount} {srcToken} → {dstToken}",

  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección de Stellar válida (empieza con G).",

  "swap.disclaimer": "El swap se liquida directamente en Stellar · Sin tokens envueltos · Protegido por bonos de solver",

  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección Stellar válida (comienza con G).",

  "home.hero.eyebrow": "Stellar Agentic Hackathon 2025",
  "home.hero.titleLine1": "Intercambia desde cualquier cadena",
  "home.hero.titleLine2": "directamente a Stellar.",
  "home.hero.body":
    "Vortex es un protocolo cross-chain basado en intenciones. Expresa lo que quieres y los solvers compiten por cumplirlo — sin puentes, sin tokens envueltos, sin suposiciones de confianza más allá del bono del solver.",
  "home.hero.solverCta": "Conviértete en solver →",

  "home.stats.totalVolume": "Volumen Total",
  "home.stats.intentsFilled": "Intenciones Completadas",
  "home.stats.activeSolvers": "Solvers Activos",
  "home.stats.avgFillTime": "Tiempo Medio de Llenado",

  "home.pipeline.title": "Cómo funciona",
  "home.pipeline.intent.label": "Intención",
  "home.pipeline.intent.sub": "Tú envías",
  "home.pipeline.auction.label": "Subasta",
  "home.pipeline.auction.sub": "Solvers pujan",
  "home.pipeline.relay.label": "Relay",
  "home.pipeline.relay.sub": "El mejor llena",
  "home.pipeline.settle.label": "Liquidar",
  "home.pipeline.settle.sub": "En Stellar",

  "home.feed.title": "Llenados en Vivo",
  "home.feed.viewAll": "Ver todos →",

  "home.chains.title": "Cadenas soportadas",
  "home.chains.stellarDestination": "Stellar (dest.)",

  "notFound.backHome": "← Volver a Vortex",

  // ── Estados vacíos ─────────────────────────────────────────────────────────

  // /explore — filtros sin resultados
  "explore.empty.title": "Ninguna intención coincide con tus filtros",
  "explore.empty.message": "Intenta ajustar o borrar los filtros de estado y cadena para ver más resultados.",
  "explore.empty.clearFilters": "Limpiar filtros",

  // /explore — error al cargar
  "explore.error.title": "No se pudieron cargar las intenciones",
  "explore.error.message": "Algo salió mal al obtener las intenciones. Verifica tu conexión e inténtalo de nuevo.",

  // /my-intents — sin intenciones aún
  "myIntents.empty.title": "Sin swaps aún",
  "myIntents.empty.message": "No has enviado ningún swap desde esta billetera. Haz tu primer swap para empezar.",
  "myIntents.empty.cta": "Hacer mi primer swap →",

  // /my-intents — filtros sin resultados
  "myIntents.filterEmpty.title": "Ninguna intención coincide con tus filtros",
  "myIntents.filterEmpty.message": "Prueba con un filtro de estado o cadena diferente, o limpia todos los filtros para ver todo.",
  "myIntents.filterEmpty.clearFilters": "Limpiar filtros",

  // ActivityFeed — vacío en despliegue nuevo
  "activityFeed.empty.title": "Sin actividad aún",
  "activityFeed.empty.message": "Esperando las primeras intenciones de swap. Envía un swap para comenzar.",
  "activityFeed.empty.cta": "Hacer swap ahora →",

  "activityFeed.status.live": "En vivo",
  "activityFeed.status.polling": "Consultando",
  "activityFeed.error.unavailable": "Feed en vivo no disponible ahora mismo.",
  "activityFeed.item.route": "{chain} · vía {solver}",

  // solve/[address] — historial de llenados vacío
  "solverDetail.fillHistory.empty.title": "Sin llenados aún",
  "solverDetail.fillHistory.empty.message": "Una vez que este solver empiece a aceptar y llenar intenciones, su historial aparecerá aquí.",

  // Persisted state (#440)
  "persist.reset.toast": "Algunas preferencias guardadas eran de una versión no compatible y se restablecieron.",

  // Explore search, saved views, intent detail (#441-#443)
  "explore.search.label": "Buscar intenciones",
  "explore.search.placeholder": "Busca id, solver o status:filled chain:base",
  "explore.search.helpLabel": "Ayuda de sintaxis de búsqueda",
  "explore.search.helpTitle": "Sintaxis de búsqueda",
  "explore.search.helpText": "Escribe palabras para buscar por id, token, cadena o solver. Usa status:, chain: o token: para filtrar; usa comillas para frases.",
  "explore.search.suggestions": "Sugerencias de búsqueda",
  "explore.search.clearRecent": "Borrar búsquedas recientes",
  "explore.search.loadedOnly": "Buscando solo en los resultados cargados.",
  "explore.search.kind.status": "Estado",
  "explore.search.kind.chain": "Cadena",
  "explore.search.kind.token": "Token",
  "explore.search.kind.recent": "Reciente",
  "explore.range.label": "Filtrar por fecha",
  "explore.range.all": "Todo el tiempo",
  "explore.range.days": "Últimos {days} días",
  "views.title": "Vistas",
  "views.save": "Guardar vista",
  "views.nameLabel": "Nombre de la vista",
  "views.confirm": "Guardar",
  "views.cancel": "Cancelar",
  "views.savedList": "Vistas guardadas",
  "views.rename": "Renombrar vista",
  "views.renameNamed": "Renombrar vista {name}",
  "views.moveUp": "Subir {name}",
  "views.moveDown": "Bajar {name}",
  "views.share": "Copiar enlace para compartir {name}",
  "views.delete": "Eliminar vista {name}",
  "views.builtin.failed7d": "Fallidas últimos 7 días",
  "views.builtin.largeFills": "Llenados grandes",
  "views.notice.saved": "Vista guardada.",
  "views.notice.saveFailed": "No se pudo guardar la vista. Escribe un nombre (máximo {max} vistas).",
  "views.notice.degraded": "Algunos filtros de esta vista ya no están disponibles y se omitieron.",
  "views.notice.linkCopied": "Enlace copiado.",
  "views.notice.copyFailed": "No se pudo copiar el enlace.",
  "timeline.title": "Cronología",
  "timeline.label": "Cronología de la intención",
  "timeline.step.created": "Creada",
  "timeline.step.accepted": "Aceptada",
  "timeline.step.submitted": "Enviada",
  "timeline.step.filled": "Completada",
  "timeline.step.failed": "Fallida",
  "timeline.state.done": "completado",
  "timeline.state.current": "en curso",
  "timeline.state.upcoming": "aún no alcanzado",
  "timeline.state.skipped": "omitido",
  "timeline.after": "+{duration}",
  "timeline.noTimestamp": "Hora no registrada",
  "timeline.skipped": "No ocurrió",
  "timeline.solver": "Solver:",
  "intentDetail.copy.details": "Copiar detalles",
  "intentDetail.copy.json": "Copiar JSON",
  "intentDetail.copy.done": "Copiado al portapapeles.",
  "intentDetail.copy.failed": "No se pudo copiar al portapapeles.",
  "intentDetail.viewAccount": "Ver cuenta de destino en stellar.expert",
  "jsonInspector.title": "Datos sin procesar",
  "jsonInspector.showMore": "Mostrar {count} más",
} as const;
