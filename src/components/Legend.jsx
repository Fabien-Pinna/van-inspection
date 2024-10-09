// src/components/Legend.jsx

import React from 'react'
import { isMobile } from 'react-device-detect'
import './Legend.scss'

export function Legend({ onClose }) {
    return (
        <div className="legend-container">
            <div className="legend-content">
                <h2>How to interact with the 3D model</h2>
                {isMobile ? (
                    <ul>
                        <li>
                            <strong>Rotation:</strong> Swipe with one finger to rotate the model.
                        </li>
                        <li>
                            <strong>Zoom:</strong> Pinch with two fingers to zoom in or out.
                        </li>
                        <li>
                            <strong>Pan:</strong> Swipe with two fingers to move the model.
                        </li>
                        <li>
                            <strong>Select:</strong> Double-tap an element to inspect it.
                        </li>

                    </ul>
                ) : (
                    <ul>
                        <li>
                            <strong>Rotation:</strong> Click and drag to rotate the model.
                        </li>
                        <li>
                            <strong>Zoom:</strong> Use the mouse wheel to zoom in or out.
                        </li>
                        <li>
                            <strong>Pan:</strong> Hold the right mouse button and drag to move the model.
                        </li>
                        <li>
                            <strong>Select:</strong> Double-click an element to inspect it.
                        </li>

                    </ul>
                )}
                <button className="legend-close-button" onClick={onClose}>
                    Fermer
                </button>
            </div>
        </div>
    )
}
