import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
        this.handlerUpdate = this.handlerUpdate.bind(this);
    }
    handlerUpdate(result) {
        console.log(result);
    }
    render() {
        return (
            <DragDropContext onDragUpdate={this.handlerUpdate}>
                <Droppable droppableId="prueba">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {this.state.numeros.map(
                                (numero, index) => {
                                    return(
                                    <Draggable key={index} draggableId={numero+"drag"} index={index}>
                                        {(provided) => (
                                            <li className="divsab" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {numero}
                                            </li>
                                        )}
                                    </Draggable>
                                    )
                                })}

                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default List;