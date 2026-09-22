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
  { id: 13, name: 'Fernando Rogerio Oliveira Alves Alves', rating: 5, comment: 'Já fiz vários uniforme boa empresa recomendo pelo atendimento e pela compreensão de atendimento', date: 'Setembro 2026' }
]

// Get random reviews for display
export const getRandomReviews = (count = 3) => {
  const shuffled = [...sampleReviews].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
