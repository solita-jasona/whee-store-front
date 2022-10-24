import classes from './Backdrop.module.scss';

const Backdrop: React.FC<{onClick: (e: React.MouseEvent) => any}> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
}

export default Backdrop;