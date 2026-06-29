const SITE = {
  title: "Alegaciones ciudadanas a la VAU-5",
  subtitle: "Variante de Armilla, Churriana y Las Gabias · Granada",
  description: "Ocho argumentos contra la justificación de una carretera de 37 millones de euros",
  badge: "Alegaciones en trámite de información pública",
  footer: "Alegaciones ciudadanas · VAU-5 · Granada · 2024",
  footerNote: "Consultar el documento completo en el trámite de información pública de la Junta de Andalucía"
};

const SALVEDAD = {
  titulo: "Excepción: el bypass de Las Gabias sí tiene sentido",
  texto: "El tramo entre el Vial del Machuchón y la Segunda Circunvalación elimina el tráfico pesado de la A-338 que atraviesa el núcleo urbano de Las Gabias. Eso tiene beneficios reales y verificables para sus vecinos. No nos oponemos a ese tramo."
};

const RESUMEN = {
  tab: "Resumen",
  titulo: "El problema real existe. La solución propuesta no está justificada.",
  intro: "El corredor Las Gabias–Armilla–Granada sufre congestión real. Nadie lo niega. Lo que estas alegaciones demuestran es que construir una carretera de 37 millones de euros no es la respuesta adecuada, y que el anteproyecto no ha hecho los deberes para demostrarlo.",
  argumentos: [
    { num: "I", label: "Metodología obsoleta", texto: "El análisis se basa en el HCM 2010, un manual americano de ingenieros de tráfico sin valor normativo en España, diseñado para acomodar coches, no para evaluar alternativas." },
    { num: "II", label: "Demanda inducida ignorada", texto: "Las carreteras nuevas se llenan. La ciencia lo demuestra desde los años 90. El anteproyecto no lo menciona ni lo refuta." },
    { num: "III", label: "Cifras fantasiosas", texto: "37.099 vehículos/día en 2047, proyectados a 25 años con un único escenario y sin análisis de incertidumbre. El «Nivel de Servicio B» en el año horizonte delata que el modelo no se cree sus propias cifras." },
    { num: "IV", label: "Sin alternativas modales", texto: "No se ha evaluado un BRT de plataforma reservada ni una red ciclista de calidad por la Vega. El anteproyecto compara trazados de carretera, no soluciones de movilidad." },
    { num: "V", label: "Externalidades no contabilizadas", texto: "Las partículas de neumático y freno, el CO₂ del tráfico inducido y el deterioro de la calidad del aire en la Vega no aparecen en la cuenta." },
    { num: "VI", label: "¿Y cuando llegan a Granada?", texto: "El anteproyecto no analiza qué pasa con 2.782 vehículos/hora cuando intentan entrar a Granada en hora punta. El cuello de botella se desplaza, no desaparece." },
    { num: "VII", label: "Efecto Mestre", texto: "Facilitar el acceso en coche vacía las ciudades. Granada puede perder residentes, comercio de proximidad y cohesión urbana a favor de un modelo suburbano dependiente del vehículo." },
    { num: "VIII", label: "El POTAUG usado al revés", texto: "El anteproyecto invoca el POTAUG para justificar la carretera, pero ese mismo plan clasifica el suelo afectado como de Excepcional Valor Productivo. Esa contradicción no se aborda." }
  ]
};

