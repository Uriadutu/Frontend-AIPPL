import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from '../../features/authSlice.js';
import LayoutAdmin from './LayoutAdmin.jsx';
import Dashboard from '../../component/Admin/Dashboard.jsx';


const DashboardPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
      if (isError) {
        navigate("/login");
      }
    }, [isError, navigate]);
  return (
    <LayoutAdmin>
        <Dashboard />
    </LayoutAdmin>
  );
}

export default DashboardPage
