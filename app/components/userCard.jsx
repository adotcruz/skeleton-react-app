var React = require('react');

class UserCard extends React.Component{
      render(){
            return(
                  <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                              <div className="main-card">
                                    <div className="row">
                                          <div className="col-xs-4">
                                                <div className="center-div">
                                                      <img className="img-circle" src="./assets/cat-picture.jpeg"/>
                                                </div>
                                          </div>
                                          <div className="col-xs-7 col-xs-offset-1">
                                                <h2> Anthony Cruz</h2>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}

module.exports = UserCard;
