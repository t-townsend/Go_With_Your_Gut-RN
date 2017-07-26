import React from 'react';
import Voting from './components/Voting';

import renderer from 'react-test-renderer';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderer.create(
      <Voting pair={["Sushi", "Italian"]} />
    );
    expect(component).toBeTruthy();
  });

  it('invokes callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = renderer.create(
      <Voting pair={["Sushi", "Italian"]}
              vote={vote}/>
    );

    expect(votedWith).to.equal('Sushi');
  });

});