const ALEGACIONES = [
  {
    tab: "I · Metodología",
    num: "Alegación I",
    titulo: "La justificación se basa en una metodología obsoleta e ideológicamente sesgada",
    resumen: "El anteproyecto usa el Highway Capacity Manual de 2010 (HCM), un manual americano sin valor normativo en España, diseñado para satisfacer la demanda de coches, no para evaluar si una carretera es la mejor solución posible.",
    secciones: [
      {
        titulo: "Sin valor normativo en España",
        texto: "El HCM no forma parte del marco normativo español ni europeo. La Instrucción de Carreteras española no lo contempla. Su uso es una decisión discrecional del equipo redactor, no una exigencia técnica objetiva."
      },
      {
        titulo: "Edición superada incluso dentro de su propio paradigma",
        texto: "El propio Transportation Research Board publicó el <strong>HCM 6th Edition en 2016</strong>, con mayor integración de transporte alternativo. Usar la edición de 2010 —con más de una década de antigüedad— cuando existe una actualización carece de justificación técnica."
      },
      {
        titulo: "Una premisa ideológica disfrazada de ingeniería",
        texto: "El HCM asume que la demanda de tráfico es una variable independiente que la ingeniería debe acomodar. Esta premisa está ampliamente refutada: <strong>la demanda no es exógena, es en parte generada por la propia infraestructura</strong>. Eso es la demanda inducida."
      }
    ]
  },
  {
    tab: "II · Demanda inducida",
    num: "Alegación II",
    titulo: "El anteproyecto ignora la demanda inducida",
    resumen: "Las carreteras nuevas se llenan. Es un fenómeno documentado desde los años 90 y asumido en las políticas europeas de movilidad. El anteproyecto no lo menciona ni lo refuta en ningún punto.",
    secciones: [
      {
        titulo: "¿Qué es la demanda inducida?",
        texto: "Cuando se amplía la capacidad viaria, a medio y largo plazo el tráfico aumenta hasta ocupar la nueva capacidad, reproduciendo o agravando la congestión original. El informe <strong>SACTRA (Reino Unido, 1994)</strong> —referencia institucional europea— ya lo advertía: los modelos convencionales ignoran el tráfico que la propia carretera crea."
      },
      {
        titulo: "El anteproyecto no evalúa este efecto",
        texto: "Si la VAU-5 induce tráfico adicional —como la evidencia predice—, los beneficios en tiempo de recorrido se diluyen en 5-10 años y la congestión en la A-338 puede no mejorar o empeorar."
      },
      {
        titulo: "Contrario al marco europeo",
        texto: "La Estrategia de Movilidad Sostenible de la Comisión Europea (2020) y el Pacto Verde exigen incorporar el tráfico inducido en la evaluación de nuevas infraestructuras. Afirmar que la VAU-5 reducirá emisiones sin modelizar este efecto <strong>carece de base técnica</strong>."
      }
    ]
  },
  {
    tab: "III · Previsiones",
    num: "Alegación III",
    titulo: "Las cifras de tráfico son cuestionables y el resultado revela el sesgo del modelo",
    resumen: "37.099 vehículos/día en 2047, proyectados con un único escenario sin análisis de incertidumbre. Y el «Nivel de Servicio B» en el año horizonte no es un logro: es una señal de alarma.",
    secciones: [
      {
        titulo: "Proyecciones a 25 años sin margen de error",
        texto: "La sobreestimación sistemática en proyectos viarios está documentada institucionalmente en la UE. El anteproyecto presenta una única cifra de IMD a 2047, sin escenarios alternativos, sin análisis de sensibilidad. Eso no es una previsión técnica: es un número de apoyo a una decisión ya tomada."
      },
      {
        titulo: "El «Nivel de Servicio B» es una trampa lógica",
        texto: "Si en 2047 la carretera opera holgadamente por debajo de su capacidad, solo hay dos lecturas posibles: <strong>(a)</strong> la demanda está sobreestimada y la inversión es ineficiente, o <strong>(b)</strong> el tráfico inducido no modelizado llenará la vía mucho antes, reproduciendo la congestión."
      },
      {
        titulo: "El umbral de 1.900 veh/carril/hora no es aplicable aquí",
        texto: "Este valor teórico del HCM presupone condiciones ideales de autopista americana: geometría perfecta, conductor tipo, composición de tráfico homogénea. Trasladarlo a una variante periurbana de Granada con tráfico pesado e intersecciones introduce un error no cuantificado."
      }
    ]
  },
  {
    tab: "IV · Alternativas",
    num: "Alegación IV",
    titulo: "No se han evaluado alternativas de movilidad sostenible",
    resumen: "El anteproyecto compara cuatro trazados de carretera. Pero nunca pregunta si una carretera es la mejor solución. Con 37 millones de euros hay alternativas más baratas, más eficientes y más duraderas.",
    secciones: [
      {
        titulo: "Evaluar alternativas es un requisito, no una opción",
        texto: "Una planificación racional de movilidad —así lo establece el marco europeo— requiere comparar la actuación propuesta con alternativas modales. El anteproyecto no contiene este análisis. No lo hace y no justifica por qué no lo hace."
      },
      {
        titulo: "Bus de Tránsito Rápido (BRT) de plataforma reservada",
        texto: "2.000-4.000 personas/hora/sentido sobre viario existente. Coste estimado: 1-5 M€/km frente a 10-15 M€/km de la carretera. Con 37 millones, el BRT podría cubrir todo el corredor con capacidad sobrante para ampliar frecuencias. El anteproyecto no menciona, evalúa ni descarta esta alternativa."
      },
      {
        titulo: "Red ciclista de calidad por la Vega",
        texto: "Distancias de 4-12 km, terreno llano, óptimo para bicicleta eléctrica. El carril bici adosado a la VAU-5 que menciona el anteproyecto no cuenta: las condiciones de seguridad y confort junto a una autovía de alta capacidad lo hacen inviable para uso cotidiano masivo."
      },
      {
        tipo: "alternativas",
        titulo: "Alternativas disponibles con el mismo presupuesto",
        items: [
          { icono: "🚌", titulo: "BRT de plataforma reservada", desc: "2.000-4.000 personas/hora/sentido sobre viario existente. Coste: 1-5 M€/km frente a 10-15 M€/km de la nueva carretera." },
          { icono: "🚲", titulo: "Red ciclista por la Vega", desc: "Distancias de 4-12 km, terreno llano, óptimo para bicicleta eléctrica. El carril bici adosado a la VAU-5 no es una alternativa real." },
          { icono: "🚊", titulo: "Metro ligero", desc: "Extensión hacia el corredor oeste: Santa Fe, Atarfe, Chauchina, Aeropuerto de Granada-Jaén." },
          { icono: "🏠", titulo: "Vivienda protegida en Granada", desc: "Reducir la necesidad de desplazamiento en origen, atajando la causa estructural del problema." }
        ]
      }
    ]
  },
  {
    tab: "V · Externalidades",
    num: "Alegación V",
    titulo: "El anteproyecto no contabiliza las externalidades que pagaremos todos",
    resumen: "Los beneficios son para los usuarios de la carretera. Los costes —contaminación, CO₂, enfermedades respiratorias— los paga toda la ciudadanía, use o no la carretera.",
    secciones: [
      {
        titulo: "Una cuenta incompleta",
        texto: "La Comisión Europea publica el <em>Handbook on the External Costs of Transport</em> (2019) con valores monetarios de referencia para contaminación, ruido, emisiones y accidentes. El anteproyecto no utiliza este marco ni realiza una evaluación coste-beneficio completa que incluya estas externalidades."
      },
      {
        titulo: "12.000 toneladas de CO₂ adicionales al año",
        texto: "37.099 vehículos/día en 8-10 km de trazado equivalen a ~300.000 vehículos-kilómetro diarios adicionales. Con los factores de emisión del IDAE (~120-130 g CO₂/km), el tráfico inducido podría generar <strong>35-40 toneladas de CO₂ al día, más de 12.000 al año</strong>. La afirmación de que la VAU-5 reducirá emisiones no puede sostenerse sin descartar este efecto."
      },
      {
        titulo: "Los coches eléctricos no resuelven el problema",
        texto: "Las <strong>partículas de desgaste de neumáticos, frenos y superficie de rodadura</strong> son hoy la principal fuente de partículas del tráfico en flotas modernas. La AEMA advierte que los vehículos eléctricos, por su mayor peso, generan incluso más partículas de neumático. Las PM2,5 tienen efectos documentados sobre la salud cardiovascular y respiratoria. Granada, en su cuenca con frecuentes inversiones térmicas, ya supera los límites de PM10 y NO₂ de la Directiva europea."
      }
    ]
  },
  {
    tab: "VI · Granada capital",
    num: "Alegación VI",
    titulo: "¿Y cuando llegan a Granada? El anteproyecto no lo analiza",
    resumen: "2.782 vehículos en hora punta llegarán al extremo norte de la VAU-5 y… ¿qué? El anteproyecto no evalúa qué pasa en las entradas de Granada. El cuello de botella se desplaza, no desaparece.",
    secciones: [
      {
        titulo: "Una carretera de acceso, no de distribución",
        texto: "La VAU-5 vehiculariza tráfico hasta las entradas de Granada. Si esas entradas ya están saturadas en hora punta, el efecto neto es trasladar el cuello de botella desde el corredor periurbano hasta la ciudad, sin reducir la congestión total del sistema."
      },
      {
        titulo: "Picos muy marcados, mañana y tarde",
        texto: "El corredor tiene un patrón típico de movilidad laboral: entrada a Granada de <strong>7:00 a 10:00</strong>, salida de <strong>13:00 a 16:00</strong>. La ventana de demanda máxima es de 2-3 horas. Un vehículo que gana 8 minutos en la variante y los pierde esperando en la Ronda Sur no ha ganado nada."
      },
      {
        titulo: "Los nodos de conexión no están analizados",
        texto: "Un anteproyecto riguroso debería incluir el nivel de servicio de los nodos de entrada a Granada en los escenarios de demanda proyectados. Ese análisis no existe. Los beneficios en tiempo de recorrido están medidos solo en el tramo de la variante, no en el desplazamiento puerta a puerta."
      },
      {
        titulo: "La VAU-5 puede agravar la entrada a Granada",
        texto: "La demanda inducida no solo ocupará el corredor periurbano: aumentará el volumen de vehículos que intentan acceder a Granada simultáneamente. Si ese incremento supera la capacidad de absorción del viario urbano, la congestión en las entradas de la ciudad empeorará."
      }
    ]
  },
  {
    tab: "VII · Territorio",
    num: "Alegación VII",
    titulo: "El efecto Mestre: facilitar el coche vacía las ciudades",
    resumen: "Venecia perdió dos tercios de su población residente cuando se construyó el acceso rodado. La gente se fue a Mestre. Granada no es Venecia, pero la dinámica es la misma.",
    secciones: [
      {
        titulo: "La infraestructura genera el problema que pretende resolver",
        texto: "Las carreteras de alta capacidad no solo responden a la dispersión urbana: la generan y aceleran. Más acceso fácil → más gente en el extrarradio → más demanda de movilidad → más carreteras. El ciclo no se interrumpe ampliando la capacidad: se acelera."
      },
      {
        titulo: "Venecia perdió sus vecinos. Granada puede perder los suyos.",
        texto: "Venecia pasó de 175.000 habitantes a mediados del siglo XX a menos de 50.000 hoy. El puente de acceso facilitó que la gente se fuera a Mestre, donde el coche era viable y la vivienda más barata. Cada mejora de accesibilidad en coche desde el extrarradio hace más viable la opción de salir de Granada, especialmente para quien no puede pagar el precio de la vivienda en la capital."
      },
      {
        titulo: "El modelo suburbano daña el comercio local",
        texto: "Un residente en Las Gabias que trabaja en Granada en coche no irá a comprar al centro: irá al centro comercial de la periferia, con aparcamiento gratis. Granada recibe trabajadores pero pierde consumo cotidiano. Los barrios se vacían de diversidad funcional y se llenan de locales turísticos."
      },
      {
        titulo: "37 millones en vivienda protegida resolverían más",
        texto: "Una parte de los residentes en el cinturón metropolitano no está ahí por elección sino por precio. Vivienda protegida en suelo urbano consolidado de Granada reduciría la demanda de movilidad en origen, sin consumir Vega y con impacto social directo."
      }
    ]
  },
  {
    tab: "VIII · POTAUG",
    num: "Alegación VIII",
    titulo: "El POTAUG usado al revés: ese mismo plan protege el suelo que la VAU-5 consumirá",
    resumen: "El anteproyecto invoca el POTAUG como aval. Pero ese mismo plan clasifica el suelo afectado como de Excepcional Valor Productivo. Esa contradicción no aparece en ninguna página del anteproyecto.",
    secciones: [
      {
        titulo: "Lectura selectiva del mismo documento",
        texto: "El POTAUG (año 2000) reservó un corredor para la VAU-5. También clasificó ese suelo como de <strong>Excepcional Valor Productivo</strong> de la Vega. Las dos determinaciones coexisten en el plan. Su compatibilidad real debe acreditarse, no asumirse. El anteproyecto usa la primera y silencia la segunda."
      },
      {
        titulo: "Una reserva de 2000 no es un cheque en blanco para 2024",
        texto: "Han pasado 24 años. La Vega ha perdido mucho más suelo agrícola desde entonces. El valor relativo de lo que queda es hoy mucho mayor. Un plan de ordenación no existe para ejecutar automáticamente lo previsto: existe para ordenar el territorio según los valores de cada momento. Esa justificación actualizada no existe en el anteproyecto."
      },
      {
        titulo: "El daño acumulado importa",
        texto: "La Vega ya está muy fragmentada por carreteras, polígonos y urbanizaciones. Una nueva infraestructura lineal no puede evaluarse solo por los metros cuadrados que ocupa directamente: también fragmenta las parcelas colindantes y destruye conectividad. El anteproyecto no realiza este análisis acumulativo."
      },
      {
        titulo: "El suelo de la Vega no se recupera",
        texto: "Una vez sellado bajo una carretera, el suelo agrícola de la Vega de Granada —formado por siglos de sedimentación y laboreo— no vuelve. Eso exige un estándar de justificación especialmente alto: no basta con que la actuación sea conveniente; debe ser necesaria y sin alternativa viable. Ese listón no se alcanza."
      }
    ]
  }
];

