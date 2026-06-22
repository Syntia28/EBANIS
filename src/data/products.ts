import bar from "../../public/galeria/terminados.jpeg"
export interface ProductDetails {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  woods: string[];
  finishes: string[];
  features: string[];
  image: string;
  images?: string[];
  imageCaptions?: string[];
}

export interface ServiceDetails {
  title: string;
  description: string;
  longDescription: string;
  process: string[];
  features: string[];
  image: string;
}

export const PRODUCT_DATA: Record<string, ProductDetails> = {
  "camas": {
    title: "Camas de Madera Maciza",
    category: "Dormitorio",
    description: "Estructuras majestuosas de madera seleccionada diseñadas para durar por generaciones.",
    longDescription: "Nuestras camas de madera maciza representan la fusión perfecta entre resistencia estructural y belleza natural. Cada marco es elaborado utilizando técnicas de ensamble clásicas como la caja y espiga, eliminando la necesidad de tornillería metálica visible. Las vetas continuas de la madera noble se seleccionan a mano para crear paneles de cabecera y estribo que son verdaderas obras de arte natural.",
    woods: ["Roble Americano", "Nogal Negro", "Cedro Andino"],
    finishes: ["Aceite de Tung Rubio", "Cera de Abejas Natural", "Barniz Mate de Alta Resistencia"],
    features: ["Ensamble artesanal tradicional", "Soporte de listones de madera dura integrado", "Acabados 100% ecológicos no tóxicos"],
    image: "/bedroom.png"
  },
  "cabeceras": {
    title: "Cabeceras Tapizadas",
    category: "Dormitorio",
    description: "Paneles acolchados con textiles de alta gama y marcos de madera noble.",
    longDescription: "Diseñadas para aportar confort acústico y una suavidad táctil inigualable al dormitorio. Nuestras cabeceras se fabrican con marcos internos de cedro andino y se tapizan utilizando espumas de alta densidad de memoria y textiles premium certificados de la colección Twinbru. Los marcos exteriores y molduras en madera noble enmarcan el tapizado, creando un contraste lujoso entre la rigidez del roble o nogal y la suavidad del lino o terciopelo.",
    woods: ["Nogal Negro", "Roble Estufado", "Cedro"],
    finishes: ["Barniz de poliuretano mate", "Acabado al aceite natural"],
    features: ["Telas certificadas Twinbru resistentes a manchas", "Detalles de capitoné cosidos a mano", "Aislamiento acústico integrado para el cabecero"],
    image: "/galeria/cabecera_tapizada.png"
  },
  "mesas-noche": {
    title: "Mesas de Noche de Ébano",
    category: "Dormitorio",
    description: "Acompañantes perfectos de cama con cajones de deslizamiento suave y detalles en latón.",
    longDescription: "Nuestras mesas de noche son piezas compactas de alta ebanistería. Fabricadas con maderas oscuras y exóticas como el ébano o nogal texturizado, cuentan con cajones ensamblados con cola de milano tradicional. La suavidad del deslizamiento se garantiza mediante guías de madera encerada o rieles ocultos de última tecnología. Se complementan con sutiles detalles de latón pulido o bronce torneado a mano en tiradores y regatones.",
    woods: ["Ébano Macizo", "Nogal Selecto", "Roble Ahumado"],
    finishes: ["Laca satinada negra", "Aceite danés natural", "Pulido espejo en frentes de cajón"],
    features: ["Cajones con uniones cola de milano", "Carga inalámbrica oculta opcional en superficie", "Interiores de cajones forrados en terciopelo"],
    image: "/galeria/mesa_noche_ebano.png"
  },
  "closets": {
    title: "Armarios & Closets",
    category: "Dormitorio",
    description: "Sistemas integrados de almacenamiento inteligente a la medida de tus necesidades.",
    longDescription: "Creamos armarios y closets que optimizan cada centímetro de tu espacio sin comprometer la elegancia. Diseñados de piso a techo, incorporan divisiones internas inteligentes para ropa larga, calzado, cajoneras suspendidas y compartimentos para accesorios. Las puertas pueden ser batientes con bisagras ocultas de cierre suave o corredizas coplanares de alta gama, terminadas en maderas combinadas, espejos bronceados o vidrio templado.",
    woods: ["Cedro de Olor (interiores)", "Roble", "Alerce"],
    finishes: ["Poliuretano texturizado", "Laca transparente de poro abierto"],
    features: ["Iluminación LED inteligente integrada con sensores de apertura", "Herrajes italianos Blum con garantía de por vida", "Pantaloneros y corbateros extraíbles de precisión"],
    image: "/galeria/armario_closet.png"
  },
  "mesas-centro": {
    title: "Mesas de Centro Esculturales",
    category: "Área Social",
    description: "El punto focal de tu sala de estar, combinando formas orgánicas y materiales nobles.",
    longDescription: "Nuestras mesas de centro van más allá de la funcionalidad para convertirse en esculturas tridimensionales en el centro de tu área social. Diseñadas combinando madera maciza tallada a mano con inserciones de vidrio templado, mármol o bases metálicas de herrería artística. Cada veta y nudo natural de la madera se preserva e ilumina mediante técnicas de acabado transparente para resaltar su carácter único.",
    woods: ["Nogal Negro", "Troncos de Olivo", "Caoba Peruana"],
    finishes: ["Resina epóxica cristalina (opcional)", "Aceite de linaza y tung", "Laca satinada mate"],
    features: ["Cortes transversales de troncos únicos (Live Edge)", "Estructuras de soporte invisibles", "Tratamiento térmico para estabilidad de la madera"],
    image: "/galeria/mesa_centro_escultural.png"
  },
  "consolas": {
    title: "Consolas y Aparadores",
    category: "Área Social",
    description: "Muebles auxiliares de proporciones estilizadas para pasillos, recibidores o comedores.",
    longDescription: "Los aparadores y consolas de Ebanis Soluciones ofrecen soluciones de almacenamiento sofisticadas. Ideales para el recibidor de entrada o como soporte del televisor y vajilla en el comedor. Su construcción robusta cuenta con frentes detallados con patrones geométricos fresados tridimensionalmente o texturas acanaladas en madera de roble, creando hermosos juegos de luces y sombras.",
    woods: ["Roble Francés", "Cedro Rojo", "Nogal"],
    finishes: ["Barniz mate texturizado", "Patina de oro sobre veta (cerusa)", "Laca mate"],
    features: ["Puertas con sistema push-to-open", "Repisas internas de vidrio templado regulables", "Estructura elevada para facilitar la limpieza"],
    image: "/galeria/aparador_consola.png"
  },
  "comedores": {
    title: "Juegos de Comedor de Lujo",
    category: "Área Social",
    description: "Mesas de comedor de gran formato y sillas diseñadas para celebrar reuniones inolvidables.",
    longDescription: "El comedor es el corazón de la convivencia familiar. Nuestras mesas de comedor son construidas con tablones seleccionados de gran anchura y espesor, asegurando una presencia imponente. La estructura inferior está diseñada para maximizar el espacio para las piernas, utilizando patas de madera maciza entrelazadas o bases metálicas geométricas. Cada mesa se acompaña de sillas ergonómicas tapizadas a juego.",
    woods: ["Nogal Americano", "Teca", "Caoba"],
    finishes: ["Poliuretano de alta resistencia al calor y líquidos", "Barniz acrílico mate"],
    features: ["Capacidad personalizada de 6 hasta 14 comensales", "Tableros de una sola pieza o biselados", "Niveladores ocultos para superficies irregulares"],
    image: "/galeria/comedor_lujo.png"
  },
  "sillas": {
    title: "Sillas de Colección",
    category: "Área Social",
    description: "Piezas ergonómicas con curvas fluidas y uniones complejas talladas a mano.",
    longDescription: "Nuestras sillas combinan la ergonomía de vanguardia con la ebanistería artística. Cada curva del respaldo y los apoyabrazos es esculpida y lijada meticulosamente a mano para adaptarse a la anatomía del cuerpo. Las uniones entre las patas y el marco del asiento se realizan mediante espigas pasantes acuñadas, un método tradicional que garantiza una resistencia estructural excepcional a lo largo de las décadas.",
    woods: ["Fresno", "Nogal", "Cerezo"],
    finishes: ["Aceite de tung", "Laca mate natural"],
    features: ["Uniones tradicionales acuñadas expuestas", "Asientos tapizados con espumas de alta resiliencia", "Protectores de piso de cuero natural integrados"],
    image: "/galeria/silla_diseno.png"
  },
  "escritorios": {
    title: "Escritorios Ejecutivos",
    category: "Oficina & Biblioteca",
    description: "Superficies de trabajo refinadas con soluciones tecnológicas discretamente integradas.",
    longDescription: "Pensados para directivos y profesionales que exigen un espacio de trabajo productivo y estéticamente superior. Nuestros escritorios ejecutivos combinan la calidez de la madera noble con áreas de cuero natural incrustadas en la superficie de escritura. Incluyen compartimentos ocultos para la gestión de cableado, tomas de corriente empotradas con tapas basculantes de madera y cajones con cerraduras de seguridad invisibles.",
    woods: ["Nogal Negro", "Caoba", "Ébano de Macasar"],
    finishes: ["Laca de poliuretano de alta resistencia a rayaduras", "Pulido a la cera"],
    features: ["Superficie de cuero natural de grano entero integrada", "Gestión de cables magnética oculta en las patas", "Cajones con amortiguación de impacto"],
    image: "/galeria/escritorio_ejecutivo.png"
  },
  "libreros": {
    title: "Libreros Integrados",
    category: "Oficina & Biblioteca",
    description: "Bibliotecas modulares y a medida diseñadas para albergar tus colecciones con elegancia.",
    longDescription: "Nuestros libreros integrados transforman paredes completas en santuarios de lectura. Diseñados a medida del espacio, combinan repisas sólidas capaces de soportar grandes pesos sin deformarse, cajones inferiores para archivos y nichos con iluminación focalizada para obras de arte. Las repisas cuentan con sistemas de ajuste de altura discretos tallados en la misma madera.",
    woods: ["Roble Americano", "Cedro Andino", "Pino Oregón"],
    finishes: ["Laca transparente mate", "Acabado envejecido a la pátina"],
    features: ["Repisas reforzadas con alma de acero interna para evitar flexiones", "Escaleras de madera deslizantes sobre riel de latón opcionales", "Módulos de iluminación LED indirecta empotrados"],
    image: "/galeria/librero_integrado.png"
  },
  "paneles": {
    title: "Paneles Acústicos de Madera",
    category: "Oficina & Biblioteca",
    description: "Revestimientos de pared que mejoran la acústica mientras embellecen el espacio.",
    longDescription: "Solución de diseño premium que combina confort acústico y diseño de interiores contemporáneo. Nuestros paneles de listones de madera maciza se montan sobre fieltros absorbentes de alta densidad. El espaciado preciso de los listones ayuda a difundir y absorber las ondas de sonido, reduciendo la reverberación en oficinas, salas de reuniones o cines en casa, al mismo tiempo que añade una calidez textural incomparable.",
    woods: ["Roble", "Pino Radiata seleccionado", "Fresno"],
    finishes: ["Ignífugo mate certificado", "Barniz ecológico base agua"],
    features: ["Fieltro acústico de PET reciclado integrado", "Instalación modular limpia sin tornillos expuestos", "Mejora del aislamiento sonoro en hasta un 45%"],
    image: "/galeria/paneles_acusticos.png"
  },
  "cocinas": {
    title: "Muebles de Cocina Premium",
    category: "A Medida",
    description: "Cocinas completas de alta gama que combinan ergonomía, herrajes alemanes y madera noble.",
    longDescription: "Nuestras cocinas a medida son el epítome de la cocina de lujo moderna. Fabricamos gabinetes con núcleos de contrachapado marino de alta resistencia a la humedad, chapados con maderas preciosas con vetas continuas que fluyen horizontalmente a lo largo de todos los frentes. Integramos sistemas de iluminación interior, despensas extraíbles y soluciones de organización de cajones que hacen de la cocina un placer diario.",
    woods: ["Roble Tratado", "Nogal", "Eucalipto Ahumado"],
    finishes: ["Lacas hidrófugas y antihuellas", "Aceites endurecedores resistentes al agua"],
    features: ["Frentes de cajón acoplados con veta continua", "Bisagras y rieles Blum Legrabox con cierre magnético", "Módulos de basura y reciclaje integrados de extracción total"],
    image: "/galeria/cosina.jpeg"
  },
  "barras": {
    title: "Barras & Desayunadores",
    category: "A Medida",
    description: "Áreas sociales integradas a la cocina o salón de estar para momentos de compartir.",
    longDescription: "Diseñamos barras de bar y desayunadores que actúan como puentes de convivencia en el hogar. Fabricados con gruesos tablones de madera Live Edge o voladizos escultóricos que desafían la gravedad. El espacio inferior se equipa con soportes para copas de vino, cavas de madera tallada para botellas, refrigeradores empotrados y tomas de corriente ocultas para pequeños electrodomésticos.",
    woods: ["Teca", "Roble Estufado", "Nogal"],
    finishes: ["Poliuretano de grado alimentario resistente a manchas de alcohol y café", "Aceite cera"],
    features: ["Tableros de barra con bordes orgánicos naturales", "Cavas integradas personalizadas", "Estructuras de soporte reforzadas de acero esmerilado"],
    image: "/galeria/barra.jpeg",
    images: ["/galeria/barra.jpeg", "/galeria/barra1.jpeg"],
    imageCaptions: [
      "Desayunador y barra con tablero Live Edge de madera Teca maciza",
      "Área de barra con soportes flotantes y espacio para cava de vinos"
    ]
  },
  "repisas": {
    title: "Estanterías Iluminadas",
    category: "A Medida",
    description: "Repisas flotantes con iluminación LED invisible empotrada de encendido táctil.",
    longDescription: "Nuestras estanterías flotantes son el complemento minimalista perfecto para cocinas, salas o pasillos. Cada estante de madera maciza se fresa internamente para alojar soportes de acero invisibles de alta resistencia y difusores LED empotrados. La luz se proyecta de manera suave hacia abajo o hacia la pared, iluminando vajillas, libros u objetos decorativos sin deslumbrar el ambiente.",
    woods: ["Roble", "Nogal", "Cedro"],
    finishes: ["Barniz mate de poro cerrado", "Aceite cera"],
    features: ["Soportes internos flotantes con capacidad de hasta 35kg", "Luces LED cálidas regulables (CRI > 90) empotradas a ras de la madera", "Cableado de alimentación totalmente oculto en muros"],
    image: "/galeria/estanteria.jpeg",
    images: ["/galeria/estanteria.jpeg", "/galeria/estanteria1.jpeg", "/galeria/acabados.png"],
    imageCaptions: [
      "Repisa flotante de madera noble con tira de iluminación LED integrada",
      "Módulo de estantería iluminada para almacenaje y decoración",
      "Detalle de los acabados finos e instalación de herrajes ocultos"
    ]
  },
  "vestidores": {
    title: "Vestidores Personalizados (Walk-in Closets)",
    category: "A Medida",
    description: "Tu propio vestidor boutique diseñado con distribución inteligente y acabados de lujo.",
    longDescription: "Transformamos habitaciones completas en vestidores boutique de alta gama. Nuestros diseños de Walk-in Closets optimizan el flujo diario combinando closets abiertos iluminados, pantaloneros extraíbles, zapateras inclinadas con topes de madera y espacios dedicados para abrigos y vestidos largos. Todo fabricado con la calidez del cedro andino aromático para proteger de forma natural tus prendas.",
    woods: ["Cedro Aromático (interiores)", "Roble", "Nogal"],
    finishes: ["Laca transparente mate de bajo olor", "Lustrado a mano"],
    features: ["Zapateras con retroiluminación LED integrada", "Cajones con frentes de vidrio templado para fácil visualización", "Espejo de cuerpo entero giratorio con iluminación perimetral"],
    image: "/galeria/armario_closet.png"
  },
  "tocadores": {
    title: "Tocadores Premium",
    category: "A Medida",
    description: "Espacios de tocador integrados con espejos de iluminación profesional y organizadores dedicados.",
    longDescription: "Diseñados para brindar una experiencia de cuidado personal óptima en el dormitorio o vestidor. Nuestros tocadores cuentan con consolas suspendidas o con patas esbeltas, espejos con luces LED regulables en temperatura (de cálida a fría) y cajoneras específicas para cosméticos y accesorios. El tablero de madera se puede combinar con inserciones de mármol o vidrio para facilitar la limpieza.",
    woods: ["Nogal", "Cerezo", "Roble Blanco"],
    finishes: ["Poliuretano resistente a químicos y cosméticos", "Barniz mate"],
    features: ["Espejos de alta fidelidad con iluminación regulable inteligente y control táctil", "Cajones con bandejas organizadoras de acrílico extraíbles", "Soporte de secadora y plancha de cabello oculto en cajón lateral"],
    image: "/galeria/tocador_premium.png"
  },
  "puertas": {
    title: "Puertas Principales e Interiores",
    category: "A Medida",
    description: "Fabricación de puertas a medida en maderas seleccionadas y melamina con acabados finos.",
    longDescription: "Diseñamos y fabricamos puertas principales pivotantes de gran formato y puertas interiores que combinan la calidez de la madera maciza (cedro, caoba, roble) y la durabilidad de la melamina de alta densidad. Cada puerta es diseñada de forma personalizada, integrando marcos de cajón macizos, tapajuntas a medida y herrajes premium con sistemas de amortiguación o cerraduras magnéticas.",
    woods: ["Cedro Andino", "Caoba Peruana", "Roble Estufado", "Melamina MDF de alta densidad"],
    finishes: ["Poliuretano de alta resistencia", "Barniz marino con filtro UV", "Laqueado texturizado"],
    features: ["Estructuras sólidas a prueba de deformaciones", "Bisagras y cerraduras magnéticas silenciosas integradas", "Instalación en obra con calibración láser por ebanistas"],
    image: "/galeria/puerta.jpeg",
    images: ["/galeria/puerta.jpeg", "/galeria/puerta1.jpeg", "/galeria/puerta2.jpeg"],
    imageCaptions: [
      "Puerta Principal Pivotante de gran formato fabricada en Cedro macizo",
      "Puerta interior con diseño contemporáneo y marcos a medida",
      "Detalle de puerta principal de madera noble con chapa de seguridad"
    ]
  },
  "escaleras": {
    title: "Escaleras de Madera",
    category: "A Medida",
    description: "Estructuras autoportantes y pasamanos de diseño tallados en maderas macizas nobles.",
    longDescription: "Diseñamos y fabricamos escaleras de madera maciza que son verdaderas esculturas estructurales en el hogar. Utilizando maderas duras de alta resistencia como el tornillo, caoba o roble, calculamos cada paso para una ergonomía perfecta y ensamblamos la estructura mediante técnicas tradicionales de ebanistería. Se complementan con pasamanos ergonómicos y detalles en acero o vidrio templado.",
    woods: ["Tornillo Tratado", "Roble Estufado", "Caoba Andina"],
    finishes: ["Poliuretano de alto tránsito mate", "Barniz marino con filtro UV"],
    features: ["Pasos ergonómicos con huella antideslizante", "Uniones tradicionales de alta resistencia estructural", "Nivelación láser y montaje en obra por especialistas"],
    image: "/galeria/escalera.jpeg",
    images: ["/galeria/escalera.jpeg", "/galeria/escalera1.jpeg"],
    imageCaptions: [
      "Escalera autoportante de ebanistería fina con pasamanos de diseño en madera noble",
      "Detalle de los pasos encajados y estructura de alta resistencia"
    ]
  },
  "ventanas": {
    title: "Ventanas de Madera a Medida",
    category: "A Medida",
    description: "Ventanas y balcones de madera noble con altos estándares de hermeticidad y estética.",
    longDescription: "Fabricamos e instalamos ventanas y balcones en maderas altamente resistentes a la intemperie, como el tornillo o el cedro. Cada ventana es construida respetando rigurosamente los diseños estéticos del arquitecto y los requerimientos de la obra, ofreciendo un excelente aislamiento acústico y térmico con un sellado hermético superior.",
    woods: ["Madera Tornillo Tratada", "Cedro Andino"],
    finishes: ["Barniz marino de alta protección UV", "Poliuretano Mate"],
    features: ["Sistemas de rieles y cierres herméticos de alta precisión", "Canales de drenaje pluvial integrados en el marco", "Ajuste perfecto en obra adaptado a las condiciones locales"],
    image: "/galeria/balcon.jpeg"
  }
};

