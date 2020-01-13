import React, { Component } from 'react'
import uuid from "uuid";


class TodoForm extends Component {

    constructor(props) {
        super(props)

       this.input=React.createRef()
       this.state={
           list:[],
          }
    }

    render() {
        return (
            <div className="main-container">
                <h1>Todo App...</h1>
                <hr/>
                <div className="container">
                    <input type="text" placeholder="AddTask..." ref={this.input}></input>
                        <button onClick={this.addTask} className="button" >Add</button>
                            <ol>
                                {
                                    this.state.list.map((item,index)=>
                                    {
                                        return(<li key={item.id}> {item.value}
                                        <button className="button" type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button></li>)
                                    })
                                }
                            </ol>
                </div>

            </div>
        )
    }
  }
