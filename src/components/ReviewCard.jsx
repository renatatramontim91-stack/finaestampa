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
  {
    id: 1,
    name: 'Jacksiane Gottlieb',
    rating: 5,
    comment: 'Amamos as camisetas. Além da arte bem feita os tamanhos foram fidedignos!',
    date: 'Setembro 2026'
  },
  {
    id: 2,
    name: 'Aline Mendes',
    rating: 5,
    comment: 'São extremamente atenciosos, atentos a todos os detalhes, sempre fui muito bem atendida. Super recomendo. E entrega muito rápida.',
    date: 'Setembro 2026'
  },
  {
    id: 3,
    name: 'Alpha Pouey',
    rating: 5,
    comment: 'Ótimo atendimento, e produtos de ótima qualidade.',
    date: 'Setembro 2026'
  },
  {
    id: 4,
    name: 'Ramon Zirbes',
    rating: 5,
    comment: 'Loja com ótima qualidade de produtos.',
    date: 'Setembro 2026'
  }
]

// Get random reviews for display
export const getRandomReviews = (count = 3) => {
  const shuffled = [...sampleReviews].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
