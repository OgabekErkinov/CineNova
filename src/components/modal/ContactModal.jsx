import { 
  Box, Modal, Typography, TextField, Button, 
  CircularProgress, Snackbar, Alert 
} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import useContactStore from '../../store/contact';
import useUIStore from '../../store/store';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = '8158030030';

const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useContactStore();
  const { themeColors } = useUIStore();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const clearForm = () => {
    setPhoneNumber('');
    setMessage('');
    setPhoneError('');
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value.replace(/[^0-9+]/g, ''));
    setPhoneError('');
  };

  const validatePhoneNumber = (number) => /^\+?[0-9]{9,15}$/.test(number);

  const handleSubmit = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Telefon raqami noto‘g‘ri formatda!');
      return;
    }

    if (!message.trim()) {
      setToastMessage('Xabar bo‘sh bo‘lishi mumkin emas!');
      setToastOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: `\ud83d\udce9 *Yangi xabar*\n\ud83d\udcde *Telefon raqami:* ${phoneNumber}\n\ud83d\udcdd *Xabar:* ${message}`,
        parse_mode: 'Markdown',
      });

      if (response.status === 200) {
        setToastMessage('✅ Xabar yuborildi!');
        clearForm();
      }
    } catch {
      setToastMessage('❌ Xatolik yuz berdi!');
    } finally {
      setToastOpen(true);
      setIsLoading(false);
      closeContactModal();
    }
  };

  return (
    <>
      <Modal open={isContactModalOpen} onClose={closeContactModal}>
        <Box
          sx={{
            width: '90%',
            maxWidth: '400px',
            bgcolor: themeColors.background,
            borderRadius: 2,
            p: 3,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            textAlign: 'center',
          }}
        >
          {/* LOGO */}
          <Box display='flex' justifyContent='center'>
            <Box component='img' src='/logo.png' height='28px' width='28px' />
            <Typography variant="h5" fontWeight="bold" color={themeColors.color} mb={2}>
              CineNova
            </Typography>
          </Box>

          <Typography variant="h6" mb={2} color={themeColors.color}>
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
            sx={{
              "& .MuiInputBase-input": { color: themeColors.color },
              "& .MuiInputLabel-root": { color: themeColors.color },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: themeColors.color },
                "&:hover fieldset": { borderColor: themeColors.color },
              },
            }}
          />

          <TextField
            label="Xabar"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={{
              "& .MuiInputBase-input": { color: themeColors.color },
              "& .MuiInputLabel-root": { color: themeColors.color },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: themeColors.color },
                "&:hover fieldset": { borderColor: themeColors.color },
              },
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="outlined" 
              sx={{ bgcolor: themeColors.color, color: themeColors.background }} 
              onClick={closeContactModal}
            >
              Yopish
            </Button>
            <Button 
              variant="contained" 
              sx={{ color: themeColors.background, bgcolor: themeColors.color }} 
              onClick={handleSubmit} 
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Yuborish'}
            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar open={toastOpen} autoHideDuration={3000} onClose={() => setToastOpen(false)}>
        <Alert severity={toastMessage.includes('Xatolik') ? 'error' : 'success'}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;