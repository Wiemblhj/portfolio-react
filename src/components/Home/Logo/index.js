
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
 

  return (
    <div className="box" >
      <div className="content">
      <img
       src={LogoS}
        alt="JavaScript,  Developer"
      />

      <h2>Wiem belhaj boubaker </h2> <br/>    <span> Web Developer </span>
      <a href="/CV.pdf" download="CV.pdf" >  download CV</a>
      </div>
      </div>
    
  )
}

export default Logo
