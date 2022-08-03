import React, { useState } from 'react'

const Classes = () => {
    const [clase, setClase] = useState(false)
      return (
        <div>
            <button  onClick={() => setClase(!clase)}>Cambiar Clase</button>
            <h1 className={clase ? 'clase1' : 'clase2'}>Cambio de Clase</h1>
        </div>
      )
}

export default Classes