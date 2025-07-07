"use client"

import type React from "react"
import { useState } from "react"
import { XCircle } from "lucide-react"

interface Card {
  id: number
  title: string
  author: string
  image: string
  content: string
  tags: string[]
  date: Date
  readTime: number
}

// Helper function to calculate read time
const calculateReadTime = (content: string): number => {
  return Math.ceil(content.length / 1000)
}

// Helper function to generate random date between Jan 25 and May 25, 2024
const generateRandomDate = (): Date => {
  const start = new Date(2024, 0, 25).getTime()
  const end = new Date(2024, 4, 25).getTime()
  const randomTime = start + Math.random() * (end - start)
  return new Date(randomTime)
}

const dummyCards: Card[] = [
  {
    id: 1,
    title: "Secure Authentication Patterns",
    author: "Cymate",
    image: "/placeholder.svg?height=300&width=300",
    tags: ["cybersecurity", "authentication", "best-practices"],
    content: "This inspiration showcases various secure authentication patterns, including multi-factor authentication, biometric verification, and token-based systems. It emphasizes the importance of layered security and user-friendly design in modern authentication processes.",
    date: generateRandomDate(),
    readTime: calculateReadTime("This inspiration showcases various secure authentication patterns, including multi-factor authentication, biometric verification, and token-based systems. It emphasizes the importance of layered security and user-friendly design in modern authentication processes.")
  },
  {
    id: 2,
    title: "Microservices Architecture",
    author: "Cymate",
    image: "/placeholder.svg?height=300&width=300",
    tags: ["development", "microservices", "architecture"],
    content: "This inspiration delves into the world of microservices architecture, highlighting its benefits in scalability and maintainability. It covers key concepts such as service discovery, API gateways, and strategies for breaking down monolithic applications into microservices.",
    date: generateRandomDate(),
    readTime: calculateReadTime("This inspiration delves into the world of microservices architecture, highlighting its benefits in scalability and maintainability. It covers key concepts such as service discovery, API gateways, and strategies for breaking down monolithic applications into microservices.")
  },
  {
    id: 3,
    title: "Blockchain in Cybersecurity",
    author: "Cymate",
    image: "/placeholder.svg?height=300&width=300",
    tags: ["cybersecurity", "blockchain", "innovation"],
    content: "This inspiration explores the innovative use of blockchain technology in cybersecurity. It covers topics such as secure data storage, tamper-proof audit trails, and decentralized identity management, showcasing how blockchain can enhance security in various digital systems.",
    date: generateRandomDate(),
    readTime: calculateReadTime("This inspiration explores the innovative use of blockchain technology in cybersecurity. It covers topics such as secure data storage, tamper-proof audit trails, and decentralized identity management, showcasing how blockchain can enhance security in various digital systems.")
  }
]

const InspirationPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId)
  }

  const currentCard = selectedCard !== null ? dummyCards.find(card => card.id === selectedCard) : null

  return (
    <div className="p-8 bg-gray-50 min-h-screen dark:bg-transparent">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 dark:text-white">Inspiration Station</h1>
        <p className="text-gray-600 dark:text-white">Ignite your tech creativity with cybersecurity and development inspiration</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(card.id)}
          >
            <div className="relative aspect-square w-full">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{card.content}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {card.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <time>{card.date.toLocaleDateString()}</time>
                <span>{card.readTime} min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && currentCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                <img
              src={currentCard.image}
              alt={currentCard.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {currentCard.title}
                </h2>
            <p className="text-gray-600 mb-2">By {currentCard.author}</p>
            <p className="text-gray-700 mb-4">{currentCard.content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentCard.tags.map((tag, index) => (
                      <span
                        key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <XCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default InspirationPage
