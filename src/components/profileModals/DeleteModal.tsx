import React from 'react';
import Modal from '../Modal';
import { ModalProps } from '../../constants/constants';

const DeleteModal: React.FC<ModalProps> = (props) => {
  return (
    <Modal {...props}>
      <div className="p-3 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
        <div className="p-3 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
          <h3 className="text-4xl text-center font-semibold text-gray-900">Are you sure?</h3>
          <p className="text-base text-gray-800 text-center text-medium">
            Do you really want to delete these record? This process cannot be undone.
          </p>
          <div className="flex justify-end gap-6 mt-8">
            <button className="px-6 py-2 bg-red-200 text-red-800 rounded-md">Cancel</button>
            <button className="px-6 py-2 bg-blue-300 text-blue-800 rounded-md ">Delete</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
