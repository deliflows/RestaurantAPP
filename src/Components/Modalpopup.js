import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export default function Modalpopup({item, handleClose, open}){

    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{item.dishname}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Price: {item.price}
                </DialogContentText>
                <DialogContentText>
                    Description: {item.discription}
                </DialogContentText>
                <DialogContentText>
                    Allergy Information: {item.allergyinfo}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}