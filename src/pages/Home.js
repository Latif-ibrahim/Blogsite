import { useNavigate } from 'react-router';
import withLayout from './withLayout';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
    <div className='banner'>
    <h1>Welcome to my Webpage</h1>
    <p>Ama was born into a poor family. His father,
     John Ama attended primary school at the 
     Achimota School in Accra and attended the  Ghana Secondary School in Tamale. She received a bachelor’s 
     degree in history in 1981 from the University of Ghana, Legon, where she also completed postgraduate 
     studies in communication in 1986.</p>
     <div className='actions-wrap'>
     <buttom className='btn-outline' onClick={()=>navigate("./about")}>About Me</buttom>
     <buttom className='btn-contain'onClick={()=>navigate("./blog")}>Read Blogs</buttom>
     </div>
    
    </div>

    </div>
  );
}

export default withLayout (Home);