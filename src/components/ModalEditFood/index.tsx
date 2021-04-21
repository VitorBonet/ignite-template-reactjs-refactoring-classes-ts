import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IFood {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  available: boolean;
}

interface IModalEditFoodFoodProps {
  isOpen: boolean;
  editingFood: IFood;
  setIsOpen: () => void;
  handleUpdateFood: (food) => {};
}

function ModalEditFood({isOpen, editingFood, setIsOpen, handleUpdateFood}: IModalEditFoodFoodProps) {
  const formRef = createRef();

  async function handleSubmit(data) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input icon="" name="image" placeholder="Cole o link aqui" />

        <Input icon="" name="name" placeholder="Ex: Moda Italiana" />
        <Input icon="" name="price" placeholder="Ex: 19.90" />

        <Input icon="" name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
