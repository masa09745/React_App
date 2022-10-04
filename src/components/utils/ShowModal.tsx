
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Maintenance } from "API"

type Props = {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  maintenance?: Maintenance

}

export const ShowModal = (props:Props) =>{
  const {modalOpen, setModalOpen, maintenance} = props

  const handleClose = () =>{
    setModalOpen(false)
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return(
    <>
      <Modal
      open={modalOpen}
      onClose ={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant="body2">
                  タイトル
                </Typography>
                <Typography variant="h5" component="h3" sx={{px:1}}>
                  {maintenance?.title}
                </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" >
                優先度
              </Typography>
              <Typography component="h3" sx={{px:1}}>{maintenance?.priority}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" >
                実施状況
              </Typography>
              {maintenance?.completed === false ? <Typography sx={{px:1}}>Open</Typography> : <Typography>Close</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" >
                内容
              </Typography>
              <Typography variant="h5" component="h3" sx={{px:1}}>
                {maintenance?.contents}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" >
                ATA
              </Typography>
              <Typography sx={{px:1}}>
                {maintenance?.ata}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" >
                Maintenance Message
              </Typography>
              {maintenance?.maintenanceMessage === "" ? <Typography sx={{px:1}}>None</Typography> : <Typography>maintenance?.maintenanceMessage</Typography>}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>

  )
}