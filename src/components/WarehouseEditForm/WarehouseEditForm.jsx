import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function WarehouseEditForm() {
    const { warehouseId } = useParams(); 
    const [formData, setFormData] = useState({
        warehouse_name: '',
        address: '',
        city: '',
        country: '',
        contact_name: '',
        contact_position: '',
        contact_phone: '',
        contact_email: ''
    });

    return (
        <div></div>
    )

}

export default WarehouseEditForm;