import classes from './HighlightedQuote.module.css';

const HighlightedQuote = ({data}) => {

  const {text, author} = data;

  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
