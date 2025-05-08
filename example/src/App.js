import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-message-modal'
import 'react-message-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () => {
    // votre logique de soumission ici
    setShowModal(true)
  }

  return (
    <div>
      <button onClick={handleSubmit}>Envoyer</button>

      {showModal && (
        <Modal
          message='La Modal foncionne avec succès !'
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default App
