# react-message-modal

> A lightweight and animated modal component for React applications, ideal for form confirmations.

## ✨ Features

- Animated modal with smooth open/close
- Accessible (`role="dialog"`, `aria-modal`)
- Easy to integrate
- Customizable styles via CSS

## Props

- message: The message to be displayed inside the modal (type: string).
- onClose: Function called when the user closes the modal (button click or overlay)(type: function).

## Install

```bash
npm install --save react-modal-message
```

## Usage

```jsx
import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-message-modal'
import 'react-message-modal/dist/index.css'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () => {
    setShowModal(true)
  }

  return (
    <div>
      <button onClick={handleSubmit}>Show Modal</button>

      {showModal && (
        <Modal
          message='Your action was completed successfully!'
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default App
```

## Node Version

This package requires Node.js v10 or higher.

## Recommended IDE

We recommend using Visual Studio Code (VSCode) for development. It provides excellent support for React and JavaScript/TypeScript projects.

## License

MIT © [Asma-A-S](https://github.com/Asma-A-S)
