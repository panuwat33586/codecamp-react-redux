import React, { Component } from 'react'
import styles from "./NewTodo.module.css"

export class NewTodo extends Component {
    render() {
        const {onValue,onAdd,value}=this.props
        return (
            <div className={styles.Root}>
               <input type="text" className={styles.Input} placeholder="Add Todo" onChange={onValue} value={value} />
               <button className={styles.Button} onClick={onAdd}>Add</button>

            </div>
        )
    }
}

export default NewTodo
