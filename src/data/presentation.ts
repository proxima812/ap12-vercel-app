type Social = {
  label: string
  link: string
}

type Presentation = {
  mail: string
  title: string
  description: string
  socials: Social[]
  profile?: string
}

const presentation: Presentation = {
  mail: '',
  title: 'Анонимные Прокрастинаторы',
  // profile: "/profile.webp",
  description:
    '*Анонимные Прокрастинаторы* - это сообщество, объединяющее мужчин и женщин, которые делятся друг с другом своим *опытом*, *силами* и *надеждами* с целью помочь себе и другим помочь преодолеть *прокрастинацию.*',
  socials: [
    {
      label: 'Telegram группа',
      link: 'https://t.me/+nSWS3inC4gE2Njg6',
    },
  ],
}

export default presentation
