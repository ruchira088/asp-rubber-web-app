import React from "react"

export default ({ label, value, onTextChange, ...props }) =>
    (
        <div className="input-text-section">
            <div className="text-section-label">
                { label }
            </div>
            <div className="text-section-field">
                <input className="input-text-field"
                       onChange={({target}) => onTextChange(target.value)}
                       value={value}
                       {...props}
                />
            </div>

        </div>
    )