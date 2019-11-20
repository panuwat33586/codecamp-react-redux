import React, { Component } from 'react'
import styles from "./Todo.module.css"

export class Todo extends Component {
    render() {
        const { ticked, onTick, name,onDelete} = this.props
        return (
            <div className={styles.Root}>
                <div className={styles.Tick} style={{backgroundColor: ticked ? "#a8d097" : undefined }} onClick={onTick}></div>
                <div className={styles.Text} style={{textDecoration:ticked?"line-through":"none"}} >{name}</div>
                <div className={styles.Delete} onClick={onDelete} >x</div>
            </div>
        )
    }
}

//Todo.defaultProps={
// ticked:false,
//name:"pizza"
//}

export default Todo
