import {
  facebook,
  instagram,
  home,
  school,
  lightbulb,
  pencil,
  gallery,
  phone,
  escuelaVieja1,
  escuelaVieja2,
  inicial,
  primario,
  secundario,
  facebookWhite,
  instagramWhite,
  galeria1,
  galeria2,
  galeria3,
  galeria4,
  messi,
  mail,
  location,
  time,
} from '../assets';

export const navLinks = [
  {
    id: 'institucion',
    title: 'Institución',
    icon: lightbulb,
  },
  {
    id: 'niveles',
    title: 'Niveles',
    icon: school,
  },
  {
    id: 'galeria',
    title: 'Galería',
    icon: gallery,
  },
  {
    id: 'inscripcion',
    title: 'Inscripción',
    icon: pencil,
  },
  {
    id: 'contacto',
    title: 'Contacto',
    icon: phone,
  },
];

export const institucionInfo = [
  {
    id: 1,
    icono: pencil,
    title: 'Nuestra historia',
    description:
      'Hace 34 anos el Colegio Tomas A. Edison dio sus primeros pasos en la educacion con el Jardin Semillitas. Un 4 de abril de 1988 abria sus puertas por primera vez un proyecto familiar que guardaba internamente muchos deseos, grandes expectativas y el anhelo de “Construir para crecer”.\n Y este lema fue dando sus frutos...\n En marzo de 1993 dando la bienvenida al Nivel Primario. Despidiendo a sus primeros egresados del 3er ciclo de EGB en el ano 2001. Y dandole vida a su Nivel Polimodal en el ano 2003.',
    images: [
      {
        id: 1,
        link: escuelaVieja1,
      },
      {
        id: 2,
        link: escuelaVieja2,
      },
    ],
  },
  {
    id: 2,
    icono: pencil,
    title: 'Nuestro ideario',
    description:
      'Hace 34 anos el Colegio Tomas A. Edison dio sus primeros pasos en la educacion con el Jardin Semillitas. Un 4 de abril de 1988 abria sus puertas por primera vez un proyecto familiar que guardaba internamente muchos deseos, grandes expectativas y el anhelo de “Construir para crecer”.\n Y este lema fue dando sus frutos...\n En marzo de 1993 dando la bienvenida al Nivel Primario. Despidiendo a sus primeros egresados del 3er ciclo de EGB en el ano 2001. Y dandole vida a su Nivel Polimodal en el ano 2003.',
    images: '',
  },
  {
    id: 3,
    icono: pencil,
    title: 'Objetivos generales',
    description:
      'Hace 34 anos el Colegio Tomas A. Edison dio sus primeros pasos en la educacion con el Jardin Semillitas. Un 4 de abril de 1988 abria sus puertas por primera vez un proyecto familiar que guardaba internamente muchos deseos, grandes expectativas y el anhelo de “Construir para crecer”.\n Y este lema fue dando sus frutos...\n En marzo de 1993 dando la bienvenida al Nivel Primario. Despidiendo a sus primeros egresados del 3er ciclo de EGB en el ano 2001. Y dandole vida a su Nivel Polimodal en el ano 2003.',
    images: '',
  },
  {
    id: 4,
    icono: pencil,
    title: 'Perfil del educando',
    description:
      'Hace 34 anos el Colegio Tomas A. Edison dio sus primeros pasos en la educacion con el Jardin Semillitas. Un 4 de abril de 1988 abria sus puertas por primera vez un proyecto familiar que guardaba internamente muchos deseos, grandes expectativas y el anhelo de “Construir para crecer”.\n Y este lema fue dando sus frutos...\n En marzo de 1993 dando la bienvenida al Nivel Primario. Despidiendo a sus primeros egresados del 3er ciclo de EGB en el ano 2001. Y dandole vida a su Nivel Polimodal en el ano 2003.',
    images: [
      {
        id: 1,
        link: escuelaVieja1,
      },
      {
        id: 2,
        link: escuelaVieja2,
      },
    ],
  },
];

export const requisitos = [
  {
    id: 1,
    icono: pencil,
    title: 'Requisitos',
    description:
      'sos en la educacion con el Jardin Semillitas. Un 4 de abril de 1988 abria sus puertas por primera vez un proyecto familiar que guardaba internamente muchos deseos, grandes expectativas y el anhelo de “Construir para c',
    images: '',
  },
];

