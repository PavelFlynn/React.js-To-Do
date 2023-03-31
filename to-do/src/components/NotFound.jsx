import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBackIosOutlined } from '@mui/icons-material';

export default function NotFound() {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    
    return (
        <div className='relative flex flex-col justify-center items-center h-screen'>
            <div className='relative flex justify-center items-center'>
                <IconButton onClick={handleBack}>
                    <ArrowBackIosOutlined fontSize="small" />
                </IconButton>
                <p className='ml-2 text-base text-slate-500'><span className='text-lg font-semibold'>404</span> : No Found</p>
            </div>
        </div>
    )
}