export const SERVICES_DATA: Record<string, ServiceDetails> = {
  "diseno-3d": {
    title: "Modelado y Diseño 3D Interactivos",
    description: "Visualiza digitalmente tus muebles en tu espacio exacto antes del primer corte.",
    longDescription: "En Ebanis Soluciones, eliminamos cualquier incertidumbre en el proceso de diseño. Antes de cortar la madera, creamos gemelos digitales tridimensionales fotorrealistas de tus muebles. Utilizando tecnologías de renderizado avanzadas e interactividad Twinbru 3D, puedes rotar el diseño, previsualizar diferentes maderas y texturas textiles bajo distintas condiciones de luz, e incluso ver cómo se integrará el mueble en una recreación digital de tu habitación real.",
    process: [
      "Toma de medidas digitales y escaneo del espacio en obra.",
      "Desarrollo de propuestas conceptuales y planos de distribución.",
      "Modelado 3D fotorrealista e interactivo con materiales reales.",
      "Presentación virtual y ajustes de materiales (maderas, telas, herrajes)."
    ],
    features: [
      "Interactividad 3D en tiempo real desde tu navegador",
      "Mapeo de texturas físicas reales de maderas y textiles certificados",
      "Planos técnicos detallados listos para aprobación"
    ],
    image: "/bedroom.png"
  },
  "ebanisteria": {
    title: "Ebanistería de Fina Precisión",
    description: "Fabricación artesanal impecable utilizando maderas nobles certificadas.",
    longDescription: "La ebanistería fina es el núcleo de nuestra marca. En nuestro taller de Cajamarca, combinamos las herramientas manuales tradicionales (formones, cepillos de contramano, garlopas) con maquinaria de precisión CNC para garantizar tolerancias milimétricas en las uniones. Seleccionamos individualmente cada tablón de madera noble, respetando su contenido de humedad óptimo para evitar futuras deformaciones y aplicando acabados sedosos que invitan al tacto.",
    process: [
      "Selección y secado controlado de maderas nobles en taller.",
      "Corte y maquinado de precisión de piezas estructurales.",
      "Tallado a mano y ensamble tradicional (cola de milano, caja y espiga).",
      "Lijado progresivo manual y aplicación de acabados naturales."
    ],
    features: [
      "Uso exclusivo de madera maciza seca en cámara",
      "Técnicas de ensamblaje tradicional sin tornillos metálicos expuestos",
      "Acabados sedosos al tacto con aceites naturales y ceras de abeja"
    ],
    image: "/armchair.png"
  },
  "instalacion": {
    title: "Instalación Profesional en Obra",
    description: "Montaje perfecto por nuestro propio equipo de ebanistas calificados.",
    longDescription: "Un mueble extraordinario requiere una instalación impecable. Nuestro propio equipo de ebanistas instaladores viaja a tu residencia para realizar el montaje. Nos encargamos de realizar los ajustes milimétricos necesarios en obra para que los closets, cocinas o libreros encajen a la perfección con las inevitables irregularidades de pisos y muros de concreto. Protegemos tus espacios durante todo el proceso y dejamos el mueble listo para su uso inmediato.",
    process: [
      "Embalaje de seguridad de las piezas con mantas acolchadas en taller.",
      "Transporte especializado al domicilio del cliente.",
      "Montaje estructural, nivelación láser y fijación milimétrica.",
      "Limpieza final del mueble y calibración final de herrajes y luces."
    ],
    features: [
      "Instalación ejecutada por el mismo equipo que fabricó el mueble",
      "Uso de tecnología de nivelación láser de alta precisión",
      "Garantía estructural completa sobre la instalación"
    ],
    image: "/kitchen.png"
  }
};
