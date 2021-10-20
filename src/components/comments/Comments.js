import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from "../../hooks/use-http";
import {getAllComments} from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const CommentsComponent = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {quoteId} = params;

  let comments;

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId, error])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  if (status === 'pending') {
    comments = (
      <div className={'centered'}>
        <LoadingSpinner />
      </div>
    );
  }

// && loadedQuote.length > 0
  if (status === 'completed') {
    console.log(loadedQuote);
    comments = <CommentsList comments={loadedQuote} />
  }

  console.log('comments test', loadedQuote);

  if (status === 'completed') {
    comments = (
      <p className={'centered'}>
        No comments added yet!
      </p>
    )
  }



  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {
        isAddingComment &&
        <NewCommentForm
          onAddedComment={startAddCommentHandler}
          quoteId={quoteId}
        />
      }
      {comments}
    </section>
  );
};

export default CommentsComponent;
