import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import trash from '../../../assets/trash.svg';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';






function Correction() {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '0.5rem',
    boxShadow: 24,
    textAlign: "center",
    padding: "2.5rem"
  };
  const history = useNavigate();
  
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);


  return (
    <div className="flex flex-col pt-16 md:ml-[62px] md:mr-[9rem] sm:mx-[70px] mx-6">
      <div className=" md:ml-[5rem] mt-12">
        <div className="flex justify-between items-center">
          <p className="text-[#5A5A5A] sm:text-base text-[12px] font-normal leading-5 font-['Inter']">
            Today - Thursday, 19 September 2022
          </p>

          <Button
          style={{
            color: "red",
            cursor: "pointer",
            fontFamily: "DM_Sans",
            padding: "0px",
            marginBottom: "10px",
            background: "none",
            fontSize: "16px"
          }}
          onClick={handleOpen}
          className="text-[#EC1B1B] sm:text-base text-[14px] font-medium font-['DM_Sans'] leading-5 mb-7 cursor-pointer">
                      <img src={trash} alt="" />

        </Button>

        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              id="modal-modal-title" variant="h6" component="h2">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.6752 13.075C48.6502 12.675 44.6251 12.375 40.5751 12.15V12.125L40.0252 8.875C39.6502 6.575 39.1002 3.125 33.2501 3.125H26.7001C20.8752 3.125 20.3251 6.425 19.9251 8.85L19.4002 12.05C17.0751 12.2 14.7501 12.35 12.4251 12.575L7.32515 13.075C6.27515 13.175 5.52515 14.1 5.62515 15.125C5.72515 16.15 6.62515 16.9 7.67515 16.8L12.7752 16.3C25.8751 15 39.0752 15.5 52.3252 16.825C52.4002 16.825 52.4502 16.825 52.5252 16.825C53.4752 16.825 54.3002 16.1 54.4002 15.125C54.4752 14.1 53.7252 13.175 52.6752 13.075Z" fill="#F26767" />
                <path d="M48.0753 20.35C47.4753 19.725 46.6503 19.375 45.8004 19.375H14.2004C13.3504 19.375 12.5004 19.725 11.9254 20.35C11.3504 20.975 11.0254 21.825 11.0754 22.7L12.6254 48.35C12.9004 52.15 13.2504 56.9 21.9754 56.9H38.0253C46.7504 56.9 47.1004 52.175 47.3754 48.35L48.9254 22.725C48.9753 21.825 48.6503 20.975 48.0753 20.35ZM34.1503 44.375H25.8254C24.8004 44.375 23.9504 43.525 23.9504 42.5C23.9504 41.475 24.8004 40.625 25.8254 40.625H34.1503C35.1753 40.625 36.0253 41.475 36.0253 42.5C36.0253 43.525 35.1753 44.375 34.1503 44.375ZM36.2503 34.375H23.7504C22.7254 34.375 21.8754 33.525 21.8754 32.5C21.8754 31.475 22.7254 30.625 23.7504 30.625H36.2503C37.2753 30.625 38.1253 31.475 38.1253 32.5C38.1253 33.525 37.2753 34.375 36.2503 34.375Z" fill="#F26767" />
              </svg>
            </Typography>
            <Typography style={{
              fontFamily: "inter"
            }} id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              Are you sure you want to delete this conversation?
            </Typography>
            <Button
            onClick={handleClose }
              style={{
                backgroundColor: "#EC1B1B",
                padding: "0.5rem 8rem",
                color: "white",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: "1rem",
                marginLeft: "auto ",
                marginRight: "auto ",
                marginBottom: "1rem"


              }}
            >
              Delete
            </Button>
            <Button
            onClick={handleClose}
              style={{
                backgroundColor: "white",
                padding: "0.5rem 8rem",
                color: "black",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: "1rem",
                border: "1px solid #393939",
                margin: "auto"


              }}
            >
              Cancel
            </Button>
          </Box>
        </Modal>





        </div>
        <div className="mt-5">
          <h6 className="text-[#5A5A5A] font-normal font-['Inter'] sm:text-base text-sm leading-5">Your Transcript</h6>
          <div className="bg-[#F6F6F6] rounded-lg  pb-3 px-4 mt-1">
            <p className="text-[#393939] sm:font-base font-normal font-['Inter'] leading-5 text-sm py-6">
              The weather today am cold. I am freeze and I do not knowing how to make myself warmed. I plan on move to
              another continent that is not cold.
            </p>
          </div>
          <span className="flex justify-end items-end text-[#5A5A5A] text-[12px] font-normal font-['Inter']">
            12:04pm
          </span>
        </div>
        <div>
          <h6 className="text-[#5A5A5A] font-normal font-['Inter'] sm:text-base text-sm leading-5">Correction</h6>
          <div className="bg-[#F6F6F6] rounded-lg  pb-3 px-4 mt-1">
            <p className="text-[#393939] sm:font-base font-normal font-['Inter'] leading-5 text-sm py-6">
              The weather today is cold. I am freezing and I do not know how to make myself warm. I plan on moving to
              another continent that is not cold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Correction;




       