const PETICION = {
  tab: "Petición",
  num: "Conclusiones y petición formal",
  titulo: "Lo que pedimos",
  resumen: "El problema de movilidad es real. La solución propuesta no está justificada. Pedimos que se retire el proyecto, se estudien alternativas reales y los fondos se redirijan a actuaciones que sí funcionan.",
  intro: "Las alegaciones anteriores documentan un patrón de omisiones que no puede atribuirse a limitaciones de información: el fenómeno de la demanda inducida, la evaluación de alternativas modales, el análisis de externalidades sobre la calidad del aire, el impacto acumulativo sobre el suelo de la Vega o la capacidad de absorción del viario de Granada capital son aspectos conocidos, accesibles y exigibles en cualquier evaluación rigurosa. Su ausencia simultánea sugiere que el proceso técnico no ha partido de una pregunta abierta —¿cuál es la mejor solución?— sino de una respuesta previamente establecida para la que se ha construido la justificación.",
  peticiones: [
    {
      num: "1",
      titulo: "Retirada del proyecto",
      texto: "En todos sus tramos excepto el bypass de Las Gabias, al no estar suficientemente justificada su necesidad conforme al marco normativo europeo y español vigente."
    },
    {
      num: "2",
      titulo: "Estudio de movilidad integral",
      texto: "Del corredor, que incorpore demanda inducida, evaluación de alternativas modales y análisis coste-beneficio completo con las externalidades del tráfico rodado."
    },
    {
      num: "3",
      titulo: "Redireccionamiento de los fondos",
      texto: "Hacia actuaciones de movilidad sostenible: BRT Las Gabias–Granada, red ciclista por la Vega, mejora del transporte público a Santa Fe, Atarfe, Chauchina y el Aeropuerto, estudio de metro ligero y promoción de vivienda protegida en suelo urbano de Granada."
    },
    {
      num: "4",
      titulo: "Respuesta motivada",
      texto: "Con respuesta expresa a cada uno de los argumentos planteados por los servicios técnicos competentes, conforme a lo exigido por el procedimiento de información pública."
    }
  ]
};
