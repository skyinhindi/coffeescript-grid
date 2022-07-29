import React, { useState }from 'react'
import Modal from 'react-modal';
import '../styles/history.css'
import Loading from './Loading';
import transferOwnership from '../Handlers/transferOwnership';
import { useMoralis } from 'react-moralis';


const TransferModal = ({showModal, setShowModal,tokenId}) => {
  const [recieverAddress, setRecieverAddress] = useState("");
  const { user } = useMoralis();
  const [isActive, setIsActive] = useState(false);
  const [transferred, setTransferred] = useState(false);

  const [loading, setLoading] = useState(false);

  const transferNft = async () => {
    setLoading(true);
    const response = transferOwnership(tokenId, recieverAddress);
    setLoading(false);
  }

  return (
      <Modal
      ariaHideApp={false}
        className='transfer-ownership-modal'
        isOpen={showModal}
        onRequestClose={() => { setShowModal(false) }}
        contentLabel="Example Modal"
      >
      <span onClick={() => { setShowModal(false) }}  className='closeModal'>X</span> 
      <div className="modal-heading">Transfer Ownership</div>
      {!transferred?<div className="notTransfered">
        <div className={isActive? "transfer-ownership-inputDiv" : "transfer-ownership-inputDiv-ns"}>
          <input 
          onFocus={() => { setIsActive(true); console.log(isActive); }}
          onBlur={() => { setIsActive(false); console.log(isActive); }}
          onChange={(e) => { setRecieverAddress(e.target.value); console.log(recieverAddress); }}
          type="text" placeholder={isActive? "":'Recipient Address'} className='transfer-ownership-input'/>
        </div>
       <button onClick={() => { 
        setLoading(true);
        console.log('btn clicked');
         setTimeout(()=>{ setLoading(false); setTransferred(true); },1000);
          }
        }
            className='buy-btn'>
          {loading ? <Loading color="white" /> : <span className='btn-text'>Transfer</span>}
        </button>
      </div> 
      :
      <div className='transferred-text' >Successfully transferred. You can close this window</div>
      }
      
      </Modal>
  )
}

export default TransferModal
