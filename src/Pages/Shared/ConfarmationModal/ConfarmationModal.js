import React from 'react';

const ConfarmationModal = ({title, message, closeModal, modalData, successAction}) => {
    return (
       <div>
         
            <input type="checkbox" id="confirmModal" className="modal-toggle" />
            <div className='modal'>
            <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>successAction(modalData)} htmlFor='confirmModal' className='btn'>delete</label>
                            <button onClick={closeModal} className="btn">close</button>
                       
                    </div>
                </div>
            </div>
                
       </div>
    );
};

export default ConfarmationModal;