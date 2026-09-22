export default function ReviewCard({ review }) {
  return (
    <div className="card glass-hover">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl font-bold text-cyan-400">
          {review.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold">{review.name}</span>
            <span className="text-yellow-400">
              {'⭐'.repeat(review.rating)}
            </span>
          </div>
          <p className="text-white/70 text-sm">{review.comment}</p>
          <span className="text-xs text-white/40 mt-2 block">{review.date}</span>
        </div>
      </div>
    </div>
  )
}

// Sample reviews data - expanded
export const sampleReviews = [
  { id: 1, name: 'Jacksiane Gottlieb', rating: 5, comment: 'Amamos as camisetas. Além da arte bem feita os tamanhos foram fidedignos!', date: 'Setembro 2026' },
  { id: 2, name: 'Aline Mendes', rating: 5, comment: 'São extremamente atenciosos, atentos a todos os detalhes, sempre fui muito bem atendida. Super recomendo. E entrega muito rápida.', date: 'Setembro 2026' },
  { id: 3, name: 'Alpha Pouey', rating: 5, comment: 'Ótimo atendimento, e produtos de ótima qualidade.', date: 'Setembro 2026' },
  { id: 4, name: 'Ramon Zirbes', rating: 5, comment: 'Loja com ótima qualidade de produtos.', date: 'Setembro 2026' },
  { id: 5, name: 'Davi Marinho', rating: 5, comment: 'Empresa top! Produtos de excelente qualidade!! Recomendo!!', date: 'Setembro 2026' },
  { id: 6, name: 'Jean Marcel', rating: 5, comment: 'Empresa com extremo zelo pelo cliente! Ótimos produtos e excelente atendimento!', date: 'Setembro 2026' },
  { id: 7, name: 'Geziel Paz', rating: 5, comment: 'Excelente recomendo, é pontual com a entrega', date: 'Setembro 2026' },
  { id: 8, name: 'Daniela Scheffer', rating: 5, comment: 'Produtos de excelente qualidade. Já encomendei várias vezes, inclusive para dar se presente e foi um sucesso!', date: 'Setembro 2026' },
  { id: 9, name: 'Mariana Moreira', rating: 5, comment: 'Ótima experiência, produtos de qualidade! Super rápido a entrega!', date: 'Setembro 2026' },
  { id: 10, name: 'Jonas Augusto Schiefelbein', rating: 5, comment: 'Ótimo serviço, produtos de qualidade. 👏🏻👏🏻👏🏻', date: 'Setembro 2026' },
  { id: 11, name: 'Marcia Rech', rating: 5, comment: 'A caneca ficou linda, super indico', date: 'Setembro 2026' },
  { id: 12, name: 'Almei Rocha', rating: 5, comment: 'Fui atendida rapidamente e fizeram conforme eu queria. Com muito carinho. Nota 1000', date: 'Setembro 2026' },
  { id: 13, name: 'Fernando Rogerio Oliveira Alves Alves', rating: 5, comment: 'Já fiz vários uniforme boa empresa recomendo pelo atendimento e pela compreensão de atendimento', date: 'Setembro 2026' },
  { id: 14, name: 'Keyliane Gonçalves', rating: 5, comment: 'Ótimo atendimento, as camisetas com um tecido ótimo e lindas', date: 'Avaliação no Google' },
  { id: 15, name: 'Dilma Maria Ramos Ferreira', rating: 5, comment: 'Ótimo atendimento! Trabalho muito bom!', date: 'Avaliação no Google' },
  { id: 16, name: 'Andriele Moraes', rating: 5, comment: 'Adoro o trabalho. Impressões de qualidade e com muito cuidado no atendimento, entrega rápida e eficiente. Já comprei várias vezes e continuarei comprando. Super recomendo.', date: 'Avaliação no Google' },
  { id: 17, name: 'Nara Regina', rating: 5, comment: 'Produtos muito lindos e de ótima qualidade.', date: 'Avaliação no Google' },
  { id: 18, name: 'Tayna Aparecida', rating: 5, comment: 'Super indico, entrega rápida, produto de alta qualidade. Vale muito a pena, amei!', date: 'Avaliação no Google' },
  { id: 19, name: 'Viviani Vargas', rating: 5, comment: 'Adorei o trabalho da Fina Estampa! Atendimento excelente, serviço muito bem feito e entrega super rápida. Recomendo de olhos fechados!', date: 'Avaliação no Google' },
  { id: 20, name: 'Victoria Carolina', rating: 5, comment: 'Produto de qualidade e entrega no prazo, muito bom, super indico.', date: 'Avaliação no Google' },
  { id: 21, name: 'Matheus Rodrigues', rating: 5, comment: 'Excelente atendimento e cuidado nos detalhes do pedido. Recomendo muito e, sempre que precisar, voltarei.', date: 'Avaliação no Google' },
  { id: 22, name: 'Kailainy Nunes', rating: 5, comment: 'Trabalho super ágil e atendimento excelente! A caneca que encomendei ficou linda, feita com muito capricho.', date: 'Avaliação no Google' },
  { id: 23, name: 'Cinara Paungartner Becker', rating: 5, comment: 'Eu recomendo, produtos de ótima qualidade, bom atendimento e com preços muito acessíveis.', date: 'Avaliação no Google' },
  { id: 24, name: 'Thainá Rodrigues', rating: 5, comment: 'Serviço de qualidade! Atendimento top!', date: 'Avaliação no Google' },
  { id: 25, name: 'Camila Moureira', rating: 5, comment: 'Maravilhosa.', date: 'Avaliação no Google' },
  { id: 26, name: 'Ananda Garcia', rating: 5, comment: 'Super indico. Trabalho perfeito.', date: 'Avaliação no Google' },
  { id: 27, name: 'Sueli Moraes', rating: 5, comment: 'Produtos de qualidade e atendimento muito bom. Recomendo.', date: 'Avaliação no Google' },
  { id: 28, name: 'Mayra Ressel', rating: 5, comment: 'Serviço descomplicado e ágil. Adorei o atendimento e, caso eu precise novamente, será o lugar que vou procurar. Muito obrigada.', date: 'Avaliação no Google' },
  { id: 29, name: 'Carlene Leal', rating: 5, comment: 'Super recomendo, atendimento de qualidade e conta com uma variedade de produtos personalizados.', date: 'Avaliação no Google' },
  { id: 30, name: 'Altiles Marcos da Silva', rating: 5, comment: 'Ótima.', date: 'Avaliação no Google' },
  { id: 31, name: 'Indio Schultz', rating: 5, comment: 'Ótimos produtos, praticidade e flexibilidade no pedido e entrega rápida! Top, recomendo.', date: 'Avaliação no Google' }
]

// Get random reviews for display
export const getRandomReviews = (count = 3) => {
  const shuffled = [...sampleReviews].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
