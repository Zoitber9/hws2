import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: '#8B8B8B',
                borderRadius: '10px',
                track: {background: '#00CC22'}
            }}
            {...props}// отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
