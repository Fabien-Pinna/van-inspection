// InspectionPopup.jsx

import React, { useState } from 'react'

import './InspectionPopup.scss'

const OBJECT_STATES = ['undamaged', 'broken', 'scratched', 'crashed']
const TIRE_STATES = ['undamaged', 'flat']

export function InspectionPopup({ objectName, status, onClose, onSubmit }) {
    // Déterminer si l'objet est un pneu
    const isTire =
        objectName.toLowerCase().includes('pneu') ||
        objectName.toLowerCase().includes('tire') ||
        objectName.toLowerCase().includes('roue')

    const possibleStates = isTire ? TIRE_STATES : OBJECT_STATES

    const [state, setState] = useState(status ? status.state : 'undamaged')
    const [comment, setComment] = useState(status ? status.comment : '')

    const handleSubmit = () => {
        onSubmit(objectName, state, comment)
    }

    return (
        <div className='popup'>
            <h3>{objectName}</h3>
            <div className='status'>
                <label>
                    Status :
                    <select value={state} onChange={(e) => setState(e.target.value)}>
                        {possibleStates.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className='comment'>
                <label>
                    Comment :

                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
            </div>
            <div>
                <button onClick={handleSubmit}>OK</button>
                <button onClick={onClose}>Annuler</button>
            </div>
        </div>
    )
}