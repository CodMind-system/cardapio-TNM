
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the actual homepage to maintain routing structure
    navigate('/');
  }, [navigate]);
  
  return null;
};

export default Index;
