import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class ModuloMano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objetos: [<h1></h1>, <h1></h1>, <h1></h1>, <h1></h1>, <h1></h1>, <h1></h1>, <h1></h1>, <h1></h1>, <h1>Mano</h1>],
        }
        this.handlerUpdate = this.handlerUpdate.bind(this);
        this.handlerOnDragEnd = this.handlerOnDragEnd.bind(this);
    }
    handlerUpdate(result) {
        if (!result.destination) return;
        console.log(result.destination.index);
    }
    handlerOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(this.state.objetos);
        const [reorderedItem] = items.splice(result.source.index - 1, 1);
        items.splice(result.destination.index - 1, 0, reorderedItem);
        this.setState({
            objetos: items,
        });
    }
    render() {
        return (
            <DragDropContext onDragUpdate={this.handlerUpdate} onDragEnd={this.props.handlerOnDragEnd}>
                <Droppable droppableId="prueba">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {this.props.objetos.map(
                                (objeto, index) => {
                                    return (
                                        <Draggable key={"key" + index} draggableId={index + "drag"} index={index + 1}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    {objeto}
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

export default ModuloMano;
