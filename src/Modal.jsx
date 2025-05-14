import React, { useEffect, useState } from 'react'
import './modal.css'

/**
 * Modal d'information avec animation d'ouverture/fermeture.
 *
 * @component
 * @param {Object} props
 * @param {string} props.message - Message affiché dans la modale.
 * @param {Function} props.onClose - Fonction appelée à la fermeture de la modale.
 * @returns {JSX.Element} Modale animée avec un message et un bouton de fermeture.
 */

export function Modal({ message, onClose }) {
  // État pour déclencher l'animation de fermeture
  const [isClosing, setIsClosing] = useState(false)
  // État pour afficher la modale
  const [isVisible, setIsVisible] = useState(false)
  // Active l'état visible après un court délai pour permettre l'animation
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timeout)
  }, [])

  //Gère le clic sur l’arrière-plan (ferme la modale).
  const handleOverlayClick = () => triggerClose()

  //Empêche la fermeture si l’on clique à l’intérieur de la modale.
  const handleModalClick = (e) => e.stopPropagation()

  // Déclenche l'animation de fermeture puis exécute onClose après 300ms
  const triggerClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    <div
      className={`overlay ${isClosing ? 'hidden' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modal ${isVisible ? '' : 'hidden'} ${
          isClosing ? 'hidden' : ''
        }`}
        role='dialog'
        aria-modal='true'
        onClick={handleModalClick}
      >
        {/* Bouton de fermeture avec icône SVG */}
        <svg
          onClick={triggerClose}
          className='close-button'
          aria-label='close'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          width='24'
          height='24'
        >
          <path
            fill='black'
            d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z'
          />
        </svg>
        {/* Message affiché dans la modale */}
        <p>{message}</p>
      </div>
    </div>
  )
}
