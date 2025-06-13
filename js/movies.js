const movies = [
  {
    id: "aJ-HZuLcKeA",
    title: "Growcast #00 | Conheça a Growdev",
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/hqdefault.jpg",
    link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
    category: "growcast"
  },
  {
    id: "7OWT3lfHYvE",
    title: "Growcast #01 | As profissões do futuro",
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/hqdefault.jpg",
    link: "https://www.youtube.com/embed/7OWT3lfH",
    category: "growcast"
  },
  {
    id: "ci1eQGPK89o",
    title: "Growcast #02 | Como seguir a carreira internacional?",
    img: "https://img.youtube.com/vi/ci1eQGPK89o/hqdefault.jpg",
    link: "https://www.youtube.com/embed/ci1eQGPK89o",
    category: "growcast"
  },
  {
    id: "WM7pGG7OicQ",
    title: "Growcast #03 | Superando os desafios da carreira de Dev!",
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/hqdefault.jpg",
    link: "https://www.youtube.com/embed/WM7pGG7OicQ",
    category: "growcast"
  },
  {
    id: "2c8VOBZ160Y",
    title: "Growcast #04 | Agile Master: tudo sobre a profissão!",
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/hqdefault.jpg",
    link: "https://www.youtube.com/embed/2c8VOBZ160Y",
    category: "growcast"
  },
  {
    id: "mxnEm03cYPc",
    title: "Growcast #5 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    img: "https://img.youtube.com/vi/mxnEm03cYPc/hqdefault.jpg",
    link: "https://www.youtube.com/embed/mxnEm03cYPc",
    category: "growcast"
  },
  {
    id: "m7DyR07KrOE",
    title: "Growcast #06 | Mulheres e inclusão na tecnologia",
    img: "https://img.youtube.com/vi/m7DyR07KrOE/hqdefault.jpg",
    link: "https://www.youtube.com/embed/m7DyR07KrOE",
    category: "growcast"
  },
  {
    id: "vW8G9KPwRL0",
    title: "Growcast #07 | Desenvolvendo profissionais na área de TI",
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/hqdefault.jpg",
    link: "https://www.youtube.com/embed/vW8G9KPwRL0",
    category: "growcast"
  },
  {
    id: "_Ut2KqAqPyk",
    title: "Growcast #8 | A solução que está transformando o mercado de TI no Brasil",
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/hqdefault.jpg",
    link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
    category: "growcast"
  },
  {
    id: "WKbLXuP9S-c",
    title: "Webinar #1 - Recriando a interface do Linkedin com Flutter",
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/hqdefault.jpg",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c",
    category: "webinar"
  },
  {
    id: "dJ6y1zMjVXU",
    title: "Webinar #2 - Recriando a interface do Instagram com Flutter",
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/hqdefault.jpg",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
    category: "webinar"
  },
  {
    id: "8rdJsqUjsGg",
    title: "Webinar #3- Recriando a interface do iFood com Flutter",
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/hqdefault.jpg",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg",
    category: "webinar"
  },
  {
    id: "C4p_7qBsECw",
    title: "Webinar #4 - Recriando a interface do PicPay com Flutter",
    img: "https://img.youtube.com/vi/C4p_7qBsECw/hqdefault.jpg",
    link: "https://www.youtube.com/embed/C4p_7qBsECw",
    category: "webinar"
  },
  {
    id: "L1pKoMC6hWk",
    title: "Webinar #5 - Recriando o layout do WhatsApp com Flutter",
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/hqdefault.jpg",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk",
    category: "webinar"
  },
  {
    id: "-26aqPtgoEY",
    title: "UX/UI #1: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    img: "https://img.youtube.com/vi/-26aqPtgoEY/hqdefault.jpg",
    link: "https://www.youtube.com/embed/-26aqPtgoEY",
    category: "ux-ui"
  },
  {
    id: "8sd3wuKTZMA",
    title: "UX/UI #2: O profissional de UX/UI Design no mercado digital - Growdev",
    img: "https://img.youtube.com/vi/8sd3wuKTZMA/hqdefault.jpg",
    link: "https://www.youtube.com/embed/8sd3wuKTZMA",
    category: "ux-ui"
  },
  {
    id: "ZMZjQ9aRuIY",
    title: "UX/UI #3: As oportunidades de estudar um programa de formação pagando após formado",
    img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/hqdefault.jpg",
    link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
    category: "ux-ui"
  },
  {
    id: "cwqDu0ZzbYE",
    title: " UX/UI #4: Como migrar para o UX/UI Design: a trajetória de uma designer",
    img: "https://img.youtube.com/vi/cwqDu0ZzbYE/hqdefault.jpg",
    link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
    category: "ux-ui"
  },
  {
    id: "FiZMowbaiJA",
    title: "UX/UI #5: O UX/UI Design é para todos?",
    img: "https://img.youtube.com/vi/FiZMowbaiJA/hqdefault.jpg",
    link: "https://www.youtube.com/embed/FiZMowbaiJA",
    category: "ux-ui"
  },
  {
    id: "ouDn8z3PSqs",
    title: " Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    img: "https://img.youtube.com/vi/ouDn8z3PSqs/hqdefault.jpg",
    link: "https://www.youtube.com/embed/ouDn8z3PSqs",
    category: "geral"
  },
  {
    id: "QsuhYgsSYQo",
    title: "Célula de talentos - Uma solução Growdev",
    img: "https://img.youtube.com/vi/QsuhYgsSYQo/hqdefault.jpg",
    link: "https://www.youtube.com/embed/QsuhYgsSYQo",
    category: "geral"
  },
  {
    id: "nKGbolkirBM",
    title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    img: "https://img.youtube.com/vi/nKGbolkirBM/hqdefault.jpg",
    link: "https://www.youtube.com/embed/nKGbolkirBM",
    category: "geral"
  },
  {
    id: "cQDQNX6NXYo",
    title: "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    img: "https://img.youtube.com/vi/cQDQNX6NXYo/hqdefault.jpg",
    link: "https://www.youtube.com/embed/cQDQNX6NXYo",
    category: "geral"
  },
  {
    id: "6sZPsqNjeek",
    title: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    img: "https://img.youtube.com/vi/6sZPsqNjeek/hqdefault.jpg",
    link: "https://www.youtube.com/embed/6sZPsqNjeek",
    category: "geral"
  },
];