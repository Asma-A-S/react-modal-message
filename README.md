# react-message-modal

> A lightweight and animated modal component for React applications, ideal for form confirmations.

[![NPM](https://img.shields.io/npm/v/react-message-modal.svg)](https://www.npmjs.com/package/react-message-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## License

MIT © [Asma-A-S](https://github.com/Asma-A-S)
