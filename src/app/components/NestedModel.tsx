import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Define the styles for the modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    border: '0px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '1.25rem',
};

interface NestedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ChildModalProps {
    isOpenChild: boolean;
    onCloseChild: () => void;
}

interface Card {
    title: string;
    price: string;
    description: string;
}

const cards: Card[] = [
    { title: 'Starter', price: 'INR 99/-', description: 'We will listen and prepare a request for understanding' },
    { title: 'Milestone', price: 'INR 999/-', description: 'Everything about STARTER plus legal advice and guidance for future action' },
    { title: 'Setup', price: 'INR 9999/-', description: 'We provide you with everything from Milestone, along with finding a qualified lawyer and negotiating with him.' },
    { title: 'Action', price: 'INR 19,999/-', description: 'Everything related to the setup and we will keep you updated on whatever is there regarding the case by talking to the lawyer on your behalf for one year' },
];

const inputStyle = {
    width: '100%',
    marginBottom: '1rem',
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
    },
};
const rowInputStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'nowrap',
};

const ChildModal: React.FC<ChildModalProps> = ({ isOpenChild, onCloseChild }) => {
    const [open, setOpen] = React.useState(isOpenChild);
    console.log(open);

    React.useEffect(() => {
        setOpen(isOpenChild);
    }, [isOpenChild]);


    return (
        <Modal open={isOpenChild} onClose={onCloseChild}>
            <Box
                sx={{
                    ...style,
                    width: { xs: '90%', sm: '60%', md: 'fit-content' },
                }}
                className="!bg-white !flex-col !items-start rounded-[21.6px] p-2"
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'normal',
                        fontSize: { xs: '30px', sm: '38px', md: '42px', xl: '65px' },
                        marginBottom: '0.5rem',
                        color: '#3F3F3F',
                    }}
                >
                    Payment
                </Typography>
                <Box component="form">
                    <p className="uppercase Arimo text-[12px] text-[#3F3F3F]">Card Number</p>
                    <TextField sx={inputStyle} placeholder="CARD NUMBER" variant="outlined" />
                    <p className="uppercase Arimo text-[12px] text-[#3F3F3F]">Card Holder</p>
                    <TextField sx={inputStyle} placeholder="CARD HOLDER" variant="outlined" />
                    <Box sx={rowInputStyle}>
                        <div>
                            <p className="uppercase Arimo text-[12px] text-[#3F3F3F]">Expiration Date</p>
                            <TextField sx={{ ...inputStyle, flex: 1, width: '100%' }} placeholder="MM / YY" variant="outlined" />
                        </div>
                        <div>
                            <p className="uppercase Arimo text-[12px] text-[#3F3F3F]">CVC</p>
                            <TextField sx={{ ...inputStyle, flex: 1, width: '100%' }} placeholder="CVC" variant="outlined" />
                        </div>
                    </Box>
                </Box>
                <Button
                    onClick={onCloseChild}
                    sx={{
                        backgroundColor: '#CFAC62',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'none',
                        padding: '10px 20px',
                        borderRadius: '30px',
                        '&:hover': { backgroundColor: '#b29051' },
                    }}
                >
                    Confirm & Pay
                </Button>
            </Box>
        </Modal>
    );
};

const NestedModal: React.FC<NestedModalProps> = ({ isOpen, onClose }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(isOpen);
    const [selectedCard, setSelectedCard] = React.useState<Card | null>(null);
    const [isModalOpen12, setIsModalOpen12] = React.useState(false);

    React.useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    ...style,
                    width: { xs: '90%', sm: '80%', md: '70%', lg: '80%' },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: { xs: 1, sm: 2, md: 2, lg: 2, },
                        justifyContent: 'center',
                        [theme.breakpoints.up('lg')]: {
                            gridTemplateColumns: 'repeat(4, 1fr)',
                        },
                        outline: 'none',
                    }}
                >
                    {cards.map((card) => (
                        <Box
                            key={card.title}
                            sx={{
                                border: '1px solid #ccc',
                                borderRadius: '15.073px',
                                padding: { xs: '0.25rem', sm: '0.5rem', md: '0.5rem', lg: '1rem' },
                                textAlign: 'center',
                                cursor: 'pointer',
                                width: '100%',
                                outline: 'none',
                                backgroundColor: theme.palette.grey[100],
                            }}
                            onClick={() => {
                                setSelectedCard(card);
                                setIsModalOpen12(true);
                            }}
                        >
                            <p className="text-white py-2 px-6 sm:w-fit w-full sm:mx-auto  rounded-[30px] max-md:text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[28.638px] bg-[#CFAC62]">
                                {card.title}
                            </p>
                            <p className="text-[#CFAC62] text-[27px] max-md:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[27px]">{card.price}</p>
                            <p className="text-[#3F3F3F] text-[18px] max-md:text-[16px] md:text-base 2xl:text-[18px] ">{card.description}</p>
                        </Box>
                    ))}
                </Box>
                {selectedCard && (
                    <ChildModal
                        isOpenChild={isModalOpen12}
                        onCloseChild={() => setIsModalOpen12(false)}
                    />
                )}
            </Box>
        </Modal>
    );
};

export default NestedModal;
