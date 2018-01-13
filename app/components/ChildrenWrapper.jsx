import React from "react"
import classNames from "classnames"

export default ({ children, Component, className }) => (
    <div className={classNames("children-wrapper", className)}>
        {
            React.Children.map(children, child => (
                <Component>
                    { child }
                </Component>
            ))
        }
    </div>
)