export const niveles = [
  {
    id: 'inicial',
    title: 'Inicial',
    turno: 'tarde',
    icon: inicial,
    oferta: [
      {
        id: 1,
        icono: pencil,
        title: 'Programación y robótica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
      {
        id: 3,
        icono: pencil,
        title: 'Convenio CEM English',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
      {
        id: 3,
        icono: pencil,
        title: 'Huerta escolar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
    ],
    uniforme: [
      {
        id: 1,
        title: 'Conjunto deportivo azul marino',
      },
      {
        id: 2,
        title: 'Chomba blanca',
      },
      {
        id: 3,
        title: 'Sweater gris',
      },
    ],
    images: [
      {
        id: 1,
        alt: 'galeria-1',
        link: galeria1,
      },
      {
        id: 2,
        alt: 'galeria-2',
        link: galeria2,
      },
      {
        id: 3,
        alt: 'galeria-3',
        link: galeria3,
      },
      {
        id: 4,
        alt: 'galeria-4',
        link: galeria4,
      },
    ],
  },
  {
    id: 'primario',
    title: 'Primario',
    turno: 'tarde',
    icon: primario,
    oferta: [
      {
        id: 1,
        icono: pencil,
        title: 'Programación y robótica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
      {
        id: 3,
        icono: pencil,
        title: 'Convenio CEM English',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
      {
        id: 3,
        icono: pencil,
        title: 'Huerta escolar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
    ],
    uniforme: [
      {
        id: 1,
        title: 'Conjunto deportivo azul marino',
      },
      {
        id: 2,
        title: 'Chomba blanca',
      },
      {
        id: 3,
        title: 'Sweater gris',
      },
    ],
    images: [
      {
        id: 1,
        alt: 'galeria-1',
        link: galeria1,
      },
      {
        id: 2,
        alt: 'galeria-2',
        link: galeria2,
      },
      {
        id: 3,
        alt: 'galeria-3',
        link: galeria3,
      },
      {
        id: 4,
        alt: 'galeria-4',
        link: galeria4,
      },
    ],
  },
  {
    id: 'secundario',
    title: 'Secundario',
    turno: 'mañana',
    icon: secundario,
    oferta: [
      {
        id: 1,
        icono: pencil,
        title: 'Programación y robótica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
      {
        id: 3,
        icono: pencil,
        title: 'Convenio CEM English',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
      {
        id: 3,
        icono: pencil,
        title: 'Huerta escolar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis tempor neque, ut faucibus nulla consequat nec. Vivamus non nisl elit. Proin vitae elit id velit tincidunt aliquam a vulputate augue. ',
        images: '',
      },
    ],
    uniforme: [
      {
        id: 1,
        title: 'Conjunto deportivo azul marino',
      },
      {
        id: 2,
        title: 'Chomba blanca',
      },
      {
        id: 3,
        title: 'Sweater gris',
      },
    ],
    images: [
      {
        id: 1,
        alt: 'galeria-1',
        link: galeria1,
      },
      {
        id: 2,
        alt: 'galeria-2',
        link: galeria2,
      },
      {
        id: 3,
        alt: 'galeria-3',
        link: galeria3,
      },
      {
        id: 4,
        alt: 'galeria-4',
        link: galeria4,
      },
    ],
  },
];

export const mainGallery = [
  {
    id: 1,
    alt: 'galeria-1',
    link: galeria1,
  },
  {
    id: 2,
    alt: 'galeria-2',
    link: galeria2,
  },
  {
    id: 3,
    alt: 'galeria-3',
    link: galeria3,
  },
  {
    id: 4,
    alt: 'galeria-4',
    link: galeria4,
  },
  {
    id: 5,
    alt: 'messi',
    link: messi,
  },
];

export const contacto = [
  {
    id: 'telefono',
    icon: phone,
    desc: '(0223) 480-5042',
  },
  {
    id: 'horario',
    icon: time,
    desc: 'Lunes a viernes \n 9:00 a 17:00',
  },
  {
    id: 'mail',
    icon: mail,
    desc: 'tomasedison@hotmail.com',
  },
  {
    id: 'direccion',
    icon: location,
    desc: 'William Morris 3566',
  },
];

export const redesSociales = [
  {
    id: 'facebook',
    title: 'Facebbok',
    icon: facebook,
    iconWhite: facebookWhite,
    link: 'https://www.facebook.com/colegiotaemdp',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    icon: instagram,
    iconWhite: instagramWhite,
    link: 'https://www.instagram.com/colegiotaemdp/?fbclid=IwAR2mLRCcbFlN2caOKMkugIBNyHUojXD2aOvV2bI96N8QmMZgUQlODT_brgU',
  },
];
