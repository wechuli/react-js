import React, { Component } from "react";

class UserOutput extends Component {
  render() {
      const {name}=this.props;
    return (
      <div>
        <p>
         To be or not to be. I {name} am a man sick in love.
        </p>
        <p>
        And you as well must die, beloved dust,
    And all your beauty stand you in no stead;

This flawless, vital hand, this perfect head,

This body of flame and steel, before the gust

Of Death, or under his autumnal frost,

Shall be as any leaf, be no less dead

Than the first leaf that fell,—this wonder fled.

Altered, estranged, disintegrated, lost.

Nor shall my love avail you in your hour.

In spite of all my love, you will arise

Upon that day and wander down the air

Obscurely as the unattended flower,

It mattering not how beautiful you were,

Or how beloved above all else that dies.
       
        </p>
      </div>
    );
  }
}

export default UserOutput;
