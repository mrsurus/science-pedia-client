import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className='card'>
        <div className='card-body'>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
          SciencePedia a popular 
          question-and-answer platform where users can ask questions, answer questions,
           and interact with other users.
          </p>
          <p className="mb-4">
          <p className=' font-bold mb-2'>Question/Answer</p>
          On SciencePedia, users can ask freely question and can also answer any question. Users can
           follow topics that they're interested in and view questionsand answers 
           related to those topics. Users can also upvote or downvote answers 
           based on their quality, and the platform uses algorithms to display the most 
           helpful and relevant answers at the top of the page.
          </p>
          <p>
            <p className=' font-bold mb-2'>Chat GPT</p>
            You will be able to chat with ChatGPT forom ScincePedia. By this you will 
            get more information about your asking topic.
          </p>
          <p className="mb-4">
          SciencePedia covers a wide range of topics, from science and technology to 
          politics and culture, and it has a large and active user community. It's a
           great resource for learning new things and getting insights from people 
           with different backgrounds and perspectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
