var React = require('react');
var UserCard = require('./userCard.jsx');

class HelloWorld extends React.Component{
      render(){
            return(
                  <div className="container">
                        <h1>Hello World!</h1>
                        <UserCard />
                  </div>
            )
      }
}

module.exports = HelloWorld;
