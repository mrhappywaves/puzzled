import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaBars } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import "../styles/manage.css";

// import { ListGroup } from 'react-bootstrap';
// import FilesUploadComponent from '../components/fileUpload';
// import PuzzledCard from '../components/PuzzleCard';

const Drag = () => {
    const [inputList, setInputList] = useState([
        {
          id: uuidv4(),
          image:
            "https://i0.wp.com/hablamossle.com/paraprofesdeele/wp-content/uploads/2020/05/Actividades-clases-en-l%C3%ADnea.png?fit=856%2C554&ssl=1",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          pieces: null
        },
        {
          id: uuidv4(),
          image:
            "https://www.avantel.co/blog/wp-content/uploads/2019/07/4.8-actividades-al-aire-libre-para-los-m%C3%A1s-citadinos-1.jpg",
          text: "Esta es una prueba de texto!!",
          pieces: null
        },
        {
          id: uuidv4(),
          image:
            "https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/03/actividades-para-ninos-en-casa.jpg",
          text: "",
          pieces: null
        }
      ]);
    
      const handleImageChange = (e, index) => {
        const { name } = e.target;
        const value = URL.createObjectURL(e.target.files[0]);
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
    
      // handle input change
      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
    
        const list = [...inputList];
        list[index][name] = value;
        console.log(value);
        setInputList(list);
      };
    
      // handle click event of the Remove button
      const handleRemoveClick = (index) => {
        console.log(index);
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };
    
      // handle click event of the Add button
      const handleAddClick = () => {
        setInputList([...inputList, { image: "", text: "", id: uuidv4() }]);
      };
    
      function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(inputList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setInputList(items);
      }
    
      return (
        <div className="manage">
          <div className="text-title">Formulario:</div>
          {/*  */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="items">
              {(provided) => (
                <ul
                  className="items"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ listStyle: "none" }}
                >
                  {inputList.map((x, index) => {
                    return (
                      <Draggable key={x.id} draggableId={x.id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="list-item"
                          >
                            <div className="item">
                              <FaBars />
                              <div className="img-content">
                                <img src={x.image} alt="" />
                                <input
                                  name="image"
                                  /* value={x.image} */
                                  type="file"
                                  onChange={(e) => handleImageChange(e, index)}
                                  className="img-input"
                                  id="img-input"
                                />
                              </div>
                              <input
                                name="text"
                                placeholder="Ingresa tu texto (opcional)"
                                value={x.text}
                                onChange={(e) => handleInputChange(e, index)}
                                className="input"
                              />
                              <select
                                name="pieces"
                                placeholder="piezas largo"
                                value={null}
                                onChange={(e) => handleInputChange(e, index)}
                                className="short input"
                                min="0"
                              >
                                <option value={3} selected default hidden>
                                  Piezas
                                </option>
                                <option value={2}>2x2</option>
                                <option value={3}>3x3</option>
                                <option value={4}>4x4</option>
                                <option value={5}>5x5</option>
                              </select>
    
                              <div className="btn-box">
                                {inputList.length !== 1 && (
                                  <button
                                    className="button"
                                    onClick={() => handleRemoveClick(index)}
                                  >
                                    <BsFillTrashFill />
                                    Remover
                                  </button>
                                )}
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <button
            onClick={handleAddClick}
            style={{ marginTop: "15px" }}
            className="button"
          >
            + Añade más items
          </button>
          {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
        </div>
      );
    };

export default Drag;