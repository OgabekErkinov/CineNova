import { Box, Modal, Typography, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import useUIStore from '../../store/store';

const ContactModal = () => {
  const { isModalOpen, toggleModal } = useUIStore();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const handlePhoneChange = (e) => {
    // Faqat raqamlarni qabul qilish
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(onlyNumbers);
    setPhoneError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validatePhoneNumber = (number) => {
    // Telefon raqami formatini tekshirish (faqat raqamlar)
    const phoneRegex = /^[0-9]{9,15}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Telefon raqami noto‘g‘ri formatda!');
      return;
    }

    if (!message) {
      setToastMessage('Xabar bo‘sh bo‘lishi mumkin emas!');
      setToastOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      // Telegram bot API uchun xabar yuborish
      const response = await axios.post('https://api.telegram.org/bot7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0/sendMessage', {
        chat_id: '8158030030',
        text: `Yangi xabar:\nTelefon raqami: ${phoneNumber}\nXabar: ${message}`,
      });

      if (response.status === 200) {
        setToastMessage('Xabar yuborildi!');
        setToastOpen(true);
      }
    } catch (error) {
      setToastMessage('Xatolik yuz berdi!');
      setToastOpen(true);
    } finally {
      setIsLoading(false);
      toggleModal();  // Modalni yopish
    }
  };

  return (
    <>
      <Modal open={isModalOpen} onClose={toggleModal}>
        <Box
          sx={{
            width: '400px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'black', // text color black
          }}
        >
          <Typography variant="h6" mb={2} sx={{ color: 'black' }}>
            Biz bilan bog'laning
          </Typography>
          <TextField
            label="Telefon raqami"
            value={phoneNumber}
            onChange={handlePhoneChange}
            fullWidth
            margin="normal"
            error={!!phoneError}
            helperText={phoneError}
            sx={{ input: { color: 'black' }, label: { color: 'black' } }}
          />
          <TextField
            label="Xabar"
            value={message}
            onChange={handleMessageChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={{ input: { color: 'black' }, label: { color: 'black' } }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              variant="outlined"
              onClick={toggleModal}
              sx={{
                color: 'black',
                borderColor: 'black',
                '&:hover': { borderColor: 'black', backgroundColor: 'transparent' },
              }}
            >
              Yopish
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isLoading}
              sx={{
                backgroundColor: 'black',
                '&:hover': { backgroundColor: '#333' },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ marginRight: '10px' }} />
              ) : (
                'Yuborish'
              )}
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Snackbar Toast */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={toastMessage.includes('Xatolik') ? 'error' : 'success'} sx={{ width: '100%' }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;
