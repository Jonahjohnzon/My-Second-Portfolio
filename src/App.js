import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Frontpage/Mainpage';
import Navbar from './Component/Navbar';
import Email from './Component/Email';
import Icons from './Component/Icons';
import {motion} from 'framer-motion'

function App() {
  const slide={
    hidden:{
      opacity:0
    },
    show:{
      opacity:1,
      transition:{
        type:'tween',
        duration:0.9,
        delay:2.7,
        stiffness:400,
        when:'beforeChildren',
        staggerChildren:0.1
      }
    }
   
  }
  return (
    <div className="App " >
    <body className=' scrollbar scrollbar-track-transparent scrollbar-thumb-fontnude '>
    <Navbar/>
     <Mainpage/>
     <motion.div variants={slide} initial='hidden' animate='show'><Icons/></motion.div>
     <motion.div variants={slide} initial='hidden' animate='show'><Email/></motion.div>
    </body>
    </div>
  );
}

export default App;
