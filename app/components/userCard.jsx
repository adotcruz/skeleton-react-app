var React = require('react');

class UserCard extends React.Component{
      render(){
            return(
                  <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                              <div className="main-card">
                                    <div className="row">
                                          <div className="col-xs-4">
                                                <div className="center-div img-div">
                                                      <img className="img-circle" src="./assets/cat-picture.jpeg"/>
                                                </div>
                                          </div>
                                          <div className="col-xs-7 col-xs-offset-1">
                                                <h2> Anthony Cruz</h2>
                                                <div className='description'>
                                                      <p>
                                                            I am currently a Senior at Brown University concentrating
                                                            in Computer Science. I plan to graduate with an A.B in
                                                            2018. I am a first generation college student, who learned
                                                            how to code during my sophomore year of college. it has
                                                            become one of my passions, and an activity that has taken
                                                            over my life. I spent the last summer working at Goldman
                                                            Sachs Technology as a Front End Engineer. I have become
                                                            increasingly interested in Robotics, so I also have some
                                                            research to add to to my projects. Have fun!
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}

module.exports = UserCard;
