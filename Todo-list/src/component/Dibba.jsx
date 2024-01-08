import styles from './Dibba.module.css';
function Dibba(props){
  return(
    <>
    <div className= {styles["main"]}>{props.children}</div>
    </>
  )
}

export default Dibba;